import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, Linkedin, Github, MessageSquare, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    confetti({ particleCount: 40, spread: 50, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    // Direct, transparent mailto trigger that opens user's email client
    const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 px-5 md:px-10 relative bg-[#0d1117]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#58a6ff]">
            <span>07.</span>
            <span className="uppercase tracking-wider">Contact</span>
            <span className="w-12 h-px bg-[#30363d]" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#f0f6fc] tracking-tight">
            Let's Build Something Together
          </h2>
          <p className="text-sm sm:text-base text-[#8b949e] font-light max-w-xl mx-auto leading-relaxed">
            I'm always interested in connecting with developers, learning from new opportunities, and working on meaningful technology projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Quick Contact & Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="md:col-span-5 space-y-4"
          >
            <div className="p-6 rounded-xl bg-[#161b22] border border-[#30363d] space-y-5">
              <div>
                <h3 className="font-heading font-semibold text-base text-[#f0f6fc] mb-1">
                  Get in Touch
                </h3>
                <p className="text-xs text-[#8b949e] font-light leading-relaxed">
                  Whether you have an internship opportunity, an interesting project, or simply want to connect, feel free to reach out.
                </p>
              </div>

              {/* Email Address with Copy Button */}
              <div className="p-3 rounded-lg bg-[#0d1117] border border-[#30363d] space-y-2">
                <span className="text-[10px] font-mono uppercase text-[#8b949e] block">
                  Direct Email Address
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-xs font-mono text-[#58a6ff] hover:underline truncate"
                  >
                    {personalData.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md bg-[#21262d] text-[#8b949e] hover:text-[#f0f6fc] transition-colors shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-[#3fb950]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Verified Links */}
              <div className="space-y-2 pt-2 border-t border-[#30363d]">
                <span className="text-[10px] font-mono uppercase text-[#8b949e] block">
                  Professional Profiles
                </span>
                <div className="space-y-1.5">
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d1117] border border-[#30363d] text-xs text-[#c9d1d9] hover:text-[#f0f6fc] hover:border-[#58a6ff]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-[#8b949e]" />
                      <span>github.com/hamidnadeem043</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8b949e]" />
                  </a>

                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#0d1117] border border-[#30363d] text-xs text-[#c9d1d9] hover:text-[#58a6ff] hover:border-[#58a6ff]/40 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-[#58a6ff]" />
                      <span>linkedin.com/in/hamid-nadeem043</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8b949e]" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Functional Direct Email Dispatch Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="md:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-xl bg-[#161b22] border border-[#30363d] space-y-4"
            >
              <h3 className="font-heading font-semibold text-base text-[#f0f6fc] mb-3">
                Send a Direct Message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-mono text-[#8b949e] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3.5 py-2 text-xs text-[#f0f6fc] placeholder-[#8b949e]/60 focus:outline-none focus:border-[#58a6ff] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#8b949e] mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3.5 py-2 text-xs text-[#f0f6fc] placeholder-[#8b949e]/60 focus:outline-none focus:border-[#58a6ff] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#8b949e] mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="Opportunity / Project Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3.5 py-2 text-xs text-[#f0f6fc] placeholder-[#8b949e]/60 focus:outline-none focus:border-[#58a6ff] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[#8b949e] mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-3.5 py-2 text-xs text-[#f0f6fc] placeholder-[#8b949e]/60 focus:outline-none focus:border-[#58a6ff] transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] font-mono text-[#8b949e]">
                  Dispatches directly to mail client
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#1f6feb] hover:bg-[#388bfd] transition-all"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
