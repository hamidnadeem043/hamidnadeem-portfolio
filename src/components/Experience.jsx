import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-14 relative bg-[#0C0F1A]/40">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00D9FF]">
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] rounded-full" />
            <span>Experience</span>
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#00D9FF] to-[#6C63FF] rounded-full" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Professional Journey
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-gradient-to-b border-[#6C63FF]/30 space-y-12">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#06080F] border-4 border-[#6C63FF] shadow-[0_0_15px_rgba(108,99,255,0.6)] group-hover:scale-125 group-hover:border-[#00D9FF] transition-all duration-300" />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#121628]/60 border border-[#6C63FF]/15 backdrop-blur-xl group-hover:border-[#6C63FF]/40 group-hover:translate-x-1.5 group-hover:shadow-[0_8px_30px_rgba(108,99,255,0.15)] transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-white group-hover:text-[#00D9FF] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-medium text-[#8B83FF] mt-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <span className="flex items-center gap-1 text-slate-400 font-normal">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6C63FF]/10 border border-[#6C63FF]/30 text-xs font-medium text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-[#6C63FF]" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 my-5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed font-light">
                      <CheckCircle2 className="w-4 h-4 text-[#6C63FF] shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#6C63FF]/10 text-[11px] font-medium text-[#8B83FF] border border-[#6C63FF]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
