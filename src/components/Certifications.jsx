import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { certsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-5 md:px-10 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#58a6ff]">
            <span>06.</span>
            <span className="uppercase tracking-wider">Certifications &amp; Credentials</span>
            <span className="w-12 h-px bg-[#30363d]" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#f0f6fc] tracking-tight">
            Verified Credentials &amp; Industry Simulations
          </h2>
          <p className="text-sm text-[#8b949e] max-w-2xl font-light">
            Structured online certifications and practical corporate job simulations completed alongside degree studies.
          </p>
        </div>

        {/* Certifications Rows Grid */}
        <div className="space-y-3.5">
          {certsData.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="p-5 rounded-xl bg-[#161b22] border border-[#30363d] flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#58a6ff]/40 transition-colors"
            >
              <div className="flex items-start gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#58a6ff]/10 border border-[#58a6ff]/20 flex items-center justify-center text-[#58a6ff] shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-heading font-semibold text-base text-[#f0f6fc]">
                      {cert.title}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0d1117] text-[#58a6ff] border border-[#30363d]">
                      {cert.type}
                    </span>
                  </div>

                  <div className="text-xs text-[#8b949e] font-light mb-2">
                    Issued by <strong className="text-[#c9d1d9] font-medium">{cert.issuer}</strong>
                  </div>

                  {/* Skills Tagged */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0d1117] text-[#8b949e]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Date & Verified Badge */}
              <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0d1117] border border-[#30363d] text-xs font-mono text-[#8b949e]">
                  <Calendar className="w-3.5 h-3.5 text-[#58a6ff]" />
                  <span>{cert.date}</span>
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#238636]/10 border border-[#238636]/30 text-xs font-mono text-[#3fb950]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
