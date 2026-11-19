import React from 'react';
import { GraduationCap, Building2, Calendar, Target } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      label: 'Degree',
      value: 'B.Tech CSE',
      color: '#00f2fe',
    },
    {
      icon: Building2,
      label: 'University',
      value: 'Jagannath University, Jaipur',
      color: '#ec38bc',
    },
    {
      icon: Calendar,
      label: 'Graduation',
      value: 'Expected 2027',
      color: '#7300ff',
    },
    {
      icon: Target,
      label: 'Core Focus',
      value: 'Data Analytics & BI',
      color: '#00f2fe',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/[0.06] relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-[#7300ff]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-[#00f2fe]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#00f2fe] text-xs font-mono uppercase tracking-wider mb-3">
            <span>✦</span>
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00f2fe] via-[#ec38bc] to-[#7300ff] mt-3 rounded-full" />
        </div>

        {/* Concise Description Card */}
        <div className="glass-card p-6 sm:p-10 mb-8 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,rgba(236,56,188,0.1)_0%,transparent_70%)] pointer-events-none" />
          
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-sans font-medium">
            "I am a Computer Science Engineering student with an active focus in Data Analytics and Business Intelligence. I enjoy digging into multi-dimensional datasets, uncovering trends, cleaning chaotic data, and engineering expressive visualizations that empower stakeholders to make informed business choices."
          </p>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mt-6 pt-6 border-t border-white/[0.08]">
            My approach prioritizes end-to-end analytical problem solving: extracting and aggregating transactional data through structured <strong className="text-white font-semibold">SQL</strong> queries, automating transformation and exploratory workflows with <strong className="text-white font-semibold">Python (Pandas, NumPy)</strong>, and designing responsive, high-impact business dashboards in <strong className="text-white font-semibold">Power BI</strong> and <strong className="text-white font-semibold">Microsoft Excel</strong>.
          </p>
        </div>

        {/* 4 Clean Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-5 rounded-2xl flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div
                    className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] transition-transform duration-300 group-hover:scale-110"
                    style={{ color: item.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
                <span className="text-base font-bold text-white group-hover:text-slate-100 transition-colors">
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
