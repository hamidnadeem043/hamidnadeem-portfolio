import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Code2 } from 'lucide-react';
import { skillsCategories, matrix, matrixProjects, matrixNote } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...skillsCategories.map((c) => c.category)];

  const filteredCategories = skillsCategories
    .map((cat) => {
      if (activeTab !== 'All' && cat.category !== activeTab) return null;

      const matchingItems = cat.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (matchingItems.length === 0) return null;

      return {
        ...cat,
        items: matchingItems
      };
    })
    .filter(Boolean);

  return (
    <section id="skills" className="py-24 px-6 md:px-14 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00D9FF]">
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] rounded-full" />
            <span>Tech Stack</span>
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#00D9FF] to-[#6C63FF] rounded-full" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Skills & Technologies
          </h2>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === cat
                    ? 'bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] text-white shadow-lg shadow-[#6C63FF]/25 scale-105'
                    : 'bg-[#121628]/60 text-slate-400 border border-[#6C63FF]/15 hover:text-white hover:border-[#6C63FF]/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121628]/80 border border-[#6C63FF]/20 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00D9FF] transition-colors"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {filteredCategories.map((catGroup) => (
              <motion.div
                key={catGroup.category}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <h3 className="font-heading text-xs uppercase tracking-widest font-semibold text-slate-400">
                    {catGroup.category}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#6C63FF]/30 to-transparent" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {catGroup.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-3.5 rounded-xl bg-[#121628]/60 border border-[#6C63FF]/15 backdrop-blur-md flex items-center gap-3 hover:border-[#6C63FF]/50 hover:bg-[#6C63FF]/10 hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(108,99,255,0.2)] transition-all duration-300"
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-slate-200 truncate group-hover:text-white">
                          {skill.name}
                        </div>
                        <div className="text-[10px] text-slate-400 group-hover:text-[#00D9FF] transition-colors">
                          {skill.level}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm">
              No skills match your search query "{searchQuery}".
            </div>
          )}
        </div>

        {/* Project-Skill Usage Matrix */}
        <div className="mt-16 pt-12 border-t border-[#6C63FF]/20">
          <div className="mb-6 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D9FF]">
              <Code2 className="w-4 h-4" />
              <span>Project-Skill Matrix</span>
            </div>
            <h3 className="font-heading font-semibold text-xl text-white">
              What I have used, and where
            </h3>
            <p className="text-xs text-slate-400 font-light max-w-xl">
              Each glowing marker indicates real, production usage in a shipped project.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#6C63FF]/15 bg-[#121628]/60 backdrop-blur-xl">
            <table className="w-full min-w-[580px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#6C63FF]/20">
                  <th scope="col" className="p-3.5 pl-6 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Skill / Technology
                  </th>
                  {matrixProjects.map((p) => (
                    <th
                      key={p.id}
                      scope="col"
                      className="p-3.5 text-center text-xs font-semibold text-[#8B83FF] uppercase tracking-wider"
                    >
                      {p.short}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matrix.map((m) => (
                  <tr
                    key={m.skill}
                    className="border-b border-white/5 hover:bg-[#6C63FF]/10 transition-colors"
                  >
                    <td className="p-3 pl-6 text-xs font-medium text-slate-200">
                      {m.skill}
                    </td>
                    {matrixProjects.map((p) => {
                      const used = m.used.includes(p.id);
                      return (
                        <td key={p.id} className="p-3 text-center">
                          {used ? (
                            <span
                              className="inline-block w-2.5 h-2.5 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF]"
                              title={`Used in ${p.short}`}
                            />
                          ) : (
                            <span className="inline-block w-1 h-1 rounded-full bg-slate-700" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[11px] text-slate-500 italic">
            *{matrixNote}
          </p>
        </div>
      </div>
    </section>
  );
}
