import React from 'react';
import { educationData } from '../data/educationData';
import { experienceData } from '../data/experienceData';
import { GraduationCap, Briefcase, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-20 border-t border-zinc-200 bg-[#FAFAF9] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-zinc-600 uppercase tracking-wider block mb-1">
            Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-zinc-900 tracking-tight">
            Experience &amp; Education
          </h2>
          <div className="w-12 h-1 bg-[#09090B] mt-2 rounded-full" />
        </div>

        {/* Two-Column Grid: Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-zinc-900" />
              <h3 className="text-base font-bold font-heading text-zinc-900">
                Academic Education
              </h3>
            </div>

            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white border border-zinc-200 rounded-2xl p-6 space-y-4 shadow-xs hover:border-zinc-300 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800">
                      Graduation 2027
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {edu.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold font-heading text-zinc-900">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-zinc-700 font-semibold mt-0.5">
                    {edu.field}
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-zinc-600 font-sans">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-zinc-700 shrink-0" />
                    <span className="text-zinc-900 font-medium">{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed pt-2 border-t border-zinc-100">
                  {edu.overview}
                </p>

                {/* Key Coursework */}
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase text-zinc-500 block mb-2">
                    Relevant Coursework:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.slice(0, 5).map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-50 border border-zinc-200 text-zinc-700"
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
              <Briefcase className="w-4 h-4 text-zinc-900" />
              <h3 className="text-base font-bold font-heading text-zinc-900">
                Internships &amp; Training
              </h3>
            </div>

            <div className="space-y-4">
              {experienceData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-xs hover:border-zinc-300 transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold font-heading text-zinc-900">
                        {item.role}
                      </h4>
                      <span className="text-xs text-zinc-700 font-medium block">
                        {item.organization}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:text-right">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800">
                        {item.statusBadge}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-zinc-700" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-1.5 pt-1">
                    {item.responsibilities.slice(0, 3).map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-zinc-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-900 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools Badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-zinc-100">
                    {item.toolsUsed.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-50 border border-zinc-200 text-zinc-700"
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