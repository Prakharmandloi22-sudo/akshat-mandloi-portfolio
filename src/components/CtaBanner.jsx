import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

export default function CtaBanner() {
  return (
    <section id="contact" className="cta-banner-section">
      <div className="container">
        <motion.div 
          className="cta-banner-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subhead Tag */}
          <span className="cta-subhead font-mono">HAVE A PROJECT IN MIND?</span>

          <div className="cta-banner-grid">
            {/* Left Headline */}
            <h2 className="cta-heading font-heading">
              Let's create <br />
              <span className="text-orange">something useful.</span>
            </h2>

            {/* Right Paragraph & Action Button */}
            <div className="cta-right-col">
              <p className="cta-description">
                Tell me what you're building, what needs improving, or where the experience feels stuck.
              </p>

              <div className="cta-actions-row">
                <a 
                  href={`mailto:${portfolioData.personalInfo.email}`} 
                  className="btn btn-orange cta-btn"
                >
                  LET'S TALK
                  <span className="btn-icon-square">
                    <ArrowUpRight size={12} />
                  </span>
                </a>

                <a 
                  href={`mailto:${portfolioData.personalInfo.email}`} 
                  className="cta-email-link font-mono"
                >
                  {portfolioData.personalInfo.email}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .cta-banner-section {
          padding: 6.5rem 0;
          background-color: var(--bg-light);
        }

        .cta-banner-card {
          background-color: var(--bg-dark);
          color: #FFFFFF;
          border-radius: var(--radius-xl);
          padding: 4rem 3.5rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cta-subhead {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--text-light-muted);
          display: block;
          margin-bottom: 1.5rem;
        }

        .cta-banner-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .cta-heading {
          font-size: clamp(3.2rem, 6vw, 5.2rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        .cta-description {
          font-size: 1.15rem;
          color: var(--text-light-secondary);
          line-height: 1.55;
          margin-bottom: 2.25rem;
        }

        .cta-actions-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 1rem 1.8rem;
          font-size: 0.85rem;
        }

        .cta-email-link {
          font-size: 0.85rem;
          color: var(--text-light-secondary);
          transition: color var(--transition-fast);
        }

        .cta-email-link:hover {
          color: var(--accent-orange);
        }

        @media (max-width: 900px) {
          .cta-banner-card {
            padding: 2.5rem 1.75rem;
          }

          .cta-banner-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
