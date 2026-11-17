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
        { name: 'Python', icon: Terminal, level: '92%' },
        { name: 'SQL', icon: Database, level: '90%' },
        { name: 'MySQL', icon: Database, level: '86%' },
      ],
    },
    {
      title: 'Data Analytics & Business Intelligence',
      icon: BarChart3,
      skills: [
        { name: 'Microsoft Excel', icon: FileSpreadsheet, level: '94%' },
        { name: 'Power BI', icon: BarChart3, level: '88%' },
        { name: 'Data Cleaning', icon: Filter, level: '92%' },
        { name: 'Data Visualization', icon: PieChart, level: '90%' },
        { name: 'Statistics', icon: Calculator, level: '85%' },
        { name: 'Exploratory Data Analysis (EDA)', icon: Search, level: '89%' },
      ],
    },
    {
      title: 'Python Libraries',
      icon: Boxes,
      skills: [
        { name: 'Pandas', icon: Layers, level: '90%' },
        { name: 'NumPy', icon: Cpu, level: '88%' },
        { name: 'Matplotlib', icon: LineChart, level: '86%' },
        { name: 'Seaborn', icon: PieChart, level: '87%' },
      ],
    },
    {
      title: 'Tools & Workflow',
      icon: Wrench,
      skills: [
        { name: 'Git', icon: Terminal, level: '85%' },
        { name: 'GitHub', icon: Github, level: '88%' },
        { name: 'VS Code', icon: Monitor, level: '92%' },
        { name: 'Jupyter Notebook', icon: Terminal, level: '90%' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 border-t border-[#235347]/60 bg-[#051F20] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-[#8EB69B] uppercase tracking-wider block mb-1">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#DAF1DE] tracking-tight">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-[#235347] mt-2 rounded-full" />
        </div>

        {/* Clean Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-[#163832] border border-[#235347] rounded-2xl p-5 sm:p-6 shadow-forest-sm"
              >
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-[#235347]">
                  <CatIcon className="w-4 h-4 text-[#8EB69B]" />
                  <h3 className="text-sm font-semibold text-[#DAF1DE]">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-3.5">
                  {cat.skills.map((skill, sIdx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-xl bg-[#0B2B26] border border-[#235347] hover:border-[#8EB69B] transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2 text-xs">
                          <span className="flex items-center gap-2 text-[#DAF1DE] font-medium">
                            <SkillIcon className="w-3.5 h-3.5 text-[#8EB69B]" />
                            {skill.name}
                          </span>
                          <span className="font-mono text-[11px] text-[#8EB69B]">
                            {skill.level}
                          </span>
                        </div>

                        {/* Minimal Green Progress Indicator */}
                        <div className="w-full h-1.5 rounded-full bg-[#051F20] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#8EB69B] transition-all duration-500"
                            style={{ width: skill.level }}
                          />
                        </div>
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
