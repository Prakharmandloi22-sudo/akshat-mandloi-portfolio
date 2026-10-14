import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Activity, Sparkles, Smartphone, Monitor } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import '../styles/global.css';

export default function FeaturedProduct() {
  const [selectedProject, setSelectedProject] = useState(null);

  const project = portfolioData.projects.find(p => p.id === 'ai-diabetes-pod') || portfolioData.projects[0];

  return (
    <section className="featured-product-section">
      <div className="container">
        {/* Top Header Bar */}
        <div className="featured-top-bar font-mono">
          <span className="featured-tag">FEATURED PRODUCT DESIGN</span>
          <span className="featured-meta">HEALTHCARE AI · 2024</span>
        </div>

        {/* Featured Main Layout */}
        <div className="featured-grid">
          {/* Left Column Content */}
          <motion.div 
            className="featured-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="featured-subhead font-mono">AI-POWERED DIABETES POD</span>

            <h2 className="featured-title font-heading">
              Care that turns <br />
              data into <span className="text-orange">direction.</span>
            </h2>

            <p className="featured-description">
              A tablet-first patient workflow connecting glucose monitoring, AI-assisted insights and everyday care planning.
            </p>

            <div className="featured-tags-row font-mono">
              <span className="badge-tag-dark">HEALTHCARE</span>
              <span className="badge-tag-dark">AI</span>
              <span className="badge-tag-dark">DASHBOARD</span>
              <span className="badge-tag-dark">MOBILE FIRST</span>
            </div>

            <div className="featured-cta">
              <button 
                className="btn btn-outline-light"
                onClick={() => setSelectedProject(project)}
              >
                VIEW CASE STUDY
                <span className="btn-icon-square">
                  <ArrowUpRight size={12} />
                </span>
              </button>
            </div>
          </motion.div>

          {/* Right Column Lavender Canvas Mockup Container */}
          <motion.div 
            className="featured-canvas-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="lavender-container">
              {/* Tablet Screen Mockup */}
              <div className="tablet-mockup">
                <div className="tablet-header font-mono">
                  <span className="brand">nuracare</span>
                  <span className="time">Good morning, Akshat</span>
                  <span className="date">LAST SYNC 2M AGO</span>
                </div>
                <div className="tablet-body">
                  <div className="metric-box">
                    <span className="metric-num font-heading">108 <small>mg/dL</small></span>
                    <span className="metric-label font-mono">Average 7D</span>
                  </div>

                  {/* Chart Bar Mockups */}
                  <div className="chart-row">
                    <div className="bar h-40"></div>
                    <div className="bar h-60"></div>
                    <div className="bar h-80 active"></div>
                    <div className="bar h-50"></div>
                    <div className="bar h-70"></div>
                  </div>
                </div>
              </div>

              {/* Floating Phone Companion Mockup */}
              <div className="phone-mockup">
                <div className="phone-screen">
                  <span className="phone-tag font-mono">108 mg/dL</span>
                  <p className="phone-msg font-heading">You're doing well.</p>
                  <div className="phone-btn font-mono">Glucose Stable</div>
                </div>
              </div>

              {/* Floating Bottom AI Recommendation Badge */}
              <div className="floating-ai-badge font-mono">
                <Activity size={14} className="badge-icon text-orange" />
                <span>AI: Try a 10 min walk after lunch</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      <style>{`
        .featured-product-section {
          padding: 6.5rem 0;
          background-color: var(--bg-dark);
          color: #FFFFFF;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .featured-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.725rem;
          color: var(--accent-orange);
          letter-spacing: 0.12em;
          margin-bottom: 3.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .featured-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 4rem;
          align-items: center;
        }

        .featured-subhead {
          font-size: 0.75rem;
          letter-spacing: 0.12em;
          color: var(--text-light-muted);
          display: block;
          margin-bottom: 1rem;
        }

        .featured-title {
          font-family: var(--font-heading);
          font-size: clamp(3rem, 5.5vw, 4.8rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 1.75rem;
        }

        .featured-description {
          font-size: 1.2rem;
          color: var(--text-light-secondary);
          line-height: 1.55;
          margin-bottom: 2.25rem;
          max-width: 520px;
        }

        .featured-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 2.5rem;
        }

        .btn-outline-light {
          background: #FFFFFF;
          color: var(--text-dark-primary);
          border: 1px solid #FFFFFF;
        }

        .btn-outline-light:hover {
          background: #EAE6DF;
          transform: translateY(-2px);
        }

        /* Lavender Container Canvas */
        .featured-canvas-wrapper {
          cursor: pointer;
        }

        .lavender-container {
          background-color: #C6C5F8;
          border-radius: var(--radius-xl);
          height: 480px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tablet-mockup {
          background: #18181B;
          color: #FFFFFF;
          width: 82%;
          height: 320px;
          border-radius: var(--radius-md);
          padding: 1.25rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .tablet-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.65rem;
          color: var(--text-light-muted);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 0.75rem;
        }

        .tablet-header .brand {
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: 0.08em;
        }

        .metric-box {
          margin-top: 1rem;
        }

        .metric-num {
          font-size: 3rem;
          font-weight: 800;
        }

        .metric-num small {
          font-size: 1rem;
          color: var(--text-light-muted);
        }

        .metric-label {
          font-size: 0.65rem;
          color: var(--text-light-muted);
          display: block;
        }

        .chart-row {
          display: flex;
          align-items: flex-end;
          gap: 0.85rem;
          height: 100px;
          margin-top: 1.5rem;
        }

        .bar {
          flex: 1;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 4px;
          transition: height 0.3s ease;
        }

        .bar.h-40 { height: 40%; }
        .bar.h-50 { height: 50%; }
        .bar.h-60 { height: 60%; }
        .bar.h-70 { height: 70%; }
        .bar.h-80 { height: 80%; }

        .bar.active {
          background: #7C3AED;
          box-shadow: 0 0 16px #7C3AED;
        }

        /* Phone companion mockup floating bottom right */
        .phone-mockup {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          width: 130px;
          height: 220px;
          background: #FFFFFF;
          border-radius: 20px;
          padding: 8px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
          border: 3px solid #18181B;
          color: var(--text-dark-primary);
        }

        .phone-screen {
          background: #F4F3FF;
          height: 100%;
          border-radius: 14px;
          padding: 1rem 0.75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .phone-tag {
          font-size: 1.3rem;
          font-weight: 800;
          color: #7C3AED;
        }

        .phone-msg {
          font-size: 0.75rem;
          font-weight: 700;
          margin: 0.4rem 0 0.8rem;
        }

        .phone-btn {
          font-size: 0.55rem;
          background: #7C3AED;
          color: #FFFFFF;
          padding: 3px 8px;
          border-radius: 4px;
        }

        .floating-ai-badge {
          position: absolute;
          bottom: 2.5rem;
          left: 2.5rem;
          background: #18181B;
          color: #FFFFFF;
          padding: 0.6rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.7rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 1024px) {
          .featured-grid {
            grid-template-columns: 1fr;
          }

          .lavender-container {
            height: 380px;
          }

          .phone-mockup {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
