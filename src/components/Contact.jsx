import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, Linkedin, Github, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    // Trigger mailto with pre-filled parameters
    const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    confetti({ particleCount: 70, spread: 70, origin: { y: 0.7 } });
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-14 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00D9FF]">
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#6C63FF] to-[#00D9FF] rounded-full" />
            <span>Let's Talk</span>
            <span className="w-6 h-[2px] bg-gradient-to-r from-[#00D9FF] to-[#6C63FF] rounded-full" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Open to Opportunities
          </h2>
          <p className="text-sm text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            I'm actively looking for MERN Stack / junior web development roles. If you're building something great and need a developer who's eager to learn and ship fast — let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Quick Info & Copy Email Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-[#121628]/60 border border-[#6C63FF]/15 backdrop-blur-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#6C63FF]/10 border border-[#6C63FF]/30 flex items-center justify-center text-[#6C63FF]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Direct Email
                  </div>
                  <div className="text-sm font-semibold text-white truncate">
                    {personalData.email}
                  </div>
                </div>
              </div>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#6C63FF]/10 border border-[#6C63FF]/30 text-xs font-semibold text-[#8B83FF] hover:bg-[#6C63FF] hover:text-white transition-all shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links Box */}
            <div className="p-6 rounded-2xl bg-[#121628]/60 border border-[#6C63FF]/15 backdrop-blur-xl text-center space-y-4">
              <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                Connect on Social Networks
              </div>
              <div className="flex justify-center gap-3">
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#121628] border border-[#6C63FF]/20 flex items-center justify-center text-slate-400 hover:text-[#00D9FF] hover:border-[#00D9FF] hover:bg-[#00D9FF]/10 transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#121628] border border-[#6C63FF]/20 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#6C63FF] hover:bg-[#6C63FF]/20 transition-all"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="w-10 h-10 rounded-xl bg-[#121628] border border-[#6C63FF]/20 flex items-center justify-center text-slate-400 hover:text-[#FF6B9D] hover:border-[#FF6B9D] hover:bg-[#FF6B9D]/10 transition-all"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, delay: 0.1 }}
            className="md:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-[#121628]/60 border border-[#6C63FF]/15 backdrop-blur-xl space-y-4"
            >
              <h3 className="font-heading font-semibold text-lg text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#00D9FF]" />
                <span>Send a Quick Message</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0C0F1A] border border-[#6C63FF]/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00D9FF] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0C0F1A] border border-[#6C63FF]/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00D9FF] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Job Opportunity / Project Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#0C0F1A] border border-[#6C63FF]/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00D9FF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Hamid, I saw your portfolio and would love to chat about..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#0C0F1A] border border-[#6C63FF]/20 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00D9FF] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider text-white gradient-bg-primary shadow-lg shadow-[#6C63FF]/25 hover:shadow-[#6C63FF]/45 hover:-translate-y-0.5 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{submitted ? 'Opening Mail Client...' : 'Send Message'}</span>
              </button>

              {submitted && (
                <div className="text-center text-xs text-emerald-400 pt-2 font-medium">
                  ✓ Form ready! Mail client launched.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
