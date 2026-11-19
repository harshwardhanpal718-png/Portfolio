import React, { useState } from 'react';
import { ArrowRight, Mail, Terminal, Database, TrendingUp, BarChart3, PieChart, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
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
      {/* Ambient Glow Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#7C3AED]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#06B6D4]/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#F59E0B]/08 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Introductory text & Title Badge */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#06B6D4] uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                HELLO, I'M HARSHWARDHAN PAL
              </span>
              <span className="text-white/20">•</span>
              <span className="px-3 py-1 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 text-[#d8b4fe] text-[11px] font-bold uppercase tracking-wider animate-pulseGlow">
                DATA ANALYST
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1] mb-5">
              Turning Data <br className="hidden sm:inline" />
              <span className="gradient-text">Into Decisions.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl leading-relaxed mb-8 font-sans">
              "I transform complex datasets into meaningful insights through data analytics, visualization, and business intelligence."
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl btn-primary text-sm font-bold flex items-center justify-center gap-2 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl btn-secondary text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#06B6D4]" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Core Capability Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#06B6D4]/15 border border-[#06B6D4]/30 flex items-center justify-center text-[#06B6D4] shrink-0">
                  <Database className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[#94A3B8] block text-[10px]">DATABASE</span>
                  <span className="text-white font-bold">SQL &amp; MySQL</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#7C3AED]/15 border border-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] shrink-0">
                  <BarChart3 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[#94A3B8] block text-[10px]">DASHBOARDS</span>
                  <span className="text-white font-bold">Power BI &amp; Excel</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-7 h-7 rounded-lg bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[#94A3B8] block text-[10px]">ANALYTICS</span>
                  <span className="text-white font-bold">Python &amp; Pandas</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Multi-Card Analytics Visual Cluster */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-square rounded-3xl bg-[radial-gradient(circle,rgba(124,58,237,0.22)_0%,transparent_70%)] border border-white/[0.08] p-5 flex items-center justify-center backdrop-blur-xl shadow-obsidian-card">
              
              {/* Subtle Data Grid Pattern Overlay */}
              <div className="absolute inset-0 data-grid-pattern pointer-events-none opacity-40 rounded-3xl" />

              {/* Portrait Center Frame */}
              <div className="relative z-10 w-52 h-52 sm:w-60 sm:h-60 rounded-2xl overflow-hidden border border-white/[0.12] bg-[#06070D]/90 shadow-[0_0_35px_rgba(6,182,212,0.25)] flex items-center justify-center group">
                <img
                  src={imgSrc}
                  alt="Harshwardhan Pal"
                  onError={handleImageError}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Floating Element 1: Power BI KPI Preview (Top Right) */}
              <div className="absolute top-[8%] -right-[4%] z-20 bg-[#0B0D16]/95 border border-white/[0.1] border-l-4 border-l-[#F59E0B] p-3 rounded-xl text-xs font-mono text-white shadow-2xl backdrop-blur-md animate-float flex items-center gap-2.5">
                <BarChart3 className="w-4 h-4 text-[#F59E0B]" />
                <div>
                  <span className="text-[10px] text-[#94A3B8] block">Power BI Model</span>
                  <span className="font-bold text-white text-xs">Gross Margin: +14.2%</span>
                </div>
              </div>

              {/* Floating Element 2: SQL Query Window (Top Left) */}
              <div className="absolute top-[12%] -left-[6%] z-20 bg-[#0B0D16]/95 border border-white/[0.1] border-l-4 border-l-[#06B6D4] p-3 rounded-xl text-xs font-mono text-white shadow-2xl backdrop-blur-md animate-floatSlow flex items-center gap-2.5">
                <Database className="w-4 h-4 text-[#06B6D4]" />
                <div>
                  <span className="text-[10px] text-[#06B6D4] block font-bold">SQL CTE Query</span>
                  <span className="text-slate-300 text-[11px]">SELECT region, SUM(rev)</span>
                </div>
              </div>

              {/* Floating Element 3: Python Pandas Analytics Snippet (Bottom Left) */}
              <div className="absolute -bottom-[2%] left-[4%] z-20 bg-[#0B0D16]/95 border border-white/[0.1] border-l-4 border-l-[#7C3AED] p-3 rounded-xl text-xs font-mono text-white shadow-2xl backdrop-blur-md animate-float flex items-center gap-2.5">
                <Terminal className="w-4 h-4 text-[#7C3AED]" />
                <div>
                  <span className="text-[10px] text-[#94A3B8] block">Pandas EDA</span>
                  <span className="text-white text-[11px] font-bold">df.groupby('segment').agg()</span>
                </div>
              </div>

              {/* Floating Element 4: Interactive Micro Chip (Bottom Right) */}
              <div className="absolute bottom-[10%] -right-[6%] z-20 bg-[#0B0D16]/95 border border-white/[0.1] px-3 py-1.5 rounded-lg text-[11px] font-mono text-slate-200 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-1.5">
                <PieChart className="w-3.5 h-3.5 text-[#06B6D4]" />
                <span className="text-[#06B6D4] font-bold">RFM Cohorts: 4 Tiers</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
