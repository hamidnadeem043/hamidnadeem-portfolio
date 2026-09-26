import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';
import { goalsData } from '../data/portfolioData';

export default function Goals() {
  return (
    <section id="goals" className="py-24 px-6 md:px-14 relative bg-[#0C0F1A]/40">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00D9FF]">
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] rounded-full" />
            <span>Vision</span>
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#00D9FF] to-[#6C63FF] rounded-full" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Goals & Aspirations
          </h2>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {goalsData.map((goal, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-[#121628]/60 border border-[#6C63FF]/15 backdrop-blur-md flex items-start gap-4 hover:border-[#00D9FF]/40 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,217,255,0.15)] transition-all duration-300"
            >
              <span className="text-2xl shrink-0 mt-0.5">{goal.emoji}</span>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {goal.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
