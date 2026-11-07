import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Mail, Code2, Terminal, Sparkles } from 'lucide-react';
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
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#58a6ff]/10 via-[#38bdf8]/5 to-transparent rounded-full pointer-events-none blur-3xl animate-hero-glow" />

      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: 60% Width on Desktop (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1"
          >
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#30363d] bg-[#161b22] text-xs font-mono text-[#c9d1d9] mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse-dot" />
              <span>{personalData.statusBadge}</span>
              <span className="text-[#8b949e] hidden sm:inline">•</span>
              <span className="text-[#8b949e] hidden sm:inline">📍 {personalData.location}</span>
            </div>

            {/* Greeting */}
            <p className="text-base sm:text-lg font-mono font-medium text-[#58a6ff] mb-1">
              Hi, I'm
            </p>

            {/* Large Heading */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#f0f6fc] tracking-tight mb-2">
              Hamid Nadeem
            </h1>

            {/* Professional Headline */}
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-[#c9d1d9] mb-4 flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span>Software Developer</span>
              <span className="text-[#58a6ff] font-normal text-sm sm:text-base font-mono">
                | Full-Stack & Python
              </span>
            </h2>

            {/* Supporting Introduction */}
            <p className="text-sm sm:text-base text-[#8b949e] leading-relaxed mb-6 font-light max-w-xl">
              Software Engineering student and developer with hands-on experience in full-stack web development. Currently expanding backend expertise with{' '}
              <span className="text-[#f0f6fc] font-normal">Python & Django</span> while actively exploring{' '}
              <span className="text-[#f0f6fc] font-normal">Artificial Intelligence</span>,{' '}
              <span className="text-[#f0f6fc] font-normal">Machine Learning</span>, and{' '}
              <span className="text-[#f0f6fc] font-normal">AI Automation workflows</span> to engineer modern, intelligent software solutions.
            </p>

            {/* Technology Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8 max-w-xl">
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-md bg-[#161b22] border border-[#30363d] text-xs font-mono text-[#c9d1d9] hover:border-[#58a6ff]/50 hover:text-[#58a6ff] transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Action Buttons & Social Links Container */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {/* Primary Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
                <a
                  href="#projects"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#1f6feb] hover:bg-[#388bfd] shadow-sm hover:shadow-[#58a6ff]/20 transition-all duration-200"
                >
                  <span>Explore My Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={personalData.resumePrimary}
                  download="Hamid_Nadeem_Resume.pdf"
                  onClick={triggerConfetti}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#f0f6fc] bg-[#21262d] border border-[#30363d] hover:bg-[#30363d] hover:border-[#58a6ff]/50 transition-all duration-200"
                >
                  <Download className="w-4 h-4 text-[#58a6ff]" />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:pl-2 sm:border-l sm:border-[#30363d]">
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
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 40% Width on Desktop (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Subtle blue/cyan ambient glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#58a6ff]/25 via-[#38bdf8]/15 to-[#58a6ff]/10 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Portrait Frame Container */}
              <div className="relative w-56 h-56 sm:w-68 sm:h-68 md:w-76 md:h-76 lg:w-80 lg:h-80 xl:w-88 xl:h-88 rounded-2xl p-2 bg-[#161b22] border border-[#30363d] shadow-2xl">
                {/* Photo Element */}
                <div className="w-full h-full rounded-xl overflow-hidden bg-[#0d1117] relative">
                  <img
                    src={personalData.photo}
                    alt={personalData.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={(e) => {
                      e.currentTarget.src = personalData.fallbackPhoto;
                    }}
                  />
                  {/* Subtle bottom vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating "Open to Opportunities" Badge */}
                <div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-3 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-[#161b22]/95 backdrop-blur-md border border-[#30363d] shadow-xl flex items-center gap-2.5 z-20">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3fb950] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3fb950]" />
                  </span>
                  <div className="text-left">
                    <p className="text-[11px] font-semibold text-[#f0f6fc] leading-tight">
                      Open to Opportunities
                    </p>
                    <p className="text-[10px] text-[#8b949e] font-mono leading-tight">
                      Roles & Internships
                    </p>
                  </div>
                </div>

                {/* Minimal Decorative Element: Top-Left Focus Pill */}
                <div className="absolute -top-3 -left-2 sm:-top-3.5 sm:-left-3 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-[#161b22]/95 backdrop-blur-md border border-[#30363d] shadow-md flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-[#58a6ff] z-20">
                  <Terminal className="w-3.5 h-3.5 text-[#58a6ff]" />
                  <span>Full-Stack & Python</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5 pointer-events-none opacity-50">
        <div className="w-4 h-7 border border-[#30363d] rounded-full flex justify-center p-0.5">
          <div className="w-1 h-1.5 bg-[#58a6ff] rounded-full animate-scroll-wheel" />
        </div>
        <span className="text-[9px] uppercase font-mono tracking-widest text-[#8b949e]">Scroll</span>
      </div>
    </section>
  );
}
