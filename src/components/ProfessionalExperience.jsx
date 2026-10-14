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
          <span className="section-num">03</span>
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

        {/* Interface Canvas Showcase Frame (Figma Screenshots 1 & 2) */}
        <motion.div 
          className="interface-showcase-frame"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="showcase-container">
            {/* Desktop Mockup Screen */}
            <div className="showcase-web-mockup">
              <div className="web-header font-mono">
                <div className="dots">
                  <span className="d red"></span>
                  <span className="d yellow"></span>
                  <span className="d green"></span>
                </div>
                <span className="web-meta">PRODUCT / STUDIO</span>
                <span className="btn-mini font-mono">START A PROJECT ↗</span>
              </div>
              <div className="web-body">
                <span className="mini-meta font-mono">DIGITAL EXPERIENCES / 2025</span>
                <h4 className="web-heading font-heading">Clear thinking. <br />Useful design.</h4>
                <p className="web-sub">We shape digital products around the people who use them.</p>
                <div className="web-cta font-mono">Explore work →</div>
              </div>
            </div>

            {/* Right Tablet Mockup Screen */}
            <div className="showcase-tablet-mockup">
              <div className="tablet-inner">
                <div className="tab-title font-heading">Project flow</div>
                <div className="tab-sub font-mono">TODAY'S OVERVIEW</div>
                <h5 className="tab-greeting font-heading">Good morning, <br />Akshat.</h5>
                <div className="tab-status-card">
                  <span className="status-lbl font-mono">Today</span>
                  <span className="status-dot"></span>
                </div>
              </div>
            </div>

            {/* Floating Dashboard Card (Bottom Center) */}
            <div className="floating-dashboard-card font-mono">
              <div className="dash-top">
                <span>PROJECT STATUS</span>
                <span className="dash-title">Weekly overview</span>
              </div>
              <div className="dash-columns">
                <div className="col"><span className="tag">Ready</span></div>
                <div className="col"><span className="tag">Review</span></div>
                <div className="col"><span className="tag">Next</span></div>
              </div>
              <div className="dash-chart-bars">
                <div className="b h-30"></div>
                <div className="b h-50"></div>
                <div className="b h-40"></div>
                <div className="b h-60"></div>
                <div className="b h-80 orange"></div>
                <div className="b h-90 orange"></div>
              </div>
            </div>
          </div>

          <div className="showcase-footer font-mono">
            <span>SELECTED INTERFACE DIRECTIONS · WEB / MOBILE / PRODUCT</span>
          </div>
        </motion.div>

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

        /* Layered Showcase Canvas Frame */
        .interface-showcase-frame {
          margin-bottom: 6rem;
        }

        .showcase-container {
          background-color: #EBE8E1;
          border-radius: var(--radius-xl);
          height: 480px;
          padding: 3rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
          display: flex;
          gap: 2rem;
        }

        .showcase-web-mockup {
          background: #F5F3EC;
          width: 62%;
          height: 380px;
          border-radius: var(--radius-md);
          padding: 1.25rem;
          box-shadow: 0 16px 36px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
        }

        .web-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.65rem;
          padding-bottom: 0.85rem;
          border-bottom: 1px solid rgba(17, 17, 19, 0.08);
        }

        .web-header .dots {
          display: flex;
          gap: 4px;
        }
        .web-header .d { width: 6px; height: 6px; border-radius: 50%; }
        .web-header .d.red { background: #EF4444; }
        .web-header .d.yellow { background: #F59E0B; }
        .web-header .d.green { background: #10B981; }

        .btn-mini {
          background: #111113;
          color: #FFF;
          padding: 3px 8px;
          border-radius: 3px;
        }

        .web-body {
          padding-top: 2rem;
        }

        .mini-meta {
          font-size: 0.6rem;
          color: var(--accent-orange);
          letter-spacing: 0.1em;
        }

        .web-heading {
          font-size: 2.4rem;
          font-weight: 800;
          line-height: 1.05;
          margin: 0.5rem 0 1rem;
        }

        .web-sub {
          font-size: 0.85rem;
          color: var(--text-dark-secondary);
          margin-bottom: 1.5rem;
        }

        .web-cta {
          display: inline-block;
          background: var(--accent-orange);
          color: #FFF;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 700;
        }

        .showcase-tablet-mockup {
          background: #FFFFFF;
          width: 34%;
          height: 380px;
          border-radius: var(--radius-md);
          padding: 1.5rem;
          box-shadow: 0 16px 36px rgba(0,0,0,0.1);
          border: 3px solid #111113;
        }

        .tab-title {
          font-size: 1.1rem;
          font-weight: 800;
        }

        .tab-sub {
          font-size: 0.6rem;
          color: var(--text-dark-muted);
          margin-top: 1rem;
          display: block;
        }

        .tab-greeting {
          font-size: 1.6rem;
          font-weight: 800;
          line-height: 1.15;
          margin-top: 0.4rem;
        }

        .tab-status-card {
          margin-top: 2rem;
          background: #F5F3EC;
          padding: 1rem;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .floating-dashboard-card {
          position: absolute;
          bottom: 2rem;
          left: 36%;
          background: #FFFFFF;
          padding: 1.25rem;
          border-radius: var(--radius-md);
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
          width: 320px;
          border: 1px solid var(--border-light);
        }

        .dash-top {
          display: flex;
          justify-content: space-between;
          font-size: 0.6rem;
          color: var(--text-dark-muted);
          margin-bottom: 0.85rem;
        }

        .dash-columns {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .dash-columns .col {
          flex: 1;
          background: #F5F3EC;
          padding: 0.4rem;
          border-radius: 4px;
          font-size: 0.65rem;
          text-align: center;
        }

        .dash-chart-bars {
          display: flex;
          align-items: flex-end;
          gap: 6px;
          height: 50px;
        }

        .dash-chart-bars .b {
          flex: 1;
          background: #E5E3DD;
          border-radius: 2px;
        }

        .dash-chart-bars .b.orange {
          background: var(--accent-orange);
        }

        .showcase-footer {
          margin-top: 0.85rem;
          font-size: 0.65rem;
          color: var(--text-dark-muted);
          letter-spacing: 0.08em;
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
