import React from 'react';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Learning from './components/Learning';
import Certifications from './components/Certifications';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-[#f0f6fc] selection:bg-[#58a6ff]/30 selection:text-[#58a6ff] font-body overflow-x-hidden">
      {/* Subtle Interactive Custom Ring Cursor */}
      <CustomCursor />

      {/* Subtle Background Particle Canvas */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Viewport in User's Requested Order */}
      <main className="relative z-10">
        {/* 1. Home / Hero */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Technical Skills */}
        <Skills />

        {/* 4. Professional Experience */}
        <Experience />

        {/* 5. Featured Projects */}
        <Projects />

        {/* 6. Current Learning Journey */}
        <Learning />

        {/* 7. Certifications & Achievements */}
        <Certifications />

        {/* Open Source / GitHub Metrics */}
        <GitHubStats />

        {/* 8. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
