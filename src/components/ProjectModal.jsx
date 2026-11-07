import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Layers, AlertCircle } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

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
          className="fixed inset-0 bg-[#0d1117]/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#161b22] border border-[#30363d] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden max-h-[90vh] overflow-y-auto"
        >
          {/* Top Subtle Border Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#58a6ff] via-[#38bdf8] to-[#3fb950]" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#21262d] transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-4 pr-8">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-medium text-[#58a6ff]">
                {project.number}
              </span>
              <span className="text-[#30363d]">•</span>
              <span className="text-xs font-mono text-[#8b949e]">
                {project.badge}
              </span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#f0f6fc]">
              {project.title}
            </h3>
          </div>

          {/* Detailed Description */}
          <p className="text-xs sm:text-sm text-[#c9d1d9] leading-relaxed my-4 font-light">
            {project.longDescription || project.description}
          </p>

          {/* Note if present */}
          {project.note && (
            <div className="my-4 p-3.5 rounded-lg bg-[#0d1117] border border-[#30363d] text-xs text-[#8b949e] flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#58a6ff] shrink-0 mt-0.5" />
              <div className="leading-relaxed font-light">
                <span className="font-semibold text-[#c9d1d9]">Technical Note: </span>
                {project.note}
              </div>
            </div>
          )}

          {/* Full Features & Architecture */}
          {project.features && (
            <div className="my-5 p-4 rounded-xl bg-[#0d1117] border border-[#30363d] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#58a6ff]">
                <Layers className="w-4 h-4" />
                <span>Features & Architecture Highlights</span>
              </div>
              <ul className="space-y-2 text-xs text-[#c9d1d9]">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 leading-relaxed font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3fb950] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Stack Tags */}
          <div className="my-5">
            <span className="text-xs font-mono uppercase text-[#8b949e] block mb-2">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-[#0d1117] text-[#c9d1d9] border border-[#30363d]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#30363d]">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#1f6feb] hover:bg-[#388bfd] transition-all"
              >
                <span>Open Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#c9d1d9] bg-[#21262d] border border-[#30363d] hover:bg-[#30363d] hover:text-white transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Source Code</span>
              </a>
            )}
            {!project.github && !project.live && (
              <span className="text-xs font-mono text-[#8b949e] italic">
                Active in-development project · Repository access available upon request.
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
