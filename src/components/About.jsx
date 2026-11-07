import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Briefcase, Code, Sparkles, Terminal } from 'lucide-react';
import { personalData, aboutData, educationData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 px-5 md:px-10 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#58a6ff]">
            <span>01.</span>
            <span className="uppercase tracking-wider">About Me</span>
            <span className="w-12 h-px bg-[#30363d]" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#f0f6fc] tracking-tight">
            Engineering Web Solutions & Exploring Intelligent Tech
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="space-y-4 text-sm sm:text-base text-[#c9d1d9] leading-relaxed font-light">
              {aboutData.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Practical Experience Highlights */}
            <div className="pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#8b949e] mb-3">
                Core Highlights at a Glance
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {aboutData.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="p-3 rounded-lg bg-[#161b22] border border-[#30363d] flex items-center justify-between text-xs"
                  >
                    <span className="text-[#8b949e] font-light">{h.label}</span>
                    <span className="font-medium text-[#f0f6fc] text-right">{h.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education & Academic Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Education Card */}
            <div className="p-6 rounded-xl bg-[#161b22] border border-[#30363d] relative overflow-hidden">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#58a6ff]/10 border border-[#58a6ff]/20 flex items-center justify-center text-[#58a6ff] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#58a6ff] uppercase tracking-wider">
                    Education
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-[#f0f6fc] leading-snug">
                    {educationData.degree}
                  </h3>
                  <p className="text-xs text-[#8b949e] mt-0.5">
                    {educationData.school}
                  </p>
                </div>
              </div>

              {/* Status and CGPA metrics */}
              <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-[#0d1117] border border-[#30363d] mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#8b949e] block">
                    Current Standing
                  </span>
                  <span className="text-sm font-semibold text-[#f0f6fc]">
                    {educationData.semester}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#8b949e] block">
                    Cumulative GPA
                  </span>
                  <span className="text-sm font-semibold text-[#58a6ff]">
                    {educationData.cgpa}
                  </span>
                </div>
              </div>

              <p className="text-xs text-[#8b949e] leading-relaxed font-light">
                {educationData.summary}
              </p>
            </div>

            {/* Technical Trajectory Box */}
            <div className="p-5 rounded-xl bg-[#161b22] border border-[#30363d] font-mono text-xs space-y-2">
              <div className="flex items-center gap-2 text-[#8b949e] text-[11px] pb-1 border-b border-[#30363d]">
                <Terminal className="w-3.5 h-3.5 text-[#58a6ff]" />
                <span>technical-direction.sh</span>
              </div>
              <div className="text-[#c9d1d9] leading-relaxed pt-1">
                <span className="text-[#3fb950]">&gt;</span> <span className="text-[#8b949e]">Frontend:</span> React.js, Tailwind CSS, Responsive Web Design<br />
                <span className="text-[#3fb950]">&gt;</span> <span className="text-[#8b949e]">Backend:</span> Node.js, Express, Python, Django &amp; DRF<br />
                <span className="text-[#3fb950]">&gt;</span> <span className="text-[#8b949e]">Exploring:</span> AI Fundamentals, ML, Gemini API, AI Automation
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
