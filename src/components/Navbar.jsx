import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check if at the very bottom of the document
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      // Map DOM sections to navbar link IDs in actual visual hierarchy
      const sectionToNav = [
        { elId: 'contact', navId: 'contact' },
        { elId: 'skills', navId: 'skills' },
        { elId: 'core-skills', navId: 'skills' },
        { elId: 'experience', navId: 'experience' },
        { elId: 'work', navId: 'work' },
        { elId: 'case-studies', navId: 'work' },
        { elId: 'about', navId: 'about' },
        { elId: 'hero', navId: 'hero' }
      ];

      // Dynamically sort candidates by actual offsetTop in the DOM (descending)
      const activeCandidates = sectionToNav
        .map(item => {
          const el = document.getElementById(item.elId);
          return el ? { top: el.offsetTop, navId: item.navId } : null;
        })
        .filter(Boolean)
        .sort((a, b) => b.top - a.top);

      const scrollPosition = window.scrollY + 180;

      for (const item of activeCandidates) {
        if (item.top <= scrollPosition) {
          setActiveSection(item.navId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'WORK', href: '#work', id: 'work' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'CONTACT', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#contact') {
      if (onOpenContact) {
        onOpenContact();
      } else {
        const contactEl = document.getElementById('contact');
        if (contactEl) {
          contactEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setActiveSection('contact');
      return;
    }

    const target = document.querySelector(href);

    if (target) {
      const headerOffset = 76;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      const navId = href.replace('#', '');
      setActiveSection(navId);
    }
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="brand-logo">
          <div className="logo-avatar">
            <span>{portfolioData.personalInfo.initials}</span>
          </div>
          <span className="logo-text">{portfolioData.personalInfo.name}</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="nav-actions">
          <button 
            className="btn btn-primary-dark nav-cta"
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                const target = document.querySelector('#contact');
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            LET'S TALK
            <span className="btn-icon-square">
              <ArrowUpRight size={12} />
            </span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <div className="brand-logo">
                <div className="logo-avatar">
                  <span>{portfolioData.personalInfo.initials}</span>
                </div>
                <span className="logo-text">{portfolioData.personalInfo.name}</span>
              </div>
              <button className="mobile-toggle" onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <nav className="mobile-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mobile-menu-footer">
              <button 
                className="btn btn-orange btn-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContact) onOpenContact();
                  else {
                    const target = document.querySelector('#contact');
                    if (target) target.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                LET'S TALK <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          z-index: 1000;
          display: flex;
          align-items: center;
          transition: all var(--transition-normal);
          background: rgba(246, 245, 242, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid transparent;
        }

        .navbar-scrolled {
          background: rgba(246, 245, 242, 0.95);
          border-bottom-color: var(--border-light);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          height: 72px;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1rem;
          letter-spacing: -0.02em;
          color: var(--text-dark-primary);
        }

        .logo-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-dark);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: -0.05em;
        }

        .logo-text {
          letter-spacing: 0.04em;
          text-transform: uppercase;
          font-size: 0.925rem;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2.25rem;
        }

        .nav-link {
          font-family: var(--font-heading);
          font-size: 0.775rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-dark-secondary);
          transition: color var(--transition-fast);
          padding: 0.4rem 0;
          position: relative;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--text-dark-primary);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--accent-orange);
          border-radius: 2px;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .mobile-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          color: var(--text-dark-primary);
        }

        /* Mobile Drawer Styles */
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 1100;
          display: flex;
          justify-content: flex-end;
          animation: fadeIn 0.25s ease-out;
        }

        .mobile-menu-content {
          width: 85%;
          max-width: 360px;
          height: 100%;
          background: var(--bg-light);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
          animation: slideLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-light);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 2rem 0;
          flex: 1;
        }

        .mobile-nav-link {
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--text-dark-secondary);
          padding: 0.5rem 0;
        }

        .mobile-nav-link.active, .mobile-nav-link:hover {
          color: var(--accent-orange);
        }

        .mobile-menu-footer {
          padding-top: 1rem;
          border-top: 1px solid var(--border-light);
        }

        .btn-full {
          width: 100%;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideLeft {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }

          .nav-cta {
            display: none;
          }

          .mobile-toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
