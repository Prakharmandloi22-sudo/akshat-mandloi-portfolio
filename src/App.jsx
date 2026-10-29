import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import ProfessionalExperience from './components/ProfessionalExperience';
import CoreSkills from './components/CoreSkills';
import CaseStudiesSection from './components/CaseStudiesSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import './styles/global.css';

export default function App() {
  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app">
      <Navbar onOpenContact={handleOpenContact} />
      <main>
        <Hero onOpenContact={handleOpenContact} />
        <AboutMe />
        <ProfessionalExperience />
        <CoreSkills />
        <CaseStudiesSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
