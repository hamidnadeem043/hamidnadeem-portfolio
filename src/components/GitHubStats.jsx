import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Activity,
  FolderGit2,
  Code2,
  Flame,
  CheckCircle2,
  GitBranch,
  Terminal,
  Cpu,
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function GitHubStats() {
  const [statsImgFailed, setStatsImgFailed] = useState(false);
  const [langImgFailed, setLangImgFailed] = useState(false);
  const [streakImgFailed, setStreakImgFailed] = useState(false);

  const topLanguages = [
    { name: 'JavaScript', percent: 46, color: '#f1e05a' },
    { name: 'Python', percent: 26, color: '#3572A5' },
    { name: 'HTML & CSS', percent: 16, color: '#e34c26' },
    { name: 'TypeScript', percent: 8, color: '#3178c6' },
    { name: 'SQL & Shell', percent: 4, color: '#89e051' },
  ];

  return (
    <section id="github" className="py-20 px-5 md:px-10 relative bg-[#0d1117]">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#58a6ff]">
            <Activity className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider">Open Source &amp; Code Activity</span>
            <span className="w-12 h-px bg-[#30363d]" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#f0f6fc] tracking-tight">
            GitHub Metrics &amp; Contribution Overview
          </h2>
          <p className="text-sm text-[#8b949e] max-w-2xl font-light">
            Consistent commit activity, version control practices, and continuous project exploration on GitHub.
          </p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          className="space-y-6"
        >
          {/* Top 2 Cards: Overview Stats & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            
            {/* Card 1: GitHub Stats */}
            <div className="p-6 rounded-xl bg-[#161b22] border border-[#30363d] shadow-sm flex flex-col justify-between relative overflow-hidden group hover:border-[#58a6ff]/40 transition-colors">
              <div className="flex items-center justify-between pb-4 border-b border-[#30363d]/80 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#21262d] border border-[#30363d] flex items-center justify-center text-[#58a6ff]">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#f0f6fc]">GitHub Overview</h3>
                    <p className="text-xs font-mono text-[#8b949e]">@hamidnadeem043</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono text-[#3fb950] bg-[#3fb950]/10 border border-[#3fb950]/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] animate-pulse-dot" />
                  Active
                </span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="p-3.5 rounded-lg bg-[#0d1117] border border-[#30363d]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8b949e] mb-1">
                    <FolderGit2 className="w-3.5 h-3.5 text-[#58a6ff]" />
                    <span>Public Repos</span>
                  </div>
                  <p className="text-2xl font-bold font-mono text-[#f0f6fc]">28</p>
                  <p className="text-[10px] text-[#8b949e] mt-0.5">Projects &amp; codebases</p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0d1117] border border-[#30363d]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8b949e] mb-1">
                    <GitBranch className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>Core Focus</span>
                  </div>
                  <p className="text-sm font-bold font-mono text-[#f0f6fc] truncate">Full-Stack &amp; Python</p>
                  <p className="text-[10px] text-[#8b949e] mt-0.5">Web + Backend + AI</p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0d1117] border border-[#30363d]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8b949e] mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3fb950]" />
                    <span>Code Quality</span>
                  </div>
                  <p className="text-sm font-bold font-mono text-[#3fb950]">Modular &amp; Clean</p>
                  <p className="text-[10px] text-[#8b949e] mt-0.5">Documented structure</p>
                </div>

                <div className="p-3.5 rounded-lg bg-[#0d1117] border border-[#30363d]">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8b949e] mb-1">
                    <Flame className="w-3.5 h-3.5 text-[#d29922]" />
                    <span>Workflow</span>
                  </div>
                  <p className="text-sm font-bold font-mono text-[#f0f6fc]">Git &amp; GitHub</p>
                  <p className="text-[10px] text-[#8b949e] mt-0.5">Continuous practice</p>
                </div>
              </div>

              {/* Status Note */}
              <div className="text-[11px] text-[#8b949e] font-mono flex items-center justify-between pt-3 border-t border-[#30363d]/60">
                <span>Verified Developer Profile</span>
                <span className="text-[#58a6ff]">Superior University</span>
              </div>
            </div>

            {/* Card 2: Top Languages & Stack Distribution */}
            <div className="p-6 rounded-xl bg-[#161b22] border border-[#30363d] shadow-sm flex flex-col justify-between group hover:border-[#58a6ff]/40 transition-colors">
              <div className="flex items-center justify-between pb-4 border-b border-[#30363d]/80 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#21262d] border border-[#30363d] flex items-center justify-center text-[#38bdf8]">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#f0f6fc]">Top Languages &amp; Stack</h3>
                    <p className="text-xs font-mono text-[#8b949e]">Across Active Repositories</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-[#8b949e]">Primary Stack</span>
              </div>

              {/* Segmented GitHub-style language bar */}
              <div className="space-y-4 mb-5">
                <div className="w-full h-3 rounded-full overflow-hidden flex bg-[#0d1117] border border-[#30363d]">
                  {topLanguages.map((lang) => (
                    <div
                      key={lang.name}
                      style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                      title={`${lang.name}: ${lang.percent}%`}
                      className="h-full transition-all"
                    />
                  ))}
                </div>

                {/* Language Legend */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  {topLanguages.map((lang) => (
                    <div key={lang.name} className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="text-xs font-medium text-[#c9d1d9] truncate">{lang.name}</span>
                      <span className="text-[11px] font-mono text-[#8b949e] ml-auto">{lang.percent}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack Highlight Footer */}
              <div className="pt-3 border-t border-[#30363d]/60 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="text-[#8b949e] font-mono text-[11px]">Primary Frameworks:</span>
                <span className="text-xs text-[#58a6ff] font-mono font-medium">React · Django · Express · Node.js</span>
              </div>
            </div>

          </div>

          {/* Card 3: Continuous Learning & Development Highlights */}
          <div className="p-5 sm:p-6 rounded-xl bg-[#161b22] border border-[#30363d] flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0d1117] border border-[#30363d] flex items-center justify-center text-[#58a6ff] shrink-0">
                <Flame className="w-6 h-6 text-[#58a6ff]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#f0f6fc]">
                  Active Open-Source &amp; Hands-On Project Development
                </h4>
                <p className="text-xs text-[#8b949e] mt-0.5">
                  Building full-stack web applications, mastering Python backend architecture with Django, and exploring AI integration workflows.
                </p>
              </div>
            </div>

            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#f0f6fc] bg-[#21262d] border border-[#30363d] hover:bg-[#30363d] hover:border-[#58a6ff]/50 transition-all"
            >
              <Github className="w-4 h-4 text-[#58a6ff]" />
              <span>View @hamidnadeem043 on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#8b949e]" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
