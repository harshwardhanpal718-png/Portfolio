import React from 'react';
import { educationData } from '../data/educationData';
import { experienceData } from '../data/experienceData';
import { GraduationCap, Briefcase, Calendar, MapPin, Building2, CheckCircle2, Award, BookOpen } from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  const certifications = [
    {
      title: 'Python for Data Science & Machine Learning',
      issuer: 'Practical Data Track',
      year: '2024',
      badge: 'Verified',
      skills: 'Pandas, NumPy, Matplotlib, Seaborn',
    },
    {
      title: 'SQL & Relational Database Architecture',
      issuer: 'Technical Training Lab',
      year: '2024',
      badge: 'Verified',
      skills: 'Complex Joins, Window Functions, CTEs, Indexing',
    },
    {
      title: 'Power BI Business Intelligence Modeling',
      issuer: 'Dashboard Analytics Lab',
      year: '2024',
      badge: 'Practical',
      skills: 'DAX Measures, Star Schema, Executive Dashboards',
    },
    {
      title: 'Cisco Networking & Enterprise Infrastructure',
      issuer: 'Cisco Networking Academy',
      year: '2023 - 2024',
      badge: 'Certified',
      skills: 'TCP/IP, Network Architecture, Packet Routing',
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-white/[0.06] relative overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 -right-36 w-80 h-80 bg-[#06B6D4]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-36 w-80 h-80 bg-[#7C3AED]/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#7C3AED] text-xs font-mono uppercase tracking-wider mb-3">
            <span>✦</span>
            <span>Trajectory &amp; Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Education &amp; <span className="gradient-text">Certifications.</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#7C3AED] via-[#06B6D4] to-[#F59E0B] mt-3 rounded-full" />
        </div>

        {/* Two-Column Grid: Education on Left, Internships on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Academic Education (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#06B6D4]">
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
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4] font-bold">
                      Expected Graduation 2027
                    </span>
                    <span className="text-[10px] font-mono text-[#94A3B8]">
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

                <div className="space-y-1.5 text-xs text-[#94A3B8] font-sans">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-3.5 h-3.5 text-[#06B6D4] shrink-0" />
                    <span className="text-slate-200 font-medium">{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#94A3B8] shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-xs text-[#94A3B8] leading-relaxed pt-3 border-t border-white/[0.06]">
                  {edu.overview}
                </p>

                {/* Relevant Coursework */}
                <div className="pt-2">
                  <div className="flex items-center gap-1.5 mb-2 text-[#94A3B8]">
                    <BookOpen className="w-3 h-3 text-[#06B6D4]" />
                    <span className="text-[10px] font-mono uppercase">
                      Core Technical Coursework:
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course, cIdx) => (
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

          {/* Right Column: Internships & Practical Training (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#7C3AED]">
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
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#7C3AED]/15 border border-[#7C3AED]/30 text-[#d8b4fe] font-bold">
                        {item.statusBadge}
                      </span>
                      <span className="text-[11px] font-mono text-[#94A3B8] flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#06B6D4]" />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-2 pt-1">
                    {item.responsibilities.slice(0, 3).map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#06B6D4] shrink-0 mt-0.5" />
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

        {/* Certifications & Technical Programs Grid */}
        <div>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#F59E0B]">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold font-heading text-white">
              Certifications &amp; Technical Courses
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0B0D16]/80 border border-white/[0.06] hover:border-[#F59E0B]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono text-[#F59E0B] font-bold px-2 py-0.5 rounded bg-[#F59E0B]/10 border border-[#F59E0B]/20">
                      {cert.badge}
                    </span>
                    <span className="text-[10px] font-mono text-[#94A3B8]">
                      {cert.year}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-[#06B6D4] mb-3">
                    {cert.issuer}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] text-[10px] font-mono text-[#94A3B8]">
                  <span>Focus: {cert.skills}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
