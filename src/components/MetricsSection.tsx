import React from 'react';

export const MetricsSection: React.FC = () => {
  const stats = [
    { value: '99.99%', label: 'Guaranteed SLA Uptime', detail: 'Battle-tested multiregion fallback' },
    { value: '14ms', label: 'Median P99 Latency', detail: 'Edge-cached intelligence runtimes' },
    { value: '120M+', label: 'Monthly Pipeline Executions', detail: 'Handling peak production volumes' },
    { value: '64%', label: 'Average Cloud Cost Saved', detail: 'Through dynamic compute optimization' },
  ];

  return (
    <section id="metrics" className="section-wrapper" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="stats-banner">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="stat-num">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
