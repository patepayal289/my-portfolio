import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
// ❌ Remove this line:
// import heroImage from 'public/hero-image.jpg';

function App() {
  const appStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/hero-image.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    color: 'white',
    paddingTop: '60px', // offset for fixed navbar
  };

  return (
    <div style={appStyle}>
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about" style={{ paddingTop: '70px' }}>
        <AboutSection />
      </section>
      <section id="projects" style={{ paddingTop: '70px' }}>
        <ProjectsSection />
      </section>
      <section id="contact" style={{ paddingTop: '70px' }}>
        <ContactSection />
      </section>
    </div>
  );
}

export default App;
