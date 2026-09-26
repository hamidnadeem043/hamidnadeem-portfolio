import React from 'react';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitHubStats from './components/GitHubStats';
import Learning from './components/Learning';
import Certifications from './components/Certifications';
import Goals from './components/Goals';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#06080F] text-[#E8ECF4] selection:bg-[#6C63FF]/30 selection:text-[#00D9FF] font-body overflow-x-hidden">
      {/* Interactive Custom Ring Cursor */}
      <CustomCursor />

      {/* Particle Constellation Canvas */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Viewport */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <GitHubStats />
        <Learning />
        <Certifications />
        <Goals />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
