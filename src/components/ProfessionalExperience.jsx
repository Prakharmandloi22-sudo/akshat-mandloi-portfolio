import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Building2, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

export default function ProfessionalExperience() {
  const role = portfolioData.currentRole;

  return (
    <section id="experience" className="prof-exp-section">
      <div className="container">
        {/* Top Header Meta */}
        <div className="section-meta-header font-mono">
          <span className="section-num">02</span>
          <span className="section-title">PROFESSIONAL EXPERIENCE</span>
        </div>

        {/* Top Grid Layout */}
        <div className="prof-exp-layout">
          {/* Left Column: Current Chapter 6DEGREESIT Box */}
          <motion.div 
            className="current-chapter-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="chapter-header font-mono">
              <span className="red-dot"></span>
              <span className="chapter-tag">CURRENT CHAPTER</span>
            </div>

            <h3 className="company-title font-heading">{role.company}</h3>
            <span className="role-subtitle font-heading">{role.role}</span>

            <div className="role-meta-info font-mono">
              <span>{role.tenure}</span>
              <span className="dot-sep">•</span>
              <span>{role.location}</span>
            </div>

            <p className="role-summary">{role.summary}</p>
          </motion.div>

          {/* Right Column: Narrative & Capabilities */}
          <motion.div 
            className="exp-narrative-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="narrative-heading font-heading">
              {role.headline}
            </h2>

            <p className="narrative-bio">
              {role.bio}
            </p>

            {/* 6 Capability Pills Grid */}
            <div className="capabilities-pills-grid font-mono">
              {role.capabilities.map((cap) => (
                <div key={cap.num} className="cap-pill-item">
                  <span className="cap-num">{cap.num}</span>
                  <span className="cap-name">{cap.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ROLE FOCUS · WHAT I WORKED ON Grid (Screenshots 2 & 3) */}
        <div className="role-focus-section">
          <div className="role-focus-header font-mono">
            <span className="rf-tag text-orange">ROLE FOCUS</span>
            <span className="rf-title">WHAT I WORKED ON</span>
          </div>

          <div className="role-focus-grid">
            {portfolioData.roleFocus.map((item) => (
              <motion.div 
                key={item.num}
                className="rf-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="rf-num font-mono">{item.num}</span>
                <h4 className="rf-item-title font-heading">{item.title}</h4>
                <p className="rf-item-desc">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .prof-exp-section {
          padding: 6.5rem 0;
          background-color: var(--bg-light);
          border-top: 1px solid var(--border-light);
        }

        .section-meta-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          margin-bottom: 3.5rem;
        }

        .section-meta-header .section-num {
          color: var(--accent-orange);
        }

        .section-meta-header .section-title {
          color: var(--text-dark-secondary);
        }

        .prof-exp-layout {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 4rem;
          margin-bottom: 5rem;
        }

        /* 6DEGREESIT Card */
        .current-chapter-card {
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          padding: 2.25rem 2rem;
          border: 1px solid var(--border-light);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          align-self: start;
        }

        .chapter-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--accent-orange);
          margin-bottom: 1.5rem;
        }

        .red-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-orange);
          box-shadow: 0 0 10px var(--accent-orange-glow);
        }

        .company-title {
          font-size: 2.4rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-dark-primary);
          line-height: 1;
        }

        .role-subtitle {
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: var(--text-dark-secondary);
          display: block;
          margin: 0.5rem 0 1.25rem;
        }

        .role-meta-info {
          font-size: 0.68rem;
          color: var(--text-dark-muted);
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding-bottom: 1.25rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-light);
        }

        .role-summary {
          font-size: 0.9rem;
          color: var(--text-dark-secondary);
          line-height: 1.55;
        }

        /* Narrative Column */
        .narrative-heading {
          font-size: clamp(2.2rem, 4.2vw, 3.4rem);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: var(--text-dark-primary);
          margin-bottom: 1.75rem;
        }

        .narrative-bio {
          font-size: 1.1rem;
          color: var(--text-dark-secondary);
          line-height: 1.6;
          margin-bottom: 3rem;
          max-width: 780px;
        }

        .capabilities-pills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border-light);
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          overflow: hidden;
        }

        .cap-pill-item {
          background: #FFFFFF;
          padding: 1rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.725rem;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .cap-num {
          color: var(--accent-orange);
        }

        .cap-name {
          color: var(--text-dark-primary);
        }

        /* Role Focus Grid */
        .role-focus-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 2rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-light);
        }

        .role-focus-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .rf-card {
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          padding: 2rem;
          border: 1px solid var(--border-light);
        }

        .rf-num {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-orange);
          display: block;
          margin-bottom: 0.75rem;
        }

        .rf-item-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-dark-primary);
          margin-bottom: 0.6rem;
        }

        .rf-item-desc {
          font-size: 0.925rem;
          color: var(--text-dark-secondary);
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .prof-exp-layout {
            grid-template-columns: 1fr;
          }

          .capabilities-pills-grid {
            grid-template-columns: 1fr;
          }

          .showcase-container {
            height: 380px;
          }

          .floating-dashboard-card {
            display: none;
          }

          .role-focus-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
