import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, BarChart2 } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'showcase', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 transition-all duration-300">
      <div 
        className={`rounded-full px-5 py-3 sm:px-7 sm:py-3.5 flex items-center justify-between border transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0B0D16]/90 backdrop-blur-xl border-white/[0.1] shadow-2xl shadow-black/80' 
            : 'bg-[#0B0D16]/60 backdrop-blur-md border-white/[0.06]'
        }`}
      >
        {/* Logo */}
        <a 
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-[#7C3AED]/15 border border-[#7C3AED]/40 flex items-center justify-center text-[#06B6D4] transition-transform duration-300 group-hover:scale-105">
            <BarChart2 className="w-4 h-4" />
          </div>
          <span className="font-extrabold text-lg tracking-tight logo-gradient font-heading">
            HARSHWARDHAN.
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs font-semibold tracking-wide transition-all duration-200 relative py-1 ${
                  isActive 
                    ? 'text-[#06B6D4]' 
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#06B6D4] to-[#7C3AED] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="px-4 py-2 rounded-full text-xs font-bold btn-primary flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#94A3B8] hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-5 rounded-3xl bg-[#0B0D16]/95 backdrop-blur-2xl border border-white/[0.1] shadow-2xl flex flex-col gap-3 animate-fadeIn">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  isActive 
                    ? 'bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/30' 
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <div className="pt-2 border-t border-white/[0.08] flex justify-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-3 rounded-xl text-xs font-bold btn-primary flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
