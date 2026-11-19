import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Upload, MapPin, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>('/profile.jpg');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Check if user uploaded a custom avatar previously in this browser
    const saved = localStorage.getItem('harshwardhan_portfolio_avatar');
    if (saved) {
      setImgSrc(saved);
    }
  }, []);

  const handleImageError = () => {
    // If /profile.jpg is missing, fallback to clean placeholder
    if (!imgSrc.startsWith('data:')) {
      setImgSrc('/profile-placeholder.svg');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setImgSrc(result);
        localStorage.setItem('harshwardhan_portfolio_avatar', result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden bg-[#050505]">
      
      {/* Background Subtle Ambient Red Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#C81024]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* OVERSIZED CRIMSON-RED BACKGROUND WORD: "PORTFOLIO" */}
      <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 select-none overflow-hidden">
        <h2 className="font-display text-[22vw] leading-none text-[#C81024]/75 tracking-tight uppercase whitespace-nowrap opacity-90 drop-shadow-[0_0_80px_rgba(200,16,36,0.25)]">
          PORTFOLIO
        </h2>
      </div>

      {/* Main 3-Column Editorial Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center w-full py-8">
          
          {/* Left-Side Introduction (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left z-20">
            
            {/* Elegant Handwritten / Script Greeting */}
            <span className="font-script text-3xl sm:text-4xl text-[#E31B32] mb-1 font-bold">
              Hello, I'm
            </span>

            {/* Oversized Name */}
            <h1 className="font-display text-5xl sm:text-6xl xl:text-7xl leading-[0.9] text-white tracking-tight mb-2">
              HARSHWARDHAN <br />
              <span className="text-[#C81024]">PAL</span>
            </h1>

            {/* Role Title */}
            <div className="inline-block px-3 py-1 bg-[#C81024] text-white text-xs font-mono font-bold tracking-widest uppercase mb-6">
              DATA ANALYST
            </div>

            {/* Short Professional Introduction */}
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6 font-sans max-w-md">
              "I transform raw data into meaningful insights through data analysis, visualization, and storytelling. Passionate about uncovering patterns, solving business problems, and turning complex datasets into actionable decisions."
            </p>

            {/* Location & Status */}
            <div className="space-y-2 mb-8 text-xs font-mono text-[#A1A1AA]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C81024]" />
                <span className="text-slate-200">Based in India</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C81024]" />
                <span className="text-white font-medium">Open to Data Analyst Opportunities</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-7 py-3.5 btn-crimson text-center inline-block"
              >
                VIEW PROJECTS
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 btn-outline text-center inline-block"
              >
                LET'S CONNECT
              </a>
            </div>

          </div>

          {/* Center: Cinematic Portrait (4 Columns) */}
          <div className="lg:col-span-4 flex justify-center items-end relative z-20 my-6 lg:my-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-none border border-[#242424] bg-[#0B0B0B] overflow-hidden group shadow-2xl">
              
              {/* Profile Image Cutout */}
              <img
                src={imgSrc}
                alt="Harshwardhan Pal — Data Analyst"
                onError={handleImageError}
                className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:filter-none group-hover:scale-105 transition-all duration-700"
              />

              {/* Bottom Subtle Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* Red Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#C81024]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C81024]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C81024]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#C81024]" />

              {/* User Photo Upload Button Overlay */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 opacity-90 hover:opacity-100 transition-opacity">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-3 py-1.5 bg-[#050505]/90 border border-[#242424] hover:border-[#C81024] text-[10px] font-mono tracking-wider text-[#A1A1AA] hover:text-white flex items-center gap-1.5 transition-colors shadow-lg"
                  title="Upload your photo"
                >
                  <Upload className="w-3 h-3 text-[#C81024]" />
                  <span>CHANGE PHOTO</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right-Side: Three Minimal Focus Statistics (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end text-left lg:text-right z-20 space-y-8 pl-0 lg:pl-8">
            
            <div className="border-b lg:border-b-0 lg:border-r border-[#242424] pb-6 lg:pb-0 lg:pr-6 w-full group">
              <span className="font-display text-4xl sm:text-5xl text-[#C81024] block mb-1">
                01
              </span>
              <h3 className="text-lg font-bold font-mono tracking-wider text-white uppercase group-hover:text-[#C81024] transition-colors">
                DATA ANALYSIS
              </h3>
              <p className="text-xs text-[#A1A1AA] mt-1 font-sans">
                Exploratory data analysis, handling anomalies, and hypothesis modeling using Python &amp; SQL.
              </p>
            </div>

            <div className="border-b lg:border-b-0 lg:border-r border-[#242424] pb-6 lg:pb-0 lg:pr-6 w-full group">
              <span className="font-display text-4xl sm:text-5xl text-[#C81024] block mb-1">
                02
              </span>
              <h3 className="text-lg font-bold font-mono tracking-wider text-white uppercase group-hover:text-[#C81024] transition-colors">
                BUSINESS INSIGHTS
              </h3>
              <p className="text-xs text-[#A1A1AA] mt-1 font-sans">
                Translating multi-region sales, margin leakage, and customer churn into executive decisions.
              </p>
            </div>

            <div className="border-b lg:border-b-0 lg:border-r border-[#242424] pb-6 lg:pb-0 lg:pr-6 w-full group">
              <span className="font-display text-4xl sm:text-5xl text-[#C81024] block mb-1">
                03
              </span>
              <h3 className="text-lg font-bold font-mono tracking-wider text-white uppercase group-hover:text-[#C81024] transition-colors">
                DATA VISUALIZATION
              </h3>
              <p className="text-xs text-[#A1A1AA] mt-1 font-sans">
                Engineering high-impact Power BI executive dashboards and Excel financial diagnostic models.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-4 flex items-center justify-between border-t border-[#242424] text-[11px] font-mono text-[#A1A1AA]">
        <span>SCROLL DOWN TO EXPLORE</span>
        <a 
          href="#projects" 
          className="flex items-center gap-1.5 text-white hover:text-[#C81024] transition-colors"
        >
          <span>SELECTED PROJECTS</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C81024]" />
        </a>
      </div>

    </section>
  );
};
