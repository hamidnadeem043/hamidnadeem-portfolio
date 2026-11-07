import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Code, BookOpen, Bot, Sparkles, Terminal } from 'lucide-react';
import { personalData, statsData, nowData } from '../data/portfolioData';

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

            {/* Right Now Live Focus */}
            <div className="pt-4 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00D9FF]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
                <span>Right Now</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {nowData.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#121628]/60 border border-[#6C63FF]/15 backdrop-blur-md hover:border-[#6C63FF]/40 transition-colors"
                  >
                    <div className="text-xs font-semibold text-white mb-0.5">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-slate-400 font-light leading-relaxed">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Identity Card & Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Developer Identity Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#121628]/70 border border-[#6C63FF]/20 backdrop-blur-xl relative overflow-hidden group hover:border-[#00D9FF]/40 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6C63FF] via-[#00D9FF] to-[#10B981]" />

              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full p-0.5 bg-gradient-to-tr from-[#6C63FF] via-[#00D9FF] to-[#10B981] shrink-0">
                  <img
                    src={personalData.photo}
                    alt={personalData.name}
                    className="w-full h-full object-cover rounded-full bg-[#06080F]"
                    onError={(e) => {
                      e.currentTarget.src = personalData.fallbackPhoto;
                    }}
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#121628]" />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#00D9FF] uppercase tracking-wider">
                    <Bot className="w-3.5 h-3.5" />
                    <span>AI & Full-Stack</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white truncate">
                    {personalData.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-light truncate">
                    {personalData.university}
                  </p>
                </div>
              </div>

              {/* Dynamic Terminal Box */}
              <div className="p-3 rounded-xl bg-[#06080F]/80 border border-white/5 font-mono text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-slate-500 text-[10px]">
                  <Terminal className="w-3 h-3 text-[#6C63FF]" />
                  <span>engineer-status.json</span>
                </div>
                <div className="text-[#00D9FF] text-[11px]">
                  &gt; role: <span className="text-emerald-400">"Full-Stack AI Engineer"</span>
                </div>
                <div className="text-slate-400 text-[11px]">
                  &gt; focus: <span className="text-[#8B83FF]">"AI Automation, Python, Django, MERN"</span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative p-4 rounded-xl bg-[#121628]/60 border border-[#6C63FF]/15 backdrop-blur-xl hover:border-[#6C63FF]/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                >
                  <div className="font-heading font-bold text-3xl sm:text-4xl gradient-text-primary mb-0.5">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-[10px] font-medium text-slate-400 tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
