import React, { useState } from 'react';
import { Zap, Moon, Sun, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <a href="#hero" className="brand-logo">
            <div className="brand-icon-wrapper">
              <Zap size={22} fill="currentColor" />
            </div>
            <span>Pulse<span className="gradient-text">AI</span></span>
          </a>

          <nav>
            <ul className="nav-links">
              <li><a href="#features" className="nav-link">Features</a></li>
              <li><a href="#demo" className="nav-link">Interactive Demo</a></li>
              <li><a href="#metrics" className="nav-link">Performance</a></li>
              <li><a href="#testimonials" className="nav-link">Reviews</a></li>
              <li><a href="#faq" className="nav-link">FAQ</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <button 
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <a href="#demo" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.88rem' }}>
              <span>Try Sandbox</span>
              <ArrowRight size={16} />
            </a>

            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#features" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#demo" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Interactive Demo</a>
          <a href="#metrics" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Performance</a>
          <a href="#testimonials" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
          <a href="#faq" className="nav-link" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <a 
            href="#demo" 
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.5rem' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Launch Interactive Sandbox
          </a>
        </div>
      </div>
    </header>
  );
};
