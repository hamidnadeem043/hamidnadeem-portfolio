import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { certsData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-14 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00D9FF]">
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] rounded-full" />
            <span>Certifications</span>
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#00D9FF] to-[#6C63FF] rounded-full" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Credentials & Certificates
          </h2>
        </div>

        {/* Certifications Rows */}
        <div className="space-y-3">
          {certsData.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-4 sm:p-5 rounded-xl bg-[#121628]/60 border border-[#6C63FF]/15 backdrop-blur-md flex items-center gap-4 hover:border-[#6C63FF]/40 hover:translate-x-1.5 hover:shadow-[0_6px_20px_rgba(108,99,255,0.15)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-[#6C63FF]/10 border border-[#6C63FF]/20 flex items-center justify-center text-xl shrink-0">
                {cert.icon}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold text-sm text-white truncate">
                  {cert.title}
                </h3>
                <div className="text-xs text-slate-400 font-light">
                  {cert.issuer}
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6C63FF]/10 text-[11px] font-medium text-[#8B83FF] border border-[#6C63FF]/20 shrink-0">
                <Calendar className="w-3 h-3 text-[#6C63FF]" />
                <span>{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
