import React, { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050505]/90 backdrop-blur-md border-b border-[#242424]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Role Title */}
        <div className="flex items-center gap-4">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2"
          >
            <span className="font-display text-2xl tracking-wider text-white">
              HARSHWARDHAN <span className="text-[#C81024]">PAL</span>
            </span>
          </a>
          <span className="hidden md:inline-block text-xs font-mono text-[#A1A1AA] border-l border-[#242424] pl-4">
            DATA ANALYST
          </span>
        </div>

        {/* Center / Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-wider text-[#A1A1AA]">
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="hover-red-line hover:text-white transition-colors uppercase"
          >
            Selected Projects
          </a>
          <a
            href="#education-skills"
            onClick={(e) => handleNavClick(e, '#education-skills')}
            className="hover-red-line hover:text-white transition-colors uppercase"
          >
            Skills &amp; Education
          </a>
          <a
            href="#workflow"
            onClick={(e) => handleNavClick(e, '#workflow')}
            className="hover-red-line hover:text-white transition-colors uppercase"
          >
            How I Work
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hover-red-line hover:text-white transition-colors uppercase"
          >
            Contact
          </a>
        </nav>

        {/* Right: Availability Status & Resume */}
        <div className="hidden sm:flex items-center gap-5">
          <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
            <span className="w-2 h-2 rounded-full bg-[#C81024] animate-pulse" />
            <span className="uppercase text-[11px] tracking-wider text-slate-300">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          <button
            onClick={onOpenResume}
            className="px-4 py-2 rounded-none border border-[#C81024] text-[#FFFFFF] bg-[#C81024]/10 hover:bg-[#C81024] text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white border border-[#242424] bg-[#0B0B0B]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0B] border-b border-[#242424] px-6 py-6 flex flex-col gap-4 text-sm font-mono tracking-wider">
          <div className="flex items-center gap-2 text-xs text-[#A1A1AA] pb-3 border-b border-[#242424]">
            <span className="w-2 h-2 rounded-full bg-[#C81024]" />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="text-white py-1"
          >
            01 — SELECTED PROJECTS
          </a>
          <a
            href="#education-skills"
            onClick={(e) => handleNavClick(e, '#education-skills')}
            className="text-white py-1"
          >
            02 — EDUCATION &amp; SKILLS
          </a>
          <a
            href="#workflow"
            onClick={(e) => handleNavClick(e, '#workflow')}
            className="text-white py-1"
          >
            03 — HOW I WORK WITH DATA
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-white py-1"
          >
            04 — CONTACT
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 bg-[#C81024] text-white text-xs font-mono font-bold tracking-wider"
            >
              DOWNLOAD RESUME
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
