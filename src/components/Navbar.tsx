import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-[1200px] z-50 rounded-full px-6 sm:px-8 py-3.5 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] flex items-center justify-between shadow-2xl transition-all duration-300">
      {/* Logo */}
      <a
        href="#home"
        onClick={(e) => handleNavClick(e, '#home')}
        className="font-extrabold text-xl tracking-tighter bg-gradient-to-r from-[#00f2fe] to-[#ec38bc] bg-clip-text text-transparent hover:opacity-90 transition-opacity"
      >
        HARSH.
      </a>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center space-x-7">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors ${
                isActive
                  ? 'text-[#00f2fe] font-semibold'
                  : 'text-slate-300 hover:text-[#00f2fe]'
              }`}
            >
              {link.name}
            </a>
          );
        })}
      </nav>

      {/* Right Action: Download Resume */}
      <div className="hidden sm:flex items-center space-x-3">
        <button
          onClick={onOpenResume}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#7300ff] to-[#ec38bc] shadow-[0_4px_20px_rgba(115,0,255,0.4)] hover:shadow-[0_6px_25px_rgba(236,56,188,0.5)] transition-all duration-300 hover:-translate-y-0.5"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Resume</span>
        </button>
      </div>

      {/* Mobile Toggle Button */}
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-slate-200 hover:text-[#00f2fe]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-3 bg-[#03001e]/95 backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-6 shadow-2xl md:hidden">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-[#00f2fe] hover:bg-white/[0.03] rounded-xl"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#7300ff] to-[#ec38bc] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};