import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail, Code2, Sparkles, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#58a6ff', '#38bdf8', '#3fb950', '#f0f6fc'],
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-5 pt-28 pb-16 overflow-hidden"
    >
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-radial from-[#58a6ff]/10 via-[#38bdf8]/5 to-transparent rounded-full pointer-events-none blur-3xl animate-hero-glow" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Profile Image with subtle GitHub-dark border ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6 group"
        >
          {/* Subtle Accent Glow Ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#58a6ff] to-[#38bdf8] rounded-full blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-[#161b22] border border-[#30363d]">
            <img
              src={personalData.photo}
              alt={personalData.name}
              className="w-full h-full object-cover rounded-full bg-[#0d1117]"
              onError={(e) => {
                e.currentTarget.src = personalData.fallbackPhoto;
              }}
            />
          </div>

          {/* Online Active Indicator */}
          <div
            className="absolute bottom-1 right-1 px-2.5 py-0.5 rounded-full bg-[#161b22] border border-[#30363d] flex items-center gap-1.5 shadow-md"
            title="Active & Available"
          >
            <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse-dot" />
            <span className="text-[10px] font-medium text-[#c9d1d9]">Open to Roles</span>
          </div>
        </motion.div>

        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#30363d] bg-[#161b22] text-xs font-medium text-[#c9d1d9] mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse-dot" />
          <span>{personalData.statusBadge}</span>
          <span className="text-[#8b949e]">•</span>
          <span className="text-[#8b949e]">📍 {personalData.location}</span>
        </motion.div>

        {/* Greeting & Name Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-2 mb-4"
        >
          <p className="text-base sm:text-lg font-mono text-[#58a6ff]">
            Hi, I'm
          </p>
          <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl text-[#f0f6fc] tracking-tight">
            Hamid Nadeem
          </h1>
        </motion.div>

        {/* Primary Subtitle Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl text-[#c9d1d9] max-w-2xl leading-snug mb-4"
        >
          {personalData.subtitle}
        </motion.h2>

        {/* Professional Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-sm sm:text-base text-[#8b949e] max-w-2xl leading-relaxed mb-8 font-light"
        >
          {personalData.supportingText}
        </motion.p>

        {/* Focus Tags */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-9"
        >
          {[
            'Full-Stack Web Development',
            'Python & Django',
            'AI / ML Fundamentals',
            'AI Automation & Workflows',
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md bg-[#161b22] border border-[#30363d] text-xs font-mono text-[#c9d1d9] hover:border-[#58a6ff]/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Two Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-10"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#1f6feb] hover:bg-[#388bfd] shadow-sm hover:shadow-[#58a6ff]/20 transition-all duration-200"
          >
            <span>Explore My Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={personalData.resumePrimary}
            download="Hamid_Nadeem_Resume.pdf"
            onClick={triggerConfetti}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#f0f6fc] bg-[#21262d] border border-[#30363d] hover:bg-[#30363d] hover:border-[#58a6ff]/50 transition-all duration-200"
          >
            <Download className="w-4 h-4 text-[#58a6ff]" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-3"
        >
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-[#161b22] border border-[#30363d] flex items-center justify-center text-[#8b949e] hover:text-[#f0f6fc] hover:border-[#58a6ff] hover:bg-[#21262d] transition-all"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-[#161b22] border border-[#30363d] flex items-center justify-center text-[#8b949e] hover:text-[#58a6ff] hover:border-[#58a6ff] hover:bg-[#21262d] transition-all"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            className="w-10 h-10 rounded-lg bg-[#161b22] border border-[#30363d] flex items-center justify-center text-[#8b949e] hover:text-[#38bdf8] hover:border-[#38bdf8] hover:bg-[#21262d] transition-all"
            title="Send Email"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 pointer-events-none opacity-60">
        <div className="w-4 h-7 border border-[#30363d] rounded-full flex justify-center p-0.5">
          <div className="w-1 h-1.5 bg-[#58a6ff] rounded-full animate-scroll-wheel" />
        </div>
        <span className="text-[10px] uppercase font-mono tracking-widest text-[#8b949e]">Scroll</span>
      </div>
    </section>
  );
}
