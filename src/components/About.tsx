import React from 'react';
import { GraduationCap, MapPin, Sparkles, TrendingUp, Compass } from 'lucide-react';
import { personalInfo, aboutStats } from '../data/portfolioConfig';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F5F0E9] relative overflow-hidden border-t border-[#EBE5DC]">
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#FAF7F2] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#E8F1E8] rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Editorial Narrative & Core Philosophy (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EBE5DC] mb-4">
              <Compass className="w-3.5 h-3.5 text-[#A98468]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A98468] font-sans">
                ABOUT ME
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171923] tracking-tight leading-[1.2] mb-6">
              Turning Data Into <br className="hidden sm:inline" />
              <span className="italic font-serif text-[#A98468]">Meaningful Insights</span>.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#62616A] leading-relaxed mb-8 font-sans">
              <p>
                {personalInfo.aboutBioP1}
              </p>
              <p>
                {personalInfo.aboutBioP2}
              </p>
            </div>

            {/* Editorial Philosophy Quote Card */}
            <div className="w-full p-6 sm:p-7 rounded-3xl bg-white border border-[#EBE5DC] shadow-soft-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F9EBDD]/60 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-start gap-3 relative z-10">
                <div className="w-9 h-9 rounded-xl bg-[#F9EBDD] flex items-center justify-center text-[#A98468] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-serif italic text-[#171923] leading-relaxed mb-3">
                    "Data without context is just noise. My mission is to translate raw metrics, customer patterns, and complex queries into clear stories that drive commercial impact."
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="font-script text-lg text-[#A98468] font-bold">
                      Harshwardhan Pal
                    </span>
                    <span className="text-xs text-[#62616A] font-sans">• Data Analyst</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Academic Anchors, Location & Metrics (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5 w-full">
            
            {/* Education Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#EBE5DC] shadow-card hover:-translate-y-0.5 transition-transform">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E8F1E8] border border-[#DCE9DF] flex items-center justify-center text-emerald-800 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A98468] block font-sans mb-1">
                    ACADEMIC FOUNDATION
                  </span>
                  <h3 className="text-base font-serif font-bold text-[#171923] mb-1">
                    {personalInfo.degree}
                  </h3>
                  <p className="text-xs text-[#62616A] font-sans">
                    {personalInfo.institution}
                  </p>
                  <div className="mt-3 pt-3 border-t border-[#EBE5DC] flex items-center justify-between text-xs font-sans">
                    <span className="text-[#62616A]">{personalInfo.graduationYear}</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#E8F1E8] text-emerald-800 text-[10px] font-bold">
                      Computer Science
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Availability Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#EBE5DC] shadow-card hover:-translate-y-0.5 transition-transform">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F9EBDD] border border-[#EEDAC7] flex items-center justify-center text-[#A98468] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#A98468] block font-sans mb-1">
                    LOCATION &amp; STATUS
                  </span>
                  <h3 className="text-base font-serif font-bold text-[#171923] mb-1">
                    {personalInfo.location}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span className="text-xs text-emerald-700 font-semibold font-sans">
                      {personalInfo.availabilityStatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Statistics Grid */}
            <div className="p-6 rounded-3xl bg-[#FAF7F2] border border-[#EBE5DC] shadow-card">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#EBE5DC]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#171923] font-sans">
                  <TrendingUp className="w-3.5 h-3.5 text-[#A98468]" />
                  <span>KEY METRICS AT A GLANCE</span>
                </div>
                <span className="text-[10px] text-[#A98468] font-bold font-sans uppercase">
                  VERIFIED
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                {aboutStats.map((st, sIdx) => (
                  <div key={sIdx} className="p-3.5 rounded-2xl bg-white border border-[#EBE5DC] shadow-xs">
                    <span className="font-serif text-2xl font-bold text-[#171923] block">
                      {st.value}
                    </span>
                    <span className="text-[11px] text-[#62616A] font-medium font-sans mt-0.5 block leading-tight">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};