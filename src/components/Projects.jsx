import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Layers, Sparkles, FolderGit2 } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Full Stack', 'Python & Django', 'Frontend', 'Backend & SQL', 'AI & Frontend'];

  const filteredProjects =
    activeTab === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-20 px-5 md:px-10 relative bg-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#58a6ff]">
            <span>04.</span>
            <span className="uppercase tracking-wider">Featured Projects</span>
            <span className="w-12 h-px bg-[#30363d]" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#f0f6fc] tracking-tight">
            Shipped Applications & Technical Projects
          </h2>
          <p className="text-sm text-[#8b949e] max-w-2xl font-light">
            Real projects demonstrating full-stack engineering, Python backend development, and AI API integrations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#30363d]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeTab === cat
                  ? 'bg-[#58a6ff] text-[#0d1117] font-semibold shadow-sm'
                  : 'bg-[#161b22] text-[#8b949e] border border-[#30363d] hover:text-[#f0f6fc] hover:border-[#58a6ff]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="flex flex-col justify-between rounded-xl bg-[#161b22] border border-[#30363d] overflow-hidden hover:border-[#58a6ff]/40 hover:-translate-y-1 transition-all duration-200"
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="text-[11px] font-mono text-[#58a6ff] font-medium">
                    {project.number}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#21262d] transition-colors"
                        title="View GitHub Repository"
                        aria-label={`GitHub Repository for ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-md text-[#8b949e] hover:text-[#58a6ff] hover:bg-[#21262d] transition-colors"
                        title="Open Live Application"
                        aria-label={`Live Demo for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mb-2">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#0d1117] text-[#8b949e] border border-[#30363d] mb-1.5">
                    {project.badge}
                  </span>
                  <h3 className="font-heading font-semibold text-lg text-[#f0f6fc] leading-snug">
                    {project.title}
                  </h3>
                </div>

                <p className="text-xs text-[#8b949e] font-light leading-relaxed line-clamp-3 mb-4">
                  {project.description}
                </p>

                {/* Main Features Preview */}
                <div className="space-y-1.5 mb-4">
                  <span className="text-[10px] font-mono uppercase text-[#c9d1d9] block">
                    Key Features:
                  </span>
                  <ul className="space-y-1 text-xs text-[#8b949e]">
                    {project.features.slice(0, 3).map((f, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5 line-clamp-1">
                        <span className="text-[#58a6ff]">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Tech Stack & Modal Action */}
              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1 pt-3 border-t border-[#30363d]/60">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0d1117] text-[#8b949e]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 5 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-[#8b949e]">
                      +{project.stack.length - 5}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-[#21262d] border border-[#30363d] text-xs font-medium text-[#c9d1d9] hover:text-[#f0f6fc] hover:bg-[#30363d] hover:border-[#58a6ff]/40 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-[#58a6ff]" />
                  <span>View Details & Architecture</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub Explorer Banner */}
        <div className="mt-12 p-5 rounded-xl border border-[#30363d] bg-[#161b22] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FolderGit2 className="w-5 h-5 text-[#58a6ff] shrink-0" />
            <p className="text-xs sm:text-sm text-[#c9d1d9] font-light">
              Looking for more repositories? Explore additional coursework, scripts, and practice repositories on GitHub.
            </p>
          </div>
          <a
            href="https://github.com/hamidnadeem043"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-[#f0f6fc] bg-[#21262d] border border-[#30363d] hover:bg-[#30363d] hover:border-[#58a6ff]/40 transition-all shrink-0"
          >
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
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
