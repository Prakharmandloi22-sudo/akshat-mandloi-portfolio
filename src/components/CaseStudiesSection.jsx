import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import ProjectMockupArt from './ProjectMockupArt';
import '../styles/global.css';

export default function CaseStudiesSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  // 5 featured case study projects matching the exact color themes from the user's reference
  const caseStudies = [
    {
      num: '01',
      caseLabel: '01 / CASE',
      year: '(2026)',
      id: 'ai-diabetes-pod',
      title: 'AI-POWERED DIABETES POD',
      subtitle: 'Healthcare AI · Tablet & Mobile Platform & UX Audit',
      themeBg: '#7A8B58', // Sage / Olive green from Reference Image 4
      textColor: '#111113',
      badgeBg: 'rgba(17, 17, 19, 0.08)',
      tagline: 'A tablet-first patient workflow connecting continuous glucose monitoring, predictive AI alerts and everyday care routines.',
      metric: '99.2% GLUCOSE ACCURACY',
      tags: ['HEALTHCARE AI', 'TABLET FIRST', 'DASHBOARD SYSTEM', 'MOBILE COMPANION'],
      project: portfolioData.projects.find(p => p.id === 'ai-diabetes-pod') || portfolioData.projects[0]
    },
    {
      num: '02',
      caseLabel: '02 / CASE',
      year: '(2026)',
      id: 'easy-waste',
      title: 'EASY WASTE MANAGEMENT',
      subtitle: 'Civic Service · Digital Booking Platform & Route Dispatch',
      themeBg: '#6E8E9E', // Slate Blue from Reference Image 4 & 5
      textColor: '#111113',
      badgeBg: 'rgba(17, 17, 19, 0.08)',
      tagline: 'Making residential and commercial waste collection visible, predictable, and frictionless to book across metro areas.',
      metric: '+140% REGISTRATION RATE',
      tags: ['CIVIC SERVICE', 'MOBILE FIRST', 'ZIP-CODE DISPATCH', 'BOOKING FLOW'],
      project: portfolioData.projects.find(p => p.id === 'easy-waste') || portfolioData.projects[1]
    },
    {
      num: '03',
      caseLabel: '03 / CASE',
      year: '(2025)',
      id: 'seedroute',
      title: 'SEEDROUTE B2B SAAS',
      subtitle: 'Intelligent Field Operations & Regional Logistics',
      themeBg: '#D0C066', // Warm Mustard / Ochre Yellow from Reference Image 5
      textColor: '#111113',
      badgeBg: 'rgba(17, 17, 19, 0.08)',
      tagline: 'Distribution intelligence for fast-moving agricultural field teams, replacing fragmented spreadsheets with real-time route optimization.',
      metric: '30% ROUTE EFFICIENCY GAIN',
      tags: ['B2B SAAS', 'LOGISTICS DASHBOARD', 'HEATMAPS', 'REAL-TIME TRACKING'],
      project: portfolioData.projects.find(p => p.id === 'seedroute') || portfolioData.projects[2]
    },
    {
      num: '04',
      caseLabel: '04 / CASE',
      year: '(2025)',
      id: 'swart-plastering',
      title: 'SWART PLASTERING',
      subtitle: '100 Years of Craftsmanship · High-Contrast Service Website',
      themeBg: '#E06D50', // Terracotta / Coral
      textColor: '#FFFFFF',
      badgeBg: 'rgba(255, 255, 255, 0.15)',
      tagline: 'A responsive service website and UX case study converting residential, commercial & heritage restoration consultations across Adelaide.',
      metric: '100+ YRS HERITAGE',
      tags: ['SERVICE WEBSITE', 'HERITAGE TRADE', 'QUOTE FUNNEL', 'TYPOGRAPHIC HIERARCHY'],
      project: portfolioData.projects.find(p => p.id === 'swart-plastering') || portfolioData.projects[3]
    },
    {
      num: '05',
      caseLabel: '05 / CASE',
      year: '(2024)',
      id: 'sheque',
      title: 'SHEQU LUXURY JEWELRY',
      subtitle: 'High-Conversion Editorial E-Commerce & Interactive 3D',
      themeBg: '#EAE6DF', // Editorial Beige / Sand
      textColor: '#111113',
      badgeBg: 'rgba(17, 17, 19, 0.08)',
      tagline: 'A minimalist, typography-led digital flagship celebrating bespoke handcrafted jewelry with subsecond filtering and fluid cart discovery.',
      metric: '96% TASK SUCCESS',
      tags: ['E-COMMERCE', 'EDITORIAL UX', 'LUXURY BRANDING', 'RESPONSIVE WEB'],
      project: portfolioData.projects.find(p => p.id === 'sheque') || portfolioData.projects[0]
    }
  ];

  const scrollToCard = (index) => {
    const cardEl = document.getElementById(`case-card-${index}`);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="case-studies" className="case-studies-section">
      <div className="container">
        {/* Section Header */}
        <div className="cs-top-bar font-mono">
          <span className="cs-meta">CASE STUDIES</span>
          <span className="cs-stack-hint">SCROLL TO STACK CARDS ↕</span>
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
            Selected product stories designed around real people, business outcomes, and tactile digital craftsmanship.
          </p>
        </div>

        {/* =========================================================================
            STACKING CARDS CONTAINER (OVERLAPPING / STICKY DECK)
            As the user scrolls down, each card slides up and stacks over the previous one,
            leaving the top header peeking in a deck layout.
           ========================================================================= */}
        <div className="stacking-cards-container">
          {caseStudies.map((item, idx) => (
            <div 
              key={item.id}
              id={`case-card-${idx}`}
              className="stacking-card-item"
              style={{
                '--card-index': idx,
                backgroundColor: item.themeBg,
                color: item.textColor
              }}
            >
              {/* Card Top Metadata Header Bar */}
              <div className="stack-card-header font-mono">
                <div className="header-case-label">
                  <span className="case-num-pill">{item.caseLabel}</span>
                  <span className="case-metric-pill font-mono">{item.metric}</span>
                </div>
              </div>

              {/* Card Body Grid */}
              <div className="stack-card-body">
                {/* Left Column: Typography, Narrative & View CTA */}
                <div className="stack-card-content">
                  <div className="stack-title-group">
                    <h3 className="stack-card-title font-heading">
                      {item.title}
                    </h3>
                    <p className="stack-card-subtitle font-serif">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="stack-card-desc">
                    {item.tagline}
                  </p>

                  {/* Tags Row */}
                  <div className="stack-tags-row font-mono">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="stack-tag-pill" style={{ backgroundColor: item.badgeBg }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions Row */}
                  <div className="stack-action-row">
                    <button 
                      className="stack-view-btn font-mono"
                      onClick={() => setSelectedProject(item.project)}
                    >
                      VIEW CASE STUDY
                      <ArrowUpRight size={14} />
                    </button>

                    {item.project.liveUrl && (
                      <a 
                        href={item.project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="stack-live-link font-mono"
                        onClick={(e) => e.stopPropagation()}
                      >
                        LIVE DEMO ↗
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: High-Fidelity Custom Visual Mockup Artwork */}
                <div 
                  className="stack-card-visual"
                  onClick={() => setSelectedProject(item.project)}
                  title="Click to view full case study"
                >
                  <ProjectMockupArt projectId={item.id} />
                </div>
              </div>

              {/* Bottom Card Footer Strip */}
              <div className="stack-card-footer font-mono">
                <span className="footer-lead">EXPLORE CHAPTER {item.num} OF 05</span>
                <span className="footer-action" onClick={() => setSelectedProject(item.project)}>
                  DEEP DIVE INTO RESEARCH & SPECS ↗
                </span>
              </div>
            </div>
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
          padding: 6.5rem 0 10rem;
          background-color: var(--bg-light);
          border-top: 1px solid var(--border-light);
          position: relative;
        }

        .cs-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
        }

        .cs-meta {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--text-dark-muted);
        }

        .cs-stack-hint {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--accent-orange);
          background: rgba(239, 68, 35, 0.1);
          padding: 0.3rem 0.75rem;
          border-radius: var(--radius-full);
        }

        .cs-header-layout {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 3rem;
          margin-bottom: 4.5rem;
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

        /* =========================================================================
           STACKING CARDS CONTAINER (OVERLAPPING / STICKY DECK)
           Each card has position: sticky and offsets smoothly so that as you scroll,
           each card stacks over the previous one, leaving a visible tab at the top.
           ========================================================================= */
        .stacking-cards-container {
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
        }

        .stacking-card-item {
          position: sticky;
          /* Offsets each card slightly so top labels stay visible in a stacked deck */
          top: calc(75px + var(--card-index) * 36px);
          border-radius: 32px 32px 28px 28px;
          padding: 2.5rem 3rem 2rem;
          min-height: 600px;
          margin-bottom: 6rem;
          box-shadow: 0 -12px 36px rgba(0, 0, 0, 0.14), 0 20px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(17, 17, 19, 0.12);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
          overflow: hidden;
        }

        .stacking-card-item:hover {
          box-shadow: 0 -16px 44px rgba(0, 0, 0, 0.2), 0 24px 48px rgba(0, 0, 0, 0.12);
        }

        /* Card Top Metadata Header Bar */
        .stack-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(17, 17, 19, 0.12);
          margin-bottom: 2rem;
        }

        .header-case-label {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .case-num-pill {
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.1em;
        }

        .case-metric-pill {
          font-size: 0.7rem;
          font-weight: 700;
          background: rgba(17, 17, 19, 0.1);
          padding: 0.25rem 0.65rem;
          border-radius: var(--radius-full);
          letter-spacing: 0.05em;
        }

        .header-case-year {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          opacity: 0.8;
        }

        /* Card Body Grid */
        .stack-card-body {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 3.5rem;
          align-items: center;
          flex: 1;
          margin-bottom: 2rem;
        }

        .stack-card-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .stack-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .stack-card-title {
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1.05;
        }

        .stack-card-subtitle {
          font-size: clamp(1.15rem, 1.8vw, 1.45rem);
          font-style: italic;
          font-weight: 400;
          line-height: 1.3;
          opacity: 0.9;
        }

        .stack-card-desc {
          font-size: 1rem;
          line-height: 1.6;
          opacity: 0.92;
          max-width: 520px;
        }

        .stack-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .stack-tag-pill {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
          border: 1px solid rgba(17, 17, 19, 0.08);
        }

        /* Action Buttons */
        .stack-action-row {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-top: 0.5rem;
        }

        .stack-view-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #111113;
          color: #FFFFFF;
          border: none;
          padding: 0.85rem 1.75rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          cursor: pointer;
          transition: all var(--transition-fast);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
        }

        .stack-view-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.25);
          background: #000000;
        }

        .stack-live-link {
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: inherit;
          text-decoration: underline;
          text-underline-offset: 4px;
          cursor: pointer;
          opacity: 0.85;
          transition: opacity var(--transition-fast);
        }

        .stack-live-link:hover {
          opacity: 1;
        }

        /* Right Visual Area */
        .stack-card-visual {
          width: 100%;
          min-height: 380px;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
          border: 1px solid rgba(17, 17, 19, 0.1);
          cursor: pointer;
          transition: transform var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(8px);
        }

        .stack-card-visual:hover {
          transform: scale(1.02);
        }

        /* Bottom Footer Strip */
        .stack-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(17, 17, 19, 0.1);
          font-size: 0.72rem;
          font-weight: 700;
          opacity: 0.8;
        }

        .footer-action {
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .footer-action:hover {
          opacity: 1;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .stack-card-body {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .stacking-card-item {
            padding: 2rem 1.75rem;
            min-height: auto;
            margin-bottom: 4rem;
          }

          .stack-card-visual {
            min-height: 280px;
          }
        }

        @media (max-width: 768px) {
          .cs-header-layout {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }

          .stack-card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .stack-title-group {
            gap: 0.35rem;
          }

          .stack-action-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .stack-card-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
}
