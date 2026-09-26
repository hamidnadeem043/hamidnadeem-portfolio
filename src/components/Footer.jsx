import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-[#6C63FF]/15 bg-[#06080F]/90 py-8 px-6 md:px-14">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="text-xs text-slate-400 font-light">
          © {new Date().getFullYear()} <span className="text-white font-medium">{personalData.name}</span> · {personalData.university}
        </div>

        <div className="text-xs text-slate-400 italic max-w-md font-light leading-relaxed">
          "{personalData.motto}"
        </div>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-[#121628] border border-[#6C63FF]/20 text-slate-400 hover:text-white hover:border-[#6C63FF] hover:bg-[#6C63FF]/20 transition-all"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
