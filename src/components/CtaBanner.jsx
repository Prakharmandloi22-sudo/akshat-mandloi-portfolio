import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, ArrowUpRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

export default function CtaBanner() {
  const [copied, setCopied] = useState(false);
  const [pressedKey, setPressedKey] = useState(null);

  const email = portfolioData.personalInfo.email;
  // Keycaps spelling AKSHAT with final red accent '!'
  const keycaps = [
    { char: 'A', isAccent: false },
    { char: 'K', isAccent: false },
    { char: 'S', isAccent: false },
    { char: 'H', isAccent: false },
    { char: 'A', isAccent: false },
    { char: 'T', isAccent: false },
    { char: '!', isAccent: true }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#EF4423', '#111113', '#7A8B58', '#EAE6DF']
      });
    } catch (e) {
      // Confetti fallback
    }

    setTimeout(() => {
      setCopied(false);
    }, 2800);
  };

  const handleKeyClick = (idx) => {
    setPressedKey(idx);
    setTimeout(() => setPressedKey(null), 250);
  };

  return (
    <section id="contact" className="shift-contact-section">
      <div className="container">
        {/* Stacking Card Matching Reference Images 3 & 4 */}
        <motion.div 
          className="shift-card-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Tag Bar */}
          <div className="shift-top-bar font-mono">
            <span className="shift-tag">(05) — LET'S SHIFT SOMETHING</span>
            <span className="shift-avail font-mono">AVAILABLE WORLDWIDE · 2026</span>
          </div>

          {/* Main Huge Email Header */}
          <div className="shift-email-container">
            <a 
              href={`mailto:${email}`} 
              className="shift-email-address font-heading"
              title="Click to send email"
            >
              {email}
            </a>

            {/* CLICK TO COPY Pill Button */}
            <div className="shift-copy-row">
              <button 
                className={`click-to-copy-pill font-mono ${copied ? 'copied' : ''}`}
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald" />
                    <span>COPIED TO CLIPBOARD!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>CLICK TO COPY</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Tactile 3D Keyboard Keycap Tiles: [ A ] [ K ] [ S ] [ H ] [ A ] [ T ] [ ! ] */}
          <div className="keycaps-rack">
            <div className="keycaps-row">
              {keycaps.map((k, idx) => {
                const isPressed = pressedKey === idx;
                return (
                  <button
                    key={idx}
                    className={`tactile-keycap ${k.isAccent ? 'accent-key' : ''} ${isPressed ? 'pressed' : ''}`}
                    onClick={() => handleKeyClick(idx)}
                    title={`Key: ${k.char}`}
                  >
                    <span className="key-letter">{k.char}</span>
                  </button>
                );
              })}
            </div>
            <span className="keycaps-hint font-mono">INTERACTIVE TACTILE KEYCAPS</span>
          </div>

          {/* Social Links Row in Monospace Matching Reference */}
          <div className="shift-social-row font-mono">
            <a 
              href={portfolioData.personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-ref-link"
            >
              LINKEDIN ↗
            </a>

            <a 
              href={portfolioData.personalInfo.behance} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-ref-link"
            >
              BEHANCE ↗
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .shift-contact-section {
          padding: 5rem 0 2rem;
          background-color: var(--bg-light);
          position: relative;
        }

        .shift-card-wrapper {
          background-color: #EAE6DF; /* Matching the exact cream card in Reference Image 3 & 4 */
          color: #111113;
          border-radius: 36px 36px 28px 28px;
          padding: 4.5rem 4rem 3.5rem;
          box-shadow: 0 -16px 48px rgba(0, 0, 0, 0.16), 0 24px 50px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(17, 17, 19, 0.1);
          position: sticky;
          top: 90px;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        /* Top Tag Bar */
        .shift-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(17, 17, 19, 0.12);
        }

        .shift-tag {
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #111113;
        }

        .shift-avail {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: rgba(17, 17, 19, 0.6);
        }

        /* Email Header */
        .shift-email-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .shift-email-address {
          font-size: clamp(2.4rem, 5.5vw, 4.8rem);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #111113;
          text-decoration: none;
          word-break: break-word;
          transition: color var(--transition-fast);
        }

        .shift-email-address:hover {
          color: var(--accent-orange);
        }

        /* Click to Copy Pill */
        .shift-copy-row {
          display: flex;
        }

        .click-to-copy-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: #111113;
          color: #FFFFFF;
          border-radius: var(--radius-full);
          padding: 0.75rem 1.6rem;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all var(--transition-fast);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
        }

        .click-to-copy-pill:hover {
          transform: translateY(-2px);
          background: #000000;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        }

        .click-to-copy-pill.copied {
          background: #059669;
          box-shadow: 0 4px 16px rgba(5, 150, 105, 0.35);
        }

        /* Tactile 3D Keycaps Row */
        .keycaps-rack {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1.5rem 0;
          border-top: 1px solid rgba(17, 17, 19, 0.08);
          border-bottom: 1px solid rgba(17, 17, 19, 0.08);
        }

        .keycaps-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .tactile-keycap {
          width: 54px;
          height: 58px;
          background: linear-gradient(180deg, #FFFFFF 0%, #ECE9E2 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.25rem;
          color: #111113;
          border: 1px solid #D5D2CA;
          box-shadow: 
            0 1px 0 rgba(255, 255, 255, 0.9) inset,
            0 -3px 0 #C4C0B6 inset,
            0 6px 14px rgba(0, 0, 0, 0.14),
            0 2px 4px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          user-select: none;
          transition: transform 0.1s ease, box-shadow 0.1s ease;
        }

        .tactile-keycap:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 1px 0 rgba(255, 255, 255, 0.9) inset,
            0 -3px 0 #C4C0B6 inset,
            0 8px 18px rgba(0, 0, 0, 0.18);
        }

        .tactile-keycap:active,
        .tactile-keycap.pressed {
          transform: translateY(3px);
          box-shadow: 
            0 1px 0 rgba(255, 255, 255, 0.4) inset,
            0 -1px 0 #C4C0B6 inset,
            0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .tactile-keycap.accent-key {
          background: linear-gradient(180deg, #E53935 0%, #C62828 100%);
          color: #FFFFFF;
          border-color: #B71C1C;
          box-shadow: 
            0 1px 0 rgba(255, 255, 255, 0.4) inset,
            0 -3px 0 #8E1616 inset,
            0 6px 16px rgba(229, 57, 53, 0.4);
        }

        .keycaps-hint {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: rgba(17, 17, 19, 0.5);
        }

        /* Social Links */
        .shift-social-row {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          flex-wrap: wrap;
        }

        .social-ref-link {
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          color: #111113;
          text-decoration: none;
          transition: color var(--transition-fast), transform var(--transition-fast);
          display: inline-flex;
          align-items: center;
        }

        .social-ref-link:hover {
          color: var(--accent-orange);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .shift-card-wrapper {
            padding: 3rem 1.75rem;
            gap: 2rem;
          }

          .shift-top-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .shift-social-row {
            gap: 1.5rem;
          }

          .tactile-keycap {
            width: 44px;
            height: 48px;
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}
