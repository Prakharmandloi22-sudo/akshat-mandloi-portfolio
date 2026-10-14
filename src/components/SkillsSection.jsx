import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Code2, Server, Figma, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

export default function SkillsSection() {
  const iconMap = {
    Smartphone: Smartphone,
    Code2: Code2,
    Server: Server,
    Figma: Figma
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <span className="section-num font-mono">02 · SKILLS & ARCHITECTURE</span>
          <h2 className="skills-title font-heading">
            Technical expertise across <span className="text-orange">design & code.</span>
          </h2>
          <p className="skills-subtext">
            Specialized in building end-to-end mobile applications, web platforms, cloud services, and interactive user interface systems.
          </p>
        </div>

        <div className="skills-grid">
          {portfolioData.skillCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            return (
              <motion.div 
                key={cat.name}
                className="skill-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="skill-card-top">
                  <div className="skill-icon-wrapper">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="skill-cat-title font-heading">{cat.name}</h3>
                </div>

                <div className="skill-items-list">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item">
                      <CheckCircle size={15} className="skill-check-icon" />
                      <span className="skill-item-name">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skills-section {
          padding: 6.5rem 0;
          background-color: var(--bg-light-secondary);
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .skills-header {
          max-width: 680px;
          margin-bottom: 4rem;
        }

        .section-num {
          font-size: 0.775rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--accent-orange);
          display: block;
          margin-bottom: 0.8rem;
        }

        .skills-title {
          font-size: clamp(2.4rem, 4.5vw, 3.6rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--text-dark-primary);
          margin-bottom: 1.25rem;
        }

        .skills-subtext {
          font-size: 1.1rem;
          color: var(--text-dark-secondary);
          line-height: 1.5;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .skill-card {
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          padding: 2rem 1.5rem;
          border: 1px solid var(--border-light);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
          transition: all var(--transition-normal);
        }

        .skill-card:hover {
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          border-color: rgba(239, 68, 35, 0.25);
        }

        .skill-card-top {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.75rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-light);
        }

        .skill-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(239, 68, 35, 0.08);
          color: var(--accent-orange);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-cat-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-dark-primary);
        }

        .skill-items-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .skill-check-icon {
          color: var(--accent-orange);
          flex-shrink: 0;
        }

        .skill-item-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-dark-secondary);
        }

        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
