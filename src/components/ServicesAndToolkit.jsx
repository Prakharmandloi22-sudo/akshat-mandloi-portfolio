import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

export default function ServicesAndToolkit() {
  return (
    <section className="services-toolkit-section">
      <div className="container">
        {/* WHAT I DO Header */}
        <div className="services-top-bar font-mono">
          <span className="services-meta">WHAT I DO</span>
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

          <p className="services-subtext font-mono">
            From the first rough flow to a robust visual language.
          </p>
        </div>

        {/* 8 Capability Rows (2 columns) */}
        <div className="services-grid font-mono">
          {portfolioData.servicesList.map((service, idx) => (
            <motion.div 
              key={service.num}
              className="service-row-item"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ x: 6 }}
            >
              <div className="service-left">
                <span className="service-num">{service.num}</span>
                <span className="service-title">{service.title}</span>
              </div>
              <div className="service-icon-box">
                <ArrowUpRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* TOOLKIT · TOOLS THAT SUPPORT THE THINKING */}
        <div className="toolkit-wrapper">
          <div className="toolkit-header font-mono">
            <span className="tk-tag text-orange">TOOLKIT</span>
            <span className="tk-title">TOOLS THAT SUPPORT THE THINKING</span>
          </div>

          <div className="toolkit-pills-row font-mono">
            {portfolioData.toolkit.map((tool, idx) => (
              <motion.div 
                key={idx}
                className="tool-pill font-mono"
                whileHover={{ y: -3 }}
              >
                <span className="tool-key">{tool.key}</span>
                <span className="tool-name">{tool.name}</span>
              </motion.div>
            ))}
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
          margin-bottom: 4rem;
        }

        .services-heading {
          font-size: clamp(2.8rem, 5.5vw, 4.8rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        .services-subtext {
          font-size: 0.95rem;
          color: var(--text-dark-secondary);
          max-width: 360px;
          line-height: 1.5;
        }

        /* 8 Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem 2rem;
          margin-bottom: 5rem;
        }

        .service-row-item {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(8px);
          border-radius: var(--radius-sm);
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid rgba(17, 17, 19, 0.08);
          transition: all var(--transition-fast);
          cursor: pointer;
        }

        .service-row-item:hover {
          background: #FFFFFF;
          border-color: var(--accent-orange);
          box-shadow: 0 10px 24px rgba(0,0,0,0.06);
        }

        .service-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .service-num {
          font-size: 0.75rem;
          color: var(--accent-orange);
          font-weight: 700;
        }

        .service-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-dark-primary);
        }

        .service-icon-box {
          width: 24px;
          height: 24px;
          border-radius: 4px;
          background: var(--bg-dark);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Toolkit Row */
        .toolkit-wrapper {
          padding-top: 3rem;
          border-top: 1px solid rgba(17, 17, 19, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .toolkit-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .toolkit-pills-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .tool-pill {
          background: #FFFFFF;
          border: 1px solid rgba(17, 17, 19, 0.12);
          border-radius: var(--radius-full);
          padding: 0.5rem 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.75rem;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
        }

        .tool-key {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--bg-dark);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.65rem;
          font-weight: 800;
        }

        .tool-name {
          color: var(--text-dark-primary);
        }

        @media (max-width: 900px) {
          .services-header-layout {
            flex-direction: column;
            align-items: flex-start;
          }

          .services-grid {
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
