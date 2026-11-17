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
    <footer className="bg-[#031516] border-t border-[#235347]/60 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8EB69B] font-sans">
        
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <span className="font-heading font-bold text-[#DAF1DE] text-sm">
            Harshwardhan Pal
          </span>
          <span className="text-[#235347]">•</span>
          <span className="text-[#8EB69B] font-medium">Data Analyst</span>
        </div>

        {/* Quick Links */}
        <div className="flex items-center space-x-4 text-xs font-medium">
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-[#8EB69B] hover:text-[#DAF1DE] transition-colors">
            About
          </a>
          <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="text-[#8EB69B] hover:text-[#DAF1DE] transition-colors">
            Skills
          </a>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="text-[#8EB69B] hover:text-[#DAF1DE] transition-colors">
            Projects
          </a>
          <a href="#certifications" onClick={(e) => handleNavClick(e, '#certifications')} className="text-[#8EB69B] hover:text-[#DAF1DE] transition-colors">
            Certifications
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-[#8EB69B] hover:text-[#DAF1DE] transition-colors">
            Contact
          </a>
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex items-center space-x-3 text-[#8EB69B]/80 font-mono text-[11px]">
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/harshwardhanpal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded hover:text-[#DAF1DE] transition-colors"
              title="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com/in/harshwardhan-pal"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded hover:text-[#DAF1DE] transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:harshwardhan.pal.analytics@gmail.com"
              className="p-1 rounded hover:text-[#DAF1DE] transition-colors"
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
