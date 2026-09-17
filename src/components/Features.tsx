import React, { useState } from 'react';
import { 
  Bot, 
  Zap, 
  ShieldCheck, 
  RefreshCw, 
  BarChart3, 
  Network,
  ChevronRight 
} from 'lucide-react';

interface FeatureItem {
  id: string;
  category: 'all' | 'ai' | 'security' | 'infra';
  title: string;
  description: string;
  badge: string;
  icon: React.ReactNode;
}

export const Features: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'security' | 'infra'>('all');

  const features: FeatureItem[] = [
    {
      id: '1',
      category: 'ai',
      title: 'Autonomous Agent Orchestration',
      description: 'Coordinate distributed LLM agents with deterministic state machines and built-in human-in-the-loop approvals.',
      badge: 'Cognitive Engine',
      icon: <Bot size={26} />,
    },
    {
      id: '2',
      category: 'infra',
      title: 'Sub-Millisecond Event Streaming',
      description: 'Engineered on high-throughput asynchronous runtimes capable of processing tens of millions of events per hour.',
      badge: 'Ultra Fast',
      icon: <Zap size={26} />,
    },
    {
      id: '3',
      category: 'security',
      title: 'Zero-Trust Data Protection',
      description: 'Hardware-level key management, SOC-2 compliance, end-to-end payload encryption, and strict GDPR data governance.',
      badge: 'SOC2 & HIPAA',
      icon: <ShieldCheck size={26} />,
    },
    {
      id: '4',
      category: 'infra',
      title: 'Resilient Self-Healing Workflows',
      description: 'Automatic rollback, circuit breakers, and exponential backoff retry algorithms prevent cascade failures.',
      badge: '99.99% Reliability',
      icon: <RefreshCw size={26} />,
    },
    {
      id: '5',
      category: 'all',
      title: 'Full-Stack Observability',
      description: 'Distributed OpenTelemetry tracing, memory profiling, and real-time execution replays for every single step.',
      badge: 'OpenTelemetry',
      icon: <BarChart3 size={26} />,
    },
    {
      id: '6',
      category: 'infra',
      title: 'Universal Connector Mesh',
      description: 'Plug seamlessly into PostgreSQL, Snowflake, Kafka, Stripe, Salesforce, and custom REST/GraphQL endpoints.',
      badge: '100+ Integrations',
      icon: <Network size={26} />,
    },
  ];

  const filteredFeatures = filter === 'all' 
    ? features 
    : features.filter(f => f.category === filter || f.category === 'all');

  return (
    <section id="features" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Powerful Capabilities</span>
          <h2 className="section-title">Engineered for Maximum Developer Velocity</h2>
          <p className="section-subtitle">
            Everything your engineering team needs to build, deploy, and scale robust AI-driven automation systems.
          </p>

          {/* Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
            <button
              className={`demo-tab-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Features
            </button>
            <button
              className={`demo-tab-btn ${filter === 'ai' ? 'active' : ''}`}
              onClick={() => setFilter('ai')}
            >
              AI & Agents
            </button>
            <button
              className={`demo-tab-btn ${filter === 'infra' ? 'active' : ''}`}
              onClick={() => setFilter('infra')}
            >
              Infrastructure
            </button>
            <button
              className={`demo-tab-btn ${filter === 'security' ? 'active' : ''}`}
              onClick={() => setFilter('security')}
            >
              Security
            </button>
          </div>
        </div>

        <div className="grid-3">
          {filteredFeatures.map((feat) => (
            <div key={feat.id} className="glass-panel feature-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className="feature-icon-box">
                  {feat.icon}
                </div>
                <span className="badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                  {feat.badge}
                </span>
              </div>
              <h3 className="feature-card-title">{feat.title}</h3>
              <p className="feature-card-desc">{feat.description}</p>
              
              <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--primary)', fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer' }}>
                <span>Explore documentation</span>
                <ChevronRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
