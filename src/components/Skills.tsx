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
        { name: 'Python', icon: Terminal, color: 'text-[#9B714B]' },
        { name: 'SQL', icon: Database, color: 'text-[#7E5331]' },
        { name: 'MySQL', icon: Database, color: 'text-[#643F23]' },
      ],
    },
    {
      title: 'Data Analytics & Business Intelligence',
      icon: BarChart3,
      skills: [
        { name: 'Microsoft Excel', icon: FileSpreadsheet, color: 'text-[#5A6E46]' },
        { name: 'Power BI', icon: BarChart3, color: 'text-[#B8863A]' },
        { name: 'Data Cleaning', icon: Filter, color: 'text-[#7E5331]' },
        { name: 'Data Visualization', icon: PieChart, color: 'text-[#9B714B]' },
        { name: 'Statistics', icon: Calculator, color: 'text-[#8A5A36]' },
        { name: 'Exploratory Data Analysis (EDA)', icon: Search, color: 'text-[#643F23]' },
      ],
    },
    {
      title: 'Python Libraries',
      icon: Boxes,
      skills: [
        { name: 'Pandas', icon: Layers, color: 'text-[#7E5331]' },
        { name: 'NumPy', icon: Cpu, color: 'text-[#9B714B]' },
        { name: 'Matplotlib', icon: LineChart, color: 'text-[#B8863A]' },
        { name: 'Seaborn', icon: PieChart, color: 'text-[#643F23]' },
      ],
    },
    {
      title: 'Tools & Workflow',
      icon: Wrench,
      skills: [
        { name: 'Git', icon: Terminal, color: 'text-[#8A5A36]' },
        { name: 'GitHub', icon: Github, color: 'text-[#462A16]' },
        { name: 'VS Code', icon: Monitor, color: 'text-[#7E5331]' },
        { name: 'Jupyter Notebook', icon: Terminal, color: 'text-[#B8863A]' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 border-t border-[#E8DFD5] bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-[#7E5331] uppercase tracking-wider block mb-1">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#1C1612] tracking-tight">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-[#7E5331] mt-2 rounded-full" />
        </div>

        {/* Clean Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => {
            const CatIcon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E8DFD5] rounded-2xl p-5 sm:p-6 shadow-warm-sm"
              >
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#F0E8DF]">
                  <CatIcon className="w-4 h-4 text-[#7E5331]" />
                  <h3 className="text-sm font-semibold text-[#1C1612]">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#FAF6F2] border border-[#EADBCE] hover:border-[#C4A88E] transition-colors"
                      >
                        <SkillIcon className={`w-3.5 h-3.5 ${skill.color}`} />
                        <span className="text-xs text-[#2A1E17] font-medium">
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
