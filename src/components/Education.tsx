import React from 'react';
import { educationData } from '../data/educationData';
import { GraduationCap, Building2, Calendar, MapPin, BookOpen, CheckCircle, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative bg-[#080B12] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Education &amp; <span className="text-gradient">Qualifications</span>
          </h2>
          <p className="text-slate-muted text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Formal Computer Science Engineering education grounding rigorous data structures, database architecture, and statistical methods.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Timeline Showcase */}
        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-glass"
            >
              {/* Left accent strip */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600" />

              {/* Top Row: Degree & University */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-300">
                        {edu.status}
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {edu.academicPerformance}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                      {edu.degree} — {edu.field}
                    </h3>
                    <p className="text-sm font-medium text-slate-300 mt-0.5 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-purple-400" />
                      <span>{edu.institution}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1 shrink-0 pl-16 lg:pl-0">
                  <div className="flex items-center gap-1.5 text-blue-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Graduation: {edu.expectedGraduation}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              {/* Middle Row: Overview */}
              <div className="py-6 border-b border-white/10">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {edu.overview}
                </p>
              </div>

              {/* Bottom Row: Relevant Coursework & Focus Areas */}
              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Coursework */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-3">
                    <BookOpen className="w-4 h-4" />
                    <span>Relevant Engineering Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-dark-bg/80 border border-white/5 text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Analytical Focus Areas */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400 uppercase tracking-wider mb-3">
                    <Award className="w-4 h-4" />
                    <span>Specialized Analytical Tracks</span>
                  </div>
                  <div className="space-y-1.5">
                    {edu.focusAreas?.map((focus: string, fIdx: number) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
