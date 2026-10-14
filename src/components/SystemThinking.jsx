import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers, Palette, Grid, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

export default function SystemThinking() {
  return (
    <section className="system-thinking-wrapper">
      {/* 04 SYSTEM THINKING (Light beige container) */}
      <div className="system-light-section">
        <div className="container">
          <div className="system-grid">
            {/* Left Content */}
            <motion.div 
              className="system-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="sys-meta font-mono">
                <span className="text-orange">04</span>
                <span>SYSTEM THINKING</span>
              </div>

              <h2 className="sys-title font-heading">
                Consistency lives <br />
                <span className="text-orange">in the details.</span>
              </h2>

              <p className="sys-subtext">
                A compact visual language built to keep products clear, coherent and ready to scale.
              </p>
            </motion.div>

            {/* Right Design System Spec Mockup Container */}
            <motion.div 
              className="system-spec-card font-mono"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="spec-grid">
                {/* Type Scale Box */}
                <div className="spec-box type-box">
                  <span className="spec-label">TYPE / SCALE</span>
                  <div className="type-display font-heading">Aa</div>
                  <span className="type-meta">Main type : 16 | 24</span>
                </div>

                {/* Color Core Swatches */}
                <div className="spec-box color-box">
                  <span className="spec-label">COLOR / CORE</span>
                  <div className="swatch-row">
                    <span className="swatch black"></span>
                    <span className="swatch orange"></span>
                    <span className="swatch cream"></span>
                    <span className="swatch white"></span>
                  </div>
                </div>

                {/* Component States Box */}
                <div className="spec-box comp-box">
                  <span className="spec-label">COMPONENTS / STATES</span>
                  <div className="btn-samples-row">
                    <span className="sample-btn primary">Primary action <ArrowUpRight size={10} /></span>
                    <span className="sample-btn secondary">Secondary</span>
                  </div>
                  <div className="input-sample">
                    <span className="placeholder">Interface system</span>
                  </div>
                </div>

                {/* Spacing & Grid */}
                <div className="spec-box spacing-box">
                  <span className="spec-label">SPACING / GRID</span>
                  <div className="grid-bars-row">
                    <span className="bar w-20"></span>
                    <span className="bar w-30"></span>
                    <span className="bar w-40"></span>
                    <span className="bar w-50"></span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* DESIGN PROCESS (Dark Theme Section) */}
      <div className="process-dark-section">
        <div className="container">
          <div className="process-header">
            <span className="process-meta font-mono">DESIGN PROCESS</span>
            <h2 className="process-title font-heading">
              From problem <span className="text-orange">to interface.</span>
            </h2>
          </div>

          <div className="process-steps-grid">
            {portfolioData.designProcess.map((item, idx) => (
              <motion.div 
                key={item.step}
                className="process-step-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <span className="step-num font-mono">{item.step}</span>
                <h3 className="step-title font-heading">{item.title}</h3>
                <p className="step-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .system-light-section {
          padding: 6.5rem 0;
          background-color: var(--bg-light-secondary);
          border-top: 1px solid var(--border-light);
        }

        .system-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: center;
        }

        .sys-meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-dark-secondary);
          margin-bottom: 1.25rem;
        }

        .sys-title {
          font-size: clamp(2.8rem, 5.2vw, 4.4rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin-bottom: 1.5rem;
        }

        .sys-subtext {
          font-size: 1.15rem;
          color: var(--text-dark-secondary);
          line-height: 1.55;
          max-width: 480px;
        }

        /* Spec Mockup Card */
        .system-spec-card {
          background: #EBE8E1;
          border-radius: var(--radius-xl);
          padding: 2.25rem;
          border: 1px solid rgba(17, 17, 19, 0.1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
        }

        .spec-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .spec-box {
          background: #FFFFFF;
          border-radius: var(--radius-md);
          padding: 1.25rem;
          border: 1px solid rgba(17, 17, 19, 0.06);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .spec-label {
          font-size: 0.6rem;
          color: var(--text-dark-muted);
          letter-spacing: 0.08em;
          margin-bottom: 0.85rem;
          display: block;
        }

        .type-display {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1;
        }

        .type-meta {
          font-size: 0.65rem;
          color: var(--text-dark-muted);
          margin-top: 0.5rem;
        }

        .swatch-row {
          display: flex;
          gap: 0.4rem;
          height: 38px;
        }

        .swatch {
          flex: 1;
          border-radius: 4px;
          border: 1px solid rgba(17, 17, 19, 0.1);
        }

        .swatch.black { background: #111113; }
        .swatch.orange { background: var(--accent-orange); }
        .swatch.cream { background: #E5E3DD; }
        .swatch.white { background: #FFFFFF; }

        .comp-box {
          grid-column: span 2;
        }

        .btn-samples-row {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .sample-btn {
          font-size: 0.65rem;
          padding: 0.4rem 0.8rem;
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-weight: 700;
        }

        .sample-btn.primary {
          background: #111113;
          color: #FFFFFF;
        }

        .sample-btn.secondary {
          background: #EBE8E1;
          color: #111113;
        }

        .input-sample {
          background: #F5F3EC;
          padding: 0.4rem 0.75rem;
          border-radius: 4px;
          font-size: 0.65rem;
          color: var(--text-dark-muted);
        }

        .spacing-box {
          grid-column: span 2;
        }

        .grid-bars-row {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .grid-bars-row .bar {
          height: 8px;
          background: var(--accent-orange);
          border-radius: 4px;
          opacity: 0.7;
        }

        .grid-bars-row .w-20 { width: 20%; }
        .grid-bars-row .w-30 { width: 30%; }
        .grid-bars-row .w-40 { width: 40%; }
        .grid-bars-row .w-50 { width: 50%; }

        /* Dark Process Section */
        .process-dark-section {
          padding: 6.5rem 0;
          background-color: var(--bg-dark);
          color: #FFFFFF;
        }

        .process-meta {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--text-light-muted);
          display: block;
          margin-bottom: 1rem;
        }

        .process-title {
          font-size: clamp(2.8rem, 5.2vw, 4.4rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin-bottom: 4rem;
        }

        .process-steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .process-step-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 2rem 1.5rem;
          transition: all var(--transition-normal);
        }

        .process-step-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(239, 68, 35, 0.3);
          transform: translateY(-4px);
        }

        .step-num {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-orange);
          display: block;
          margin-bottom: 1rem;
        }

        .step-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 0.6rem;
        }

        .step-desc {
          font-size: 0.9rem;
          color: var(--text-light-secondary);
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .system-grid {
            grid-template-columns: 1fr;
          }

          .process-steps-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .process-steps-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
