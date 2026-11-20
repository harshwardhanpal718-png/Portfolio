import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioConfig';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
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

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onOpenResume) {
      e.preventDefault();
      onOpenResume();
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'nav-blur-cream border-b border-[#EBE5DC] shadow-soft' 
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 sm:px-10 lg:px-14 xl:px-20 h-20 flex items-center justify-between">
          
          {/* Left: Brand Logo HARSHWARDHAN. */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-[#171923] group-hover:text-[#A98468] transition-colors">
              {personalInfo.shortName}<span className="text-[#A98468]">.</span>
            </span>
          </a>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium tracking-normal transition-colors py-1 ${
                    isActive 
                      ? 'text-[#171923] font-semibold' 
                      : 'text-[#62616A] hover:text-[#171923]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right CTA Button: Download Resume */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/Harshwardhan_Pal_Resume.pdf"
              download="Harshwardhan_Pal_Resume.pdf"
              onClick={handleResumeClick}
              className="btn-dark px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide flex items-center gap-2 shadow-soft cursor-pointer group"
              title="Download Harshwardhan Pal's Resume"
            >
              <Download className="w-3.5 h-3.5 text-[#A98468]" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#171923] hover:bg-[#F5F0E9] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#EBE5DC] px-6 py-6 space-y-4 shadow-soft-lg animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-[#171923] py-2 border-b border-[#EBE5DC]/60 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#A98468]">→</span>
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="/Harshwardhan_Pal_Resume.pdf"
              download="Harshwardhan_Pal_Resume.pdf"
              onClick={handleResumeClick}
              className="btn-dark w-full py-3 rounded-full text-xs font-semibold tracking-wide flex items-center justify-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-[#A98468]" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
