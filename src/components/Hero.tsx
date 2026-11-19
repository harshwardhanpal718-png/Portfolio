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
    <section id="home" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Animated Cyber Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7300ff]/10 border border-[#7300ff]/30 text-[#d8b4fe] text-xs font-bold uppercase tracking-wider mb-6 animate-pulseGlow">
              <span>✦</span>
              <span>ASPIRING DATA ANALYST</span>
            </div>

            {/* Main Heading with Gradient Text */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1] mb-5">
              Hi, I'm Harshwardhan — <br />
              <span className="gradient-text">Turning Raw Data Into Meaningful Insights.</span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed mb-6 font-sans">
              I am a Computer Science Engineering student at <strong className="text-white font-semibold">Jagannath University, Jaipur</strong> passionate about data exploration, exploratory data analysis (EDA), and transforming raw complex datasets into actionable business dashboards using modern analytical tooling.
            </p>

            {/* Metadata Pills */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8 text-xs text-slate-300 font-mono">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
                <GraduationCap className="w-3.5 h-3.5 text-[#00f2fe]" />
                B.Tech CSE (Class of 2027)
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5 text-[#ec38bc]" />
                Jaipur, India
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl btn-gradient text-sm font-bold flex items-center justify-center gap-2"
              >
                <span>View Master Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl btn-glass text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#00f2fe]" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl btn-glass text-sm font-semibold flex items-center justify-center gap-2 text-slate-300 hover:text-white"
              >
                <Mail className="w-4 h-4 text-[#ec38bc]" />
                <span>Let's Discuss</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/harshwardhanpal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-[#00f2fe] hover:border-[#00f2fe]/40 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/harshwardhan-pal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-[#ec38bc] hover:border-[#ec38bc]/40 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:harshwardhan.pal.analytics@gmail.com"
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-[#00f2fe] hover:border-[#00f2fe]/40 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Holographic Cyber-Grid Visual Panel */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl bg-[radial-gradient(circle,rgba(115,0,255,0.22)_0%,transparent_70%)] border border-white/[0.08] p-4 flex items-center justify-center backdrop-blur-md shadow-glass-card overflow-hidden">
              
              {/* Cyber Grid Lines Overlay */}
              <div className="absolute inset-0 cyber-grid-pattern pointer-events-none opacity-40" />

              {/* Avatar Center Node */}
              <div className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border border-white/[0.1] bg-[#03001e]/80 shadow-[0_0_30px_rgba(0,242,254,0.25)] flex items-center justify-center group">
                <img
                  src={imgSrc}
                  alt="Harshwardhan Pal"
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Simulated Interactive Micro-Badge 1 (Top Left) */}
              <div className="absolute top-[12%] left-[6%] z-20 bg-[#03001e]/90 border border-white/[0.08] border-l-4 border-l-[#00f2fe] px-3.5 py-2 rounded-xl text-xs font-bold text-white shadow-2xl backdrop-blur-md animate-float flex items-center gap-2">
                <span>📊 SQL &amp; Power BI</span>
              </div>

              {/* Simulated Interactive Micro-Badge 2 (Bottom Right) */}
              <div className="absolute bottom-[12%] right-[6%] z-20 bg-[#03001e]/90 border border-white/[0.08] border-l-4 border-l-[#ec38bc] px-3.5 py-2 rounded-xl text-xs font-bold text-white shadow-2xl backdrop-blur-md animate-floatSlow flex items-center gap-2">
                <span>🐍 Python &amp; Pandas</span>
              </div>

              {/* Simulated Interactive Micro-Badge 3 (Bottom Left) */}
              <div className="absolute bottom-[28%] left-[4%] z-20 bg-[#03001e]/90 border border-white/[0.08] border-l-4 border-l-[#7300ff] px-3 py-1.5 rounded-lg text-[11px] font-bold text-slate-200 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-1.5">
                <span>⚡ EDA Workflows</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};