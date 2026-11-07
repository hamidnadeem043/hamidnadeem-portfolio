import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning Journey', href: '#learning' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 px-5 md:px-10 bg-[#0d1117]/90 backdrop-blur-md border-b border-[#30363d] shadow-sm'
          : 'py-4 px-5 md:px-10 bg-[#0d1117]/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with Profile Photo */}
        <a
          href="#hero"
          className="flex items-center gap-3 group"
          title={`${personalData.name} — Portfolio`}
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#30363d] group-hover:border-[#58a6ff] transition-colors shrink-0">
            <img
              src={personalData.photo}
              alt={personalData.name}
              className="w-full h-full object-cover bg-[#161b22]"
              onError={(e) => {
                e.currentTarget.src = personalData.fallbackPhoto;
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-semibold text-base text-[#f0f6fc] group-hover:text-[#58a6ff] transition-colors">
              {personalData.name}
            </span>
            <span className="text-[11px] text-[#8b949e] font-light hidden sm:block">
              Software Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs font-medium px-3 py-1.5 rounded-md transition-colors ${
                  isActive
                    ? 'text-[#58a6ff] bg-[#58a6ff]/10 font-semibold'
                    : 'text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#21262d]/50'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Header Right Action & Socials */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#21262d] transition-colors"
            title="GitHub Profile"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md text-[#8b949e] hover:text-[#58a6ff] hover:bg-[#21262d] transition-colors"
            title="LinkedIn Profile"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personalData.resumePrimary}
            download="Hamid_Nadeem_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-[#f0f6fc] bg-[#21262d] border border-[#30363d] hover:bg-[#30363d] hover:border-[#58a6ff]/50 transition-all"
          >
            <Download className="w-3.5 h-3.5 text-[#58a6ff]" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 rounded-md text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#21262d] transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="xl:hidden mt-3 pt-3 border-t border-[#30363d] bg-[#161b22] rounded-xl p-4 shadow-xl border">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'text-[#58a6ff] bg-[#58a6ff]/10 font-medium'
                      : 'text-[#8b949e] hover:text-[#f0f6fc] hover:bg-[#21262d]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="pt-3 mt-3 border-t border-[#30363d] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-[#8b949e] hover:text-[#f0f6fc]"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-[#8b949e] hover:text-[#58a6ff]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-2 rounded-md text-[#8b949e] hover:text-[#38bdf8]"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <a
              href={personalData.resumePrimary}
              download="Hamid_Nadeem_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-[#f0f6fc] bg-[#238636] hover:bg-[#2ea043] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
