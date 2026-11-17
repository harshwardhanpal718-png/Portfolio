import React from 'react';
import { GraduationCap, Building2, Calendar, Target } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      label: 'Degree',
      value: 'B.Tech CSE',
      color: 'text-blue-400',
    },
    {
      icon: Building2,
      label: 'University',
      value: 'Jagannath University, Jaipur',
      color: 'text-purple-400',
    },
    {
      icon: Calendar,
      label: 'Expected Graduation',
      value: '2027',
      color: 'text-emerald-400',
    },
    {
      icon: Target,
      label: 'Core Focus',
      value: 'Data Analytics & BI',
      color: 'text-cyan-400',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
            Overview
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
            A Little About Me
          </h2>
          <div className="w-12 h-1 bg-blue-500 mt-2 rounded-full" />
        </div>

        {/* Concise Description Card */}
        <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-normal">
            "I am a Computer Science Engineering student with a strong interest in Data Analytics and Business Intelligence. I enjoy working with datasets, identifying patterns, cleaning data and creating visualizations that help people make better decisions."
          </p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-4 pt-4 border-t border-white/5">
            Focusing on end-to-end analytical pipelines—from extracting raw transactional data using SQL, automating data wrangling with Pandas and NumPy, to building intuitive business intelligence dashboards in Power BI and Excel.
          </p>
        </div>

        {/* 4 Clean Highlight Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#111827]/70 border border-white/10 rounded-xl p-4 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
                <span className="text-sm font-semibold text-white">
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
