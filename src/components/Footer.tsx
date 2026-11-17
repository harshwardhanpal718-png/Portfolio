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
    <footer className="bg-[#09070F] border-t border-[#4717F6]/25 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A99F9D] font-sans">
        
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <span className="font-heading font-bold text-[#E7DFDD] text-sm">
            Harshwardhan Pal
          </span>
          <span className="text-[#4717F6]">•</span>
          <span className="text-[#A239CA] font-medium">Data Analyst</span>
        </div>

        {/* Quick Links */}
        <div className="flex items-center space-x-4 text-xs font-medium">
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-[#A99F9D] hover:text-[#E7DFDD] transition-colors">
            About
          </a>
          <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="text-[#A99F9D] hover:text-[#E7DFDD] transition-colors">
            Skills
          </a>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="text-[#A99F9D] hover:text-[#E7DFDD] transition-colors">
            Projects
          </a>
          <a href="#certifications" onClick={(e) => handleNavClick(e, '#certifications')} className="text-[#A99F9D] hover:text-[#E7DFDD] transition-colors">
            Certifications
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-[#A99F9D] hover:text-[#E7DFDD] transition-colors">
            Contact
          </a>
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex items-center space-x-3 text-[#A99F9D]/80 font-mono text-[11px]">
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/harshwardhanpal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded hover:text-[#A239CA] transition-colors"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com/in/harshwardhan-pal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded hover:text-[#A239CA] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:harshwardhan.pal.analytics@gmail.com"
              className="p-1 rounded hover:text-[#A239CA] transition-colors"
              title="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
          <span>&copy; {currentYear}</span>
        </div>

      </div>
    </footer>
  );
};