import React from 'react';
import { Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="#hero" className="brand-logo">
              <div className="brand-icon-wrapper" style={{ width: 32, height: 32 }}>
                <Zap size={18} fill="currentColor" />
              </div>
              <span>Pulse<span className="gradient-text">AI</span></span>
            </a>
            <p className="footer-desc">
              The next-generation distributed workflow orchestration platform for modern teams and autonomous AI agents.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.25rem' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }}></span>
              <span style={{ fontSize: '0.82rem', color: '#10b981', fontWeight: 600 }}>All operational systems nominal</span>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Platform</h4>
            <ul className="footer-links-list">
              <li><a href="#features" className="footer-link">Core Features</a></li>
              <li><a href="#demo" className="footer-link">Live Sandbox</a></li>
              <li><a href="#metrics" className="footer-link">Performance SLAs</a></li>
              <li><a href="#pricing" className="footer-link">Pricing Plans</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Developers</h4>
            <ul className="footer-links-list">
              <li><a href="#docs" className="footer-link">Documentation</a></li>
              <li><a href="#api" className="footer-link">REST & GraphQL API</a></li>
              <li><a href="#sdks" className="footer-link">TypeScript & Python SDKs</a></li>
              <li><a href="#github" className="footer-link">Open Source Repos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links-list">
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#blog" className="footer-link">Engineering Blog</a></li>
              <li><a href="#security" className="footer-link">Security & Trust</a></li>
              <li><a href="#careers" className="footer-link">Careers (We're Hiring!)</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Pulse AI Technologies Inc. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
