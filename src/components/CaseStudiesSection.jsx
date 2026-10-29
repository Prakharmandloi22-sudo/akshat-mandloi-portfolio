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
    <section id="work" className="case-studies-section">
      <div id="case-studies"></div>
      <div className="container">
        {/* Section Header */}
        <div className="cs-top-bar font-mono">
          <span className="cs-meta">04 / CASE STUDIES</span>
          <span className="cs-stack-hint desktop-only">SCROLL TO STACK CARDS ↕</span>
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

        {/* Quick Project Jump Tabs (Visible on both mobile and desktop) */}
        <div className="cs-quick-nav font-mono">
          <span className="cs-nav-label">JUMP TO:</span>
          <div className="cs-nav-pills-scroll">
            {caseStudies.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                className="cs-nav-pill"
                onClick={() => scrollToCard(idx)}
              >
                <span className="pill-dot" style={{ backgroundColor: item.themeBg }}></span>
                <span className="pill-num">{item.num}</span>
                <span className="pill-name">{item.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* =========================================================================
            STACKING CARDS CONTAINER
            - Laptop/Desktop: Adaptive sticky stacking deck with responsive height
            - Mobile: Clean, natural flow with zero clipping or overlapping bugs
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
                      type="button"
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
          margin-bottom: 2rem;
        }

        .cs-heading {
          font-size: clamp(2.4rem, 5vw, 4.4rem);
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

        /* Quick Project Jump Navigation Bar */
        .cs-quick-nav {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 3.5rem;
          padding: 0.75rem 0;
        }

        .cs-nav-label {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: var(--text-dark-muted);
          white-space: nowrap;
        }

        .cs-nav-pills-scroll {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          padding: 4px 2px;
        }
        .cs-nav-pills-scroll::-webkit-scrollbar {
          display: none;
        }

        .cs-nav-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-full);
          padding: 0.45rem 0.9rem;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--text-dark-primary);
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }

        .cs-nav-pill:hover {
          border-color: var(--accent-orange);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .pill-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .pill-num {
          color: var(--accent-orange);
          font-weight: 800;
        }

        .pill-name {
          color: var(--text-dark-primary);
        }

        /* =========================================================================
           LAPTOP & DESKTOP STYLES (min-width: 821px)
           Controlled sticky stacking that never extends below standard laptop viewports
           ========================================================================= */
        @media (min-width: 821px) {
          .stacking-cards-container {
            position: relative;
            padding-bottom: 4rem;
          }

          .stacking-card-item {
            position: sticky;
            top: calc(85px + var(--card-index) * 16px);
            border-radius: 30px;
            padding: 2.25rem 2.75rem 1.75rem;
            height: min(540px, calc(100vh - 150px));
            min-height: 470px;
            max-height: 580px;
            margin-bottom: 25vh;
            box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.12), 0 20px 40px rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(17, 17, 19, 0.12);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: box-shadow 0.3s ease;
            overflow: hidden;
          }

          .stacking-card-item:last-child {
            margin-bottom: 2rem;
          }

          .stack-card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 1.25rem;
            border-bottom: 1px solid rgba(17, 17, 19, 0.12);
            margin-bottom: 1.25rem;
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

          .stack-card-body {
            display: grid;
            grid-template-columns: 1.15fr 1fr;
            gap: 2.5rem;
            align-items: center;
            flex: 1;
            min-height: 0;
            margin-bottom: 1rem;
          }

          .stack-card-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
            height: 100%;
          }

          .stack-title-group {
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
          }

          .stack-card-title {
            font-size: clamp(2rem, 3.2vw, 3rem);
            font-weight: 900;
            letter-spacing: -0.02em;
            line-height: 1.05;
          }

          .stack-card-subtitle {
            font-size: clamp(1rem, 1.4vw, 1.25rem);
            font-style: italic;
            font-weight: 400;
            opacity: 0.9;
          }

          .stack-card-desc {
            font-size: 0.92rem;
            line-height: 1.5;
            opacity: 0.92;
            max-width: 500px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .stack-tags-row {
            display: flex;
            flex-wrap: wrap;
            gap: 0.45rem;
          }

          .stack-tag-pill {
            font-size: 0.65rem;
            font-weight: 700;
            letter-spacing: 0.06em;
            padding: 0.3rem 0.65rem;
            border-radius: var(--radius-full);
            border: 1px solid rgba(17, 17, 19, 0.08);
          }

          .stack-action-row {
            display: flex;
            align-items: center;
            gap: 1.25rem;
            margin-top: 0.35rem;
          }

          .stack-view-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: #111113;
            color: #FFFFFF;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: var(--radius-full);
            font-size: 0.78rem;
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
            font-size: 0.75rem;
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

          .stack-card-visual {
            width: 100%;
            height: 100%;
            max-height: 350px;
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

          .stack-card-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: 1rem;
            border-top: 1px solid rgba(17, 17, 19, 0.1);
            font-size: 0.7rem;
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
        }

        /* =========================================================================
           MOBILE & TABLET STYLES (max-width: 820px)
           Natural vertical card flow: ZERO overlapping bug, full accessibility,
           proper visual hierarchy with device mockups prominently displayed
           ========================================================================= */
        @media (max-width: 820px) {
          .case-studies-section {
            padding: 4rem 0 6rem;
          }

          .desktop-only {
            display: none !important;
          }

          .cs-header-layout {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            margin-bottom: 1.5rem;
          }

          .cs-heading {
            font-size: clamp(2rem, 8vw, 2.8rem);
          }

          .cs-quick-nav {
            margin-bottom: 2rem;
            padding: 0.25rem 0;
          }

          .stacking-cards-container {
            display: flex;
            flex-direction: column;
            gap: 2.25rem;
          }

          .stacking-card-item {
            position: relative !important;
            top: auto !important;
            min-height: auto !important;
            height: auto !important;
            margin-bottom: 0 !important;
            border-radius: 24px;
            padding: 1.75rem 1.25rem 1.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(17, 17, 19, 0.1);
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            scroll-margin-top: 85px;
            overflow: hidden;
          }

          .stack-card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(17, 17, 19, 0.1);
          }

          .header-case-label {
            display: flex;
            align-items: center;
            gap: 0.6rem;
          }

          .case-num-pill {
            font-size: 0.78rem;
            font-weight: 800;
            letter-spacing: 0.08em;
          }

          .case-metric-pill {
            font-size: 0.65rem;
            font-weight: 700;
            background: rgba(17, 17, 19, 0.1);
            padding: 0.2rem 0.5rem;
            border-radius: var(--radius-full);
          }

          .header-case-year {
            font-size: 0.75rem;
            font-weight: 700;
            opacity: 0.8;
          }

          .stack-card-body {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
          }

          .stack-card-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            order: 1;
          }

          .stack-title-group {
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
          }

          .stack-card-title {
            font-size: 1.65rem;
            font-weight: 900;
            line-height: 1.1;
            letter-spacing: -0.02em;
          }

          .stack-card-subtitle {
            font-size: 0.95rem;
            font-style: italic;
            opacity: 0.9;
            line-height: 1.35;
          }

          /* Place visual mockup right after the title on mobile for maximum engagement */
          .stack-card-visual {
            width: 100%;
            height: 230px;
            min-height: 200px;
            border-radius: 16px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
            order: 2;
            cursor: pointer;
          }

          .stack-card-desc {
            font-size: 0.88rem;
            line-height: 1.55;
            opacity: 0.92;
            order: 3;
          }

          .stack-tags-row {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
            order: 4;
          }

          .stack-tag-pill {
            font-size: 0.62rem;
            font-weight: 700;
            padding: 0.25rem 0.6rem;
            border-radius: var(--radius-full);
          }

          .stack-action-row {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-top: 0.35rem;
            order: 5;
          }

          .stack-view-btn {
            flex: 1;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            background: #111113;
            color: #FFFFFF;
            border: none;
            padding: 0.85rem 1.25rem;
            border-radius: var(--radius-full);
            font-size: 0.78rem;
            font-weight: 800;
            letter-spacing: 0.06em;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          }

          .stack-live-link {
            padding: 0.5rem 0.75rem;
            font-size: 0.75rem;
            font-weight: 800;
            color: inherit;
            text-decoration: underline;
            white-space: nowrap;
          }

          .stack-card-footer {
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
            padding-top: 1rem;
            border-top: 1px solid rgba(17, 17, 19, 0.1);
            font-size: 0.68rem;
            opacity: 0.8;
          }

          .footer-action {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      `}</style>
    </section>
  );
}
