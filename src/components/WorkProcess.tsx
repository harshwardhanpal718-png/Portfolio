import React from 'react';
import { 
  Compass, 
  Database, 
  Filter, 
  BarChart3, 
  LineChart, 
  MessageSquare,
  Workflow
} from 'lucide-react';

export const WorkProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Problem Formulation',
      desc: 'Understand business objectives, align with stakeholders, define hypotheses, and establish quantifiable KPI targets.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'COLLECT',
      subtitle: 'Data Acquisition',
      desc: 'Extract structured tables via SQL queries, ingest raw CSVs/APIs, and evaluate data lineage and integrity.',
      icon: Database,
    },
    {
      num: '03',
      title: 'CLEAN',
      subtitle: 'Wrangling & Validation',
      desc: 'Handle missing values, eliminate duplicates, standardize data types, and engineer domain-specific features.',
      icon: Filter,
    },
    {
      num: '04',
      title: 'ANALYZE',
      subtitle: 'Exploratory Modeling',
      desc: 'Conduct exploratory data analysis (EDA), detect statistical anomalies, test correlations, and identify root causes.',
      icon: BarChart3,
    },
    {
      num: '05',
      title: 'VISUALIZE',
      subtitle: 'Dashboard Engineering',
      desc: 'Architect intuitive Power BI dashboards, dynamic DAX measures, and interactive executive reporting views.',
      icon: LineChart,
    },
    {
      num: '06',
      title: 'COMMUNICATE',
      subtitle: 'Strategic Impact',
      desc: 'Synthesize analytical outputs into clear executive summaries, data storytelling, and actionable recommendations.',
      icon: MessageSquare,
    },
  ];

  return (
    <section id="process" className="py-24 bg-[#031126] relative overflow-hidden border-t border-[rgba(65,190,220,0.15)]">
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#087CDA]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061A35] border border-[rgba(65,190,220,0.3)] mb-3">
            <Workflow className="w-3.5 h-3.5 text-[#13D9E8]" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#13D9E8] font-bold">
              ANALYTICS METHODOLOGY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5FAFF] font-display tracking-tight mb-4">
            My Data Analytics <span className="gradient-text-cyan">Process</span>
          </h2>
          <p className="text-sm text-[#A8BBD1] font-sans">
            How I transform ambiguous business challenges into reliable, data-backed operational decisions.
          </p>
        </div>

        {/* 6-Stage Process Cards with Glowing Horizontal Connect Line */}
        <div className="relative">
          
          {/* Horizontal Glowing Cyan Line for Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-[#13D9E8]/20 via-[#13D9E8] to-[#13D9E8]/20 shadow-[0_0_12px_rgba(19,217,232,0.6)] z-0" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="glass-card-navy rounded-2xl p-5 flex flex-col items-center text-center border border-[rgba(65,190,220,0.22)] hover:border-[#13D9E8] transition-all duration-300 group hover:-translate-y-1 shadow-[0_8px_25px_rgba(3,17,38,0.7)]"
                >
                  {/* Glowing Circular Node with Icon */}
                  <div className="relative mb-5">
                    <div className="w-14 h-14 rounded-full bg-[#061A35] border-2 border-[#13D9E8]/50 flex items-center justify-center text-[#13D9E8] group-hover:border-[#13D9E8] group-hover:shadow-[0_0_20px_rgba(19,217,232,0.5)] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Small Step Number Pill */}
                    <span className="absolute -bottom-2 -right-1 px-1.5 py-0.5 rounded-full bg-[#13D9E8] text-[#031126] font-mono text-[9px] font-extrabold">
                      {step.num}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-sm font-bold font-mono tracking-wider text-[#F5FAFF] uppercase group-hover:text-[#13D9E8] transition-colors mb-1">
                    {step.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#13D9E8] mb-3">
                    {step.subtitle}
                  </span>

                  {/* Description */}
                  <p className="text-xs text-[#A8BBD1] leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
