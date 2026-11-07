import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react';
import { projectsData, extraProjects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Python & Django', 'Full Stack', 'Frontend & AI', 'Backend & SQL'];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 md:px-14 relative bg-[#0C0F1A]/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00D9FF]">
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] rounded-full" />
            <span>Portfolio</span>
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#00D9FF] to-[#6C63FF] rounded-full" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] text-white shadow-lg shadow-[#6C63FF]/25 scale-105'
                  : 'bg-[#121628]/60 text-slate-400 border border-[#6C63FF]/15 hover:text-white hover:border-[#6C63FF]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col rounded-2xl bg-[#121628]/60 border border-[#6C63FF]/15 backdrop-blur-xl overflow-hidden hover:border-[#6C63FF]/40 hover:-translate-y-2 hover:shadow-[0_16px_50px_rgba(108,99,255,0.2)] transition-all duration-300"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Card Header */}
              <div className="p-6 pb-0 flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-[#6C63FF]/10 border border-[#6C63FF]/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-[#6C63FF]/20 bg-[#121628] text-slate-400 hover:text-white hover:border-[#6C63FF] transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-[#6C63FF]/20 bg-[#121628] text-slate-400 hover:text-[#00D9FF] hover:border-[#00D9FF] transition-colors"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-1">
                    {project.number}
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-white group-hover:text-[#00D9FF] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                          tIdx % 3 === 0
                            ? 'text-[#8B83FF] bg-[#6C63FF]/10 border-[#6C63FF]/30'
                            : tIdx % 3 === 1
                            ? 'text-[#00D9FF] bg-[#00D9FF]/10 border-[#00D9FF]/30'
                            : 'text-[#FF6B9D] bg-[#FF6B9D]/10 border-[#FF6B9D]/30'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 group-hover:bg-[#6C63FF]/20 group-hover:border-[#6C63FF]/50 group-hover:text-white transition-all"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Architecture Details</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects on GitHub Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-5 rounded-2xl border border-dashed border-[#6C63FF]/30 bg-[#6C63FF]/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-[#00D9FF] shrink-0" />
            <div className="text-xs text-slate-300">
              <strong className="text-[#8B83FF] font-semibold">More Projects on GitHub:</strong>{' '}
              {extraProjects.join(' • ')}
            </div>
          </div>
          <a
            href="https://github.com/hamidnadeem043"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#00D9FF] border border-[#00D9FF]/40 bg-[#00D9FF]/10 hover:bg-[#00D9FF] hover:text-black transition-all shrink-0"
          >
            <span>Explore Repos</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
