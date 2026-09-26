import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function GitHubStats() {
  return (
    <section id="github" className="py-24 px-6 md:px-14 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00D9FF]">
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] rounded-full" />
            <span>Open Source</span>
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#00D9FF] to-[#6C63FF] rounded-full" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            GitHub Activity & Metrics
          </h2>
        </div>

        {/* Stats Image Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 w-full">
            <img
              src="https://github-readme-stats.vercel.app/api?username=hamidnadeem043&show_icons=true&theme=tokyonight&hide_border=true&count_private=true&title_color=6C63FF&icon_color=00D9FF&text_color=9BA3B5&bg_color=0C0F1A"
              alt="Hamid Nadeem GitHub Stats"
              className="h-44 rounded-2xl border border-[#6C63FF]/20 shadow-xl bg-[#0C0F1A] hover:border-[#6C63FF]/50 transition-all duration-300"
              loading="lazy"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=hamidnadeem043&layout=compact&theme=tokyonight&hide_border=true&title_color=6C63FF&text_color=9BA3B5&bg_color=0C0F1A"
              alt="Hamid Nadeem Top Languages"
              className="h-44 rounded-2xl border border-[#6C63FF]/20 shadow-xl bg-[#0C0F1A] hover:border-[#6C63FF]/50 transition-all duration-300"
              loading="lazy"
            />
          </div>

          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=hamidnadeem043&theme=tokyonight&hide_border=true&ring=6C63FF&fire=00D9FF&currStreakLabel=6C63FF&background=0C0F1A&sideLabels=9BA3B5&dates=9BA3B5"
            alt="Hamid Nadeem GitHub Streak Stats"
            className="w-full max-w-xl rounded-2xl border border-[#6C63FF]/20 shadow-xl bg-[#0C0F1A] hover:border-[#6C63FF]/50 transition-all duration-300"
            loading="lazy"
          />

          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-[#121628] border border-[#6C63FF]/30 hover:border-[#6C63FF] hover:bg-[#6C63FF]/20 hover:-translate-y-0.5 transition-all shadow-md"
          >
            <Github className="w-4 h-4 text-[#6C63FF]" />
            <span>Visit @hamidnadeem043 on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
