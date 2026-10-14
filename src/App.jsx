import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DesignApproach from './components/DesignApproach';
import AboutMe from './components/AboutMe';
import ProfessionalExperience from './components/ProfessionalExperience';
import ServicesAndToolkit from './components/ServicesAndToolkit';
import SelectedWork from './components/SelectedWork';
import FeaturedProduct from './components/FeaturedProduct';
import SystemThinking from './components/SystemThinking';
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
        <DesignApproach />
        <AboutMe />
        <ProfessionalExperience />
        <ServicesAndToolkit />
        <SelectedWork />
        <FeaturedProduct />
        <SystemThinking />
        <CaseStudiesSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
