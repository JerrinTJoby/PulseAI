import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const CTASection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().includes('@')) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="section-wrapper" style={{ paddingBottom: '3rem' }}>
      <div className="container">
        <div className="cta-box">
          <span className="badge" style={{ marginBottom: '1.5rem' }}>
            <Sparkles size={14} />
            <span>Instant Cloud Sandbox Available</span>
          </span>

          <h2 style={{ fontSize: '2.8rem', maxWidth: '750px', margin: '0 auto 1.25rem' }}>
            Ready to build <span className="gradient-text">superhuman workflows</span>?
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto' }}>
            Join thousands of developers and engineering leaders using Pulse to automate their mission-critical business systems.
          </p>

          {submitted ? (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid #10b981',
              color: '#10b981',
              padding: '0.85rem 1.5rem',
              borderRadius: '9999px',
              marginTop: '2rem',
              fontWeight: 600
            }}>
              <CheckCircle2 size={20} />
              <span>Invitation dispatched! Check your inbox for sandbox credentials.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="cta-form">
              <input
                type="email"
                placeholder="Enter your work email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="cta-input"
              />
              <button type="submit" className="btn btn-primary">
                <span>Get Started Free</span>
                <ArrowRight size={17} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
