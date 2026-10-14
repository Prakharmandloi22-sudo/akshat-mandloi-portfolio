import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import ProjectMockupArt from './ProjectMockupArt';
import '../styles/global.css';

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'ALL'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeCategory || p.tags.includes(activeCategory));

  return (
    <section id="work" className="work-section">
      <div className="container">
        {/* Top Meta Header */}
        <div className="work-meta-header">
          <span className="meta-tag font-mono">SELECTED WORK · 2023–2026</span>
        </div>

        {/* Section Heading & Subtext */}
        <div className="work-header-layout">
          <motion.h2 
            className="work-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Work that solves, <br />
            <span className="text-orange">not just decorates.</span>
          </motion.h2>

          <motion.p 
            className="work-subtext"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A selection of websites, digital products, mobile apps, and interface systems shaped around real people and clear outcomes.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="filter-tabs font-mono">
          {portfolioData.projectCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="projects-grid"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="project-card-wrapper"
              >
                {/* Visual Card Frame Container */}
                <div 
                  className="project-card-frame"
                  style={{ backgroundColor: project.themeColor, color: project.textColor }}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Top Circle Action Icon */}
                  <div className="card-top-icon">
                    {project.liveUrl ? (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="icon-circle"
                        onClick={(e) => e.stopPropagation()}
                        title="View Live Demo"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <div className="icon-circle">
                        <ArrowUpRight size={16} />
                      </div>
                    )}
                  </div>

                  {/* Inner Mockup Graphic Visual matching Figma Screenshots */}
                  <div className="mockup-display">
                    <ProjectMockupArt projectId={project.id} />
                  </div>
                </div>

                {/* Sub Card Meta Details */}
                <div className="card-meta-info">
                  <span className="category-tag font-mono">{project.categoryTag}</span>
                  <h3 className="card-title font-heading" onClick={() => setSelectedProject(project)}>
                    {project.title}
                  </h3>
                  <p className="card-desc">{project.shortDesc}</p>

                  <div className="card-footer-bar">
                    <div className="tags-row font-mono">
                      {project.tags.map((t, idx) => (
                        <span key={idx} className="badge-tag-dark">{t}</span>
                      ))}
                    </div>

                    <button 
                      className="view-case-study-btn font-mono"
                      onClick={() => setSelectedProject(project)}
                    >
                      VIEW CASE STUDY
                      <ArrowUpRight size={12} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      <style>{`
        .work-section {
          padding: 7rem 0;
          background-color: var(--bg-dark);
          color: #FFFFFF;
        }

        .work-meta-header {
          margin-bottom: 1.5rem;
        }

        .meta-tag {
          font-size: 0.775rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--accent-orange);
        }

        .work-header-layout {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        .work-heading {
          font-family: var(--font-heading);
          font-size: clamp(2.8rem, 5.5vw, 4.8rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        .work-subtext {
          font-size: 1.15rem;
          color: var(--text-light-secondary);
          line-height: 1.5;
          max-width: 440px;
        }

        /* Filter Tabs */
        .filter-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 4rem;
        }

        .filter-btn {
          padding: 0.6rem 1.4rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-light-secondary);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all var(--transition-fast);
        }

        .filter-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
        }

        .filter-btn.active {
          background: var(--accent-orange);
          color: #FFFFFF;
          border-color: var(--accent-orange);
          box-shadow: var(--shadow-orange);
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3.5rem 2.5rem;
        }

        .project-card-wrapper {
          display: flex;
          flex-direction: column;
        }

        .project-card-frame {
          border-radius: var(--radius-xl);
          height: 440px;
          position: relative;
          padding: 1.75rem;
          cursor: pointer;
          overflow: hidden;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.25);
        }

        .project-card-frame:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.4);
        }

        .card-top-icon {
          display: flex;
          justify-content: flex-end;
          z-index: 10;
        }

        .icon-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          color: #111113;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          text-decoration: none;
          transition: transform var(--transition-fast), background var(--transition-fast);
          cursor: pointer;
        }

        .icon-circle:hover {
          transform: scale(1.12);
          background: #FFFFFF;
          color: #111113;
        }

        .mockup-display {
          height: 340px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
        }

        /* Card Meta Info */
        .card-meta-info {
          margin-top: 1.5rem;
        }

        .category-tag {
          font-size: 0.725rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--accent-orange);
          display: block;
          margin-bottom: 0.4rem;
        }

        .card-meta-info .card-title {
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #FFFFFF;
          margin-bottom: 0.4rem;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .card-meta-info .card-title:hover {
          color: var(--accent-orange);
        }

        .card-desc {
          font-size: 0.95rem;
          color: var(--text-light-secondary);
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }

        .card-footer-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .view-case-study-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.725rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #FFFFFF;
          background: none;
          border: none;
          cursor: pointer;
          transition: color var(--transition-fast);
        }

        .view-case-study-btn:hover {
          color: var(--accent-orange);
        }

        @media (max-width: 900px) {
          .work-header-layout {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-card-frame {
            height: 380px;
          }
        }
      `}</style>
    </section>
  );
}
