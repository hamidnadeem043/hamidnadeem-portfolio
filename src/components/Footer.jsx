import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#30363d] bg-[#0d1117] py-8 px-5 md:px-10 text-xs text-[#8b949e]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div>
          <span className="text-[#f0f6fc] font-medium">{personalData.name}</span>
          <span className="mx-2">•</span>
          <span>{personalData.degree}</span>
          <span className="mx-2">•</span>
          <span>{personalData.university}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f0f6fc] transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#58a6ff] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalData.email}`}
            className="hover:text-[#38bdf8] transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-md bg-[#161b22] border border-[#30363d] text-[#8b949e] hover:text-[#f0f6fc] hover:border-[#58a6ff]/40 transition-all ml-2"
            title="Back to Top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
