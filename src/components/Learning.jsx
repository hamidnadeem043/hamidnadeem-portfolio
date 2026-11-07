import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Bot, Zap, ArrowRight, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { learningPaths } from '../data/portfolioData';

const pathIcons = {
  'python-backend': <Terminal className="w-5 h-5 text-[#58a6ff]" />,
  'ai-ml': <Bot className="w-5 h-5 text-[#38bdf8]" />,
  'ai-automation': <Zap className="w-5 h-5 text-[#e3b341]" />,
};

const badgeStyles = {
  'Current Core Focus': 'bg-[#58a6ff]/15 text-[#58a6ff] border-[#58a6ff]/30',
  'Learning & Exploration': 'bg-[#38bdf8]/15 text-[#38bdf8] border-[#38bdf8]/30',
  'Emerging Direction': 'bg-[#e3b341]/15 text-[#e3b341] border-[#e3b341]/30',
};

export default function Learning() {
  return (
    <section id="learning" className="py-20 px-5 md:px-10 relative bg-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#58a6ff]">
            <span>05.</span>
            <span className="uppercase tracking-wider">Current Learning Journey</span>
            <span className="w-12 h-px bg-[#30363d]" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#f0f6fc] tracking-tight">
            What I'm Learning &amp; Exploring
          </h2>
          <p className="text-sm text-[#8b949e] max-w-2xl font-light">
            A transparent overview of where I am currently investing my time outside of university coursework — expanding Python backend engineering and exploring AI technologies.
          </p>
        </div>

        {/* 3 Learning Paths Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {learningPaths.map((path, idx) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-[#161b22] border border-[#30363d] flex flex-col justify-between hover:border-[#58a6ff]/40 transition-colors"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#30363d]">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-[#0d1117] border border-[#30363d] flex items-center justify-center">
                      {pathIcons[path.id]}
                    </span>
                    <span className="text-xs font-mono font-medium text-[#8b949e]">
                      {path.path}
                    </span>
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-mono border ${
                      badgeStyles[path.statusBadge] || 'bg-[#21262d] text-[#8b949e]'
                    }`}
                  >
                    {path.statusBadge}
                  </span>
                </div>

                {/* Path Title & Focus */}
                <div className="mb-3">
                  <h3 className="font-heading font-semibold text-lg text-[#f0f6fc] leading-snug">
                    {path.title}
                  </h3>
                  <div className="text-xs font-mono text-[#58a6ff] mt-0.5">
                    Focus: {path.focus}
                  </div>
                </div>

                <p className="text-xs text-[#8b949e] font-light leading-relaxed mb-5">
                  {path.description}
                </p>

                {/* Topics List */}
                <div className="space-y-2 pt-2 border-t border-[#30363d]/60">
                  <span className="text-[10px] font-mono uppercase text-[#c9d1d9] block mb-2">
                    Key Topics &amp; Practice Areas:
                  </span>
                  <ul className="space-y-2">
                    {path.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2 text-xs text-[#c9d1d9] leading-relaxed font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#58a6ff] shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Path Footer */}
              <div className="pt-5 mt-6 border-t border-[#30363d] flex items-center justify-between text-xs font-mono text-[#8b949e]">
                <span>Status</span>
                <span className="text-[#3fb950] flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] animate-pulse-dot" />
                  Active Progress
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
