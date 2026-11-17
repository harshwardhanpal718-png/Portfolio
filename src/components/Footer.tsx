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
    <footer className="bg-white border-t border-slate-200 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-sans">
        
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <span className="font-heading font-bold text-slate-900 text-sm">
            Harshwardhan Pal
          </span>
          <span className="text-blue-600">•</span>
          <span className="text-slate-600 font-medium">Aspiring Data Analyst</span>
        </div>

        {/* Quick Links */}
        <div className="flex items-center space-x-4 text-xs font-medium">
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-slate-600 hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="text-slate-600 hover:text-blue-600 transition-colors">
            Skills
          </a>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="text-slate-600 hover:text-blue-600 transition-colors">
            Projects
          </a>
          <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="text-slate-600 hover:text-blue-600 transition-colors">
            Experience
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-slate-600 hover:text-blue-600 transition-colors">
            Contact
          </a>
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex items-center space-x-3 text-slate-500 font-mono text-[11px]">
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/harshwardhanpal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded hover:text-blue-600 transition-colors"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com/in/harshwardhan-pal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded hover:text-blue-600 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:harshwardhan.pal.analytics@gmail.com"
              className="p-1 rounded hover:text-blue-600 transition-colors"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
          <span>&copy; {currentYear} Harshwardhan Pal</span>
        </div>

      </div>
    </footer>
  );
};