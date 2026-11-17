import React from 'react';
import { educationData } from '../data/educationData';
import { experienceData } from '../data/experienceData';
import { GraduationCap, Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-20 border-t border-white/[0.06] bg-[#0A0D14] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-[#3B82F6] uppercase tracking-wider block mb-1">
            Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#F8FAFC] tracking-tight">
            Experience &amp; Education
          </h2>
          <div className="w-12 h-1 bg-[#3B82F6] mt-2 rounded-full" />
        </div>

        {/* Two-Column Grid: Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-[#3B82F6]" />
              <h3 className="text-base font-bold font-heading text-[#F8FAFC]">
                Academic Education
              </h3>
            </div>

            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="bg-[#121724] border border-white/[0.08] rounded-2xl p-6 space-y-4 shadow-sm hover:border-[#3B82F6]/30 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#3B82F6]/15 border border-[#3B82F6]/30 text-[#60A5FA]">
                      Graduation 2027
                    </span>
                    <span className="text-[10px] font-mono text-[#94A3B8]">
                      {edu.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-heading text-[#F8FAFC]">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-[#3B82F6] font-medium mt-0.5">
                    {edu.field}
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-[#94A3B8] font-sans">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-[#60A5FA] shrink-0" />
                    <span className="text-[#F8FAFC]">{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-xs text-[#94A3B8] leading-relaxed pt-2 border-t border-white/[0.06]">
                  {edu.overview}
                </p>

                {/* Key Coursework */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase text-[#94A3B8] block mb-2">
                    Relevant Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.slice(0, 5).map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0A0D14] border border-white/[0.06] text-[#94A3B8]"
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
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-4 h-4 text-[#3B82F6]" />
              <h3 className="text-base font-bold font-heading text-[#F8FAFC]">
                Internships &amp; Training
              </h3>
            </div>

            <div className="space-y-4">
              {experienceData.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#121724] border border-white/[0.08] rounded-2xl p-6 shadow-sm hover:border-[#3B82F6]/30 transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold font-heading text-[#F8FAFC]">
                        {item.role}
                      </h4>
                      <span className="text-xs text-[#3B82F6] font-medium block">
                        {item.organization}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:text-right">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#182032] border border-white/10 text-[#60A5FA]">
                        {item.statusBadge}
                      </span>
                      <span className="text-[11px] font-mono text-[#94A3B8] flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#3B82F6]" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-1.5 pt-1">
                    {item.responsibilities.slice(0, 3).map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-[#F8FAFC]/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools Badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-white/[0.06]">
                    {item.toolsUsed.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0A0D14] border border-white/[0.06] text-[#60A5FA]"
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