import React from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  MessageCircle
} from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioConfig';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF7F2]">
      
      {/* Subtle Warm Background Accent Gradients */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#F9EBDD] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#DCE9DF] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1E8] border border-[#DCE9DF] mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-xs font-medium text-[#171923]">
                {personalInfo.availabilityStatus}
              </span>
            </div>

            {/* Eyebrow Label with Full Name */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A98468] font-sans">
                HELLO, I'M
              </span>
              <span className="text-sm font-bold tracking-wider text-[#171923] font-sans uppercase">
                HARSHWARDHAN PAL
              </span>
              <span className="text-xs text-[#A98468]">✦</span>
            </div>

            {/* Large Elegant Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#171923] tracking-tight leading-[1.12] mb-6">
              {personalInfo.role} <br className="hidden sm:inline" />
              {personalInfo.headlineMain} <br />
              <span className="font-script text-[#A98468] text-5xl sm:text-6xl lg:text-7xl font-bold not-italic inline-block -rotate-1 ml-1">
                {personalInfo.headlineAccent}
              </span>
              <span className="font-serif">.</span>
            </h1>

            {/* Short Narrative Description */}
            <p className="text-base sm:text-lg text-[#62616A] leading-relaxed max-w-xl mb-8 font-sans">
              {personalInfo.heroBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="btn-dark px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2 group cursor-pointer shadow-soft"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="btn-cream-border px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2 shadow-card cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#A98468]" />
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Social Links & Decorative Arrow */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#EBE5DC] w-full max-w-xl">
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-[#EBE5DC] hover:border-[#A98468] hover:bg-[#F5F0E9] flex items-center justify-center text-[#171923] hover:text-[#A98468] transition-all shadow-card"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white border border-[#EBE5DC] hover:border-[#A98468] hover:bg-[#F5F0E9] flex items-center justify-center text-[#171923] hover:text-[#A98468] transition-all shadow-card"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 rounded-full bg-white border border-[#EBE5DC] hover:border-[#A98468] hover:bg-[#F5F0E9] flex items-center justify-center text-[#171923] hover:text-[#A98468] transition-all shadow-card"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Decorative Handwritten Note with Curve */}
              <div className="flex items-center gap-2">
                <span className="font-script text-xl text-[#A98468] font-bold">
                  Turning Data Into Decisions
                </span>
                <span className="text-[#A98468] text-lg">⤴</span>
              </div>
            </div>

          </div>

          {/* Right Column: Free-Standing Cutout PNG Portrait (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-end py-4">
            
            {/* Soft Ambient Radial Glow Behind Cutout */}
            <div className="absolute w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full bg-gradient-to-tr from-[#E8F1E8] via-[#F9EBDD] to-[#FAF7F2] blur-3xl opacity-80 -z-10 pointer-events-none" />

            {/* Free-Standing Cutout PNG — Completely Out of the Box with Smooth Dissolve Bottom */}
            <div 
              className="relative z-10 w-full max-w-[360px] sm:max-w-[420px] flex justify-center"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)'
              }}
            >
              <img
                src="/profile.png?v=4"
                alt={personalInfo.name}
                className="w-full h-auto max-h-[520px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};