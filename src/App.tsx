import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PropertySearch } from './components/PropertySearch';
import { Properties } from './components/Properties';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'propiedades', 'nosotros', 'servicios', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="inicio">
          <Hero />
          <PropertySearch />
        </section>
        
        <section id="propiedades">
          <Properties />
        </section>
        
        <section id="nosotros">
          <About />
        </section>
        
        <section id="servicios">
          <Services />
        </section>
        
        <section id="contacto">
          <Contact />
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}