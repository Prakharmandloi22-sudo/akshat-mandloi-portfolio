import React from 'react';
import '../styles/global.css';

export default function ProjectMockupArt({ projectId }) {
  if (projectId === 'swart-plastering') {
    return (
      <div className="figma-art-card swart-card font-heading" style={{ padding: 0, overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img 
          src="./swart_plastering_v2.png" 
          alt="Swart Plastering Case Study" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain', 
            borderRadius: '12px',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.25)' 
          }} 
        />
      </div>
    );
  }

  if (projectId === 'sheque') {
    return (
      <div className="figma-art-card sheque-card font-heading">
        {/* Top Right Circle Badge 01 */}
        <div className="top-right-circle-badge font-mono">01</div>

        {/* Inner Editorial Poster */}
        <div className="sheque-editorial-poster">
          {/* Header row */}
          <div className="poster-header font-mono">
            <div className="header-left">
              <span className="num text-dark">01</span>
              <span className="h-line"></span>
              <span className="meta">WEB DESIGN CASE STUDY</span>
            </div>
            <span className="year font-mono">2026</span>
          </div>

          {/* Huge Luxury Serif Title */}
          <h2 className="sheque-luxury-title font-serif">SHEQU</h2>

          {/* Subtitle with Star */}
          <div className="poster-subtitle-row font-mono">
            <span className="red-accent-line"></span>
            <span className="sub-txt">E-COMMERCE WEBSITE</span>
            <span className="star-icon text-orange">✦</span>
          </div>

          {/* Tags row */}
          <div className="poster-tags-row font-mono">
            <span>UX STRATEGY</span>
            <span className="pipe">|</span>
            <span>UI DESIGN</span>
            <span className="pipe">|</span>
            <span>RESPONSIVE WEB</span>
          </div>

          {/* CTA & Description */}
          <div className="poster-cta-row">
            <a 
              href="https://fancy-reduce-60668527.figma.site/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="circle-arrow-btn"
              onClick={(e) => e.stopPropagation()}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span className="c-arrow">→</span>
              <span className="c-txt font-mono">EXPLORE DEMO</span>
            </a>
            <p className="poster-tagline font-body">
              Live Interactive Prototype · Elegant Jewelry Shopping Experience
            </p>
          </div>

          {/* Devices Group: Dark Laptop & Phone Mockups with Live Site */}
          <div className="sheque-devices-group">
            <div className="sheque-laptop-frame">
              <div className="laptop-header-bar">
                <span className="dots red"></span>
                <span className="dots yellow"></span>
                <span className="dots green"></span>
                <span className="laptop-url-pill font-mono">fancy-reduce-60668527.figma.site</span>
              </div>
              <div className="laptop-screen-content sheque-editorial-screen">
                <div className="mock-sheque-nav">
                  <span className="brand font-serif">SHEQU</span>
                  <div className="links font-mono">
                    <span>COLLECTION</span>
                    <span>HIGH JEWELRY</span>
                    <span>ABOUT</span>
                  </div>
                  <span className="bag font-mono">BAG (1)</span>
                </div>
                <div className="mock-sheque-hero">
                  <div className="hero-left">
                    <span className="tag font-mono">AUTUMN 2024</span>
                    <h4 className="title font-serif">Handcrafted Elegance</h4>
                    <p className="desc">18K Solid Gold & Responsibly Sourced Diamonds</p>
                    <span className="btn-mock font-mono">VIEW PIECES →</span>
                  </div>
                  <div className="hero-right">
                    <div className="gem-art">
                      <span className="sparkle">✦</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sheque-phone-frame">
              <div className="phone-screen-inner sheque-phone-mock">
                <div className="phone-nav font-serif">
                  <span>SHEQU</span>
                  <span className="menu">≡</span>
                </div>
                <div className="phone-product-card">
                  <div className="phone-gem">✦</div>
                  <span className="p-name font-serif">Aura Solitaire</span>
                  <span className="p-price font-mono">$1,850</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right Teal Metric Badge */}
          <div className="sheque-teal-badge font-mono">
            <span className="val font-heading">96%</span>
            <span className="lbl font-mono">task success</span>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'easy-waste') {
    return (
      <div 
        className="figma-art-card easy-waste-card font-heading" 
        style={{ 
          padding: '1.25rem', 
          overflow: 'hidden', 
          position: 'relative', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: '100%',
          height: '100%'
        }}
      >
        <img 
          src="./easy_waste_banner.png" 
          alt="Easy Waste Management Case Study" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain', 
            borderRadius: '16px',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.18)' 
          }} 
        />
      </div>
    );
  }

  if (projectId === 'ai-diabetes-pod') {
    return (
      <div className="figma-art-card diabetes-card">
        <div className="tablet-frame-mockup">
          <div className="tablet-sidebar font-mono">
            <span className="nura-logo font-heading">nuracare</span>
            <div className="nav-icons font-mono">
              <span className="ic active">⌂</span>
              <span className="ic">◇</span>
              <span className="ic">+</span>
              <span className="ic">⚙</span>
            </div>
            <div className="user-avatar-circle font-mono">AM</div>
          </div>

          <div className="tablet-content">
            <div className="content-top font-mono">
              <span className="welcome font-heading">Good morning, Akshat</span>
              <span className="sync-time">Last sync 2m ago</span>
            </div>

            <div className="metric-row font-mono">
              <div className="metric-card">
                <span className="lbl">GLUCOSE AVG</span>
                <div className="val font-heading">108 <small>mg/dL</small></div>
                <span className="sub text-green">In range 7D</span>
              </div>

              <div className="bars-card">
                <div className="bar-column"><span className="b h-40"></span></div>
                <div className="bar-column"><span className="b h-50"></span></div>
                <div className="bar-column"><span className="b h-70"></span></div>
                <div className="bar-column"><span className="b h-90 active"></span></div>
                <div className="bar-column"><span className="b h-55"></span></div>
                <div className="bar-column"><span className="b h-80"></span></div>
              </div>
            </div>

            <div className="bottom-cards-row font-mono">
              <div className="sub-card">
                <span className="lbl">TIME IN RANGE</span>
                <span className="val-big font-heading">82%</span>
                <div className="ring-indicator"></div>
              </div>

              <div className="sub-card">
                <span className="lbl">INSIGHT</span>
                <span className="val-text font-heading">Stable morning pattern</span>
                <span className="link-text text-purple">View recommendation →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (projectId === 'seedroute') {
    return (
      <div className="figma-art-card seedroute-card">
        <div className="saas-dash-frame">
          <div className="saas-sidebar font-mono">
            <span className="saas-logo font-heading">seedroute</span>
            <div className="saas-nav-list">
              <span className="nav-item active">Overview</span>
              <span className="nav-item">Orders</span>
              <span className="nav-item">Routes</span>
              <span className="nav-item">Retailers</span>
            </div>
            <div className="saas-avatar font-mono">AM</div>
          </div>

          <div className="saas-content">
            <div className="saas-top-header font-mono">
              <span className="user-text font-heading">Good morning, Akshat</span>
              <span className="new-order-btn font-mono">+ New order</span>
            </div>

            <div className="saas-metrics-row font-mono">
              <div className="m-card">
                <span className="m-lbl font-mono">NET REVENUE</span>
                <span className="m-val font-heading">₹4.82L</span>
                <span className="m-sub text-green">+12.4%</span>
              </div>
              <div className="m-card">
                <span className="m-lbl font-mono">ACTIVE ROUTES</span>
                <span className="m-val font-heading">24</span>
                <span className="m-sub">18 live</span>
              </div>
              <div className="m-card">
                <span className="m-lbl font-mono">FULFILLMENT</span>
                <span className="m-val font-heading">94%</span>
                <span className="m-sub text-green">On target</span>
              </div>
            </div>

            <div className="saas-chart-box font-mono">
              <span className="chart-title font-mono">SALES PERFORMANCE</span>
              <div className="sales-bars-row">
                <span className="b h-35"></span>
                <span className="b h-45"></span>
                <span className="b h-50"></span>
                <span className="b h-65"></span>
                <span className="b h-85 gold"></span>
                <span className="b h-95 gold"></span>
                <span className="b h-75 gold"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fallbacks for other projects
  if (projectId === 'family-interiors') {
    return (
      <div 
        className="figma-art-card interiors-card font-heading" 
        style={{ 
          padding: '1.25rem', 
          overflow: 'hidden', 
          position: 'relative', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: '100%',
          height: '100%'
        }}
      >
        <img 
          src="./family_interiors_banner.png" 
          alt="Family Interiors Case Study" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain', 
            borderRadius: '16px',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.22)' 
          }} 
        />
      </div>
    );
  }

  if (projectId === 'royal-rentals') {
    return (
      <div 
        className="figma-art-card royal-card font-heading" 
        style={{ 
          padding: '1.25rem', 
          overflow: 'hidden', 
          position: 'relative', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: '100%',
          height: '100%'
        }}
      >
        <img 
          src="./royal_rentals_banner.png" 
          alt="RoyalTee Golf Simulator Case Study" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain', 
            borderRadius: '16px',
            boxShadow: '0 16px 36px rgba(0, 0, 0, 0.28)' 
          }} 
        />
      </div>
    );
  }

  return null;
}
