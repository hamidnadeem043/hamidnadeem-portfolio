import React, { useState, useEffect } from 'react';
import { Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

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
          ? 'py-3.5 px-6 md:px-14 bg-[#06080F]/90 backdrop-blur-xl border-b border-[#6C63FF]/15 shadow-lg shadow-black/20'
          : 'py-5 px-6 md:px-14 bg-[#06080F]/60 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-heading font-bold text-2xl tracking-tight gradient-text-primary hover:opacity-90 transition-opacity flex items-center gap-1.5"
        >
          {personalData.initials}
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          <ul className="flex items-center gap-6 list-none">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`text-xs uppercase tracking-widest font-semibold transition-all relative py-1 hover:text-white ${
                      isActive ? 'text-[#00D9FF]' : 'text-slate-400'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Hire Me Button */}
          <a
            href={`mailto:${personalData.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#8B83FF] bg-[#6C63FF]/10 border border-[#6C63FF]/40 hover:bg-[#6C63FF]/20 hover:text-white hover:border-[#6C63FF] transition-all hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(108,99,255,0.25)]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF]"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-[60px] right-0 bottom-0 w-72 bg-[#0C0F1A]/95 backdrop-blur-2xl border-l border-[#6C63FF]/20 p-6 flex flex-col justify-between z-50 animate-in slide-in-from-right duration-300">
          <div className="flex flex-col gap-5 mt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold uppercase tracking-widest text-slate-300 hover:text-[#00D9FF] py-2 border-b border-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`mailto:${personalData.email}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] shadow-lg shadow-[#6C63FF]/25"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
