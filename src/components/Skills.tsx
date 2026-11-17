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
      skills: [
        { name: 'Python', icon: Terminal, tag: 'Analytical Scripting' },
      ],
    },
    {
      title: 'Data Analysis',
      icon: Layers,
      skills: [
        { name: 'Pandas', icon: Layers, tag: 'Data Wrangling' },
        { name: 'NumPy', icon: Cpu, tag: 'Vector Computing' },
      ],
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'SQL', icon: Database, tag: 'Queries & CTEs' },
        { name: 'MySQL', icon: Database, tag: 'Relational Schema' },
      ],
    },
    {
      title: 'Visualization',
      icon: BarChart3,
      skills: [
        { name: 'Power BI', icon: BarChart3, tag: 'DAX & Dashboards' },
        { name: 'Microsoft Excel', icon: FileSpreadsheet, tag: 'Pivots & Modeling' },
      ],
    },
    {
      title: 'Core Concepts',
      icon: Brain,
      skills: [
        { name: 'Statistics', icon: Calculator, tag: 'Distributions & Tests' },
        { name: 'Data Cleaning', icon: Filter, tag: 'Quality & Outliers' },
        { name: 'Exploratory Data Analysis', icon: Search, tag: 'Pattern Discovery' },
      ],
    },
    {
      title: 'Developer Tools',
      icon: Wrench,
      skills: [
        { name: 'Git', icon: Terminal, tag: 'Version Control' },
        { name: 'GitHub', icon: Github, tag: 'Collaboration' },
        { name: 'VS Code', icon: Monitor, tag: 'IDE Environment' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 border-t border-zinc-200 bg-[#FAFAF9] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-zinc-600 uppercase tracking-wider block mb-1">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-zinc-900 tracking-tight">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-[#09090B] mt-2 rounded-full" />
        </div>

        {/* Clean Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-xs hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-zinc-100">
                    <div className="w-7 h-7 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900">
                      <CatIcon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-sm font-semibold text-zinc-900">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="space-y-2.5">
                    {cat.skills.map((skill, sIdx) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={sIdx}
                          className="p-3 rounded-xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-400 hover:bg-zinc-100/60 transition-all duration-200 group flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-6 h-6 rounded-md bg-white border border-zinc-200 text-zinc-800 group-hover:border-zinc-400 flex items-center justify-center transition-colors shrink-0 shadow-2xs">
                              <SkillIcon className="w-3 h-3" />
                            </div>
                            <span className="text-xs font-medium text-zinc-800 group-hover:text-zinc-950 truncate">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-zinc-200 text-zinc-600 group-hover:text-zinc-900 group-hover:border-zinc-300 shrink-0 ml-2 transition-colors">
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