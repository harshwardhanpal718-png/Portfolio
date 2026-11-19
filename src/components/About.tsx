import React from 'react';
import { GraduationCap, Building2, Calendar, Target, Database, BarChart3, Binary, Award } from 'lucide-react';

export const About: React.FC = () => {
  const profileDetails = [
    {
      icon: GraduationCap,
      label: 'Education',
      value: 'B.Tech Computer Science Engineering',
      color: '#06B6D4',
    },
    {
      icon: Building2,
      label: 'University',
      value: 'Jagannath University, Jaipur',
      color: '#7C3AED',
    },
    {
      icon: Calendar,
      label: 'Expected Graduation',
      value: '2027',
      color: '#F59E0B',
    },
    {
      icon: Target,
      label: 'Core Field',
      value: 'Data Analytics',
      color: '#06B6D4',
    },
  ];

  const analyticalStrengths = [
    {
      icon: Database,
      title: 'SQL & Relational Modeling',
      desc: 'Formulating modular CTEs, window functions, and multi-table joins to extract transactional truth.',
    },
    {
      icon: Binary,
      title: 'Python (Pandas & NumPy)',
      desc: 'Automating messy data transformations, handling outlier distributions, and exploratory data analysis.',
    },
    {
      icon: BarChart3,
      title: 'Power BI & Executive Storytelling',
      desc: 'Developing star-schema semantic models, DAX measures, and responsive executive dashboards.',
    },
    {
      icon: Award,
      title: 'Statistical Business Rigor',
      desc: 'Applying hypothesis testing, cohort retention metrics, and RFM customer segmentation.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/[0.06] relative overflow-hidden">
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/2 -left-36 w-80 h-80 bg-[#7C3AED]/12 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 -right-36 w-80 h-80 bg-[#06B6D4]/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#06B6D4] text-xs font-mono uppercase tracking-wider mb-3">
            <span>✦</span>
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Behind <span className="gradient-text">The Data.</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#06B6D4] via-[#7C3AED] to-[#F59E0B] mt-3 rounded-full" />
        </div>

        {/* Master Description Card */}
        <div className="glass-card p-6 sm:p-10 mb-8 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_70%)] pointer-events-none" />
          
          <p className="text-lg sm:text-xl text-[#F8FAFC] leading-relaxed font-sans font-medium">
            "I'm a Computer Science Engineering student passionate about Data Analytics and discovering meaningful patterns hidden within data. I enjoy cleaning datasets, exploring trends, building dashboards, and transforming raw information into actionable business insights."
          </p>

          <div className="mt-8 pt-8 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#94A3B8]">
            <p className="leading-relaxed">
              My analytical philosophy centers on <strong className="text-white font-semibold">decision intelligence</strong>: transforming raw database logs into cohesive narratives that answer <em>why</em> revenue moved, <em>which</em> customer cohorts matter, and <em>where</em> operational bottlenecks lie.
            </p>
            <p className="leading-relaxed">
              From engineering structured SQL aggregation pipelines to developing interactive Power BI reports with dynamic DAX calculations, I bridge the gap between engineering data wrangling and executive business choices.
            </p>
          </div>
        </div>

        {/* 4 Profile Attributes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {profileDetails.map((item, idx) => {
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
                  <span className="text-[11px] font-mono text-[#94A3B8] uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
                <span className="text-base font-bold text-white group-hover:text-[#06B6D4] transition-colors">
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>

        {/* 4 Analytical Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {analyticalStrengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0B0D16]/80 border border-white/[0.06] hover:border-[#06B6D4]/30 transition-all duration-300"
              >
                <Icon className="w-4 h-4 text-[#06B6D4] mb-3" />
                <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed font-sans">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
