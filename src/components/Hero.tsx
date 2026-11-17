import React, { useState } from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, TrendingUp, CheckCircle, Sparkles, MapPin, GraduationCap } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [imgSrc, setImgSrc] = useState('/profile.jpg');
  const [imgError, setImgError] = useState(false);

  const handleImageError = () => {
    // Graceful fallback to custom monogram placeholder without showing broken image
    if (!imgError) {
      setImgError(true);
      setImgSrc('/profile-placeholder.svg');
    }
  };

  const techBadges = [
    { name: 'SQL', color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 text-blue-300' },
    { name: 'Python', color: 'from-amber-500/20 to-yellow-600/20 border-amber-500/30 text-amber-300' },
    { name: 'Excel', color: 'from-emerald-500/20 to-green-600/20 border-emerald-500/30 text-emerald-300' },
    { name: 'Power BI', color: 'from-purple-500/20 to-indigo-600/20 border-purple-500/30 text-purple-300' },
  ];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Gradients & Glows */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Subtitle / Available Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-mono mb-6 backdrop-blur-md shadow-glow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-semibold tracking-wider text-slate-300">HELLO, I'M</span>
              <span className="text-slate-500">•</span>
              <span className="text-emerald-400 font-medium">Open to Data Analyst Opportunities</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1] mb-3">
              Harshwardhan <span className="text-gradient">Pal</span>
            </h1>

            {/* Professional Title & Tagline */}
            <div className="mb-6 space-y-1">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-blue-400 tracking-wide">
                Aspiring Data Analyst
              </h2>
              <p className="text-sm sm:text-base font-medium text-slate-muted italic">
                "Turning Raw Data Into Meaningful Insights."
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed mb-8">
              I am passionate about exploring data, discovering meaningful patterns and transforming complex datasets into actionable business insights using modern analytical tools.
            </p>

            {/* Metadata Pills */}
            <div className="flex flex-wrap items-center gap-3 mb-8 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-card/60 border border-white/5">
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                <span>B.Tech CSE (Class of 2027)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-card/60 border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>Jagannath University, Jaipur, India</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold flex items-center justify-center gap-2.5 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl border border-blue-500/30 hover:border-blue-400 bg-blue-600/10 text-blue-300 hover:text-white text-sm font-medium flex items-center justify-center gap-2 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Trust Row */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/5 w-full">
              <span className="text-xs text-slate-500 font-mono">CONNECT:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/harshwardhanpal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-dark-card border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/harshwardhan-pal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-dark-card border border-white/10 text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:harshwardhan.pal.analytics@gmail.com"
                  className="p-2.5 rounded-xl bg-dark-card border border-white/10 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  aria-label="Direct Email"
                  title="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Profile & Floating Analytics Visuals */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Radial Backlight */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

            {/* Main Visual Frame */}
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-square rounded-3xl bg-dark-card/90 border border-white/10 p-4 shadow-glass backdrop-blur-xl flex flex-col items-center justify-center group">
              
              {/* Subtle inner decorative border */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#101522] to-[#0A0E17] border border-white/5 flex items-center justify-center">
                
                {/* Profile Image with Fallback */}
                <img
                  src={imgSrc}
                  alt="Harshwardhan Pal"
                  onError={handleImageError}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />

                {/* Corner Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent pointer-events-none" />

                {/* Photo replacement helper badge */}
                <div className="absolute bottom-3 inset-x-3 text-center pointer-events-none">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-dark-bg/80 border border-white/10 text-[11px] text-slate-300 backdrop-blur-md">
                    <Sparkles className="w-3 h-3 text-blue-400" />
                    <span>Harshwardhan Pal • Verified Profile</span>
                  </div>
                </div>
              </div>

              {/* Floating Element 1: Top Right KPI Badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 p-3 rounded-2xl bg-dark-card/95 border border-blue-500/30 shadow-xl backdrop-blur-md animate-float">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-muted block">Analytics Accuracy</span>
                    <span className="text-sm font-bold font-heading text-white">99.8% Precision</span>
                  </div>
                </div>
              </div>

              {/* Floating Element 2: Bottom Left Projects Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 p-3 rounded-2xl bg-dark-card/95 border border-purple-500/30 shadow-xl backdrop-blur-md" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-muted block">Practical Case Studies</span>
                    <span className="text-sm font-bold font-heading text-white">5+ Analyzed Projects</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Technology Labels Array: SQL, Python, Excel, Power BI */}
            <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
              {techBadges.map((tech) => (
                <div
                  key={tech.name}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border bg-gradient-to-r backdrop-blur-md shadow-sm transition-transform hover:-translate-y-1 ${tech.color}`}
                >
                  {tech.name}
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
