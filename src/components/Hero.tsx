import React, { useState } from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, MapPin, GraduationCap } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [imgSrc, setImgSrc] = useState('/profile.jpg');
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    if (!imgError) {
      setImgError(true);
      setImgSrc('/profile-placeholder.svg');
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Intros */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Data Analyst Roles</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mb-2">
              Harshwardhan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Pal</span>
            </h1>

            {/* Role & Tagline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-2">
              Aspiring Data Analyst
            </h2>
            <p className="text-sm sm:text-base font-medium text-blue-400/90 mb-5 italic">
              "Turning Raw Data Into Meaningful Insights."
            </p>

            {/* Concise Bio */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed mb-6">
              I am a Computer Science Engineering student at <strong className="text-white font-medium">Jagannath University, Jaipur</strong> passionate about data exploration, exploratory data analysis (EDA), and transforming raw complex datasets into actionable business dashboards using SQL, Python, Power BI, and Excel.
            </p>

            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#111827] border border-white/5">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                B.Tech CSE (Class of 2027)
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#111827] border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                Jaipur, India
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-6">
              <a
                href="#projects"
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/25"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-[#111827] hover:bg-[#1c2436] border border-white/10 text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-blue-400" />
                <span>Resume</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-white/10 hover:border-blue-500/40 text-slate-300 hover:text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/harshwardhanpal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#111827] border border-white/10 text-slate-400 hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/harshwardhan-pal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#111827] border border-white/10 text-slate-400 hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:harshwardhan.pal.analytics@gmail.com"
                className="p-2 rounded-lg bg-[#111827] border border-white/10 text-slate-400 hover:text-emerald-400 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean Minimal Avatar Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-[#111827] border border-white/10 p-2 shadow-xl overflow-hidden group">
              <div className="w-full h-full rounded-xl overflow-hidden bg-[#0A0E17] flex items-center justify-center relative">
                <img
                  src={imgSrc}
                  alt="Harshwardhan Pal"
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Bottom tag */}
              <div className="absolute bottom-4 inset-x-4 text-center">
                <span className="inline-block px-3 py-1 rounded-full bg-[#080B12]/90 border border-white/10 text-[11px] font-mono text-slate-300 backdrop-blur-md">
                  Harshwardhan Pal • Data Analyst
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
