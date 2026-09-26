import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, BookOpen } from 'lucide-react';
import { personalData, statsData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-14 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-[#00D9FF]">
              <span className="w-7 h-[2px] bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] rounded-full" />
              <span>About Me</span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Building full-stack experiences that matter
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed font-light">
              {personalData.bioParagraphs.map((para, idx) => (
                <p key={idx} className="hover:text-slate-200 transition-colors">
                  {para}
                </p>
              ))}
            </div>

            {/* Key Quick Badges */}
            <div className="pt-2 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#121628]/80 border border-[#6C63FF]/20 text-xs font-medium text-slate-300">
                <GraduationCap className="w-4 h-4 text-[#6C63FF]" />
                <span>{personalData.degree} ({personalData.cgpa} CGPA)</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#121628]/80 border border-[#00D9FF]/20 text-xs font-medium text-slate-300">
                <BookOpen className="w-4 h-4 text-[#00D9FF]" />
                <span>{personalData.university}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl bg-[#121628]/60 border border-[#6C63FF]/15 backdrop-blur-xl hover:border-[#6C63FF]/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(108,99,255,0.15)] transition-all duration-300 overflow-hidden"
              >
                {/* Top Border Highlight */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="font-heading font-bold text-4xl sm:text-5xl gradient-text-primary mb-1">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
