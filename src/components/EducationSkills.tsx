import React from 'react';
import { GraduationCap, Calendar, MapPin, Building2, Code2, Database, BarChart3, Wrench, Layers } from 'lucide-react';

export const EducationSkills: React.FC = () => {
  const skillCategories = [
    {
      name: 'Programming',
      icon: Code2,
      skills: ['Python', 'SQL'],
    },
    {
      name: 'Data Analysis',
      icon: Layers,
      skills: ['Pandas', 'NumPy', 'Data Cleaning', 'Exploratory Data Analysis', 'Statistical Analysis'],
    },
    {
      name: 'Visualization',
      icon: BarChart3,
      skills: ['Power BI', 'Microsoft Excel', 'Data Visualization', 'Dashboard Development'],
    },
    {
      name: 'Tools & Version Control',
      icon: Wrench,
      skills: ['Jupyter Notebook', 'VS Code', 'Git & GitHub'],
    },
  ];

  return (
    <section id="education-skills" className="py-24 border-t border-[#242424] bg-[#050505] relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#C81024]/08 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 pb-6 border-b border-[#242424]">
          <span className="text-xs font-mono tracking-widest text-[#C81024] uppercase block mb-2 font-bold">
            FOUNDATION &amp; CAPABILITIES
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
            EDUCATION &amp; <span className="text-[#C81024]">TECHNICAL SKILLS</span>
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN — EDUCATION (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-[#242424]">
              <GraduationCap className="w-5 h-5 text-[#C81024]" />
              <h3 className="font-display text-2xl text-white tracking-wider uppercase">
                ACADEMIC EDUCATION
              </h3>
            </div>

            {/* Timeline Card */}
            <div className="bg-[#0B0B0B] border border-[#242424] p-8 space-y-6 relative group hover:border-[#C81024] transition-colors">
              
              {/* Crimson Accent Notch */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#C81024]" />

              <div className="flex items-center justify-between text-xs font-mono text-[#A1A1AA]">
                <span className="px-2.5 py-1 bg-[#C81024]/10 border border-[#C81024]/40 text-[#FFFFFF] font-bold">
                  UNDERGRADUATE
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <Calendar className="w-3.5 h-3.5 text-[#C81024]" />
                  Expected Graduation: 2027
                </span>
              </div>

              <div>
                <h4 className="font-display text-3xl text-white tracking-wide">
                  B.TECH IN COMPUTER SCIENCE &amp; ENGINEERING
                </h4>
                <div className="flex items-center gap-2 text-sm text-[#A1A1AA] mt-2 font-sans">
                  <Building2 className="w-4 h-4 text-[#C81024]" />
                  <span className="text-white font-medium">Jagannath University</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#71717A] mt-1 font-sans">
                  <MapPin className="w-3.5 h-3.5 text-[#A1A1AA]" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
              </div>

              <p className="text-xs text-[#A1A1AA] leading-relaxed pt-4 border-t border-[#1C1C1C] font-sans">
                Concentrating on data engineering foundations, statistical modeling, relational database systems (DBMS), algorithms, and automated analytical workflows.
              </p>

              {/* Key Relevant Coursework */}
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase text-[#71717A] block mb-2 tracking-wider">
                  Relevant Academic Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Database Systems & SQL', 'Probability & Statistics', 'Python Programming', 'Data Structures & Algorithms', 'Data Analysis Techniques'].map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[11px] font-mono px-2.5 py-1 bg-[#050505] border border-[#242424] text-[#A1A1AA]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN — TECHNICAL SKILLS (7 Columns) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-[#242424]">
              <Database className="w-5 h-5 text-[#C81024]" />
              <h3 className="font-display text-2xl text-white tracking-wider uppercase">
                TECHNICAL SKILLS
              </h3>
            </div>

            <div className="space-y-6">
              {skillCategories.map((category, idx) => {
                const Icon = category.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#0B0B0B] border border-[#242424] p-6 hover:border-[#C81024] transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-4">
                      <Icon className="w-4 h-4 text-[#C81024]" />
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                        {category.name}
                      </h4>
                    </div>

                    {/* Compact Outlined Skill Tags */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="px-3.5 py-2 bg-[#050505] border border-[#242424] hover:border-[#C81024] text-xs font-mono text-white transition-all duration-200 flex items-center gap-2 group cursor-default"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C81024] group-hover:scale-125 transition-transform" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
