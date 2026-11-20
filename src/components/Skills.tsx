import React from 'react';
import { Database, Terminal, BarChart3, Table, ArrowUpRight } from 'lucide-react';
import { skillsData } from '../data/portfolioConfig';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':
        return Database;
      case 'Terminal':
        return Terminal;
      case 'BarChart3':
        return BarChart3;
      case 'Table':
        return Table;
      default:
        return Database;
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#EBE5DC]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A98468] mb-2 block font-sans">
              WHAT I DO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171923] tracking-tight">
              Skills &amp; <span className="italic font-serif text-[#A98468]">Expertise</span>.
            </h2>
          </div>
          <p className="text-sm text-[#62616A] max-w-md font-sans leading-relaxed">
            Core analytical competencies and modern toolsets applied across data engineering, statistical exploration, and executive BI reporting.
          </p>
        </div>

        {/* 4 Pastel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {skillsData.map((card) => {
            const Icon = getIcon(card.iconName);
            return (
              <div
                key={card.id}
                className={`${card.bgClass} ${card.borderClass} border rounded-3xl p-7 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-md`}
              >
                <div>
                  {/* Card Header with Minimal Line Icon & Small Arrow */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/90 border border-white flex items-center justify-center shadow-card">
                      <Icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/90 border border-white flex items-center justify-center text-[#171923] group-hover:bg-[#171923] group-hover:text-white transition-all shadow-card">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl font-bold text-[#171923] tracking-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#62616A] leading-relaxed mb-6 font-sans">
                    {card.description}
                  </p>
                </div>

                {/* Skill Tags */}
                <div className="pt-4 border-t border-black/5">
                  <div className="flex flex-wrap gap-1.5">
                    {card.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-full bg-white/80 border border-white/60 text-[11px] font-medium text-[#171923] font-sans shadow-xs"
                      >
                        {skill}
                      </span>
                    ))}
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
