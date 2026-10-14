import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

export default function AboutMe() {
  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="about-me-section">
      <div className="container">
        {/* Top Header Divider Line */}
        <div className="section-divider"></div>

        <div className="about-layout">
          {/* Left Column Tag */}
          <div className="about-tag-col font-mono">
            <span className="about-num">02</span>
            <span className="about-tag">ABOUT ME</span>
          </div>

          {/* Main Content Area */}
          <div className="about-content-col">
            {/* Heading */}
            <motion.h2 
              className="about-heading font-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Designer, systems thinker, <span className="text-orange">detail enthusiast.</span>
            </motion.h2>

            <div className="about-grid">
              {/* Left Column Graphic Card */}
              <motion.div 
                className="about-graphic-box"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="watermark-am font-heading">AM</div>
                <div className="ui-ux-badge font-mono">
                  <span>UI / UX</span>
                </div>
                <span className="orange-m font-heading">M</span>

                <div className="graphic-footer font-mono">
                  {portfolioData.personalInfo.locationBadge}
                </div>
              </motion.div>

              {/* Right Column Bio & Credentials */}
              <motion.div 
                className="about-text-content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="designer-tag font-mono">
                  {portfolioData.personalInfo.name} · UI/UX DESIGNER
                </span>

                <h3 className="about-lead font-heading">
                  {portfolioData.personalInfo.aboutSubtext}
                </h3>

                <p className="about-bio-text">
                  {portfolioData.personalInfo.aboutBio}
                </p>

                <div className="about-action-row">
                  <button 
                    className="more-exp-link font-mono"
                    onClick={() => scrollToSection('#experience')}
                  >
                    MORE ABOUT MY EXPERIENCE
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-me-section {
          padding: 6.5rem 0;
          background-color: var(--bg-light);
        }

        .about-layout {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 3rem;
        }

        .about-tag-col {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          align-self: start;
        }

        .about-num {
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--accent-orange);
        }

        .about-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--text-dark-secondary);
        }

        .about-heading {
          font-size: clamp(2.6rem, 5vw, 4.4rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: var(--text-dark-primary);
          margin-bottom: 3.5rem;
          max-width: 860px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 400px 1fr;
          gap: 4rem;
          align-items: start;
        }

        /* Graphic Beige Box Left */
        .about-graphic-box {
          background-color: #E3E0D8;
          border-radius: var(--radius-lg);
          height: 400px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          overflow: hidden;
          box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.04);
        }

        .watermark-am {
          position: absolute;
          font-size: 14rem;
          font-weight: 800;
          color: rgba(17, 17, 19, 0.08);
          line-height: 1;
          letter-spacing: -0.05em;
          user-select: none;
        }

        .ui-ux-badge {
          background: #111113;
          color: #FFFFFF;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.35rem 0.75rem;
          letter-spacing: 0.1em;
          border-radius: 4px;
          z-index: 5;
        }

        .orange-m {
          font-size: 9rem;
          font-weight: 800;
          color: var(--accent-orange);
          position: absolute;
          bottom: 2rem;
          right: 3rem;
          line-height: 1;
          z-index: 2;
        }

        .graphic-footer {
          position: absolute;
          bottom: 1.25rem;
          left: 1.5rem;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-dark-muted);
          z-index: 5;
        }

        /* Right Column Bio */
        .designer-tag {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--accent-orange);
          display: block;
          margin-bottom: 1.25rem;
        }

        .about-lead {
          font-size: 1.6rem;
          font-weight: 700;
          line-height: 1.35;
          color: var(--text-dark-primary);
          margin-bottom: 1.5rem;
        }

        .about-bio-text {
          font-size: 1rem;
          color: var(--text-dark-secondary);
          line-height: 1.65;
          margin-bottom: 2.5rem;
        }

        .more-exp-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-dark-primary);
          padding-bottom: 4px;
          border-bottom: 2px solid var(--text-dark-primary);
          transition: all var(--transition-fast);
        }

        .more-exp-link:hover {
          color: var(--accent-orange);
          border-color: var(--accent-orange);
        }

        @media (max-width: 1024px) {
          .about-layout {
            grid-template-columns: 1fr;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .about-graphic-box {
            height: 320px;
          }
        }
      `}</style>
    </section>
  );
}
