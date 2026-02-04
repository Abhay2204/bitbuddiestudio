import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Works from './sections/Works';
import Pricing from './sections/Pricing';
import TechStack from './sections/TechStack';
import Contact from './sections/Contact';

import './index.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    // Smooth scroll for anchors
    const handleAnchorClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="bg-gradient-mesh" aria-hidden="true" />

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Works />
        <Pricing />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
