import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8DFD5] py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-2.5 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#7E5331] to-[#B89370] p-[1.5px] transition-transform group-hover:scale-105 shadow-sm">
            <div className="w-full h-full bg-[#FAF8F5] rounded-[6.5px] flex items-center justify-center">
              <span className="font-heading font-bold text-[#7E5331] text-sm">
                HP
              </span>
            </div>
          </div>
          <span className="font-heading font-bold text-[#1C1612] text-base tracking-tight group-hover:text-[#7E5331] transition-colors">
            Harshwardhan Pal
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 bg-white/70 border border-[#E8DFD5] rounded-xl px-2 py-1 shadow-warm-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-[#7E5331] bg-[#F3EAE0] font-semibold'
                    : 'text-[#63564C] hover:text-[#1C1612] hover:bg-[#F8F4EE]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Resume */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#2A170B] hover:bg-[#462A16] transition-all shadow-sm hover:-translate-y-0.5"
          >
            <Download className="w-3.5 h-3.5 text-[#E4D3C0]" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white border border-[#E8DFD5] text-[#462A16] hover:bg-[#F8F4EE]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5]/98 backdrop-blur-xl border-b border-[#E8DFD5] px-6 py-4 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#462A16] hover:bg-[#F3EAE0]"
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
                className="w-full py-2.5 rounded-lg bg-[#2A170B] text-white text-xs font-semibold flex items-center justify-center gap-2"
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
