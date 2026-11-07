import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
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

  const techBadges = [
    'React.js',
    'Python & Django',
    'Node.js',
    'Tailwind CSS',
    'AI / ML & Gemini API',
    'AI Automation',
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-5 sm:px-8 lg:px-12 pt-24 pb-16 lg:py-0 overflow-hidden"
    >
      {/* Background Gradient & Radial Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-radial from-[#38bdf8]/12 via-[#58a6ff]/5 to-transparent rounded-full pointer-events-none blur-3xl animate-hero-glow" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: 60% Width on Desktop (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
          >
            {/* Heading: Hi — I'm Hamid Nadeem */}
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f0f6fc] tracking-tight mb-2">
              Hi — I'm Hamid Nadeem
            </h1>

            {/* Headline: Cyan Uppercase like reference */}
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-[#38bdf8] uppercase tracking-wider mb-5">
              Software Developer
            </h2>

            {/* Professional Supporting Paragraph */}
            <p className="text-sm sm:text-base text-[#8b949e] leading-relaxed mb-6 font-light max-w-xl">
              Software Engineering student and developer with hands-on experience in full-stack web development.
              Expanding backend engineering expertise with{' '}
              <span className="text-[#f0f6fc] font-normal">Python &amp; Django</span> while actively exploring{' '}
              <span className="text-[#f0f6fc] font-normal">Artificial Intelligence</span>,{' '}
              <span className="text-[#f0f6fc] font-normal">Machine Learning</span>, and{' '}
              <span className="text-[#f0f6fc] font-normal">AI Automation workflows</span> to engineer modern, scalable software solutions.
            </p>

            {/* Technology Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8 max-w-xl">
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-md bg-[#161b22] border border-[#30363d] text-xs font-mono text-[#c9d1d9] hover:border-[#38bdf8]/50 hover:text-[#38bdf8] transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Button & Social Actions Group (Matches Reference Style) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {/* Primary Action Button */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-[#0d1117] bg-[#38bdf8] hover:bg-[#58a6ff] shadow-md shadow-[#38bdf8]/20 hover:shadow-[#58a6ff]/30 transition-all duration-200"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Resume Download Icon Button */}
              <a
                href={personalData.resumePrimary}
                download="Hamid_Nadeem_Resume.pdf"
                onClick={triggerConfetti}
                className="w-12 h-12 rounded-lg bg-[#161b22] border border-[#30363d] flex items-center justify-center text-[#f0f6fc] hover:text-[#38bdf8] hover:border-[#38bdf8] hover:bg-[#21262d] transition-all shadow-sm group"
                title="Download Resume (PDF)"
                aria-label="Download Resume"
              >
                <FileText className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>

              {/* LinkedIn Icon Button */}
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-[#161b22] border border-[#30363d] flex items-center justify-center text-[#f0f6fc] hover:text-[#38bdf8] hover:border-[#38bdf8] hover:bg-[#21262d] transition-all shadow-sm group"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>

              {/* GitHub Icon Button */}
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-[#161b22] border border-[#30363d] flex items-center justify-center text-[#f0f6fc] hover:text-[#38bdf8] hover:border-[#38bdf8] hover:bg-[#21262d] transition-all shadow-sm group"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>

              {/* Mail Icon Button */}
              <a
                href={`mailto:${personalData.email}`}
                className="w-12 h-12 rounded-lg bg-[#161b22] border border-[#30363d] flex items-center justify-center text-[#f0f6fc] hover:text-[#38bdf8] hover:border-[#38bdf8] hover:bg-[#21262d] transition-all shadow-sm group"
                title="Send Email"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 40% Width on Desktop (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative flex items-center justify-center">
              
              {/* Outer Dashed Decorative Ring (Rotating Tech Accent) */}
              <svg
                className="absolute -inset-6 sm:-inset-8 w-[calc(100%+3rem)] sm:w-[calc(100%+4rem)] h-[calc(100%+3rem)] sm:h-[calc(100%+4rem)] pointer-events-none animate-spin-slow"
                viewBox="0 0 200 200"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="94"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeDasharray="10 18"
                  strokeLinecap="round"
                  className="opacity-75"
                />
              </svg>

              {/* Ambient Circular Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#38bdf8]/20 to-[#58a6ff]/10 blur-2xl pointer-events-none" />

              {/* Circular Portrait Frame */}
              <div className="relative w-56 h-56 sm:w-68 sm:h-68 md:w-80 md:h-80 lg:w-84 lg:h-84 xl:w-92 xl:h-92 rounded-full p-1.5 bg-[#161b22] border-2 sm:border-[3px] border-[#38bdf8]/50 shadow-[0_0_50px_rgba(56,189,248,0.22)] overflow-hidden group">
                <img
                  src={personalData.photo}
                  alt={personalData.name}
                  className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = personalData.fallbackPhoto;
                  }}
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5 pointer-events-none opacity-50">
        <div className="w-4 h-7 border border-[#30363d] rounded-full flex justify-center p-0.5">
          <div className="w-1 h-1.5 bg-[#38bdf8] rounded-full animate-scroll-wheel" />
        </div>
        <span className="text-[9px] uppercase font-mono tracking-widest text-[#8b949e]">Scroll</span>
      </div>
    </section>
  );
}
