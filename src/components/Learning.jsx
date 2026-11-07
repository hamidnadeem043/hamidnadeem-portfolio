import React from 'react';
import { motion } from 'framer-motion';
import { learningTopics } from '../data/portfolioData';

export default function Learning() {
  return (
    <section id="learning" className="py-24 px-6 md:px-14 relative bg-[#0C0F1A]/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00D9FF]">
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] rounded-full" />
            <span>Growth</span>
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#00D9FF] to-[#6C63FF] rounded-full" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Currently Learning
          </h2>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {learningTopics.map((topic, idx) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-[#121628]/60 border border-[#6C63FF]/15 backdrop-blur-md flex items-center gap-4 hover:border-[#6C63FF]/40 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(108,99,255,0.15)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#6C63FF]/10 border border-[#6C63FF]/20 flex items-center justify-center text-2xl shrink-0">
                {topic.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-0.5">
                  <h3 className="font-heading font-semibold text-sm text-white truncate">
                    {topic.title}
                  </h3>
                  {topic.state && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/25 shrink-0">
                      {topic.state}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {topic.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
