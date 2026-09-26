import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#6C63FF', '#00D9FF', '#FF6B9D', '#4ADE80']
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-radial from-[#6C63FF]/15 via-[#00D9FF]/5 to-transparent rounded-full pointer-events-none blur-3xl animate-hero-glow" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#6C63FF]/30 bg-[#6C63FF]/10 text-xs font-semibold tracking-wider text-[#8B83FF] uppercase mb-8 backdrop-blur-md shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
          <span>{personalData.statusBadge}</span>
          <span className="opacity-40">•</span>
          <span>📍 {personalData.location}</span>
        </motion.div>

        {/* Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-bold text-5xl sm:text-7xl md:text-8xl tracking-tight leading-none mb-6"
        >
          {personalData.firstName} <br className="sm:hidden" />
          <span className="gradient-text-primary">{personalData.lastName}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-300 font-light tracking-wide max-w-2xl mb-3"
        >
          {personalData.subtitle}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xs sm:text-sm text-slate-400 italic mb-10 max-w-xl"
        >
          "{personalData.tagline}"
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white gradient-bg-primary shadow-lg shadow-[#6C63FF]/30 hover:shadow-[#6C63FF]/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-200 border border-white/15 bg-white/5 hover:bg-[#6C63FF]/10 hover:border-[#6C63FF] hover:text-[#8B83FF] hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-md"
          >
            <span>Get in Touch</span>
          </a>

          <a
            href={personalData.resumePrimary}
            download={personalData.resumePrimary}
            onClick={triggerConfetti}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#8B83FF] border border-[#6C63FF]/50 bg-[#6C63FF]/10 hover:bg-gradient-to-r hover:from-[#6C63FF] hover:to-[#00D9FF] hover:text-white hover:border-transparent hover:-translate-y-0.5 shadow-md shadow-[#6C63FF]/15 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center gap-3.5"
        >
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg border border-[#6C63FF]/20 bg-[#121628]/60 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#6C63FF] hover:bg-[#6C63FF]/20 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(108,99,255,0.3)] transition-all duration-300"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg border border-[#6C63FF]/20 bg-[#121628]/60 flex items-center justify-center text-slate-400 hover:text-[#00D9FF] hover:border-[#00D9FF] hover:bg-[#00D9FF]/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,217,255,0.3)] transition-all duration-300"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            className="w-11 h-11 rounded-lg border border-[#6C63FF]/20 bg-[#121628]/60 flex items-center justify-center text-slate-400 hover:text-[#FF6B9D] hover:border-[#FF6B9D] hover:bg-[#FF6B9D]/10 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,107,157,0.3)] transition-all duration-300"
            title="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Mouse Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 pointer-events-none opacity-75"
      >
        <div className="w-5 h-9 border-2 border-[#6C63FF]/40 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#6C63FF] rounded-full animate-scroll-wheel" />
        </div>
        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">Scroll</span>
      </motion.div>
    </section>
  );
}
