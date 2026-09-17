import React, { useState } from 'react';
import { Play, RotateCcw, Sparkles } from 'lucide-react';

interface LogItem {
  id: string;
  time: string;
  type: 'info' | 'success' | 'warn';
  message: string;
}

type WorkflowType = 'document' | 'fraud' | 'support';

export const InteractiveDemo: React.FC = () => {
  const [activeWorkflow, setActiveWorkflow] = useState<WorkflowType>('document');
  const [concurrency, setConcurrency] = useState<number>(16);
  const [autoHeal, setAutoHeal] = useState<boolean>(true);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [logs, setLogs] = useState<LogItem[]>([
    { id: '1', time: '10:42:01.120', type: 'info', message: 'Pulse Kernel v2.4 initialized in sandbox cluster (us-east-1).' },
    { id: '2', time: '10:42:01.184', type: 'success', message: 'Model context window locked: 128k tokens cached.' },
    { id: '3', time: '10:42:01.290', type: 'info', message: 'Ready to ingest real-time telemetry events.' }
  ]);

  const workflowConfig = {
    document: {
      name: 'Document Intelligence',
      desc: 'Parses complex multi-page financial PDFs, extracts tables, and validates schemas.',
      unit: 'pages/sec',
      baseRate: 48,
    },
    fraud: {
      name: 'High-Velocity Fraud Analysis',
      desc: 'Evaluates real-time payment transactions across behavioral anomaly models.',
      unit: 'tx/sec',
      baseRate: 180,
    },
    support: {
      name: 'Multi-Agent Support Routing',
      desc: 'Triages customer inquiries, performs sentiment analysis, and drafts responses.',
      unit: 'tickets/min',
      baseRate: 24,
    }
  };

  const currentCfg = workflowConfig[activeWorkflow];
  const throughput = Math.round(currentCfg.baseRate * (concurrency / 8));
  const latency = Math.max(14, Math.round(110 / Math.sqrt(concurrency)));
  const costSavings = Math.round(52 + (concurrency * 0.5));

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setProgress(0);

    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');

    setLogs(prev => [
      ...prev,
      {
        id: Math.random().toString(),
        time: timeStr,
        type: 'info',
        message: `Dispatched job: [${currentCfg.name}] across ${concurrency} parallel workers...`
      }
    ]);

    let step = 0;
    const interval = setInterval(() => {
      step += 20;
      setProgress(step);

      if (step === 40) {
        setLogs(prev => [
          ...prev,
          {
            id: Math.random().toString(),
            time: new Date().toTimeString().split(' ')[0] + '.' + String(new Date().getMilliseconds()).padStart(3, '0'),
            type: 'info',
            message: `Ingested batch: Schema validated with zero formatting anomalies.`
          }
        ]);
      }

      if (step === 80) {
        setLogs(prev => [
          ...prev,
          {
            id: Math.random().toString(),
            time: new Date().toTimeString().split(' ')[0] + '.' + String(new Date().getMilliseconds()).padStart(3, '0'),
            type: autoHeal ? 'success' : 'warn',
            message: autoHeal 
              ? 'Self-healing routine verified zero dropped packets during burst load.'
              : 'Warning: Worker throttle encountered (Enable auto-healing to mitigate).'
          }
        ]);
      }

      if (step >= 100) {
        clearInterval(interval);
        setIsRunning(false);
        setLogs(prev => [
          ...prev,
          {
            id: Math.random().toString(),
            time: new Date().toTimeString().split(' ')[0] + '.' + String(new Date().getMilliseconds()).padStart(3, '0'),
            type: 'success',
            message: `✓ Pipeline batch executed successfully: ${throughput} ${currentCfg.unit} @ ${latency}ms latency.`
          }
        ]);
      }
    }, 400);
  };

  const clearLogs = () => {
    setLogs([
      {
        id: Math.random().toString(),
        time: new Date().toTimeString().split(' ')[0] + '.' + String(new Date().getMilliseconds()).padStart(3, '0'),
        type: 'info',
        message: 'Console cleared. Sandbox ready for next run.'
      }
    ]);
  };

  return (
    <section id="demo" className="demo-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Interactive Sandbox</span>
          <h2 className="section-title">Experience the Engine in Real-Time</h2>
          <p className="section-subtitle">
            Tweak pipeline configurations, scale simulated worker threads, and observe telemetry execution below.
          </p>
        </div>

        <div className="glass-panel demo-card">
          <div className="demo-header">
            <div className="demo-tabs">
              {(['document', 'fraud', 'support'] as WorkflowType[]).map((tab) => (
                <button
                  key={tab}
                  className={`demo-tab-btn ${activeWorkflow === tab ? 'active' : ''}`}
                  onClick={() => setActiveWorkflow(tab)}
                >
                  <Sparkles size={14} />
                  <span>{workflowConfig[tab].name}</span>
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button 
                className="btn btn-secondary" 
                onClick={clearLogs}
                title="Reset log console"
                style={{ padding: '0.5rem 0.9rem', fontSize: '0.85rem' }}
              >
                <RotateCcw size={15} />
                <span>Reset</span>
              </button>
              <button 
                className="btn btn-primary" 
                onClick={runSimulation}
                disabled={isRunning}
                style={{ padding: '0.5rem 1.2rem', fontSize: '0.88rem' }}
              >
                <Play size={16} fill="currentColor" />
                <span>{isRunning ? `Processing ${progress}%...` : 'Trigger Pipeline'}</span>
              </button>
            </div>
          </div>

          <div className="demo-body">
            {/* Controls */}
            <div className="demo-controls">
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                {currentCfg.desc}
              </p>

              <div className="control-group">
                <div className="control-label">
                  <span>Concurrency Factor (Worker Threads)</span>
                  <span className="control-value">{concurrency} Workers</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="64"
                  step="4"
                  value={concurrency}
                  onChange={(e) => setConcurrency(Number(e.target.value))}
                  className="range-slider"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  <span>4 threads (Light)</span>
                  <span>32 threads (Standard)</span>
                  <span>64 threads (Max)</span>
                </div>
              </div>

              <div className="control-group" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    Autonomous Self-Healing
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Automatically reroute failed requests and recover state
                  </div>
                </div>
                <label style={{ position: 'relative', display: 'inline-block', width: '48px', height: '26px' }}>
                  <input
                    type="checkbox"
                    checked={autoHeal}
                    onChange={(e) => setAutoHeal(e.target.checked)}
                    style={{ opacity: 0, width: 0, height: 0 }}
                  />
                  <span style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    inset: 0,
                    backgroundColor: autoHeal ? 'var(--primary)' : 'var(--border-color)',
                    borderRadius: '34px',
                    transition: '0.3s'
                  }}>
                    <span style={{
                      position: 'absolute',
                      height: '20px',
                      width: '20px',
                      left: autoHeal ? '24px' : '3px',
                      bottom: '3px',
                      backgroundColor: '#fff',
                      borderRadius: '50%',
                      transition: '0.3s'
                    }} />
                  </span>
                </label>
              </div>

              {/* Real-time stats */}
              <div className="demo-metrics">
                <div className="metric-pill">
                  <div className="metric-pill-value">{throughput}</div>
                  <div className="metric-pill-label">{currentCfg.unit}</div>
                </div>
                <div className="metric-pill">
                  <div className="metric-pill-value">{latency}ms</div>
                  <div className="metric-pill-label">Est. Latency</div>
                </div>
                <div className="metric-pill">
                  <div className="metric-pill-value">{costSavings}%</div>
                  <div className="metric-pill-label">Cost Efficiency</div>
                </div>
              </div>
            </div>

            {/* Live Terminal / Log Viewer */}
            <div className="demo-console">
              <div className="console-titlebar">
                <div className="console-dots">
                  <span className="console-dot red"></span>
                  <span className="console-dot yellow"></span>
                  <span className="console-dot green"></span>
                </div>
                <span style={{ fontSize: '0.78rem', color: '#64748b' }}>stream://telemetry/cluster-01</span>
                <span style={{ fontSize: '0.75rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#10b981' }}></span>
                  LIVE
                </span>
              </div>

              <div className="console-logs">
                {logs.map((log) => (
                  <div key={log.id} className="log-entry">
                    <span className="log-time">{log.time}</span>
                    <span className={`log-msg ${log.type}`}>
                      {log.type === 'success' && '✓ '}
                      {log.type === 'warn' && '⚠ '}
                      {log.message}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
