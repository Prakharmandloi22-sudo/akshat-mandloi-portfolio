import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/global.css';

export default function CoreSkills() {
  const [hoveredSkill, setHoveredSkill] = useState('UI DESIGN');

  const skillsCloud = [
    'APP DESIGN',
    'WEBSITE DESIGN',
    'DASHBOARD DESIGN',
    'UX RESEARCH',
    'INFORMATION ARCHITECTURE',
    'UI DESIGN',
    'USER FLOW',
    'USABILITY TESTING',
    'UX STRATEGY',
    'PROTOTYPING',
    'WIREFRAMING'
  ];

  const allTools = [
    'FIGMA',
    'FRAMER',
    'FIGJAM',
    'SPLINE',
    'AI DESIGN TOOLS',
    'FIGMA MAKE',
    'WORDPRESS',
    'CANVA'
  ];

  return (
    <section id="skills" className="core-skills-section">
      <div className="container">
        {/* Core Skills Dark Card Matching Reference Image */}
        <motion.div 
          id="core-skills" 
          className="core-skills-dark-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Bar: Title & (04) — TOOLKIT */}
          <div className="skills-card-top-bar">
            <div className="skills-title-stack font-heading">
              <span>CORE</span>
              <span>SKILLS</span>
            </div>
            <span className="skills-meta-tag font-mono">(04) — TOOLKIT</span>
          </div>

          {/* Interactive Skills Cloud with Glowing Floating Sticker */}
          <div className="skills-cloud-wall font-heading">
            {skillsCloud.map((skill, sIdx) => {
              const isHovered = hoveredSkill === skill;
              return (
                <span 
                  key={sIdx}
                  className={`skill-cloud-item ${isHovered ? 'active' : ''}`}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onClick={() => setHoveredSkill(skill)}
                >
                  <span className="skill-text">{skill}</span>
                  {isHovered && (
                    <motion.span 
                      className="skill-floating-sticker font-mono"
                      initial={{ scale: 0.8, opacity: 0, y: 4 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="sticker-sparkle">✦</span>
                      <span>{skill}</span>
                    </motion.span>
                  )}
                  {sIdx < skillsCloud.length - 1 && <span className="skill-sep-dot">·</span>}
                </span>
              );
            })}
          </div>

          {/* TOOLS Section */}
          <div className="tools-sub-section">
            <span className="tools-lead-label font-mono">TOOLS</span>

            <div className="tools-pills-matrix font-mono">
              {allTools.map((tool, tIdx) => (
                <div key={tIdx} className="tool-dark-pill">
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .core-skills-section {
          padding: 3rem 0 6rem;
          background-color: var(--bg-light);
        }

        .core-skills-dark-card {
          background-color: #111113;
          color: #FFFFFF;
          border-radius: 32px;
          padding: 3.5rem 3.5rem 3.25rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .skills-card-top-bar {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .skills-title-stack {
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.03em;
          display: flex;
          flex-direction: column;
        }

        .skills-meta-tag {
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: rgba(255, 255, 255, 0.6);
        }

        .skills-cloud-wall {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.8rem 1.25rem;
          font-size: clamp(1.4rem, 2.8vw, 2.2rem);
          font-weight: 800;
          line-height: 1.35;
          letter-spacing: -0.02em;
        }

        .skill-cloud-item {
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
          cursor: pointer;
          color: rgba(255, 255, 255, 0.35);
          transition: color var(--transition-fast);
          position: relative;
        }

        .skill-cloud-item:hover,
        .skill-cloud-item.active {
          color: #FFFFFF;
        }

        .skill-sep-dot {
          color: rgba(255, 255, 255, 0.2);
          font-weight: 400;
        }

        /* Floating Glowing Lime-Green Sticker Matching Image */
        .skill-floating-sticker {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #C7E85B;
          color: #111113;
          border-radius: var(--radius-full);
          padding: 0.35rem 0.85rem;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          box-shadow: 0 0 24px rgba(199, 232, 91, 0.5), 0 4px 12px rgba(0, 0, 0, 0.3);
          transform: rotate(-3deg);
          white-space: nowrap;
          pointer-events: none;
        }

        .sticker-sparkle {
          font-size: 0.8rem;
        }

        /* TOOLS Sub-section */
        .tools-sub-section {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .tools-lead-label {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: rgba(255, 255, 255, 0.5);
        }

        .tools-pills-matrix {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .tool-dark-pill {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: var(--radius-full);
          padding: 0.6rem 1.4rem;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #FFFFFF;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .tool-dark-pill:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 768px) {
          .core-skills-dark-card {
            padding: 2.25rem 1.5rem;
            border-radius: 20px;
          }

          .skills-cloud-wall {
            font-size: 1.25rem;
            gap: 0.6rem 0.8rem;
          }

          .tool-dark-pill {
            padding: 0.5rem 1rem;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
}
