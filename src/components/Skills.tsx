import React from 'react';
import { 
  Code2, 
  BarChart3, 
  Boxes, 
  Database, 
  Wrench,
  FileSpreadsheet,
  Terminal,
  Layers,
  Cpu,
  LineChart,
  PieChart,
  Github,
  Monitor,
  Calculator,
  Search,
  Filter
} from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming & Databases',
      icon: Code2,
      skills: [
        { name: 'Python', icon: Terminal, color: 'text-amber-400' },
        { name: 'SQL', icon: Database, color: 'text-blue-400' },
        { name: 'MySQL', icon: Database, color: 'text-sky-400' },
      ],
    },
    {
      title: 'Data Analytics & Business Intelligence',
      icon: BarChart3,
      skills: [
        { name: 'Microsoft Excel', icon: FileSpreadsheet, color: 'text-emerald-400' },
        { name: 'Power BI', icon: BarChart3, color: 'text-amber-400' },
        { name: 'Data Cleaning', icon: Filter, color: 'text-cyan-400' },
        { name: 'Data Visualization', icon: PieChart, color: 'text-purple-400' },
        { name: 'Statistics', icon: Calculator, color: 'text-rose-400' },
        { name: 'Exploratory Data Analysis (EDA)', icon: Search, color: 'text-blue-300' },
      ],
    },
    {
      title: 'Python Libraries',
      icon: Boxes,
      skills: [
        { name: 'Pandas', icon: Layers, color: 'text-blue-400' },
        { name: 'NumPy', icon: Cpu, color: 'text-cyan-400' },
        { name: 'Matplotlib', icon: LineChart, color: 'text-orange-400' },
        { name: 'Seaborn', icon: PieChart, color: 'text-teal-400' },
      ],
    },
    {
      title: 'Tools & Workflow',
      icon: Wrench,
      skills: [
        { name: 'Git', icon: Terminal, color: 'text-rose-400' },
        { name: 'GitHub', icon: Github, color: 'text-slate-200' },
        { name: 'VS Code', icon: Monitor, color: 'text-blue-400' },
        { name: 'Jupyter Notebook', icon: Terminal, color: 'text-amber-300' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-blue-500 mt-2 rounded-full" />
        </div>

        {/* Clean Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-[#111827] border border-white/10 rounded-2xl p-5 sm:p-6"
              >
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-white/5">
                  <CatIcon className="w-4 h-4 text-blue-400" />
                  <h3 className="text-sm font-semibold text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#080B12] border border-white/5 hover:border-blue-500/30 transition-colors"
                      >
                        <SkillIcon className={`w-3.5 h-3.5 ${skill.color}`} />
                        <span className="text-xs text-slate-200 font-medium">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
