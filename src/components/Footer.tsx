import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

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
    <footer className="bg-[#050505] border-t border-[#242424] py-16 text-[#A1A1AA] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#1C1C1C]">
          
          {/* Brand & Philosophy */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-3xl sm:text-4xl text-white tracking-wider">
              HARSHWARDHAN <span className="text-[#C81024]">PAL</span>
            </h3>
            <p className="text-xs text-[#E31B32] font-mono mt-1 font-semibold uppercase tracking-widest">
              "TURNING DATA INTO DECISIONS."
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 uppercase text-[11px] tracking-wider text-[#A1A1AA]">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover-red-line hover:text-white">
              Home
            </a>
            <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover-red-line hover:text-white">
              Selected Projects
            </a>
            <a href="#education-skills" onClick={(e) => handleNavClick(e, '#education-skills')} className="hover-red-line hover:text-white">
              Skills &amp; Education
            </a>
            <a href="#workflow" onClick={(e) => handleNavClick(e, '#workflow')} className="hover-red-line hover:text-white">
              How I Work
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover-red-line hover:text-white">
              Contact
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/harshwardhanpal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-[#242424] hover:border-[#C81024] text-[#A1A1AA] hover:text-white transition-colors bg-[#0B0B0B]"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/harshwardhan-pal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-[#242424] hover:border-[#C81024] text-[#A1A1AA] hover:text-white transition-colors bg-[#0B0B0B]"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:harshwardhan.pal.analytics@gmail.com"
                className="p-2.5 border border-[#242424] hover:border-[#C81024] text-[#A1A1AA] hover:text-white transition-colors bg-[#0B0B0B]"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Back to top interaction */}
            <button
              onClick={scrollToTop}
              className="p-2.5 border border-[#242424] hover:border-[#C81024] bg-[#C81024]/10 hover:bg-[#C81024] text-white transition-all group"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#71717A]">
          <span>
            &copy; {currentYear} Harshwardhan Pal. All rights reserved.
          </span>
          <span className="uppercase tracking-widest text-[#A1A1AA]">
            Exclusively Positioned as Data Analyst
          </span>
        </div>

      </div>
    </footer>
  );
};
