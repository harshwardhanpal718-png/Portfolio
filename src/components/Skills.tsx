import React from 'react';
import { 
  Filter, 
  Search, 
  Binary, 
  Calculator, 
  TrendingUp, 
  Terminal, 
  Layers, 
  Cpu, 
  BarChart3, 
  FileSpreadsheet, 
  LineChart, 
  PieChart, 
  Database, 
  Server, 
  BookOpen, 
  Monitor, 
  GitBranch, 
  Github 
} from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'DATA ANALYSIS',
      accentColor: '#06B6D4',
      badge: 'Core Competency',
      skills: [
        { name: 'Data Cleaning', icon: Filter, tag: 'Anomaly & Null Treatment' },
        { name: 'Exploratory Data Analysis', icon: Search, tag: 'Pattern & Correlation Discovery' },
        { name: 'Data Wrangling', icon: Binary, tag: 'Reshaping & Feature Prep' },
        { name: 'Statistical Analysis', icon: Calculator, tag: 'Hypothesis & Distribution Tests' },
        { name: 'Data Interpretation', icon: TrendingUp, tag: 'Business Value Translation' },
      ],
    },
    {
      title: 'PROGRAMMING',
      accentColor: '#7C3AED',
      badge: 'Analytical Scripting',
      skills: [
        { name: 'Python', icon: Terminal, tag: 'Automation & Analytics' },
        { name: 'Pandas', icon: Layers, tag: 'DataFrames & Aggregation' },
        { name: 'NumPy', icon: Cpu, tag: 'Vectorized Array Computing' },
      ],
    },
    {
      title: 'DATA VISUALIZATION',
      accentColor: '#F59E0B',
      badge: 'Executive Dashboards',
      skills: [
        { name: 'Power BI', icon: BarChart3, tag: 'DAX & Interactive Reports' },
        { name: 'Microsoft Excel', icon: FileSpreadsheet, tag: 'Pivot Tables & Modeling' },
        { name: 'Matplotlib', icon: LineChart, tag: 'Custom Statistical Plots' },
        { name: 'Seaborn', icon: PieChart, tag: 'Heatmaps & Categorical Charts' },
      ],
    },
    {
      title: 'DATABASE',
      accentColor: '#06B6D4',
      badge: 'Query Engine',
      skills: [
        { name: 'SQL', icon: Database, tag: 'CTEs, Subqueries & Window Funcs' },
        { name: 'MySQL', icon: Server, tag: 'Relational Schema & Constraints' },
      ],
    },
    {
      title: 'TOOLS',
      accentColor: '#7C3AED',
      badge: 'Developer Workflow',
      skills: [
        { name: 'Jupyter Notebook', icon: BookOpen, tag: 'Exploratory Research' },
        { name: 'VS Code', icon: Monitor, tag: 'Primary IDE Environment' },
        { name: 'Git', icon: GitBranch, tag: 'Version Control' },
        { name: 'GitHub', icon: Github, tag: 'Repo Collaboration' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-white/[0.06] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#7C3AED]/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#F59E0B] text-xs font-mono uppercase tracking-wider mb-3">
            <span>✦</span>
            <span>Technical Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Analytics <span className="gradient-text">Skills.</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#F59E0B] via-[#06B6D4] to-[#7C3AED] mt-3 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`glass-card p-6 rounded-3xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between gap-2.5 mb-5 pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <span 
                      className="w-2.5 h-2.5 rounded-full" 
                      style={{ backgroundColor: cat.accentColor, boxShadow: `0 0 10px ${cat.accentColor}` }} 
                    />
                    <h3 className="text-sm font-bold text-white tracking-wider font-mono">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#94A3B8]">
                    {cat.badge}
                  </span>
                </div>

                {/* Skill Pills */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill, sIdx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200 group/item flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div 
                            className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center transition-transform duration-200 group-hover/item:scale-105 shrink-0"
                            style={{ color: cat.accentColor }}
                          >
                            <SkillIcon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-semibold text-slate-200 group-hover/item:text-white truncate">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-[#94A3B8] group-hover/item:text-white group-hover/item:border-[#06B6D4]/40 shrink-0 ml-2 transition-colors">
                          {skill.tag}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
