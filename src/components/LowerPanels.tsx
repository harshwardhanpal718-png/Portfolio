import React from 'react';
import { 
  CheckCircle2, 
  Database, 
  Cpu, 
  BarChart3, 
  Table, 
  Compass, 
  Target, 
  TrendingUp,
  BrainCircuit
} from 'lucide-react';

export const LowerPanels: React.FC = () => {
  const approaches = [
    {
      num: '01',
      title: 'Data-Driven Thinking',
      desc: 'Formulating hypotheses, defining measurable metrics, and anchoring business conclusions in validated empirical evidence rather than subjective guesswork.',
      icon: Target,
    },
    {
      num: '02',
      title: 'Attention to Detail',
      desc: 'Obsessive dedication to data integrity—scrupulously addressing null records, testing outlier bounds, and ensuring metric definitions match business realities.',
      icon: CheckCircle2,
    },
    {
      num: '03',
      title: 'Continuous Growth',
      desc: 'Constantly expanding competencies across modern data warehousing, advanced DAX modeling, automated Python workflows, and cloud business intelligence.',
      icon: TrendingUp,
    },
  ];

  const toolkitCards = [
    {
      title: 'SQL',
      category: 'DATABASE & QUERYING',
      points: ['Complex Multi-Table JOINs', 'Window Functions & CTEs', 'Data Aggregation & Grouping', 'Query Optimization'],
      icon: Database,
    },
    {
      title: 'Python',
      category: 'DATA WRANGLING & EDA',
      points: ['Pandas DataFrames', 'NumPy Numerical Arrays', 'Matplotlib & Seaborn', 'Automated Cleaning Scripts'],
      icon: Cpu,
    },
    {
      title: 'Power BI',
      category: 'BUSINESS INTELLIGENCE',
      points: ['Interactive Dashboards', 'Advanced DAX Formulas', 'Star-Schema Data Modeling', 'Executive KPI Cards'],
      icon: BarChart3,
    },
    {
      title: 'Excel',
      category: 'FINANCIAL & RAPID ANALYSIS',
      points: ['XLOOKUP & Nested Logic', 'Pivot Tables & Slicers', 'Scenario & What-If Modeling', 'VBA & Macro Automations'],
      icon: Table,
    },
  ];

  return (
    <section id="approach" className="py-24 bg-[#031126] relative overflow-hidden border-t border-[rgba(65,190,220,0.15)]">
      
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-[#087CDA]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#13D9E8]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT COLUMN: MY ANALYTICS APPROACH (6 Cols) */}
          <div className="lg:col-span-6 glass-card-navy rounded-2xl p-7 sm:p-9 border border-[rgba(65,190,220,0.25)] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061A35] border border-[rgba(65,190,220,0.3)] mb-4">
                <Compass className="w-3.5 h-3.5 text-[#13D9E8]" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#13D9E8] font-bold">
                  CORE PHILOSOPHY
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5FAFF] font-display tracking-tight mb-2">
                My Analytics <span className="gradient-text-cyan">Approach</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#A8BBD1] mb-8 font-sans">
                The governing principles that ensure analytical models remain objective, repeatable, and aligned with commercial goals.
              </p>

              {/* Approach List */}
              <div className="space-y-6">
                {approaches.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={item.num}
                      className="p-5 rounded-xl bg-[#061A35]/80 border border-[rgba(65,190,220,0.18)] hover:border-[#13D9E8]/50 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-[#031126] border border-[#13D9E8]/30 flex items-center justify-center text-[#13D9E8]">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <h3 className="text-sm font-bold text-[#F5FAFF] font-mono group-hover:text-[#13D9E8] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <span className="font-mono text-xs font-bold text-[#13D9E8]">
                          {item.num}
                        </span>
                      </div>
                      <p className="text-xs text-[#A8BBD1] leading-relaxed pl-9">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[rgba(65,190,220,0.15)] flex items-center justify-between text-[11px] font-mono text-[#A8BBD1]">
              <span>ANALYTIC INTEGRITY</span>
              <span className="text-[#13D9E8]">ZERO FALSE ASSUMPTIONS</span>
            </div>
          </div>

          {/* RIGHT COLUMN: MY ANALYTICS TOOLKIT (6 Cols) */}
          <div className="lg:col-span-6 glass-card-navy rounded-2xl p-7 sm:p-9 border border-[rgba(65,190,220,0.25)] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061A35] border border-[rgba(65,190,220,0.3)] mb-4">
                <BrainCircuit className="w-3.5 h-3.5 text-[#13D9E8]" />
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#13D9E8] font-bold">
                  TECHNICAL ARSENAL
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5FAFF] font-display tracking-tight mb-2">
                My Analytics <span className="gradient-text-cyan">Toolkit</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#A8BBD1] mb-8 font-sans">
                Battle-tested tools utilized daily to ingest, query, model, and display production data.
              </p>

              {/* 4 Compact Statistic Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {toolkitCards.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={tool.title}
                      className="p-5 rounded-xl bg-[#061A35]/80 border border-[rgba(65,190,220,0.18)] hover:border-[#13D9E8] transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-9 h-9 rounded-lg bg-[#031126] border border-[#13D9E8]/30 flex items-center justify-center text-[#13D9E8] group-hover:shadow-[0_0_15px_rgba(19,217,232,0.3)] transition-all">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[9px] font-mono uppercase tracking-wider text-[#13D9E8] px-2 py-0.5 rounded bg-[#031126] border border-[rgba(65,190,220,0.2)]">
                            {tool.category}
                          </span>
                        </div>

                        <h3 className="text-xl font-extrabold text-[#F5FAFF] font-display tracking-wide mb-3 group-hover:text-[#13D9E8] transition-colors">
                          {tool.title}
                        </h3>

                        <ul className="space-y-1.5 text-xs text-[#A8BBD1]">
                          {tool.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-[#13D9E8]" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[rgba(65,190,220,0.15)] flex items-center justify-between text-[11px] font-mono text-[#A8BBD1]">
              <span>CONTINUOUS PRACTICE</span>
              <span className="text-[#13D9E8]">REAL-WORLD DATASETS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
