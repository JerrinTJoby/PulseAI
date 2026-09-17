import React from 'react';
import { ArrowRight, Play, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-badge-container">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Introducing Pulse 2.0 Engine • Autonomous AI Pipelines</span>
          </div>
        </div>

        <h1 className="hero-title">
          Scale your operations with <span className="gradient-text">intelligent workflows</span>
        </h1>

        <p className="hero-description">
          Build, orchestrate, and monitor self-healing automations across your entire stack. 
          Combine AI agents, modern APIs, and real-time event streams with zero operational friction.
        </p>

        <div className="hero-cta-group">
          <a href="#demo" className="btn btn-primary">
            <span>Start Building for Free</span>
            <ArrowRight size={18} />
          </a>
          <a href="#demo" className="btn btn-secondary">
            <Play size={17} fill="currentColor" />
            <span>Explore Live Sandbox</span>
          </a>
        </div>

        <div className="hero-proof">
          <div className="proof-item">
            <CheckCircle2 size={18} />
            <span>SOC-2 Type II Certified</span>
          </div>
          <div className="proof-item">
            <CheckCircle2 size={18} />
            <span>99.99% Guaranteed Uptime SLA</span>
          </div>
          <div className="proof-item">
            <CheckCircle2 size={18} />
            <span>50,000+ Active Automations</span>
          </div>
          <div className="proof-item">
            <ShieldCheck size={18} />
            <span>Enterprise-grade Data Privacy</span>
          </div>
        </div>
      </div>
    </section>
  );
};
