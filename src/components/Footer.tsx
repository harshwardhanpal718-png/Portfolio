import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioConfig';

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
    <footer className="bg-[#FAF7F2] border-t border-[#EBE5DC] py-14 text-[#62616A] font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#EBE5DC]">

          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#171923] block">
              {personalInfo.name.toUpperCase()}<span className="text-[#A98468]">.</span>
            </span>
            <span className="text-xs text-[#A98468] font-script font-bold text-base mt-0.5 block">
              "{personalInfo.tagline}"
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-[#62616A]">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-[#171923] transition-colors">
              Home
            </a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-[#171923] transition-colors">
              About
            </a>
            <a href="#skills" onClick={(e) => handleNavClick(e, '#skills')} className="hover:text-[#171923] transition-colors">
              Skills
            </a>
            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-[#171923] transition-colors">
              Projects
            </a>
            <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')} className="hover:text-[#171923] transition-colors">
              Experience
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-[#171923] transition-colors">
              Contact
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#EBE5DC] hover:border-[#A98468] bg-white flex items-center justify-center text-[#171923] hover:text-[#A98468] transition-all shadow-card"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#EBE5DC] hover:border-[#A98468] bg-white flex items-center justify-center text-[#171923] hover:text-[#A98468] transition-all shadow-card"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.email}
                className="w-9 h-9 rounded-full border border-[#EBE5DC] hover:border-[#A98468] bg-white flex items-center justify-center text-[#171923] hover:text-[#A98468] transition-all shadow-card"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Circular Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-[#171923] text-white hover:bg-[#2D3748] transition-all flex items-center justify-center shadow-card cursor-pointer group"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#62616A]">
          <span>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </span>
          <span className="text-[#A98468] font-script text-sm font-semibold">
            Data Analyst Portfolio • Built with React &amp; Tailwind CSS
          </span>
        </div>

      </div>
    </footer>
  );
};
