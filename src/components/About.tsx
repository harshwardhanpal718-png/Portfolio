import React from 'react';
import { GraduationCap, Building2, Calendar, Target } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      label: 'Degree',
      value: 'B.Tech CSE',
    },
    {
      icon: Building2,
      label: 'University',
      value: 'Jagannath University, Jaipur',
    },
    {
      icon: Calendar,
      label: 'Expected Graduation',
      value: '2027',
    },
    {
      icon: Target,
      label: 'Core Focus',
      value: 'Data Analytics & BI',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 border-t border-zinc-200 bg-[#FAFAF9] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-zinc-600 uppercase tracking-wider block mb-1">
            Overview
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-zinc-900 tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-[#09090B] mt-2 rounded-full" />
        </div>

        {/* Concise Description Card */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 mb-8 shadow-xs hover:border-zinc-300 transition-colors">
          <p className="text-base sm:text-lg text-zinc-800 leading-relaxed font-sans font-normal">
            "I am a Computer Science Engineering student with a strong interest in Data Analytics and Business Intelligence. I enjoy working with datasets, identifying patterns, cleaning data and creating visualizations that help people make better decisions."
          </p>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mt-4 pt-4 border-t border-zinc-100">
            Focusing on end-to-end analytical problem solving: extracting and aggregating transactional data via SQL, automating data wrangling with Python (Pandas, NumPy), and engineering high-impact executive dashboards in Power BI and Microsoft Excel.
          </p>
        </div>

        {/* 4 Clean Highlight Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-zinc-200 rounded-xl p-4 flex flex-col justify-between shadow-2xs hover:border-zinc-400 hover:shadow-xs transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-zinc-800" />
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
                <span className="text-sm font-semibold text-zinc-900">
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