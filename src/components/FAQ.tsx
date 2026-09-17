import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const faqs: FAQItem[] = [
    {
      id: '1',
      question: 'How does Pulse AI connect with our existing infrastructure?',
      answer: 'Pulse integrates directly via standard native SDKs (TypeScript, Python, Go), webhooks, Kafka streaming topics, and REST/GraphQL APIs. You can run Pulse as a managed cloud service or deploy the lightweight engine inside your own VPC via Docker or Kubernetes.'
    },
    {
      id: '2',
      question: 'Is customer or pipeline data used to train foundational AI models?',
      answer: 'Never. Pulse guarantees complete zero-data retention policies for model providers. Your telemetry, prompts, database queries, and private records are encrypted end-to-end and never used for retraining.'
    },
    {
      id: '3',
      question: 'What happens if a third-party API in a workflow times out or fails?',
      answer: 'Pulse provides configurable self-healing mechanisms, including automated retries with jittered exponential backoff, dead-letter queue routing, and intelligent fallback branch execution to ensure 99.99% availability.'
    },
    {
      id: '4',
      question: 'Can we try Pulse without committing to an enterprise contract?',
      answer: 'Yes! We offer a generous free sandbox tier with 50,000 monthly workflow executions, full access to our pre-built connectors, and community support. No credit card required to get started.'
    }
  ];

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Frequently Asked Questions</span>
          <h2 className="section-title">Everything You Need to Know</h2>
          <p className="section-subtitle">
            Got questions? We've got answers. If you need custom assistance, feel free to reach out to our team.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown 
                    size={20} 
                    style={{ 
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.25s ease',
                      flexShrink: 0
                    }} 
                  />
                </button>
                {isOpen && (
                  <div className="faq-answer">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
