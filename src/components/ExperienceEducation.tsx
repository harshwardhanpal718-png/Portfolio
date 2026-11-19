import React from 'react';
import { educationData } from '../data/educationData';
import { experienceData } from '../data/experienceData';
import { GraduationCap, Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-white/[0.06] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-[#00f2fe]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-80 h-80 bg-[#ec38bc]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#ec38bc] text-xs font-mono uppercase tracking-wider mb-3">
            <span>✦</span>
            <span>Trajectory &amp; Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#ec38bc] via-[#7300ff] to-[#00f2fe] mt-3 rounded-full" />
        </div>

        {/* Two-Column Grid: Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#00f2fe]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">
                Academic Education
              </h3>
            </div>

            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 sm:p-7 space-y-4 border border-white/[0.08] hover:border-white/20 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe] font-bold">
                      Graduation 2027
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {edu.status}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold font-heading text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-slate-300 font-medium mt-0.5">
                    {edu.field}
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-400 font-sans">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-[#00f2fe] shrink-0" />
                    <span className="text-slate-200 font-medium">{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed pt-3 border-t border-white/[0.06]">
                  {edu.overview}
                </p>

                {/* Key Coursework */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                    Relevant Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.slice(0, 5).map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-slate-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Practical Experience & Internships (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#ec38bc]">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">
                Internships &amp; Practical Training
              </h3>
            </div>

            <div className="space-y-4">
              {experienceData.map((item) => (
                <div
                  key={item.id}
                  className="glass-card rounded-3xl p-6 sm:p-7 space-y-4 border border-white/[0.08] hover:border-white/20 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold font-heading text-white">
                        {item.role}
                      </h4>
                      <span className="text-xs text-slate-300 font-medium block">
                        {item.organization}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:text-right">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#ec38bc]/10 border border-[#ec38bc]/30 text-[#ec38bc] font-bold">
                        {item.statusBadge}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#00f2fe]" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-2 pt-1">
                    {item.responsibilities.slice(0, 3).map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools Badges */}
                  <div className="pt-3 flex flex-wrap gap-1.5 border-t border-white/[0.06]">
                    {item.toolsUsed.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
