import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-5 md:px-10 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#58a6ff]">
            <span>03.</span>
            <span className="uppercase tracking-wider">Professional Experience</span>
            <span className="w-12 h-px bg-[#30363d]" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#f0f6fc] tracking-tight">
            Industry Internships & Technical Training
          </h2>
          <p className="text-sm text-[#8b949e] max-w-2xl font-light">
            Hands-on development experience working with modern web stacks, API integrations, and practical software engineering workflows.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#30363d] space-y-12">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: idx * 0.12 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0d1117] border-2 border-[#58a6ff] group-hover:scale-125 transition-transform" />

              {/* Experience Card */}
              <div className="p-6 rounded-xl bg-[#161b22] border border-[#30363d] hover:border-[#58a6ff]/40 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-[#f0f6fc]">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#58a6ff] font-medium mt-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                      <span className="text-[#30363d]">•</span>
                      <span className="flex items-center gap-1 text-[#8b949e] font-light">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0d1117] border border-[#30363d] text-xs font-mono text-[#8b949e]">
                      <Calendar className="w-3 h-3 text-[#58a6ff]" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#8b949e] font-light mb-4 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Practical Areas & Bullets */}
                <div className="space-y-2 mb-5">
                  <span className="text-[11px] font-mono uppercase text-[#c9d1d9] block">
                    Key Focus Areas & Responsibilities:
                  </span>
                  <ul className="space-y-2">
                    {exp.areas.map((area, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5 text-xs text-[#c9d1d9] leading-relaxed font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3fb950] shrink-0 mt-0.5" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#30363d]">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#0d1117] text-[#8b949e] border border-[#30363d]"
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
