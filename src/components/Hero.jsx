import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

export default function Hero({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('ui');

  const scrollToSection = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Typography & CTAs */}
        <motion.div 
          className="hero-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-subhead-wrapper font-mono">
            <span className="hero-subhead">{portfolioData.personalInfo.subhead}</span>
          </div>

          <h1 className="hero-title font-heading">
            <span className="hero-name-black">{portfolioData.personalInfo.heroHeading.first}</span>
            <span className="hero-name-orange">{portfolioData.personalInfo.heroHeading.second}</span>
          </h1>

          <p className="hero-description font-body">
            {portfolioData.personalInfo.heroTagline}
          </p>

          <div className="hero-actions">
            <button 
              className="btn btn-primary-dark"
              onClick={() => scrollToSection('#work')}
            >
              VIEW WORK
              <span className="btn-icon-square">
                <ArrowUpRight size={12} />
              </span>
            </button>

            <button 
              className="btn btn-outline-dark"
              onClick={() => {
                if (onOpenContact) onOpenContact();
                else scrollToSection('#contact');
              }}
            >
              LET'S TALK
              <span className="btn-icon-square">
                <ArrowUpRight size={12} />
              </span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Exact 1:1 Figma Mockup Card */}
        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="figma-hero-card">
            {/* Top Bar inside card */}
            <div className="card-top-bar font-mono">
              <span className="design-version text-orange">DESIGN 1.01</span>
              <span className="designer-name">{portfolioData.personalInfo.name}</span>
            </div>

            {/* Canvas Area */}
            <div className="card-canvas">
              {/* Floating Top Left Badge */}
              <motion.div 
                className="hero-badge-box font-mono"
                whileHover={{ y: -3 }}
                onClick={() => setActiveTab(activeTab === 'ui' ? 'code' : 'ui')}
              >
                <span className="badge-num text-orange">01</span>
                <h4 className="badge-title font-heading">UI/UX</h4>
                <span className="badge-sub font-mono">DESIGNER</span>
              </motion.div>

              {/* Floating Glowing Orange Circle Widget */}
              <motion.div 
                className="hero-orange-circle"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                onClick={() => setActiveTab(activeTab === 'ui' ? 'code' : 'ui')}
              >
                <span className="center-dot"></span>
              </motion.div>

              {/* Center UI / UX Typography Display */}
              <div className="hero-center-typography font-heading">
                {activeTab === 'ui' ? (
                  <div className="ui-ux-combo font-heading">
                    <span className="text-ui">UI</span>
                    <span className="text-ux-outline">UX</span>
                    <div className="red-underline-bar"></div>
                  </div>
                ) : (
                  <div className="code-mode-combo font-mono">
                    <span className="code-tag text-orange">&lt;DeveloperHanded /&gt;</span>
                    <span className="code-sub">Component Specs Ready</span>
                  </div>
                )}
              </div>

              {/* Bottom Right Circle Arc graphic */}
              <div className="bottom-circle-arc"></div>
            </div>

            {/* Bottom Bar inside card */}
            <div className="card-bottom-bar font-mono">
              <span>TYPE / SCALE</span>
              <span>FORM / FUNCTION</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          padding-top: calc(var(--header-height) + 3.5rem);
          padding-bottom: 6rem;
          background-color: var(--bg-light);
          min-height: 88vh;
          display: flex;
          align-items: center;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-subhead {
          font-size: 0.775rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-dark-secondary);
          display: block;
          margin-bottom: 1.25rem;
        }

        .hero-title {
          font-size: clamp(3.8rem, 7.5vw, 6.4rem);
          font-weight: 800;
          line-height: 0.94;
          letter-spacing: -0.035em;
          display: flex;
          flex-direction: column;
          margin-bottom: 1.75rem;
        }

        .hero-name-black {
          color: var(--text-dark-primary);
        }

        .hero-name-orange {
          color: var(--accent-orange);
        }

        .hero-description {
          font-size: clamp(1.1rem, 1.8vw, 1.3rem);
          color: var(--text-dark-secondary);
          line-height: 1.5;
          max-width: 500px;
          margin-bottom: 2.5rem;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        /* 1:1 Figma Card Right Column */
        .figma-hero-card {
          background-color: #141416;
          border-radius: var(--radius-xl);
          padding: 1.75rem;
          color: #FFFFFF;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.22);
          position: relative;
          height: 480px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .card-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .card-top-bar .designer-name {
          color: var(--text-light-muted);
        }

        .card-canvas {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Floating Badge Top Left */
        .hero-badge-box {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: #FFFFFF;
          color: #111113;
          padding: 1rem 1.2rem;
          border-radius: 12px;
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25);
          cursor: pointer;
          z-index: 10;
        }

        .badge-num {
          font-size: 0.65rem;
          font-weight: 800;
        }

        .badge-title {
          font-size: 1.3rem;
          font-weight: 800;
          line-height: 1.1;
          margin-top: 2px;
        }

        .badge-sub {
          font-size: 0.55rem;
          color: var(--text-dark-muted);
          letter-spacing: 0.08em;
          display: block;
          margin-top: 2px;
        }

        /* Floating Orange Circle Widget Top Right */
        .hero-orange-circle {
          position: absolute;
          top: 2.5rem;
          right: 1.5rem;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          background: var(--accent-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 35px var(--accent-orange-glow);
          cursor: pointer;
          z-index: 10;
        }

        .center-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #FFFFFF;
        }

        /* UI UX Stroke Typography Center */
        .hero-center-typography {
          position: relative;
          text-align: center;
          z-index: 5;
        }

        .ui-ux-combo {
          display: inline-flex;
          align-items: flex-end;
          gap: 0.8rem;
          position: relative;
        }

        .text-ui {
          font-size: 10.5rem;
          font-weight: 800;
          line-height: 0.82;
          color: #FFFFFF;
          letter-spacing: -0.05em;
        }

        .text-ux-outline {
          font-size: 10.5rem;
          font-weight: 800;
          line-height: 0.82;
          color: transparent;
          -webkit-text-stroke: 3px #FFFFFF;
          letter-spacing: -0.05em;
        }

        .red-underline-bar {
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 240px;
          height: 4px;
          background: var(--accent-orange);
          border-radius: 2px;
        }

        .code-mode-combo {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .code-tag {
          font-size: 2.2rem;
          font-weight: 800;
        }

        .code-sub {
          font-size: 0.85rem;
          color: var(--text-light-muted);
        }

        .bottom-circle-arc {
          position: absolute;
          bottom: -30px;
          right: -30px;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          pointer-events: none;
        }

        .card-bottom-bar {
          display: flex;
          justify-content: space-between;
          font-size: 0.625rem;
          color: var(--text-light-muted);
          letter-spacing: 0.08em;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-title {
            font-size: clamp(3.2rem, 9vw, 4.8rem);
          }

          .figma-hero-card {
            height: 400px;
          }

          .text-ui, .text-ux-outline {
            font-size: 7.5rem;
          }
        }
      `}</style>
    </section>
  );
}
