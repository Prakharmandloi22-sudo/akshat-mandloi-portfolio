import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  ChevronUp, 
  ChevronDown, 
  Layout, 
  Monitor, 
  Smartphone, 
  Layers, 
  Sliders, 
  Play, 
  Pause, 
  Maximize2, 
  Sparkles,
  Grid,
  CheckCircle2,
  SlidersHorizontal,
  Compass,
  Zap,
  Code
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

export default function ServicesAndToolkit() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = down, -1 = up
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [viewMode, setViewMode] = useState('slider'); // 'slider' | 'grid'
  const [hoveredSkill, setHoveredSkill] = useState('USER FLOW');
  const sliderRef = useRef(null);
  const lastScrollTime = useRef(0);

  const services = portfolioData.servicesList;
  const total = services.length;

  // Core skills array matching Reference Image 1 & 2
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

  // Tools array matching Reference Image 2
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

  // Metadata & theme configurations for all 8 capabilities
  const serviceThemes = [
    {
      num: '01',
      title: 'UI/UX Design',
      category: 'HUMAN INTERACTION',
      summary: 'Crafting intuitive user workflows, interaction models, and frictionless digital journeys.',
      icon: Layout,
      color: '#EF4423',
      bgLight: '#FFF5F3',
      borderColor: 'rgba(239, 68, 35, 0.25)',
      specs: ['User Flow Architecture', 'Low-to-High Fidelity', 'WCAG AAA Accessibility']
    },
    {
      num: '02',
      title: 'Web Design',
      category: 'EDITORIAL & WEB SYSTEMS',
      summary: 'High-conversion, editorial web experiences built with typographic rigor and fluid layout.',
      icon: Monitor,
      color: '#2563EB',
      bgLight: '#EFF6FF',
      borderColor: 'rgba(37, 99, 235, 0.25)',
      specs: ['Fluid Breakpoint Grids', '1440px / 4K Scalable', 'Performance-First Architecture']
    },
    {
      num: '03',
      title: 'Mobile UI',
      category: 'TOUCH-FIRST ARCHITECTURE',
      summary: 'Native-feel iOS and Android interfaces optimized for thumb-zone reachability and haptics.',
      icon: Smartphone,
      color: '#7C3AED',
      bgLight: '#F5F3FF',
      borderColor: 'rgba(124, 58, 237, 0.25)',
      specs: ['Thumb-Zone Ergonomics', 'Dynamic Island & Notch Ready', 'Micro-Gestures & Haptics']
    },
    {
      num: '04',
      title: 'Design Systems',
      category: 'ATOMIC TOKENS & SCALE',
      summary: 'Scalable component libraries, semantic token systems, and seamless Figma-to-code syncing.',
      icon: Layers,
      color: '#059669',
      bgLight: '#ECFDF5',
      borderColor: 'rgba(5, 150, 105, 0.25)',
      specs: ['Figma Variables & Tokens', 'Component State Matrices', 'Atomic Documentation']
    },
    {
      num: '05',
      title: 'Wireframes',
      category: 'BLUEPRINT & SKELETONS',
      summary: 'Architectural structural blueprints that validate content hierarchy before visual styling.',
      icon: Sliders,
      color: '#D97706',
      bgLight: '#FFFBEB',
      borderColor: 'rgba(217, 119, 6, 0.25)',
      specs: ['Structural Content Mapping', 'Zero-Distraction Layout', 'Calibrated Grid Alignments']
    },
    {
      num: '06',
      title: 'Prototyping',
      category: 'DYNAMIC MOTION & PHYSICS',
      summary: 'Interactive micro-interactions, clickable prototypes, and high-fidelity physics transitions.',
      icon: Play,
      color: '#DB2777',
      bgLight: '#FDF2F8',
      borderColor: 'rgba(219, 39, 119, 0.25)',
      specs: ['Spring-Based Physics (60 FPS)', 'Cubic-Bezier Easing Paths', 'Clickable Flow Validation']
    },
    {
      num: '07',
      title: 'Responsive Design',
      category: 'FLUID MULTI-VIEWPORT',
      summary: 'Seamless adaptation across mobile, tablet, desktop, and ultra-wide display environments.',
      icon: Maximize2,
      color: '#0891B2',
      bgLight: '#ECFEFF',
      borderColor: 'rgba(8, 145, 178, 0.25)',
      specs: ['Adaptive Multi-Device Breakpoints', 'Zero Horizontal Overflow', 'Fluid Clamp Typography']
    },
    {
      num: '08',
      title: 'AI-Assisted Design',
      category: 'INTELLIGENT EXPLORATION',
      summary: 'Leveraging cutting-edge AI models for rapid concept exploration, asset synthesis, and speed.',
      icon: Sparkles,
      color: '#9333EA',
      bgLight: '#FAF5FF',
      borderColor: 'rgba(147, 51, 234, 0.25)',
      specs: ['4x Concept Iteration Speed', 'Prompt-Engineered Layouts', 'Human-Curated Polish']
    }
  ];

  const currentTheme = serviceThemes[activeIndex];

  // Up & Down navigation handlers
  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const handleSelectIndex = (idx) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  // Mouse wheel up/down scroll handler with debouncing
  const handleWheel = (e) => {
    // Only capture wheel inside the interactive slider card container
    const now = Date.now();
    if (now - lastScrollTime.current < 450) return;

    if (Math.abs(e.deltaY) > 25) {
      lastScrollTime.current = now;
      if (e.deltaY > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    }
  };

  // Optional auto-play timer
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlay, activeIndex]);

  // Framer Motion slide variants (Up / Down)
  const slideVariants = {
    enter: (dir) => ({
      y: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        y: { type: 'spring', stiffness: 320, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir) => ({
      y: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
      transition: {
        y: { type: 'spring', stiffness: 320, damping: 30 },
        opacity: { duration: 0.25 }
      }
    })
  };

  // Render proper high-fidelity visual graphic for each of the 8 services
  const renderCardGraphic = (index) => {
    switch (index) {
      case 0:
        // 01: UI/UX Design (Interactive Artboard + Figma Cursor + Flow Nodes)
        return (
          <div className="card-graphic-canvas graphic-uiux">
            <div className="canvas-header-bar font-mono">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="canvas-title">Artboard_1440x900</span>
              <span className="canvas-badge font-mono">AUTO-LAYOUT</span>
            </div>

            <div className="canvas-body">
              {/* Wire-to-Hifi interactive mockup box */}
              <div className="uiux-mockup-frame">
                <div className="mockup-row-top">
                  <div className="avatar-chip"></div>
                  <div className="skeleton-bar w-40"></div>
                  <span className="status-pill green">ACTIVE</span>
                </div>

                <div className="skeleton-block h-36"></div>

                <div className="mockup-action-row">
                  <div className="mockup-btn primary font-mono">Primary Action</div>
                  <div className="mockup-btn secondary font-mono">Secondary</div>
                </div>

                {/* Floating Designer Cursor */}
                <motion.div 
                  className="floating-figma-cursor"
                  animate={{ x: [0, 20, 8, 0], y: [0, -10, 15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                    <path d="M0 0L6 14L8.5 8.5L14 6L0 0Z" fill="#EF4423" stroke="#FFFFFF" strokeWidth="1.5" />
                  </svg>
                  <span className="cursor-label font-mono">Akshat · Lead</span>
                </motion.div>
              </div>

              {/* Specs & Accessibility Tags */}
              <div className="graphic-spec-footer font-mono">
                <span className="spec-chip">WCAG AAA (7.2:1)</span>
                <span className="spec-chip">4px Spacing Grid</span>
                <span className="spec-chip highlight">Figma Token Synced</span>
              </div>
            </div>
          </div>
        );

      case 1:
        // 02: Web Design (Browser Chrome + Responsive Layout Grid)
        return (
          <div className="card-graphic-canvas graphic-web">
            <div className="browser-chrome-bar font-mono">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="browser-url-pill">
                <span className="url-lock">🔒</span>
                <span className="url-text">akshatmandloi.com/work</span>
              </div>
              <span className="browser-meta">100% RESPONSIVE</span>
            </div>

            <div className="browser-content-area">
              <div className="mini-web-nav">
                <span className="brand-logo font-mono">AM.STUDIO</span>
                <div className="nav-links">
                  <span>Work</span>
                  <span>About</span>
                  <span className="nav-cta font-mono">Contact ↗</span>
                </div>
              </div>

              <div className="mini-web-hero">
                <div className="hero-text-col">
                  <span className="mini-tag font-mono">FEATURED SHOWCASE</span>
                  <div className="hero-headline font-heading">Digital products shaped for people.</div>
                  <div className="hero-p font-mono">Precision systems & interfaces.</div>
                </div>
                <div className="hero-visual-col">
                  <div className="visual-gem-box">
                    <span className="gem-icon">✦</span>
                    <span className="gem-text font-mono">V2.4</span>
                  </div>
                </div>
              </div>

              <div className="web-spec-footer font-mono">
                <span className="spec-chip">Semantic HTML5</span>
                <span className="spec-chip">Fluid Clamp Scale</span>
                <span className="spec-chip highlight">99+ Lighthouse</span>
              </div>
            </div>
          </div>
        );

      case 2:
        // 03: Mobile UI (Smartphone Bezel + Touch Zone ergonomics + Status bar)
        return (
          <div className="card-graphic-canvas graphic-mobile">
            <div className="phone-screen-container">
              {/* Dynamic Island Header */}
              <div className="phone-top-island">
                <span className="time font-mono">9:41</span>
                <div className="island-pill">
                  <span className="island-dot"></span>
                </div>
                <span className="battery-icon font-mono">5G 100%</span>
              </div>

              {/* App Screen Body */}
              <div className="phone-app-body font-mono">
                <div className="mobile-search-pill">
                  <span>🔍 Explore collections...</span>
                  <span className="search-filter">⌘</span>
                </div>

                <div className="mobile-product-card">
                  <div className="product-art-preview">
                    <span className="art-tag">MOBILE FIRST</span>
                  </div>
                  <div className="product-meta-row">
                    <span className="p-title">Minimalist Card</span>
                    <span className="p-price">$380</span>
                  </div>
                </div>

                {/* Floating Bottom Nav */}
                <div className="mobile-bottom-dock">
                  <span className="dock-item active">●</span>
                  <span className="dock-item">■</span>
                  <span className="dock-item">▲</span>
                </div>
              </div>

              <div className="mobile-spec-row font-mono">
                <span className="spec-chip">Thumb-Zone Ergonomics</span>
                <span className="spec-chip highlight">Haptic Physics</span>
              </div>
            </div>
          </div>
        );

      case 3:
        // 04: Design Systems (Token Swatches + Typographic Scale + Components)
        return (
          <div className="card-graphic-canvas graphic-tokens">
            <div className="tokens-header font-mono">
              <span className="t-title">FIGMA DESIGN TOKENS MATRIX</span>
              <span className="t-status text-emerald">● SYNCED</span>
            </div>

            <div className="token-swatches-grid">
              <div className="token-item">
                <span className="swatch-color" style={{ background: '#111113' }}></span>
                <div className="token-labels font-mono">
                  <span className="t-name">Obsidian</span>
                  <span className="t-hex">#111113</span>
                </div>
              </div>
              <div className="token-item">
                <span className="swatch-color" style={{ background: '#EF4423' }}></span>
                <div className="token-labels font-mono">
                  <span className="t-name">Tangerine</span>
                  <span className="t-hex">#EF4423</span>
                </div>
              </div>
              <div className="token-item">
                <span className="swatch-color" style={{ background: '#EAE6DF', border: '1px solid #D0CCC3' }}></span>
                <div className="token-labels font-mono">
                  <span className="t-name">Editorial Beige</span>
                  <span className="t-hex">#EAE6DF</span>
                </div>
              </div>
              <div className="token-item">
                <span className="swatch-color" style={{ background: '#059669' }}></span>
                <div className="token-labels font-mono">
                  <span className="t-name">Emerald</span>
                  <span className="t-hex">#059669</span>
                </div>
              </div>
            </div>

            {/* Typography Scale Preview */}
            <div className="type-specimen-row">
              <div className="type-specimen-box">
                <span className="type-display font-serif">Ag</span>
                <div className="type-info font-mono">
                  <span className="spec-t">Scale: 56px / 32px / 16px</span>
                  <span className="spec-sub">Line Height: 1.15 · Spacing: -0.02em</span>
                </div>
              </div>

              {/* Component Variants Pill */}
              <div className="component-state-pill font-mono">
                <span className="state-badge active">Default</span>
                <span className="state-badge">Hover</span>
                <span className="state-badge">Active</span>
              </div>
            </div>

            <div className="tokens-spec-footer font-mono">
              <span className="spec-chip">$radius: 14px</span>
              <span className="spec-chip">$elevation: 0 10px 30px</span>
              <span className="spec-chip highlight">Atomic Documentation</span>
            </div>
          </div>
        );

      case 4:
        // 05: Wireframes (Architectural Blueprint + Dimension Calipers)
        return (
          <div className="card-graphic-canvas graphic-wireframe">
            <div className="wireframe-blueprint-header font-mono">
              <span className="blueprint-tag">ARCHITECTURAL BLUEPRINT</span>
              <span className="blueprint-scale">SCALE: 1:1</span>
            </div>

            <div className="blueprint-schematic-grid">
              {/* Skeleton Box with calipers */}
              <div className="wireframe-schematic-box">
                <div className="schematic-crossline"></div>
                <span className="caliper-tag top font-mono">380px</span>
                <span className="caliper-tag side font-mono">220px</span>
                <span className="schematic-label font-mono">HERO CONTAINER</span>
              </div>

              {/* Connecting Wire Nodes */}
              <div className="wireframe-nodes-flow font-mono">
                <div className="flow-step">
                  <span className="f-dot"></span>
                  <span>User Entry</span>
                </div>
                <span className="f-arrow">→</span>
                <div className="flow-step">
                  <span className="f-dot"></span>
                  <span>Decision</span>
                </div>
                <span className="f-arrow">→</span>
                <div className="flow-step success">
                  <span className="f-dot green"></span>
                  <span>Conversion</span>
                </div>
              </div>
            </div>

            <div className="wireframe-spec-footer font-mono">
              <span className="spec-chip">Content Hierarchy Tested</span>
              <span className="spec-chip">Zero Visual Bias</span>
              <span className="spec-chip highlight">Fast Iterations</span>
            </div>
          </div>
        );

      case 5:
        // 06: Prototyping (Interaction Timeline + Cubic Bezier Curve + Play State)
        return (
          <div className="card-graphic-canvas graphic-proto">
            <div className="proto-timeline-header font-mono">
              <div className="timeline-badge">
                <span className="pulse-dot"></span>
                <span>60 FPS INTERACTION</span>
              </div>
              <span className="proto-meta font-mono">cubic-bezier(0.16, 1, 0.3, 1)</span>
            </div>

            {/* Bezier Easing Visualizer */}
            <div className="bezier-visual-card">
              <svg className="bezier-curve-svg" viewBox="0 0 320 90" fill="none">
                <path d="M 10 80 C 80 80, 100 15, 310 15" stroke="#DB2777" strokeWidth="3" strokeLinecap="round" />
                <circle cx="10" cy="80" r="5" fill="#111113" stroke="#DB2777" strokeWidth="2" />
                <circle cx="310" cy="15" r="5" fill="#DB2777" />
              </svg>

              <div className="timeline-markers font-mono">
                <span className="t-marker">0ms (Initial)</span>
                <span className="t-marker">120ms (Trigger)</span>
                <span className="t-marker">300ms (Settled)</span>
              </div>
            </div>

            {/* Interactive Preview Capsule */}
            <div className="proto-action-capsule font-mono">
              <div className="btn-preview-demo">
                <span>Hover / Click Simulation</span>
                <span className="btn-preview-arrow">↗</span>
              </div>
              <span className="spring-tag">Spring Dynamics · Real Physics</span>
            </div>

            <div className="proto-spec-footer font-mono">
              <span className="spec-chip">Framer Motion</span>
              <span className="spec-chip">Micro-Animations</span>
              <span className="spec-chip highlight">Touch Responsive</span>
            </div>
          </div>
        );

      case 6:
        // 07: Responsive Design (Multi-Viewport Breakpoints: 1440 / 768 / 375)
        return (
          <div className="card-graphic-canvas graphic-responsive">
            <div className="responsive-header font-mono">
              <span className="r-tag">SYNCHRONIZED VIEWPORTS</span>
              <span className="r-status text-emerald">● FLUID FIT</span>
            </div>

            {/* 3 Viewport Frames */}
            <div className="multi-device-viewport-row">
              <div className="device-frame desktop font-mono">
                <div className="frame-header">
                  <span className="f-title">DESKTOP</span>
                  <span className="f-px">1440px</span>
                </div>
                <div className="frame-body">
                  <div className="d-grid-bars">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>

              <div className="device-frame tablet font-mono">
                <div className="frame-header">
                  <span className="f-title">TABLET</span>
                  <span className="f-px">768px</span>
                </div>
                <div className="frame-body">
                  <div className="t-grid-bars">
                    <span></span><span></span>
                  </div>
                </div>
              </div>

              <div className="device-frame mobile font-mono">
                <div className="frame-header">
                  <span className="f-title">PHONE</span>
                  <span className="f-px">375px</span>
                </div>
                <div className="frame-body">
                  <div className="m-grid-bars">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="responsive-spec-footer font-mono">
              <span className="spec-chip">Zero Horizontal Overflow</span>
              <span className="spec-chip">Fluid Clamp Typography</span>
              <span className="spec-chip highlight">Adaptive Touch / Click</span>
            </div>
          </div>
        );

      default:
        // 08: AI-Assisted Design (Prompt Synthesis Console + Neural Variants)
        return (
          <div className="card-graphic-canvas graphic-ai">
            <div className="ai-console-header font-mono">
              <div className="ai-badge">
                <Sparkles size={13} className="text-purple-600" />
                <span>AI-POWERED EXPLORATION</span>
              </div>
              <span className="ai-engine">ENGINE: CLAUDE & MIDJOURNEY</span>
            </div>

            {/* Prompt Console Bar */}
            <div className="ai-prompt-bar font-mono">
              <span className="ai-sparkle">✦</span>
              <span className="prompt-text">"Generate high-contrast luxury layout with minimal typography..."</span>
              <span className="prompt-chip">GENERATE</span>
            </div>

            {/* 3 Instant Variants Generated */}
            <div className="ai-variants-row font-mono">
              <div className="variant-card active">
                <span className="v-tag">V1 · Minimal</span>
                <span className="v-match font-mono">98% Match</span>
              </div>
              <div className="variant-card">
                <span className="v-tag">V2 · Editorial</span>
                <span className="v-match font-mono">95% Match</span>
              </div>
              <div className="variant-card">
                <span className="v-tag">V3 · High-Density</span>
                <span className="v-match font-mono">92% Match</span>
              </div>
            </div>

            <div className="ai-spec-footer font-mono">
              <span className="spec-chip">4x Concept Speed</span>
              <span className="spec-chip">Human-Curated Polish</span>
              <span className="spec-chip highlight">Production-Ready Code</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="skills" className="services-toolkit-section">
      <div className="container">
        {/* WHAT I DO Header */}
        <div className="services-top-bar font-mono">
          <span className="services-meta">WHAT I DO · CAPABILITIES & SKILLS</span>
        </div>

        <div className="services-header-layout">
          <motion.h2 
            className="services-heading font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            End-to-end design, <br />
            <span className="text-orange">made useful.</span>
          </motion.h2>

          <div className="services-subtext-group">
            <p className="services-subtext font-mono">
              From the first rough flow to a robust visual language.
            </p>

            {/* View Mode Toggle: Vertical Slider vs Grid */}
            <div className="view-toggle-bar font-mono">
              <button 
                className={`toggle-btn ${viewMode === 'slider' ? 'active' : ''}`}
                onClick={() => setViewMode('slider')}
                title="Vertical Card Carousel"
              >
                <SlidersHorizontal size={13} />
                <span>VERTICAL SLIDER</span>
              </button>
              <button 
                className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                title="All Cards Grid"
              >
                <Grid size={13} />
                <span>ALL CARDS ({total})</span>
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            VIEW MODE 1: VERTICAL CAROUSEL / CARD SLIDER (UPSIDE & DOWNSIDE SCROLL)
           ========================================================================= */}
        {viewMode === 'slider' && (
          <div 
            className="vertical-carousel-wrapper"
            ref={sliderRef}
            onWheel={handleWheel}
            tabIndex={0}
            onKeyDown={handleKeyDown}
          >
            {/* Left Column: Quick Navigation Index & Upside/Downside Controls */}
            <div className="carousel-nav-sidebar font-mono">
              <div className="nav-sidebar-top">
                <div className="active-counter-badge">
                  <span className="counter-current font-heading">{currentTheme.num}</span>
                  <span className="counter-sep">/</span>
                  <span className="counter-total">0{total}</span>
                </div>
                <span className="nav-sidebar-label">CAPABILITIES</span>
              </div>

              {/* Step indicator items */}
              <div className="vertical-steps-list">
                {serviceThemes.map((s, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={s.num}
                      className={`svc-step-nav-btn ${isActive ? 'active' : ''}`}
                      onClick={() => handleSelectIndex(idx)}
                    >
                      <span className="svc-step-num">{s.num}</span>
                      <span className="svc-step-title">{s.title}</span>
                      {isActive && <span className="svc-step-active-dot"></span>}
                    </button>
                  );
                })}
              </div>

              {/* Upside / Downside Navigation Controls */}
              <div className="carousel-controls-bar">
                <div className="nav-arrow-group">
                  <button 
                    className="ctrl-btn up-btn"
                    onClick={handlePrev}
                    title="Previous capability (Scroll up / Up arrow)"
                    aria-label="Scroll Up"
                  >
                    <ChevronUp size={18} />
                    <span className="ctrl-hint">UP</span>
                  </button>

                  <button 
                    className="ctrl-btn down-btn"
                    onClick={handleNext}
                    title="Next capability (Scroll down / Down arrow)"
                    aria-label="Scroll Down"
                  >
                    <ChevronDown size={18} />
                    <span className="ctrl-hint">DOWN</span>
                  </button>
                </div>

                {/* Auto-scroll toggle */}
                <button 
                  className={`auto-play-btn ${isAutoPlay ? 'active' : ''}`}
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  title={isAutoPlay ? 'Pause auto-sliding' : 'Auto-slide capabilities'}
                >
                  {isAutoPlay ? <Pause size={12} /> : <Play size={12} />}
                  <span>{isAutoPlay ? 'PAUSE' : 'AUTO'}</span>
                </button>
              </div>

              {/* Interactive Wheel Hint */}
              <div className="wheel-helper-hint font-mono">
                <span className="wheel-icon">↕</span>
                <span>SCROLL UP / DOWN ON CARD</span>
              </div>
            </div>

            {/* Right Column: Featured Active Card with Animated Directional Transition */}
            <div className="carousel-card-viewport">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="showcase-service-card"
                  style={{
                    borderColor: currentTheme.borderColor
                  }}
                >
                  {/* Top Bar of the Card */}
                  <div className="card-top-header">
                    <div className="card-identity-group font-mono">
                      <span className="card-big-num" style={{ color: currentTheme.color }}>
                        {currentTheme.num}
                      </span>
                      <span className="card-cat-badge" style={{ backgroundColor: currentTheme.bgLight, color: currentTheme.color }}>
                        {currentTheme.category}
                      </span>
                    </div>

                    <div className="card-top-icon-box" style={{ backgroundColor: currentTheme.bgLight, color: currentTheme.color }}>
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="card-heading-group">
                    <h3 className="card-main-title font-heading">{currentTheme.title}</h3>
                    <p className="card-main-summary">{currentTheme.summary}</p>
                  </div>

                  {/* High-Fidelity Custom Visual Graphic Component */}
                  <div className="card-graphic-wrapper">
                    {renderCardGraphic(activeIndex)}
                  </div>

                  {/* Card Bottom Capability Pills */}
                  <div className="card-specs-row font-mono">
                    {currentTheme.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="spec-pill">
                        <CheckCircle2 size={13} style={{ color: currentTheme.color }} />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* =========================================================================
            VIEW MODE 2: ALL 8 CARDS FULL GRID (EXPANDED MANNER)
           ========================================================================= */}
        {viewMode === 'grid' && (
          <div className="all-cards-grid">
            {serviceThemes.map((s, idx) => {
              const IconComp = s.icon;
              return (
                <motion.div
                  key={s.num}
                  className="grid-card-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  whileHover={{ y: -4 }}
                  style={{ borderColor: s.borderColor }}
                >
                  <div className="grid-card-header font-mono">
                    <span className="grid-num" style={{ color: s.color }}>{s.num}</span>
                    <span className="grid-cat" style={{ backgroundColor: s.bgLight, color: s.color }}>
                      {s.category}
                    </span>
                    <div className="grid-icon-box">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                  <h3 className="grid-card-title font-heading">{s.title}</h3>
                  <p className="grid-card-summary">{s.summary}</p>

                  <div className="grid-card-mini-graphic">
                    {renderCardGraphic(idx)}
                  </div>

                  <div className="grid-card-specs font-mono">
                    {s.specs.map((spec, spIdx) => (
                      <span key={spIdx} className="mini-spec-pill">
                        ✓ {spec}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* =========================================================================
            CORE SKILLS & (04) — TOOLKIT (MATCHING REFERENCE IMAGES 1 & 2)
           ========================================================================= */}
        <div id="core-skills" className="core-skills-dark-card">
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

          {/* TOOLS Section Matching Reference Image 2 */}
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
        </div>
      </div>

      <style>{`
        .services-toolkit-section {
          padding: 6.5rem 0;
          background-color: #EBE8E1;
          color: var(--text-dark-primary);
        }

        .services-meta {
          font-size: 0.725rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--text-dark-muted);
          display: block;
          margin-bottom: 1.5rem;
        }

        .services-header-layout {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }

        .services-heading {
          font-size: clamp(2.8rem, 5.5vw, 4.8rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        .services-subtext-group {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 1.5rem;
        }

        .services-subtext {
          font-size: 0.95rem;
          color: var(--text-dark-secondary);
          max-width: 380px;
          line-height: 1.5;
          text-align: right;
        }

        /* View Mode Toggle */
        .view-toggle-bar {
          display: flex;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(17, 17, 19, 0.12);
          border-radius: var(--radius-full);
          padding: 0.25rem;
          gap: 0.25rem;
        }

        .toggle-btn {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-dark-secondary);
          padding: 0.45rem 0.9rem;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }

        .toggle-btn.active {
          background: var(--bg-dark);
          color: #FFFFFF;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        /* =========================================================================
           VERTICAL CAROUSEL / SLIDER LAYOUT
           ========================================================================= */
        .vertical-carousel-wrapper {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 2.5rem;
          margin-bottom: 5rem;
          outline: none;
        }

        /* Sidebar Navigation */
        .carousel-nav-sidebar {
          background: rgba(255, 255, 255, 0.65);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(17, 17, 19, 0.08);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }

        .nav-sidebar-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(17, 17, 19, 0.08);
          margin-bottom: 1.25rem;
        }

        .active-counter-badge {
          display: flex;
          align-items: baseline;
          gap: 0.25rem;
        }

        .counter-current {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--accent-orange);
          line-height: 1;
        }

        .counter-sep {
          color: var(--text-dark-muted);
          font-size: 1rem;
        }

        .counter-total {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-dark-secondary);
        }

        .nav-sidebar-label {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: var(--text-dark-muted);
        }

        /* Vertical Steps List */
        .vertical-steps-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .svc-step-nav-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          background: transparent;
          border: 1px solid transparent;
          cursor: pointer;
          text-align: left;
          font-family: inherit;
          transition: all var(--transition-fast);
        }

        .svc-step-nav-btn:hover {
          background: rgba(255, 255, 255, 0.8);
          border-color: rgba(17, 17, 19, 0.06);
        }

        .svc-step-nav-btn.active {
          background: #FFFFFF;
          border-color: var(--accent-orange);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
        }

        .svc-step-num {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--text-dark-muted);
        }

        .svc-step-nav-btn.active .svc-step-num {
          color: var(--accent-orange);
        }

        .svc-step-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: #111113 !important;
          flex: 1;
        }

        .svc-step-nav-btn.active .svc-step-title {
          color: #111113 !important;
          font-weight: 800;
        }

        .svc-step-active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-orange);
        }

        /* Controls: Up & Down Arrows */
        .carousel-controls-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(17, 17, 19, 0.08);
          gap: 0.75rem;
        }

        .nav-arrow-group {
          display: flex;
          gap: 0.5rem;
        }

        .ctrl-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--bg-dark);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-sm);
          padding: 0.6rem 0.85rem;
          font-size: 0.7rem;
          font-weight: 800;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .ctrl-btn:hover {
          background: var(--accent-orange);
          border-color: var(--accent-orange);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(239, 68, 35, 0.3);
        }

        .ctrl-hint {
          letter-spacing: 0.05em;
        }

        .auto-play-btn {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: #FFFFFF;
          border: 1px solid rgba(17, 17, 19, 0.15);
          border-radius: var(--radius-sm);
          padding: 0.6rem 0.85rem;
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--text-dark-primary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .auto-play-btn.active {
          background: var(--accent-orange);
          color: #FFFFFF;
          border-color: var(--accent-orange);
        }

        .wheel-helper-hint {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-dark-muted);
          text-align: center;
          margin-top: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }

        /* Card Showcase Viewport */
        .carousel-card-viewport {
          position: relative;
          min-height: 520px;
        }

        .showcase-service-card {
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          border: 2px solid transparent;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.07);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          position: relative;
          overflow: hidden;
        }

        .card-top-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-identity-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .card-big-num {
          font-size: 1.35rem;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .card-cat-badge {
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          padding: 0.35rem 0.75rem;
          border-radius: var(--radius-full);
        }

        .card-top-icon-box {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(17, 17, 19, 0.08);
        }

        .card-heading-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .card-main-title {
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          font-weight: 800;
          color: var(--text-dark-primary);
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .card-main-summary {
          font-size: 1rem;
          color: var(--text-dark-secondary);
          line-height: 1.5;
          max-width: 640px;
        }

        /* =========================================================================
           CUSTOM HIGH-FIDELITY GRAPHICS FOR EACH SERVICE
           ========================================================================= */
        .card-graphic-wrapper {
          background: #F8F7F4;
          border-radius: var(--radius-md);
          border: 1px solid rgba(17, 17, 19, 0.07);
          overflow: hidden;
          padding: 1.75rem;
        }

        .card-graphic-canvas {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        /* Graphic 01: UI/UX */
        .canvas-header-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.72rem;
          color: var(--text-dark-secondary);
          padding-bottom: 0.75rem;
          border-bottom: 1px dashed rgba(17, 17, 19, 0.12);
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .dot.red { background: #FF5F56; }
        .dot.yellow { background: #FFBD2E; }
        .dot.green { background: #27C93F; }

        .canvas-title {
          margin-left: 0.4rem;
          font-weight: 700;
        }

        .canvas-badge {
          margin-left: auto;
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--accent-orange);
          background: rgba(239, 68, 35, 0.1);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }

        .uiux-mockup-frame {
          background: #FFFFFF;
          border: 1px solid rgba(17, 17, 19, 0.1);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }

        .mockup-row-top {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .avatar-chip {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #EAE6DF;
        }

        .skeleton-bar.w-40 {
          width: 140px;
          height: 10px;
          background: #EAE6DF;
          border-radius: 4px;
        }

        .status-pill.green {
          margin-left: auto;
          font-size: 0.65rem;
          font-weight: 800;
          background: #ECFDF5;
          color: #059669;
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
        }

        .skeleton-block.h-36 {
          width: 100%;
          height: 56px;
          background: linear-gradient(90deg, #F5F3EF 0%, #EBE8E1 50%, #F5F3EF 100%);
          border-radius: 6px;
        }

        .mockup-action-row {
          display: flex;
          gap: 0.6rem;
        }

        .mockup-btn {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.45rem 0.85rem;
          border-radius: 4px;
        }

        .mockup-btn.primary {
          background: var(--bg-dark);
          color: #FFFFFF;
        }

        .mockup-btn.secondary {
          background: #F0EDE6;
          color: var(--text-dark-primary);
        }

        .floating-figma-cursor {
          position: absolute;
          bottom: 12px;
          right: 32px;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          pointer-events: none;
        }

        .cursor-label {
          background: var(--accent-orange);
          color: #FFFFFF;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          box-shadow: 0 4px 10px rgba(239, 68, 35, 0.4);
        }

        /* Graphic 02: Web Design */
        .browser-chrome-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #FFFFFF;
          border: 1px solid rgba(17, 17, 19, 0.08);
          border-radius: 6px 6px 0 0;
          padding: 0.5rem 0.85rem;
        }

        .window-dots {
          display: flex;
          gap: 0.35rem;
        }

        .browser-url-pill {
          background: #F4F2EE;
          border-radius: var(--radius-full);
          padding: 0.25rem 0.75rem;
          font-size: 0.68rem;
          color: var(--text-dark-secondary);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          flex: 1;
          max-width: 240px;
        }

        .browser-meta {
          font-size: 0.65rem;
          font-weight: 800;
          color: #2563EB;
          margin-left: auto;
        }

        .browser-content-area {
          background: #FFFFFF;
          border: 1px solid rgba(17, 17, 19, 0.08);
          border-top: none;
          border-radius: 0 0 6px 6px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mini-web-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid rgba(17, 17, 19, 0.06);
        }

        .brand-logo {
          font-weight: 800;
          font-size: 0.75rem;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          font-size: 0.7rem;
          color: var(--text-dark-secondary);
        }

        .nav-cta {
          color: #2563EB;
          font-weight: 700;
        }

        .mini-web-hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          background: #F8FAFC;
          border-radius: var(--radius-sm);
          padding: 1.25rem;
        }

        .mini-tag {
          font-size: 0.65rem;
          font-weight: 800;
          color: #2563EB;
          letter-spacing: 0.08em;
        }

        .hero-headline {
          font-size: 1.25rem;
          font-weight: 800;
          line-height: 1.2;
          margin: 0.35rem 0;
        }

        .hero-p {
          font-size: 0.75rem;
          color: var(--text-dark-secondary);
        }

        .visual-gem-box {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #2563EB;
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 16px rgba(37, 99, 235, 0.3);
        }

        .gem-icon {
          font-size: 1.2rem;
        }

        .gem-text {
          font-size: 0.6rem;
          font-weight: 800;
        }

        /* Graphic 03: Mobile UI */
        .phone-screen-container {
          background: #FFFFFF;
          border: 2px solid #111113;
          border-radius: 20px;
          max-width: 380px;
          margin: 0 auto;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          padding: 0.85rem 1rem 1.25rem;
        }

        .phone-top-island {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.68rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .island-pill {
          width: 50px;
          height: 14px;
          background: #111113;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .island-dot {
          width: 4px;
          height: 4px;
          background: #27C93F;
          border-radius: 50%;
        }

        .mobile-search-pill {
          background: #F4F2EE;
          border-radius: var(--radius-full);
          padding: 0.45rem 0.85rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.7rem;
          color: var(--text-dark-secondary);
          margin-bottom: 0.85rem;
        }

        .mobile-product-card {
          background: #F8F7F4;
          border-radius: 12px;
          padding: 0.85rem;
          margin-bottom: 1rem;
        }

        .product-art-preview {
          height: 70px;
          background: linear-gradient(135deg, #7C3AED 0%, #C084FC 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          margin-bottom: 0.6rem;
        }

        .product-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8rem;
          font-weight: 800;
        }

        .mobile-bottom-dock {
          display: flex;
          align-items: center;
          justify-content: space-around;
          background: #111113;
          color: #FFFFFF;
          border-radius: 16px;
          padding: 0.5rem;
          font-size: 0.85rem;
        }

        .dock-item.active {
          color: #7C3AED;
        }

        .mobile-spec-row {
          margin-top: 1rem;
          display: flex;
          gap: 0.5rem;
          justify-content: center;
        }

        /* Graphic 04: Design Systems (Tokens) */
        .tokens-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.72rem;
          font-weight: 800;
        }

        .token-swatches-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.75rem;
        }

        .token-item {
          background: #FFFFFF;
          border: 1px solid rgba(17, 17, 19, 0.08);
          border-radius: 8px;
          padding: 0.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .swatch-color {
          height: 28px;
          border-radius: 4px;
        }

        .token-labels {
          display: flex;
          flex-direction: column;
        }

        .t-name {
          font-size: 0.68rem;
          font-weight: 800;
        }

        .t-hex {
          font-size: 0.62rem;
          color: var(--text-dark-muted);
        }

        .type-specimen-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FFFFFF;
          border: 1px solid rgba(17, 17, 19, 0.08);
          border-radius: 8px;
          padding: 0.85rem 1.25rem;
        }

        .type-specimen-box {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .type-display {
          font-size: 2.2rem;
          font-weight: 800;
          color: #059669;
          line-height: 1;
        }

        .type-info {
          display: flex;
          flex-direction: column;
        }

        .spec-t {
          font-size: 0.75rem;
          font-weight: 800;
        }

        .spec-sub {
          font-size: 0.65rem;
          color: var(--text-dark-secondary);
        }

        .component-state-pill {
          display: flex;
          gap: 0.35rem;
          background: #F4F2EE;
          padding: 0.3rem;
          border-radius: var(--radius-full);
        }

        .state-badge {
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full);
          color: var(--text-dark-secondary);
        }

        .state-badge.active {
          background: #059669;
          color: #FFFFFF;
        }

        /* Graphic 05: Wireframes */
        .wireframe-blueprint-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.7rem;
          font-weight: 800;
          color: #D97706;
        }

        .blueprint-schematic-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .wireframe-schematic-box {
          background: #FFFFFF;
          border: 1.5px dashed #D97706;
          border-radius: 8px;
          height: 100px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .schematic-crossline {
          position: absolute;
          inset: 0;
          background: 
            linear-gradient(to top right, transparent calc(50% - 1px), rgba(217, 119, 6, 0.15), transparent calc(50% + 1px)),
            linear-gradient(to bottom right, transparent calc(50% - 1px), rgba(217, 119, 6, 0.15), transparent calc(50% + 1px));
        }

        .schematic-label {
          background: #FFFBEB;
          border: 1px solid #D97706;
          color: #D97706;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
          z-index: 2;
        }

        .caliper-tag {
          position: absolute;
          font-size: 0.62rem;
          font-weight: 800;
          color: #D97706;
          background: #FFFFFF;
          padding: 0.1rem 0.4rem;
          border: 1px solid rgba(217, 119, 6, 0.3);
          border-radius: 3px;
        }

        .caliper-tag.top {
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
        }

        .caliper-tag.side {
          right: -14px;
          top: 50%;
          transform: translateY(-50%) rotate(90deg);
        }

        .wireframe-nodes-flow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.85rem;
          font-size: 0.72rem;
          font-weight: 700;
        }

        .flow-step {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          background: #FFFFFF;
          border: 1px solid rgba(17, 17, 19, 0.08);
          padding: 0.35rem 0.75rem;
          border-radius: 4px;
        }

        .flow-step.success {
          border-color: #059669;
          color: #059669;
        }

        .f-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--text-dark-muted);
        }

        .f-dot.green {
          background: #059669;
        }

        /* Graphic 06: Prototyping */
        .proto-timeline-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.72rem;
        }

        .timeline-badge {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-weight: 800;
          color: #DB2777;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #DB2777;
          box-shadow: 0 0 0 4px rgba(219, 39, 119, 0.2);
        }

        .bezier-visual-card {
          background: #FFFFFF;
          border: 1px solid rgba(17, 17, 19, 0.08);
          border-radius: 8px;
          padding: 1rem;
        }

        .bezier-curve-svg {
          width: 100%;
          height: 70px;
        }

        .timeline-markers {
          display: flex;
          justify-content: space-between;
          font-size: 0.65rem;
          color: var(--text-dark-muted);
          margin-top: 0.5rem;
          border-top: 1px dashed rgba(17, 17, 19, 0.1);
          padding-top: 0.5rem;
        }

        .proto-action-capsule {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #FDF2F8;
          border: 1px solid rgba(219, 39, 119, 0.2);
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
        }

        .btn-preview-demo {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 800;
          color: #DB2777;
          cursor: pointer;
        }

        .spring-tag {
          font-size: 0.68rem;
          color: var(--text-dark-secondary);
        }

        /* Graphic 07: Responsive */
        .responsive-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.72rem;
          font-weight: 800;
        }

        .multi-device-viewport-row {
          display: grid;
          grid-template-columns: 2fr 1.3fr 1fr;
          gap: 0.75rem;
        }

        .device-frame {
          background: #FFFFFF;
          border: 1px solid rgba(17, 17, 19, 0.1);
          border-radius: 8px;
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .frame-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.65rem;
          font-weight: 800;
          color: #0891B2;
          padding-bottom: 0.35rem;
          border-bottom: 1px solid rgba(17, 17, 19, 0.06);
        }

        .d-grid-bars {
          display: flex;
          gap: 0.35rem;
          height: 48px;
        }

        .d-grid-bars span {
          flex: 1;
          background: #E0F2FE;
          border-radius: 4px;
        }

        .t-grid-bars {
          display: flex;
          gap: 0.35rem;
          height: 48px;
        }

        .t-grid-bars span {
          flex: 1;
          background: #E0F2FE;
          border-radius: 4px;
        }

        .m-grid-bars {
          height: 48px;
          background: #0891B2;
          border-radius: 4px;
        }

        /* Graphic 08: AI-Assisted */
        .ai-console-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.72rem;
          font-weight: 800;
        }

        .ai-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #9333EA;
        }

        .ai-prompt-bar {
          background: #FFFFFF;
          border: 1.5px solid #9333EA;
          border-radius: var(--radius-full);
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          box-shadow: 0 4px 14px rgba(147, 51, 234, 0.15);
        }

        .ai-sparkle {
          color: #9333EA;
          font-size: 0.9rem;
        }

        .prompt-text {
          font-size: 0.72rem;
          color: var(--text-dark-secondary);
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .prompt-chip {
          background: #9333EA;
          color: #FFFFFF;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 0.2rem 0.6rem;
          border-radius: var(--radius-full);
        }

        .ai-variants-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.6rem;
        }

        .variant-card {
          background: #FFFFFF;
          border: 1px solid rgba(17, 17, 19, 0.08);
          border-radius: 6px;
          padding: 0.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .variant-card.active {
          border-color: #9333EA;
          background: #FAF5FF;
        }

        .v-tag {
          font-size: 0.68rem;
          font-weight: 800;
        }

        .v-match {
          font-size: 0.62rem;
          color: #059669;
        }

        /* Common Spec Footer Pills */
        .graphic-spec-footer,
        .web-spec-footer,
        .tokens-spec-footer,
        .wireframe-spec-footer,
        .proto-spec-footer,
        .responsive-spec-footer,
        .ai-spec-footer {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.5rem;
        }

        .spec-chip {
          font-size: 0.65rem;
          font-weight: 700;
          background: #FFFFFF;
          border: 1px solid rgba(17, 17, 19, 0.08);
          padding: 0.25rem 0.55rem;
          border-radius: 4px;
          color: var(--text-dark-secondary);
        }

        .spec-chip.highlight {
          background: var(--bg-dark);
          color: #FFFFFF;
          border-color: var(--bg-dark);
        }

        /* Card Bottom Specs */
        .card-specs-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.85rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(17, 17, 19, 0.08);
        }

        .spec-pill {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: #F8F7F4;
          border: 1px solid rgba(17, 17, 19, 0.08);
          border-radius: var(--radius-full);
          padding: 0.4rem 0.85rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-dark-primary);
        }

        /* =========================================================================
           VIEW MODE 2: ALL 8 CARDS GRID
           ========================================================================= */
        .all-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 5rem;
        }

        .grid-card-item {
          background: #FFFFFF;
          border-radius: var(--radius-md);
          border: 1.5px solid rgba(17, 17, 19, 0.08);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          transition: all var(--transition-fast);
        }

        .grid-card-item:hover {
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
        }

        .grid-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .grid-num {
          font-size: 1.1rem;
          font-weight: 900;
        }

        .grid-cat {
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-full);
        }

        .grid-icon-box {
          width: 28px;
          height: 28px;
          border-radius: 4px;
          background: var(--bg-dark);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .grid-card-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-dark-primary);
        }

        .grid-card-summary {
          font-size: 0.9rem;
          color: var(--text-dark-secondary);
          line-height: 1.5;
        }

        .grid-card-mini-graphic {
          background: #F8F7F4;
          border-radius: 8px;
          border: 1px solid rgba(17, 17, 19, 0.06);
          padding: 1.25rem;
          overflow: hidden;
        }

        .grid-card-specs {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }

        .mini-spec-pill {
          font-size: 0.7rem;
          font-weight: 700;
          background: #F8F7F4;
          border: 1px solid rgba(17, 17, 19, 0.08);
          border-radius: 4px;
          padding: 0.25rem 0.6rem;
          color: var(--text-dark-primary);
        }

        /* =========================================================================
           TOOLKIT SECTION (PRESERVED)
           ========================================================================= */
        /* =========================================================================
           CORE SKILLS DARK CARD (MATCHING REFERENCE IMAGES 1 & 2)
           ========================================================================= */
        .core-skills-dark-card {
          background-color: #111113;
          color: #FFFFFF;
          border-radius: 32px;
          padding: 3.5rem 3.5rem 3.25rem;
          margin-top: 4.5rem;
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

        /* Floating Glowing Lime-Green Sticker Matching Image 2 */
        .skill-floating-sticker {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #C7E85B; /* Lime green from Reference Image 2 */
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

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .vertical-carousel-wrapper {
            grid-template-columns: 1fr;
          }

          .carousel-nav-sidebar {
            order: 2;
          }

          .carousel-card-viewport {
            order: 1;
          }

          .all-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .services-header-layout {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.5rem;
          }

          .services-subtext-group {
            align-items: flex-start;
          }

          .services-subtext {
            text-align: left;
          }

          .token-swatches-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .multi-device-viewport-row {
            grid-template-columns: 1fr;
          }

          .ai-variants-row {
            grid-template-columns: 1fr;
          }

          .toolkit-wrapper {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
