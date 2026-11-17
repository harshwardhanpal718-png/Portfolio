import React from 'react';
import { 
  Code2, 
  BarChart3, 
  Boxes, 
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
  Filter,
  Database
} from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming & Databases',
      icon: Code2,
      skills: [
        { name: 'Python', icon: Terminal, tag: 'Core Analytics' },
        { name: 'SQL', icon: Database, tag: 'Queries & CTEs' },
        { name: 'MySQL', icon: Database, tag: 'Relational DB' },
      ],
    },
    {
      title: 'Data Analytics & Business Intelligence',
      icon: BarChart3,
      skills: [
        { name: 'Microsoft Excel', icon: FileSpreadsheet, tag: 'VLOOKUP & Pivots' },
        { name: 'Power BI', icon: BarChart3, tag: 'DAX & Modeling' },
        { name: 'Data Cleaning', icon: Filter, tag: 'Quality Assurance' },
        { name: 'Data Visualization', icon: PieChart, tag: 'Storytelling' },
        { name: 'Statistics', icon: Calculator, tag: 'Hypothesis & Dist' },
        { name: 'Exploratory Data Analysis', icon: Search, tag: 'EDA Workflows' },
      ],
    },
    {
      title: 'Python Libraries',
      icon: Boxes,
      skills: [
        { name: 'Pandas', icon: Layers, tag: 'Data Wrangling' },
        { name: 'NumPy', icon: Cpu, tag: 'Vector Computations' },
        { name: 'Matplotlib', icon: LineChart, tag: 'Statistical Plots' },
        { name: 'Seaborn', icon: PieChart, tag: 'Visual Distributions' },
      ],
    },
    {
      title: 'Tools & Workflow',
      icon: Wrench,
      skills: [
        { name: 'Git', icon: Terminal, tag: 'Version Control' },
        { name: 'GitHub', icon: Github, tag: 'Repositories' },
        { name: 'VS Code', icon: Monitor, tag: 'IDE Environment' },
        { name: 'Jupyter Notebook', icon: Terminal, tag: 'Interactive Analysis' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 border-t border-[#4717F6]/25 bg-[#0E0B16] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-[#A239CA] uppercase tracking-wider block mb-1">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#E7DFDD] tracking-tight">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#4717F6] to-[#A239CA] mt-2 rounded-full" />
        </div>

        {/* Clean Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-[#151022] border border-[#4717F6]/30 rounded-2xl p-5 sm:p-6 shadow-sm hover:border-[#A239CA]/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#4717F6]/25">
                  <div className="w-8 h-8 rounded-lg bg-[#181228] border border-[#4717F6]/40 flex items-center justify-center text-[#A239CA]">
                    <CatIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#E7DFDD]">
                    {cat.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cat.skills.map((skill, sIdx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-[#181228] border border-[#4717F6]/25 hover:border-[#A239CA] hover:bg-[#1d1630] transition-all duration-200 group flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-7 h-7 rounded-lg bg-[#0E0B16] border border-[#4717F6]/30 text-[#A239CA] group-hover:text-[#E7DFDD] group-hover:border-[#A239CA] flex items-center justify-center transition-colors shrink-0">
                            <SkillIcon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-medium text-[#E7DFDD] group-hover:text-white truncate">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#0E0B16] border border-[#4717F6]/40 text-[#A99F9D] group-hover:text-[#A239CA] group-hover:border-[#A239CA]/60 shrink-0 ml-2 transition-colors">
                          {skill.tag}
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