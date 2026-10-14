import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import ProjectMockupArt from './ProjectMockupArt';
import '../styles/global.css';

export default function CaseStudiesSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  // 3 featured case study projects matching Figma Screenshots
  const caseStudyProjects = portfolioData.projects.filter(p => 
    ['ai-diabetes-pod', 'easy-waste', 'seedroute'].includes(p.id)
  );

  return (
    <section id="case-studies" className="case-studies-section">
      <div className="container">
        {/* Section Header */}
        <div className="cs-top-bar font-mono">
          <span className="cs-meta">CASE STUDIES</span>
        </div>

        <div className="cs-header-layout">
          <motion.h2 
            className="cs-heading font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            See how the work <br />
            <span className="text-orange">comes together.</span>
          </motion.h2>

          <p className="cs-subtext font-mono">
            Three deeper stories about turning complexity into clear product experiences.
          </p>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="cs-cards-grid">
          {caseStudyProjects.map((project, idx) => (
            <motion.div 
              key={project.id}
              className="cs-card-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              {/* Visual Mockup Box with exact Figma poster artwork */}
              <div 
                className="cs-visual-box"
                style={{ backgroundColor: project.themeColor, color: project.textColor }}
                onClick={() => setSelectedProject(project)}
              >
                <ProjectMockupArt projectId={project.id} />
              </div>

              {/* Sub Info */}
              <div className="cs-card-info">
                <span className="cs-category font-mono">{project.category}</span>
                <h3 className="cs-title font-heading" onClick={() => setSelectedProject(project)}>
                  {project.title}
                </h3>
                <p className="cs-desc">{project.shortDesc}</p>

                <button 
                  className="cs-view-btn font-mono"
                  onClick={() => setSelectedProject(project)}
                >
                  VIEW CASE STUDY
                  <ArrowUpRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Popup */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      <style>{`
        .case-studies-section {
          padding: 6.5rem 0;
          background-color: var(--bg-light);
          border-top: 1px solid var(--border-light);
        }

        .cs-meta {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--text-dark-muted);
          display: block;
          margin-bottom: 1.5rem;
        }

        .cs-header-layout {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .cs-heading {
          font-size: clamp(2.8rem, 5.5vw, 4.8rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--text-dark-primary);
        }

        .cs-subtext {
          font-size: 0.95rem;
          color: var(--text-dark-secondary);
          max-width: 380px;
          line-height: 1.5;
        }

        /* 3 Cards Grid */
        .cs-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .cs-card-item {
          display: flex;
          flex-direction: column;
        }

        .cs-visual-box {
          height: 320px;
          border-radius: var(--radius-lg);
          padding: 1.25rem;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cs-visual-box:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(0, 0, 0, 0.15);
        }

        /* Card Sub Info */
        .cs-card-info {
          margin-top: 1.25rem;
        }

        .cs-category {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-dark-muted);
          text-transform: uppercase;
          display: block;
          margin-bottom: 0.3rem;
        }

        .cs-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-dark-primary);
          margin-bottom: 0.4rem;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .cs-title:hover {
          color: var(--accent-orange);
        }

        .cs-desc {
          font-size: 0.9rem;
          color: var(--text-dark-secondary);
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .cs-view-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.725rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-dark-primary);
          background: none;
          border: none;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .cs-view-btn:hover {
          color: var(--accent-orange);
        }

        @media (max-width: 1024px) {
          .cs-header-layout {
            flex-direction: column;
            align-items: flex-start;
          }

          .cs-cards-grid {
            grid-template-columns: 1fr;
          }

          .cs-visual-box {
            height: 280px;
          }
        }
      `}</style>
    </section>
  );
}
