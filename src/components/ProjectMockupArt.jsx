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
      <div 
        className="figma-art-card sheque-card font-heading" 
        style={{ 
          padding: '0.75rem', 
          overflow: 'hidden', 
          position: 'relative', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: '#FAF8F5'
        }}
      >
        <img 
          src="./sheque_mockup.png" 
          alt="SHEQU Luxury Jewelry Case Study Mockup" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain', 
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)' 
          }} 
        />
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
