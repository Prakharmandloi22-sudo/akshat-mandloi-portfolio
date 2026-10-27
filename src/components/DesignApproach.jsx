import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Compass, Cpu, Palette, Zap } from 'lucide-react';
import '../styles/global.css';

export default function DesignApproach() {
  const cardThemes = [
    {
      icon: Compass,
      color: '#2563EB',
      bg: '#EFF6FF',
      border: '#DBEAFE',
      tag: 'ARCHITECTURE'
    },
    {
      icon: Cpu,
      color: '#7C3AED',
      bg: '#F5F3FF',
      border: '#EDE9FE',
      tag: 'CODE FIDELITY'
    },
    {
      icon: Palette,
      color: '#D97706',
      bg: '#FFFBEB',
      border: '#FEF3C7',
      tag: 'DESIGN SYSTEM'
    },
    {
      icon: Zap,
      color: '#059669',
      bg: '#ECFDF5',
      border: '#D1FAE5',
      tag: 'PERFORMANCE'
    }
  ];

  const renderPrincipleGraphic = (index) => {
    if (index === 0) {
      // 01: Information Architecture & Workflow Flow
      return (
        <div className="principle-visual-box visual-structure">
          <div className="mini-search-row font-mono">
            <span className="search-icon">🔍</span>
            <span className="search-txt">Search collections & jewelry...</span>
            <span className="search-key">⌘K</span>
          </div>

          <div className="flow-nodes-row font-mono">
            <div className="flow-node active">
              <span className="node-indicator"></span>
              <span>Discovery</span>
            </div>
            <span className="flow-arrow">→</span>
            <div className="flow-node">
              <span className="node-indicator"></span>
              <span>Filter & Compare</span>
            </div>
            <span className="flow-arrow">→</span>
            <div className="flow-node success">
              <span className="node-indicator green"></span>
              <span>1-Click Checkout</span>
            </div>
          </div>

          <div className="ia-specs-row font-mono">
            <div className="ia-spec-tag">
              <span className="spec-dot"></span>
              <span>3-Step Max Depth</span>
            </div>
            <div className="ia-spec-tag">
              <span className="spec-dot"></span>
              <span>Zero-Friction IA</span>
            </div>
          </div>
        </div>
      );
    }

    if (index === 1) {
      // 02: Cross-Platform Precision (Figma to Flutter/React)
      return (
        <div className="principle-visual-box visual-fidelity">
          <div className="fidelity-header-row font-mono">
            <div className="fidelity-badge figma-pill">
              <span className="pill-dot">❖</span> Figma Token
            </div>
            <span className="sync-icon">⇄</span>
            <div className="fidelity-badge code-pill">
              <span className="pill-dot">⚡</span> Production Code
            </div>
          </div>

          <div className="code-snippet-card font-mono">
            <div className="code-line">
              <span className="token-kw">const</span> <span className="token-var">UIComponent</span> = styled.div`
            </div>
            <div className="code-line indent">
              <span className="token-prop">elevation</span>: <span className="token-val">$tokens.shadow[2]</span>;
            </div>
            <div className="code-line indent">
              <span className="token-prop">transition</span>: <span className="token-val">$tokens.easeSpring</span>;
            </div>
            <div className="code-line">`;</div>
          </div>

          <div className="platform-badges-row font-mono">
            <span className="platform-tag active">React.js</span>
            <span className="platform-tag">Flutter</span>
            <span className="platform-tag">Design Tokens</span>
          </div>
        </div>
      );
    }

    if (index === 2) {
      // 03: Confident Visual Systems (Typography & Color Tokens)
      return (
        <div className="principle-visual-box visual-systems">
          <div className="systems-specimen-row">
            <div className="type-mark-box">
              <span className="type-mark font-serif">Ag</span>
              <div className="type-label font-mono">
                <span className="t-head">Typographic Scale</span>
                <span className="t-sub">48px · 24px · 16px</span>
              </div>
            </div>

            <div className="swatches-palette">
              <span className="swatch-bubble c-dark" title="Obsidian #111113"></span>
              <span className="swatch-bubble c-beige" title="Editorial Beige #EAE6DF"></span>
              <span className="swatch-bubble c-sage" title="Sage Green #8A927B"></span>
              <span className="swatch-bubble c-teal" title="Teal #0F3B3E"></span>
            </div>
          </div>

          <div className="grid-bars-track font-mono">
            <div className="track-unit"><span className="bar-h h-8"></span><span>8px</span></div>
            <div className="track-unit"><span className="bar-h h-16"></span><span>16px</span></div>
            <div className="track-unit"><span className="bar-h h-24"></span><span>24px</span></div>
            <div className="track-unit active"><span className="bar-h h-32 active"></span><span>32px</span></div>
            <div className="track-unit"><span className="bar-h h-40"></span><span>40px</span></div>
          </div>
        </div>
      );
    }

    // 04: Performance & Scalability (Lighthouse & Fast Load)
    return (
      <div className="principle-visual-box visual-perf">
        <div className="perf-header-row font-mono">
          <div className="perf-circle-badge">
            <span className="perf-num font-heading">99</span>
            <span className="perf-tag">SCORE</span>
          </div>

          <div className="perf-stats-list">
            <div className="p-stat-item">
              <span className="stat-name">FCP Speed</span>
              <span className="stat-val font-heading text-emerald">0.38s</span>
            </div>
            <div className="p-stat-item">
              <span className="stat-name">Smoothness</span>
              <span className="stat-val font-heading text-emerald">60 FPS</span>
            </div>
            <div className="p-stat-item">
              <span className="stat-name">Shift (CLS)</span>
              <span className="stat-val font-heading text-emerald">0.00</span>
            </div>
          </div>
        </div>

        <div className="perf-pills-row font-mono">
          <span className="perf-pill">Modular Code</span>
          <span className="perf-pill">Tree-Shaken</span>
          <span className="perf-pill">Zero Bloat</span>
        </div>
      </div>
    );
  };

  return (
    <section id="approach" className="approach-section">
      <div className="container">
        {/* Dark Obsidian Stacking Card Matching Reference Images 2 & 3 */}
        <div className="approach-dark-card">
          {/* Top Monospace Header */}
          <div className="approach-card-top-bar font-mono">
            <span className="approach-mono-tag">(01) — APPROACH</span>
            <span className="approach-mono-meta font-mono">CORE PHILOSOPHY · 2026</span>
          </div>

          {/* Bold Uppercase Manifesto Block */}
          <div className="manifesto-block">
            <motion.h2 
              className="manifesto-heading font-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="m-line light">I DON'T JUST MAKE SCREENS LOOK GOOD.</span>
              <span className="m-line">I SOLVE REAL USER PROBLEMS.</span>
              <span className="m-line">INTUITIVE FLOWS. CLEAN NAVIGATION.</span>
              <span className="m-line">BUSINESS GOALS. PIXEL PERFECTION.</span>
              <span className="m-line orange">BUILT TO CONVERT.</span>
            </motion.h2>

            <motion.p 
              className="manifesto-subtext font-mono"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {portfolioData.personalInfo.approachSubtext}
            </motion.p>
          </div>

          {/* Principles Grid with Custom Graphics */}
          <div className="principles-grid">
            {portfolioData.designPrinciples.map((item, idx) => {
              const theme = cardThemes[idx % cardThemes.length];
              const IconComponent = theme.icon;

              return (
                <motion.div 
                  key={item.num}
                  className="principle-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  {/* Card Top: Number + Themed Icon Badge */}
                  <div className="principle-card-top">
                    <div className="num-group font-mono">
                      <span className="card-num">{item.num}</span>
                      <span className="card-theme-tag">{theme.tag}</span>
                    </div>

                    <div 
                      className="principle-icon-badge"
                      style={{ backgroundColor: theme.bg, color: theme.color, borderColor: theme.border }}
                    >
                      <IconComponent size={17} />
                    </div>
                  </div>

                  {/* Rich Interactive / Custom Graphic Component */}
                  {renderPrincipleGraphic(idx)}

                  {/* Card Title & Description */}
                  <div className="principle-text-block">
                    <h3 className="principle-card-title font-heading">{item.title}</h3>
                    <p className="principle-card-desc">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .approach-section {
          padding: 4rem 0 6rem;
          background-color: var(--bg-light);
        }

        .approach-dark-card {
          background-color: #111113;
          color: #FFFFFF;
          border-radius: 32px 32px 28px 28px;
          padding: 3.5rem 3.5rem 4rem;
          box-shadow: 0 -12px 36px rgba(0, 0, 0, 0.25), 0 24px 48px rgba(0, 0, 0, 0.16);
          border: 1px solid rgba(255, 255, 255, 0.08);
          position: sticky;
          top: 60px;
          margin-bottom: 4rem;
          transition: transform 0.3s ease;
        }

        .approach-card-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          margin-bottom: 2.5rem;
        }

        .approach-mono-tag {
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #FFFFFF;
        }

        .approach-mono-meta {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.5);
        }

        .manifesto-block {
          margin-bottom: 3.5rem;
        }

        .manifesto-heading {
          font-size: clamp(2rem, 4.2vw, 3.4rem);
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.02em;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          margin-bottom: 1.5rem;
        }

        .m-line {
          color: rgba(255, 255, 255, 0.38);
          transition: color var(--transition-fast);
        }

        .m-line.light {
          color: #FFFFFF;
        }

        .m-line.orange {
          color: var(--accent-orange);
        }

        .m-line:hover {
          color: #FFFFFF;
        }

        .manifesto-subtext {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          max-width: 620px;
          line-height: 1.6;
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.75rem;
        }

        .principle-card {
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          border: 1px solid rgba(17, 17, 19, 0.08);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .principle-card:hover {
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
          border-color: rgba(17, 17, 19, 0.16);
        }

        .principle-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .num-group {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .card-num {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-dark-primary);
        }

        .card-theme-tag {
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          color: var(--text-dark-muted);
          padding: 2px 6px;
          background: rgba(17, 17, 19, 0.04);
          border-radius: 4px;
        }

        .principle-icon-badge {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid;
          transition: transform 0.2s ease;
        }

        .principle-card:hover .principle-icon-badge {
          transform: scale(1.08);
        }

        /* Principle Visual Graphic Box */
        .principle-visual-box {
          background: #F8F7F4;
          border: 1px solid rgba(17, 17, 19, 0.06);
          border-radius: 12px;
          padding: 1rem;
          min-height: 125px;
          margin-bottom: 1.4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.75rem;
        }

        /* 01 Structure graphic */
        .mini-search-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #FFFFFF;
          border: 1px solid rgba(17, 17, 19, 0.08);
          padding: 0.4rem 0.65rem;
          border-radius: 6px;
          font-size: 0.675rem;
        }

        .mini-search-row .search-icon { font-size: 0.65rem; opacity: 0.6; }
        .mini-search-row .search-txt { flex: 1; color: #8E8E93; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .mini-search-row .search-key { font-size: 0.6rem; background: #EFEFEF; padding: 1px 4px; border-radius: 3px; color: #555; }

        .flow-nodes-row {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.65rem;
        }

        .flow-node {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: #FFFFFF;
          border: 1px solid rgba(17, 17, 19, 0.08);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          color: #333;
        }

        .flow-node.active { border-color: #2563EB; color: #2563EB; font-weight: 600; }
        .flow-node.success { border-color: #059669; color: #059669; font-weight: 600; }
        .flow-node .node-indicator { width: 5px; height: 5px; border-radius: 50%; background: #2563EB; }
        .flow-node .node-indicator.green { background: #059669; }
        .flow-arrow { color: #BBB; font-size: 0.7rem; }

        .ia-specs-row {
          display: flex;
          gap: 0.75rem;
          font-size: 0.625rem;
          color: #666;
        }

        .ia-spec-tag {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }

        .ia-spec-tag .spec-dot { width: 4px; height: 4px; border-radius: 50%; background: #2563EB; }

        /* 02 Fidelity graphic */
        .fidelity-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.65rem;
        }

        .fidelity-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.25rem 0.55rem;
          border-radius: 4px;
          font-weight: 600;
        }

        .figma-pill { background: #F5F3FF; color: #7C3AED; border: 1px solid #EDE9FE; }
        .code-pill { background: #EEF2FF; color: #4F46E5; border: 1px solid #E0E7FF; }
        .sync-icon { color: #7C3AED; font-weight: bold; }

        .code-snippet-card {
          background: #18181B;
          color: #E4E4E7;
          border-radius: 6px;
          padding: 0.45rem 0.65rem;
          font-size: 0.625rem;
          line-height: 1.4;
        }

        .code-snippet-card .token-kw { color: #F43F5E; }
        .code-snippet-card .token-var { color: #60A5FA; }
        .code-snippet-card .token-prop { color: #A78BFA; }
        .code-snippet-card .token-val { color: #34D399; }
        .code-snippet-card .indent { padding-left: 0.75rem; }

        .platform-badges-row {
          display: flex;
          gap: 0.4rem;
        }

        .platform-tag {
          font-size: 0.6rem;
          padding: 1px 6px;
          border-radius: 3px;
          background: #FFFFFF;
          border: 1px solid rgba(17, 17, 19, 0.08);
          color: #555;
        }

        .platform-tag.active {
          background: #7C3AED;
          color: #FFF;
          border-color: #7C3AED;
        }

        /* 03 Visual Systems graphic */
        .systems-specimen-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .type-mark-box {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .type-mark {
          font-size: 1.8rem;
          line-height: 1;
          color: #111113;
        }

        .type-label .t-head {
          display: block;
          font-size: 0.7rem;
          font-weight: 700;
          color: #111113;
        }

        .type-label .t-sub {
          font-size: 0.58rem;
          color: #8E8E93;
        }

        .swatches-palette {
          display: flex;
          gap: 5px;
        }

        .swatch-bubble {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        .swatch-bubble.c-dark { background: #111113; }
        .swatch-bubble.c-beige { background: #EAE6DF; }
        .swatch-bubble.c-sage { background: #8A927B; }
        .swatch-bubble.c-teal { background: #0F3B3E; }

        .grid-bars-track {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          background: #FFFFFF;
          padding: 0.4rem 0.65rem;
          border-radius: 6px;
          border: 1px solid rgba(17, 17, 19, 0.08);
          height: 48px;
        }

        .track-unit {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          font-size: 0.55rem;
          color: #8E8E93;
        }

        .track-unit.active { color: #D97706; font-weight: 700; }

        .bar-h {
          width: 14px;
          background: #E5E5EA;
          border-radius: 2px;
        }

        .bar-h.h-8 { height: 6px; }
        .bar-h.h-16 { height: 12px; }
        .bar-h.h-24 { height: 18px; }
        .bar-h.h-32.active { height: 24px; background: #D97706; }
        .bar-h.h-40 { height: 30px; }

        /* 04 Performance graphic */
        .perf-header-row {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .perf-circle-badge {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #ECFDF5;
          border: 2px solid #10B981;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .perf-circle-badge .perf-num {
          font-size: 1.25rem;
          font-weight: 800;
          line-height: 1;
          color: #059669;
        }

        .perf-circle-badge .perf-tag {
          font-size: 0.45rem;
          font-weight: 700;
          color: #059669;
          letter-spacing: 0.05em;
        }

        .perf-stats-list {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }

        .p-stat-item {
          display: flex;
          flex-direction: column;
        }

        .p-stat-item .stat-name {
          font-size: 0.58rem;
          color: #8E8E93;
        }

        .p-stat-item .stat-val {
          font-size: 0.8rem;
          font-weight: 700;
        }

        .text-emerald { color: #059669; }

        .perf-pills-row {
          display: flex;
          gap: 0.4rem;
        }

        .perf-pill {
          font-size: 0.6rem;
          padding: 1px 6px;
          border-radius: 3px;
          background: #FFFFFF;
          border: 1px solid rgba(17, 17, 19, 0.08);
          color: #059669;
          font-weight: 600;
        }

        /* Typography & Descriptions */
        .principle-text-block {
          margin-top: 0.25rem;
        }

        .principle-card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #111113 !important;
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }

        .principle-card-desc {
          font-size: 0.925rem;
          color: var(--text-dark-secondary);
          line-height: 1.55;
        }

        @media (max-width: 900px) {
          .approach-layout {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .principles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
