import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl bg-[#0C0F1A] border border-[#6C63FF]/30 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
        >
          {/* Top Gradient Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6C63FF] via-[#00D9FF] to-[#FF6B9D]" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header info */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{project.icon}</span>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#00D9FF] font-semibold">
                {project.number} • {project.badge}
              </span>
              <h3 className="font-heading font-bold text-2xl text-white">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed my-4 font-light">
            {project.longDescription || project.description}
          </p>

          {/* Key Highlights */}
          {project.highlights && (
            <div className="my-5 p-4 rounded-xl bg-[#121628]/80 border border-[#6C63FF]/15 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8B83FF]">
                <Layers className="w-4 h-4" />
                <span>Key Highlights & Architecture</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00D9FF] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Tags */}
          <div className="my-5">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Technologies Used
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#6C63FF]/10 text-[#8B83FF] border border-[#6C63FF]/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white gradient-bg-primary shadow-md shadow-[#6C63FF]/20 hover:shadow-[#6C63FF]/40 hover:-translate-y-0.5 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-200 border border-white/15 bg-white/5 hover:bg-[#6C63FF]/10 hover:border-[#6C63FF] hover:text-[#8B83FF] hover:-translate-y-0.5 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
