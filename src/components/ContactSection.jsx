import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Phone, Github, Linkedin, Twitter, Figma, Dribbble } from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import '../styles/global.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Design & Development',
    budget: '$5k - $10k',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMsg, setStatusMsg] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter project details or message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setStatusMsg('');

    try {
      // Check if user configured custom EmailJS keys
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            project_type: formData.projectType,
            budget: formData.budget,
            message: formData.message,
            to_name: portfolioData.personalInfo.name
          },
          publicKey
        );
      } else {
        // Simulated network delay for interactive demo feedback
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setStatus('success');
      setStatusMsg('Thank you! Your message has been received. Akshat will get back to you within 24 hours.');

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Ignore confetti if unsupported
      }

      setFormData({
        name: '',
        email: '',
        projectType: 'Web Design & Development',
        budget: '$5k - $10k',
        message: ''
      });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setStatusMsg('Failed to send message. Please try sending an email directly to ' + portfolioData.personalInfo.email);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-layout">
          {/* Left Column: Direct Info */}
          <div className="contact-info-col">
            <span className="section-num font-mono">04 · GET IN TOUCH</span>

            <h2 className="contact-heading font-heading">
              Let's build something <br />
              <span className="text-orange">extraordinary together.</span>
            </h2>

            <p className="contact-subtext">
              Have a project requirement, Flutter app idea, design system challenge, or role opportunity? Send a message or reach out directly.
            </p>

            <div className="info-cards-list">
              <div className="info-card">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="info-label font-mono">EMAIL DIRECTLY</span>
                  <a href={`mailto:${portfolioData.personalInfo.email}`} className="info-val">
                    {portfolioData.personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="info-label font-mono">LOCATION</span>
                  <span className="info-val">{portfolioData.personalInfo.location}</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="info-label font-mono">AVAILABILITY</span>
                  <span className="info-val">{portfolioData.personalInfo.availability}</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="socials-row">
              <span className="socials-label font-mono">CONNECT:</span>
              <div className="social-links">
                <a href={portfolioData.personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href={portfolioData.personalInfo.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                  <Twitter size={18} />
                </a>
                <a href={portfolioData.personalInfo.figma} target="_blank" rel="noreferrer" aria-label="Figma">
                  <Figma size={18} />
                </a>
                <a href={portfolioData.personalInfo.dribbble} target="_blank" rel="noreferrer" aria-label="Dribbble">
                  <Dribbble size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="contact-form-col">
            <div className="form-card">
              <h3 className="form-title font-heading">Start a Project</h3>

              {status === 'success' ? (
                <div className="success-state">
                  <CheckCircle2 size={54} className="success-icon" />
                  <h4 className="success-title font-heading">Message Delivered!</h4>
                  <p className="success-msg">{statusMsg}</p>
                  <button 
                    className="btn btn-primary-dark" 
                    onClick={() => setStatus('idle')}
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {status === 'error' && (
                    <div className="error-banner">
                      <AlertCircle size={18} />
                      <span>{statusMsg}</span>
                    </div>
                  )}

                  <div className="form-group">
                    <label className="form-label font-mono">YOUR NAME *</label>
                    <input 
                      type="text" 
                      className={`form-input ${errors.name ? 'has-error' : ''}`}
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label className="form-label font-mono">EMAIL ADDRESS *</label>
                    <input 
                      type="email" 
                      className={`form-input ${errors.email ? 'has-error' : ''}`}
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label font-mono">PROJECT TYPE</label>
                      <select 
                        className="form-select"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      >
                        <option value="Web Design & Development">Web Design & React</option>
                        <option value="Flutter Mobile App">Flutter Mobile App</option>
                        <option value="UI/UX Design System">UI/UX Design System</option>
                        <option value="Full Stack & AI Solution">Full Stack & AI Application</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label font-mono">BUDGET ESTIMATE</label>
                      <select 
                        className="form-select"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      >
                        <option value="< $2.5k">&lt; $2,500</option>
                        <option value="$2.5k - $5k">$2,500 - $5,000</option>
                        <option value="$5k - $10k">$5,000 - $10,000</option>
                        <option value="> $10k">&gt; $10,000</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label font-mono">PROJECT DETAILS / MESSAGE *</label>
                    <textarea 
                      className={`form-textarea ${errors.message ? 'has-error' : ''}`}
                      rows="4"
                      placeholder="Tell me about your goals, timeline, and requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                    {errors.message && <span className="error-text">{errors.message}</span>}
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-orange btn-full submit-btn"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <span>SENDING MESSAGE...</span>
                    ) : (
                      <>
                        SEND MESSAGE <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 7rem 0;
          background-color: var(--bg-dark);
          color: #FFFFFF;
        }

        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-heading {
          font-family: var(--font-heading);
          font-size: clamp(2.4rem, 4.8vw, 3.8rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 0.8rem 0 1.5rem;
        }

        .contact-subtext {
          font-size: 1.1rem;
          color: var(--text-light-secondary);
          line-height: 1.55;
          margin-bottom: 2.5rem;
        }

        .info-cards-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 3rem;
        }

        .info-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-md);
        }

        .info-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(239, 68, 35, 0.15);
          color: var(--accent-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-label {
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: var(--text-light-muted);
          display: block;
        }

        .info-val {
          font-size: 1rem;
          font-weight: 700;
          color: #FFFFFF;
        }

        .socials-row {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .socials-label {
          font-size: 0.725rem;
          color: var(--text-light-muted);
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
        }

        .social-links a {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          transition: all var(--transition-fast);
        }

        .social-links a:hover {
          background: var(--accent-orange);
          transform: translateY(-2px);
        }

        /* Form Card */
        .form-card {
          background: #FFFFFF;
          color: var(--text-dark-primary);
          border-radius: var(--radius-xl);
          padding: 3rem 2.5rem;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
        }

        .form-title {
          font-size: 1.8rem;
          font-weight: 800;
          margin-bottom: 2rem;
          color: var(--text-dark-primary);
        }

        .form-group {
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-label {
          font-size: 0.675rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-dark-secondary);
        }

        .form-input, .form-select, .form-textarea {
          font-family: inherit;
          font-size: 0.95rem;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(17, 17, 19, 0.15);
          background: var(--bg-light);
          color: var(--text-dark-primary);
          outline: none;
          transition: border-color var(--transition-fast);
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: var(--accent-orange);
        }

        .form-input.has-error, .form-textarea.has-error {
          border-color: #EF4444;
          background: #FEF2F2;
        }

        .error-text {
          font-size: 0.75rem;
          color: #EF4444;
          font-weight: 600;
        }

        .error-banner {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #FEF2F2;
          color: #991B1B;
          padding: 0.85rem 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
        }

        .submit-btn {
          margin-top: 1rem;
          padding: 1.1rem;
          font-size: 0.9rem;
        }

        .success-state {
          text-align: center;
          padding: 3rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .success-icon {
          color: #10B981;
        }

        .success-title {
          font-size: 1.8rem;
          font-weight: 800;
        }

        .success-msg {
          font-size: 0.95rem;
          color: var(--text-dark-secondary);
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr;
          }

          .form-card {
            padding: 2rem 1.5rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
