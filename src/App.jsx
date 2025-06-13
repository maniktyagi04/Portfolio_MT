import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedBackground from './components/AnimatedBackground';
import IntroSection from './components/IntroSection';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
    });

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (showIntro) {
    return <IntroSection />;
  }

  return (
    <Router>
      <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden w-full">
        <AnimatedBackground />
        <Navigation activeSection={activeSection} />
        
        <main className="relative z-10 w-full">
          <section id="home" className="w-full">
            <HeroSection />
          </section>
          
          <section id="about" className="w-full">
            <AboutSection />
          </section>
          
          <section id="portfolio" className="w-full">
            <PortfolioSection />
          </section>
          
          <section id="contact" className="w-full">
            <ContactSection />
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;