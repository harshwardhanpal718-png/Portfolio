import React from 'react';
import { 
  Code2, 
  BarChart3, 
  Database,
  Layers,
  Cpu,
  FileSpreadsheet,
  Calculator,
  Filter,
  Search,
  Terminal,
  Brain,
  Wrench,
  Github,
  Monitor
} from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Code2,
      accentColor: '#00f2fe',
      skills: [
        { name: 'Python', icon: Terminal, tag: 'Analytical Scripting' },
      ],
    },
    {
      title: 'Data Analysis',
      icon: Layers,
      accentColor: '#ec38bc',
      skills: [
        { name: 'Pandas', icon: Layers, tag: 'Data Wrangling' },
        { name: 'NumPy', icon: Cpu, tag: 'Vector Computing' },
      ],
    },
    {
      title: 'Database',
      icon: Database,
      accentColor: '#7300ff',
      skills: [
        { name: 'SQL', icon: Database, tag: 'Queries & CTEs' },
        { name: 'MySQL', icon: Database, tag: 'Relational Schema' },
      ],
    },
    {
      title: 'Visualization',
      icon: BarChart3,
      accentColor: '#00f2fe',
      skills: [
        { name: 'Power BI', icon: BarChart3, tag: 'DAX & Dashboards' },
        { name: 'Microsoft Excel', icon: FileSpreadsheet, tag: 'Pivots & Modeling' },
      ],
    },
    {
      title: 'Core Concepts',
      icon: Brain,
      accentColor: '#ec38bc',
      skills: [
        { name: 'Statistics', icon: Calculator, tag: 'Distributions & Tests' },
        { name: 'Data Cleaning', icon: Filter, tag: 'Quality & Outliers' },
        { name: 'Exploratory Data Analysis', icon: Search, tag: 'Pattern Discovery' },
      ],
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      accentColor: '#7300ff',
      skills: [
        { name: 'Git', icon: Terminal, tag: 'Version Control' },
        { name: 'GitHub', icon: Github, tag: 'Collaboration' },
        { name: 'VS Code', icon: Monitor, tag: 'IDE Environment' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-white/[0.06] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-28 w-96 h-96 bg-[#ec38bc]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-28 w-96 h-96 bg-[#7300ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#ec38bc] text-xs font-mono uppercase tracking-wider mb-3">
            <span>✦</span>
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#ec38bc] via-[#7300ff] to-[#00f2fe] mt-3 rounded-full" />
        </div>

        {/* Cyber Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2.5 mb-5 pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ color: cat.accentColor }}
                      >
                        <CatIcon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-white tracking-wide">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.accentColor }} />
                  </div>

                  <div className="space-y-2.5">
                    {cat.skills.map((skill, sIdx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={sIdx}
                          className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200 group/item flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-6 h-6 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-300 group-hover/item:text-[#00f2fe] flex items-center justify-center transition-colors shrink-0">
                              <SkillIcon className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-semibold text-slate-300 group-hover/item:text-white truncate">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-slate-400 group-hover/item:text-[#00f2fe] group-hover/item:border-[#00f2fe]/40 shrink-0 ml-2 transition-colors">
                            {skill.tag}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
