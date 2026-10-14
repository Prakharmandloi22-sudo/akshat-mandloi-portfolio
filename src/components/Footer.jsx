import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper font-mono">
      <div className="container footer-container">
        <div className="footer-bar">
          <span className="brand-name font-heading">{portfolioData.personalInfo.name}</span>
          <span className="role-loc">{portfolioData.personalInfo.role.toUpperCase()} · INDIA</span>
          <span className="copyright">© {new Date().getFullYear()} {portfolioData.personalInfo.name}</span>
          <button className="back-top-btn" onClick={scrollToTop} aria-label="Back to top">
            BACK TO TOP <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          background-color: var(--bg-light);
          color: var(--text-dark-primary);
          padding: 2.5rem 0;
          border-top: 1px solid var(--border-light);
        }

        .footer-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.25rem;
          font-size: 0.725rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-dark-secondary);
        }

        .brand-name {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--text-dark-primary);
          letter-spacing: 0.04em;
        }

        .back-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.725rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-dark-primary);
          background: none;
          border: none;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .back-top-btn:hover {
          color: var(--accent-orange);
        }

        @media (max-width: 768px) {
          .footer-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
        }
      `}</style>
    </footer>
  );
}
