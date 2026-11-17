import React from 'react';
import { GraduationCap, Building2, Calendar, Target } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      label: 'Degree',
      value: 'B.Tech CSE',
      color: 'text-[#3B82F6]',
    },
    {
      icon: Building2,
      label: 'University',
      value: 'Jagannath University, Jaipur',
      color: 'text-[#60A5FA]',
    },
    {
      icon: Calendar,
      label: 'Expected Graduation',
      value: '2027',
      color: 'text-[#F8FAFC]',
    },
    {
      icon: Target,
      label: 'Core Focus',
      value: 'Data Analytics & BI',
      color: 'text-[#3B82F6]',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 border-t border-white/[0.06] bg-[#0A0D14] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-[#3B82F6] uppercase tracking-wider block mb-1">
            Overview
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#F8FAFC] tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-[#3B82F6] mt-2 rounded-full" />
        </div>

        {/* Concise Description Card */}
        <div className="bg-[#121724] border border-white/[0.08] rounded-2xl p-6 sm:p-8 mb-8 shadow-sm hover:border-[#3B82F6]/30 transition-colors">
          <p className="text-base sm:text-lg text-[#F8FAFC] leading-relaxed font-sans font-normal">
            "I am a Computer Science Engineering student with a strong interest in Data Analytics and Business Intelligence. I enjoy working with datasets, identifying patterns, cleaning data and creating visualizations that help people make better decisions."
          </p>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mt-4 pt-4 border-t border-white/[0.06]">
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
                className="bg-[#121724] border border-white/[0.08] rounded-xl p-4 flex flex-col justify-between shadow-sm hover:border-[#3B82F6]/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
                <span className="text-sm font-semibold text-[#F8FAFC]">
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