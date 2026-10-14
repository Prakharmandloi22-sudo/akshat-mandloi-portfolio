import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

export default function ExperienceSection() {
  return (
    <section id="experience" className="exp-section">
      <div className="container">
        <div className="exp-header">
          <span className="section-num font-mono">03 · EXPERIENCE & EDUCATION</span>
          <h2 className="exp-title font-heading">
            Track record of shipping <span className="text-orange">impactful products.</span>
          </h2>
        </div>

        <div className="exp-layout">
          {/* Work Experience Timeline Column */}
          <div className="exp-column">
            <h3 className="column-title font-heading">
              <Briefcase size={20} className="title-icon" />
              Work Experience
            </h3>

            <div className="timeline-list">
              {portfolioData.experience.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="timeline-card"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="timeline-badge font-mono">
                    <Calendar size={12} /> {item.period}
                  </div>
                  <h4 className="role-title font-heading">{item.role}</h4>
                  <span className="company-name">{item.company}</span>
                  <p className="role-desc">{item.description}</p>

                  <div className="highlights-list">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="highlight-item">
                        <CheckCircle2 size={14} className="highlight-icon" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="exp-column">
            <h3 className="column-title font-heading">
              <GraduationCap size={20} className="title-icon" />
              Education
            </h3>

            <div className="timeline-list">
              {portfolioData.education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  className="timeline-card edu-card"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="timeline-badge font-mono">
                    <Calendar size={12} /> {edu.period}
                  </div>
                  <h4 className="role-title font-heading">{edu.degree}</h4>
                  <span className="company-name">{edu.institution}</span>
                  <p className="role-desc">{edu.details}</p>
                </motion.div>
              ))}

              {/* Stats Highlights Summary Box */}
              <div className="stats-box">
                <h4 className="stats-box-title font-heading">Key Impact Metrics</h4>
                <div className="stats-grid">
                  {portfolioData.stats.map((st, sIdx) => (
                    <div key={sIdx} className="stat-item">
                      <span className="stat-val font-heading text-orange">{st.value}</span>
                      <span className="stat-lbl font-mono">{st.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .exp-section {
          padding: 6.5rem 0;
          background-color: var(--bg-light);
        }

        .exp-header {
          margin-bottom: 4rem;
        }

        .exp-title {
          font-size: clamp(2.4rem, 4.5vw, 3.6rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--text-dark-primary);
        }

        .exp-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
        }

        .column-title {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-dark-primary);
          margin-bottom: 2rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid var(--border-light);
        }

        .title-icon {
          color: var(--accent-orange);
        }

        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .timeline-card {
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          padding: 2rem;
          border: 1px solid var(--border-light);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
          position: relative;
        }

        .timeline-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.7rem;
          font-weight: 700;
          background: rgba(239, 68, 35, 0.08);
          color: var(--accent-orange);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
          margin-bottom: 1rem;
        }

        .role-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-dark-primary);
          line-height: 1.25;
        }

        .company-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-dark-secondary);
          display: block;
          margin: 0.3rem 0 1rem;
        }

        .role-desc {
          font-size: 0.925rem;
          color: var(--text-dark-secondary);
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }

        .highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          border-top: 1px solid var(--border-light);
          padding-top: 1rem;
        }

        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-dark-secondary);
        }

        .highlight-icon {
          color: #10B981;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .stats-box {
          background: var(--bg-dark);
          color: #FFFFFF;
          border-radius: var(--radius-lg);
          padding: 2rem;
          margin-top: 1rem;
        }

        .stats-box-title {
          font-size: 1.1rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-val {
          font-size: 2.2rem;
          font-weight: 800;
          line-height: 1;
        }

        .stat-lbl {
          font-size: 0.65rem;
          color: var(--text-light-secondary);
          letter-spacing: 0.05em;
          margin-top: 0.4rem;
        }

        @media (max-width: 900px) {
          .exp-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
