import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function GitHubStats() {
  return (
    <section id="github" className="py-20 px-5 md:px-10 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#58a6ff]">
            <Activity className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider">Open Source &amp; Activity</span>
            <span className="w-12 h-px bg-[#30363d]" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#f0f6fc] tracking-tight">
            GitHub Metrics &amp; Contribution Overview
          </h2>
          <p className="text-sm text-[#8b949e] max-w-2xl font-light">
            Consistent commitment to project development, continuous learning, and open-source version control.
          </p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <div className="p-4 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-center overflow-hidden">
              <img
                src="https://github-readme-stats.vercel.app/api?username=hamidnadeem043&show_icons=true&theme=github_dark&hide_border=true&count_private=true&title_color=58a6ff&icon_color=38bdf8&text_color=c9d1d9&bg_color=161b22"
                alt="Hamid Nadeem GitHub Stats"
                className="w-full h-auto max-w-md object-contain"
                loading="lazy"
              />
            </div>

            <div className="p-4 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-center overflow-hidden">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=hamidnadeem043&layout=compact&theme=github_dark&hide_border=true&title_color=58a6ff&text_color=c9d1d9&bg_color=161b22"
                alt="Hamid Nadeem Top Languages"
                className="w-full h-auto max-w-md object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <div className="w-full p-4 rounded-xl bg-[#161b22] border border-[#30363d] flex items-center justify-center overflow-hidden">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=hamidnadeem043&theme=github-dark-blue&hide_border=true&ring=58a6ff&fire=38bdf8&currStreakLabel=58a6ff&background=161b22&sideLabels=8b949e&dates=c9d1d9"
              alt="Hamid Nadeem GitHub Streak Stats"
              className="w-full max-w-xl object-contain"
              loading="lazy"
            />
          </div>

          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#f0f6fc] bg-[#21262d] border border-[#30363d] hover:bg-[#30363d] hover:border-[#58a6ff]/40 transition-all"
          >
            <Github className="w-4 h-4 text-[#58a6ff]" />
            <span>Explore @hamidnadeem043 on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#8b949e]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
