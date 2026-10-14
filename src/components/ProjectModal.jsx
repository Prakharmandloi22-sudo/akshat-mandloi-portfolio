import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Code2, Layers, Award } from 'lucide-react';
import '../styles/global.css';

export default function ProjectModal({ project, onClose }) {

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const caseStudy = project.fullCaseStudy || {};

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <motion.div 
          className="modal-content"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Modal Header */}
          <div className="modal-header">
            <div>
              <span className="modal-category font-mono">{project.categoryTag}</span>
              <h2 className="modal-title">{project.title}</h2>
              <p className="modal-subtitle">{caseStudy.subtitle || project.shortDesc}</p>
            </div>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={24} />
            </button>
          </div>

          {/* Banner Graphic Frame */}
          <div 
            className="modal-banner"
            style={{ 
              backgroundColor: project.themeColor, 
              color: project.textColor,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {project.id === 'swart-plastering' ? (
              <>
                <img 
                  src="./swart_plastering_hero.png" 
                  alt="Swart Plastering Hero" 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.7)'
                  }}
                />
                <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="banner-mockup-tag font-mono" style={{ background: 'rgba(0,0,0,0.6)', padding: '0.25rem 0.75rem', borderRadius: '4px', color: '#FFFFFF' }}>
                    <span className="dot" style={{ backgroundColor: '#F47A00' }}></span> {project.category} CASE STUDY
                  </div>
                  <h3 className="banner-visual-title" style={{ color: '#FFFFFF', textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>{project.title}</h3>
                  {project.metric && (
                    <div className="banner-metric-badge" style={{ backgroundColor: '#F47A00', color: '#FFFFFF' }}>
                      <Award size={14} />
                      <span>{project.metric}</span>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="banner-visual-box">
                <div className="banner-mockup-tag font-mono">
                  <span className="dot"></span> {project.category} CASE STUDY
                </div>
                <h3 className="banner-visual-title">{project.title}</h3>
                {project.metric && (
                  <div className="banner-metric-badge">
                    <Award size={14} />
                    <span>{project.metric}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Body Details */}
          <div className="modal-body">
            {/* Quick Links & Info Bar */}
            <div className="modal-info-bar">
              <div className="tags-group">
                {project.tags.map((tag, i) => (
                  <span key={i} className="badge-tag">{tag}</span>
                ))}
              </div>

              <div className="action-links">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-orange btn-sm"
                  >
                    {project.liveUrl.includes('figma.site') ? 'VIEW FIGMA SITE' : 'LIVE DEMO'} <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="modal-sections-grid">
              <div className="section-card">
                <h4 className="card-section-title text-orange">THE CHALLENGE</h4>
                <p className="card-section-text">{caseStudy.problem || project.shortDesc}</p>
              </div>

              <div className="section-card">
                <h4 className="card-section-title text-orange">THE SOLUTION</h4>
                <p className="card-section-text">{caseStudy.solution || caseStudy.overview}</p>
              </div>
            </div>

            {/* Key Features List */}
            {caseStudy.keyFeatures && (
              <div className="modal-features-section">
                <h4 className="modal-subheading">KEY FEATURES & IMPACT</h4>
                <div className="features-list">
                  {caseStudy.keyFeatures.map((feat, index) => (
                    <div key={index} className="feature-item">
                      <CheckCircle2 size={18} className="feature-icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            {caseStudy.techStack && (
              <div className="modal-tech-section">
                <h4 className="modal-subheading">TECHNOLOGY STACK</h4>
                <div className="tech-pills-list font-mono">
                  {caseStudy.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-pill-item">
                      <Code2 size={12} /> {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          overflow-y: auto;
        }

        .modal-content {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          width: 100%;
          max-width: 860px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
          position: relative;
          color: var(--text-dark-primary);
        }

        .modal-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding: 2rem 2.5rem 1.5rem;
        }

        .modal-category {
          font-size: 0.725rem;
          color: var(--accent-orange);
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .modal-title {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 800;
          line-height: 1.1;
          color: var(--text-dark-primary);
          margin: 0.2rem 0;
        }

        .modal-subtitle {
          font-size: 1rem;
          color: var(--text-dark-secondary);
        }

        .modal-close-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(17, 17, 19, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-dark-primary);
          transition: background var(--transition-fast);
        }

        .modal-close-btn:hover {
          background: rgba(17, 17, 19, 0.12);
        }

        .modal-banner {
          height: 220px;
          margin: 0 2.5rem;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          text-align: center;
          box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.15);
        }

        .banner-visual-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }

        .banner-mockup-tag {
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          opacity: 0.85;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .banner-mockup-tag .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
        }

        .banner-visual-title {
          font-family: var(--font-heading);
          font-size: 2.8rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .banner-metric-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(6px);
          padding: 0.4rem 0.9rem;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
        }

        .modal-body {
          padding: 2.5rem;
        }

        .modal-info-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-light);
        }

        .tags-group {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .action-links {
          display: flex;
          gap: 0.75rem;
        }

        .btn-sm {
          padding: 0.6rem 1.2rem;
          font-size: 0.775rem;
        }

        .modal-sections-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .section-card {
          background: var(--bg-light);
          padding: 1.5rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
        }

        .card-section-title {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          margin-bottom: 0.6rem;
        }

        .card-section-text {
          font-size: 0.925rem;
          color: var(--text-dark-secondary);
          line-height: 1.55;
        }

        .modal-subheading {
          font-family: var(--font-heading);
          font-size: 0.825rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--text-dark-primary);
          margin-bottom: 1rem;
        }

        .features-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
          margin-bottom: 2.5rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: var(--text-dark-secondary);
        }

        .feature-icon {
          color: #10B981;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .tech-pills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-pill-item {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--bg-light-secondary);
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-sm);
          font-size: 0.775rem;
          font-weight: 600;
          color: var(--text-dark-primary);
        }

        @media (max-width: 768px) {
          .modal-header, .modal-body {
            padding: 1.5rem;
          }
          .modal-banner {
            margin: 0 1.5rem;
            height: 160px;
          }
          .modal-sections-grid, .features-list {
            grid-template-columns: 1fr;
          }
          .modal-info-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </AnimatePresence>
  );
}
