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
    <footer className="relative bg-[#06080E] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 p-[1.5px]">
                <div className="w-full h-full bg-dark-bg rounded-[6px] flex items-center justify-center">
                  <span className="font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-xs">
                    HP
                  </span>
                </div>
              </div>
              <span className="font-heading font-bold text-white text-base">
                Harshwardhan Pal
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-sans">
              Aspiring Data Analyst committed to extracting actionable commercial value from complex data landscapes through structured modeling, SQL, Python, and BI dashboards.
            </p>

            <div className="text-[11px] font-mono text-slate-500">
              Jagannath University, Jaipur • Class of 2027
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
              NAVIGATION
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, '#home')}
                className="text-slate-400 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, '#about')}
                className="text-slate-400 hover:text-white transition-colors"
              >
                About Me
              </a>
              <a
                href="#skills"
                onClick={(e) => handleNavClick(e, '#skills')}
                className="text-slate-400 hover:text-white transition-colors"
              >
                Technical Skills
              </a>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, '#projects')}
                className="text-slate-400 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#dashboard-demo"
                onClick={(e) => handleNavClick(e, '#dashboard-demo')}
                className="text-slate-400 hover:text-white transition-colors"
              >
                Interactive Demo
              </a>
              <a
                href="#experience"
                onClick={(e) => handleNavClick(e, '#experience')}
                className="text-slate-400 hover:text-white transition-colors"
              >
                Experience
              </a>
              <a
                href="#education"
                onClick={(e) => handleNavClick(e, '#education')}
                className="text-slate-400 hover:text-white transition-colors"
              >
                Education
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="text-slate-400 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Connect */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
              CONNECT
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/harshwardhanpal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-card border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/harshwardhan-pal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-card border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:harshwardhan.pal.analytics@gmail.com"
                className="p-2.5 rounded-xl bg-dark-card border border-white/10 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-slate-500 font-mono">
              harshwardhan.pal.analytics@gmail.com
            </p>
          </div>

        </div>

        {/* Bottom Copyright & Credit Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            &copy; {currentYear} Harshwardhan Pal. All rights reserved.
          </div>
          <div>
            Designed for Data Analytics &amp; Business Intelligence Excellence.
          </div>
        </div>

      </div>
    </footer>
  );
};
