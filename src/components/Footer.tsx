import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#03001e]/80 backdrop-blur-xl py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400 font-sans">
        
        {/* Brand */}
        <div className="flex items-center space-x-2.5">
          <span className="logo-gradient font-heading font-extrabold text-base tracking-tight">
            HARSH.
          </span>
          <span className="text-white/[0.15]">•</span>
          <span className="text-slate-300 font-medium">Aspiring Data Analyst</span>
        </div>

        {/* Quick Links */}
        <div className="flex items-center space-x-5 text-xs font-medium">
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-slate-400 hover:text-[#00f2fe] transition-colors">
            About
          </a>
          <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="text-slate-400 hover:text-[#00f2fe] transition-colors">
            Skills
          </a>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="text-slate-400 hover:text-[#00f2fe] transition-colors">
            Projects
          </a>
          <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="text-slate-400 hover:text-[#00f2fe] transition-colors">
            Experience
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-slate-400 hover:text-[#00f2fe] transition-colors">
            Contact
          </a>
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex items-center space-x-4 text-slate-400 font-mono text-[11px]">
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/harshwardhanpal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:text-[#00f2fe] hover:border-[#00f2fe]/40 transition-colors"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com/in/harshwardhan-pal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:text-[#ec38bc] hover:border-[#ec38bc]/40 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:harshwardhan.pal.analytics@gmail.com"
              className="p-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:text-[#00f2fe] hover:border-[#00f2fe]/40 transition-colors"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
          <span className="text-slate-500">&copy; {currentYear} Harshwardhan Pal</span>
        </div>

      </div>
    </footer>
  );
};
