import React, { useState } from 'react';
import { skillsCategories } from '../data/skillsData';
import { 
  BarChart3, 
  Code2, 
  Boxes, 
  Database, 
  Wrench, 
  FileSpreadsheet, 
  PieChart, 
  Filter, 
  LineChart, 
  Calculator, 
  Search, 
  Terminal, 
  Layers, 
  Cpu, 
  FolderGit2, 
  Github, 
  Monitor, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Map skill names to appropriate Lucide icons
  const getSkillIcon = (skillName: string) => {
    switch (skillName.toLowerCase()) {
      case 'microsoft excel':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-400" />;
      case 'power bi':
        return <BarChart3 className="w-5 h-5 text-amber-400" />;
      case 'data cleaning':
        return <Filter className="w-5 h-5 text-blue-400" />;
      case 'data visualization':
        return <PieChart className="w-5 h-5 text-purple-400" />;
      case 'statistics':
        return <Calculator className="w-5 h-5 text-cyan-400" />;
      case 'exploratory data analysis (eda)':
      case 'exploratory data analysis':
        return <Search className="w-5 h-5 text-rose-400" />;
      case 'python':
        return <Terminal className="w-5 h-5 text-amber-300" />;
      case 'sql':
        return <Database className="w-5 h-5 text-blue-400" />;
      case 'pandas':
        return <Layers className="w-5 h-5 text-blue-300" />;
      case 'numpy':
        return <Cpu className="w-5 h-5 text-cyan-300" />;
      case 'matplotlib':
        return <LineChart className="w-5 h-5 text-orange-400" />;
      case 'seaborn':
        return <PieChart className="w-5 h-5 text-teal-400" />;
      case 'mysql':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'git':
        return <FolderGit2 className="w-5 h-5 text-rose-400" />;
      case 'github':
        return <Github className="w-5 h-5 text-slate-200" />;
      case 'vs code':
        return <Monitor className="w-5 h-5 text-blue-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-4 h-4 text-blue-400" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 text-amber-400" />;
      case 'Boxes':
        return <Boxes className="w-4 h-4 text-purple-400" />;
      case 'Database':
        return <Database className="w-4 h-4 text-cyan-400" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-emerald-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-blue-400" />;
    }
  };

  const filteredCategories = selectedCategory === 'all'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#080B12]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>Capabilities &amp; Toolset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-slate-muted text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Practical competencies grouped by analytical domain. Focused on real workflow applications without artificial proficiency ratings.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                : 'bg-dark-card border border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            All Skills ({skillsCategories.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>

          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                  : 'bg-dark-card border border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {getCategoryIcon(cat.iconName)}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Grouped Skills Display */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-5">
              
              {/* Category Sub-Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/10 gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-muted">
                      {category.description}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono text-blue-400 bg-blue-950/40 border border-blue-500/20 px-2.5 py-1 rounded-full self-start sm:self-auto">
                  {category.badge}
                </span>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="glass-card glass-card-hover rounded-xl p-4 sm:p-5 border border-white/10 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Skill Row */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-dark-bg border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                            {getSkillIcon(skill.name)}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold font-heading text-white group-hover:text-blue-400 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-[10px] font-mono text-slate-muted uppercase tracking-wider">
                              {skill.tag}
                            </span>
                          </div>
                        </div>

                        {skill.highlight && (
                          <span className="text-[9px] font-mono font-semibold text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 px-2 py-0.5 rounded-full shrink-0">
                            Core Focus
                          </span>
                        )}
                      </div>

                      {/* Application Description */}
                      <p className="text-xs text-slate-300 leading-relaxed font-sans mt-2">
                        {skill.description}
                      </p>
                    </div>

                    {/* Bottom verification check */}
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="flex items-center gap-1.5 text-blue-400/90 font-mono">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                        Practical Application
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
