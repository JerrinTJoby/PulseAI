import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarText: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Elena Rostova',
      role: 'VP of Platform Engineering',
      company: 'Aether Cloud',
      quote: 'Pulse AI slashed our pipeline onboarding time from three weeks to under two hours. The self-healing circuit breakers have prevented dozens of customer incidents.',
      avatarText: 'ER'
    },
    {
      name: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'FinTrack Labs',
      quote: 'Handling over 4 million financial ledger reconciliations per day with sub-20ms latency was impossible with our previous stack. Pulse made it look effortless.',
      avatarText: 'MV'
    },
    {
      name: 'Sophia Zhang',
      role: 'Head of Data Infrastructure',
      company: 'HyperScale AI',
      quote: 'The observability and instant replay functionality turned debugging edge cases into a 5-minute task. It is by far the highest ROI tool our team adopted this year.',
      avatarText: 'SZ'
    }
  ];

  return (
    <section id="testimonials" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Social Proof</span>
          <h2 className="section-title">Loved by High-Growth Engineering Teams</h2>
          <p className="section-subtitle">
            See how world-class organizations are transforming their infrastructure with Pulse.
          </p>
        </div>

        <div className="grid-3">
          {testimonials.map((t, index) => (
            <div key={index} className="glass-panel testimonial-card">
              <div>
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={17} fill="#f59e0b" stroke="#f59e0b" />
                  ))}
                </div>
                <p className="testimonial-quote">"{t.quote}"</p>
              </div>

              <div className="testimonial-author">
                <div className="author-avatar">
                  {t.avatarText}
                </div>
                <div>
                  <div className="author-name">{t.name}</div>
                  <div className="author-role">{t.role} • <strong>{t.company}</strong></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
