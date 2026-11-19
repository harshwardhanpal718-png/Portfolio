import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#06070D]/90 backdrop-blur-xl py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#94A3B8] font-sans">
        
        {/* Brand & Tagline */}
        <div className="flex flex-col sm:flex-row items-center gap-2.5 text-center sm:text-left">
          <span className="logo-gradient font-heading font-extrabold text-base tracking-tight">
            HARSHWARDHAN PAL
          </span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="text-slate-300 font-medium">
            "Turning Data Into Decisions."
          </span>
        </div>

        {/* Quick Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-[#06B6D4] transition-colors">
            Home
          </a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-[#06B6D4] transition-colors">
            About
          </a>
          <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="hover:text-[#06B6D4] transition-colors">
            Skills
          </a>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-[#06B6D4] transition-colors">
            Projects
          </a>
          <a href="#showcase" onClick={(e) => handleNavClick(e, '#showcase')} className="hover:text-[#06B6D4] transition-colors">
            Showcase
          </a>
          <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="hover:text-[#06B6D4] transition-colors">
            Experience
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-[#06B6D4] transition-colors">
            Contact
          </a>
        </div>

        {/* Socials & Back To Top */}
        <div className="flex items-center gap-4 text-[#94A3B8]">
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/harshwardhanpal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:text-[#06B6D4] hover:border-[#06B6D4]/40 transition-colors"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com/in/harshwardhan-pal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:text-[#7C3AED] hover:border-[#7C3AED]/40 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:harshwardhan.pal.analytics@gmail.com"
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:text-[#06B6D4] hover:border-[#06B6D4]/40 transition-colors"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-colors"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pt-4 border-t border-white/[0.04] text-center text-[11px] font-mono text-[#94A3B8]/70">
        &copy; {currentYear} Harshwardhan Pal. All rights reserved. Exclusively Engineered for Data Analytics.
      </div>
    </footer>
  );
};
