import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Bot, Zap, Wrench, CheckCircle2, Clock, Compass, Sparkles } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

const categoryIcons = {
  'Frontend Development': <Code2 className="w-5 h-5 text-[#58a6ff]" />,
  'Backend Development': <Server className="w-5 h-5 text-[#38bdf8]" />,
  'Databases': <Database className="w-5 h-5 text-[#bc8cff]" />,
  'AI & Machine Learning': <Bot className="w-5 h-5 text-[#58a6ff]" />,
  'Automation & Emerging Tech': <Zap className="w-5 h-5 text-[#38bdf8]" />,
  'Development Tools': <Wrench className="w-5 h-5 text-[#3fb950]" />,
};

function LevelBadge({ level }) {
  if (level === 'Practical Experience') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-[#238636]/15 text-[#3fb950] border border-[#238636]/30">
        <CheckCircle2 className="w-3 h-3" />
        <span>Practical</span>
      </span>
    );
  }
  if (level === 'Currently Learning') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-[#58a6ff]/15 text-[#58a6ff] border border-[#58a6ff]/30">
        <Clock className="w-3 h-3" />
        <span>Learning</span>
      </span>
    );
  }
  if (level === 'Emerging Specialization') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-[#38bdf8]/15 text-[#38bdf8] border border-[#38bdf8]/30">
        <Sparkles className="w-3 h-3 text-[#38bdf8]" />
        <span>Specialization</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-[#8b949e]/15 text-[#8b949e] border border-[#8b949e]/30">
      <Compass className="w-3 h-3" />
      <span>Exploring</span>
    </span>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsCategories.map((c) => c.category)];

  const displayedCategories =
    activeCategory === 'All'
      ? skillsCategories
      : skillsCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 px-5 md:px-10 relative bg-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#58a6ff]">
            <span>02.</span>
            <span className="uppercase tracking-wider">Technical Skills</span>
            <span className="w-12 h-px bg-[#30363d]" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#f0f6fc] tracking-tight">
            Categorized Technical Stack & Experience Levels
          </h2>
          <p className="text-sm text-[#8b949e] max-w-2xl font-light">
            Clear distinction between technologies with hands-on project experience, active learning areas, and technical exploration. No arbitrary percentage bars.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#30363d]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#58a6ff] text-[#0d1117] font-semibold shadow-sm'
                  : 'bg-[#161b22] text-[#8b949e] border border-[#30363d] hover:text-[#f0f6fc] hover:border-[#58a6ff]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 mb-8 text-xs text-[#8b949e]">
          <span className="font-mono text-[11px] uppercase text-[#c9d1d9]">Proficiency Legend:</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#3fb950]" />
            <span>Practical Experience (Shipped in projects/internships)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#58a6ff]" />
            <span>Currently Learning (Active daily technical focus)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
            <span>Emerging Specialization (Career focus)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#8b949e]" />
            <span>Exploring (Concepts & emerging experiments)</span>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedCategories.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-5 rounded-xl bg-[#161b22] border border-[#30363d] flex flex-col justify-between hover:border-[#58a6ff]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#30363d]">
                  <div className="flex items-center gap-2.5">
                    {categoryIcons[group.category] || <Code2 className="w-5 h-5 text-[#58a6ff]" />}
                    <h3 className="font-heading font-semibold text-sm text-[#f0f6fc]">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#8b949e]">
                    {group.items.length} skills
                  </span>
                </div>

                <div className="space-y-2.5">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-lg bg-[#0d1117] border border-[#30363d]/60 flex items-center justify-between gap-3 text-xs"
                    >
                      <span className="font-medium text-[#c9d1d9]">{skill.name}</span>
                      <LevelBadge level={skill.level} />
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-[#30363d]/50 text-[11px] font-mono text-[#8b949e]">
                Stage: <span className="text-[#c9d1d9]">{group.levelNote}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
