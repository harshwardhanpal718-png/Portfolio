import React from 'react';
import { Compass, Database, Filter, Cpu, BarChart3 } from 'lucide-react';

export const DataWorkflow: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      subtitle: 'Problem Formulation & Business Objectives',
      description: 'Understanding the underlying business problem, commercial objectives, domain constraints, and identifying target evaluation metrics.',
      icon: Compass,
      tools: 'Domain Understanding • KPI Definition',
    },
    {
      number: '02',
      title: 'COLLECT',
      subtitle: 'Ingestion & Relational Aggregation',
      description: 'Gathering relevant data from available transactional databases, production logs, REST endpoints, and flat tabular repositories.',
      icon: Database,
      tools: 'SQL Queries • Database Views • Data Ingestion',
    },
    {
      number: '03',
      title: 'CLEAN',
      subtitle: 'Data Wrangling & Integrity Checks',
      description: 'Handling missing values, outlier treatment, deduplication, standardizing timestamps, formatting schema constraints, and preparing robust analytical tables.',
      icon: Filter,
      tools: 'Pandas • Power Query • SQL Constraints',
    },
    {
      number: '04',
      title: 'ANALYZE',
      subtitle: 'Exploratory & Statistical Modeling',
      description: 'Exploring cross-dimensional patterns, testing statistical significance, identifying cohort shifts, and extracting high-impact business insights using Python and SQL.',
      icon: Cpu,
      tools: 'Python (NumPy/Pandas) • CTEs • Window Functions',
    },
    {
      number: '05',
      title: 'VISUALIZE',
      subtitle: 'Executive Dashboards & Storytelling',
      description: 'Building interactive business dashboards, distilling quantitative complexity into clear visual hierarchies, and presenting actionable strategic recommendations.',
      icon: BarChart3,
      tools: 'Power BI • DAX • Microsoft Excel • Executive Reporting',
    },
  ];

  return (
    <section id="workflow" className="py-24 border-t border-[#242424] bg-[#050505] relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#C81024]/08 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-widest text-[#C81024] uppercase block mb-2 font-bold">
            WORK PROCESS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
            HOW I WORK <span className="text-[#C81024]">WITH DATA</span>
          </h2>
          <p className="text-sm font-sans text-[#A1A1AA] mt-3">
            A disciplined five-stage methodology designed to transform raw and messy datasets into boardroom-ready decision intelligence.
          </p>
        </div>

        {/* Vertical Five-Step Timeline */}
        <div className="relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute top-8 bottom-8 left-6 sm:left-1/2 -translate-x-1/2 w-[2px] bg-[#242424]" />

          {/* Steps List */}
          <div className="space-y-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;

              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-8 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Content Box (Half Width) */}
                  <div className={`w-full sm:w-1/2 pl-16 sm:pl-0 ${isEven ? 'sm:pl-10 text-left' : 'sm:pr-10 sm:text-right'}`}>
                    <div className="bg-[#0B0B0B] border border-[#242424] p-7 hover:border-[#C81024] transition-all duration-300 group shadow-xl">
                      <div className={`flex items-center gap-3 mb-2 ${isEven ? 'justify-start' : 'sm:justify-end'}`}>
                        <span className="font-display text-2xl text-[#C81024]">
                          {step.number}
                        </span>
                        <h3 className="font-display text-2xl text-white tracking-wider">
                          {step.title}
                        </h3>
                      </div>
                      
                      <span className="text-xs font-mono text-[#E31B32] block mb-3 font-semibold">
                        {step.subtitle}
                      </span>

                      <p className="text-xs text-[#A1A1AA] leading-relaxed font-sans mb-4">
                        {step.description}
                      </p>

                      <div className={`pt-3 border-t border-[#1C1C1C] text-[10px] font-mono text-[#71717A] ${isEven ? 'text-left' : 'sm:text-right'}`}>
                        {step.tools}
                      </div>
                    </div>
                  </div>

                  {/* Circular Outline Center Node */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#050505] border-2 border-[#C81024] flex items-center justify-center z-20 shadow-[0_0_20px_rgba(200,16,36,0.35)] group">
                    <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Empty Spacer on other side for desktop balance */}
                  <div className="hidden sm:block sm:w-1/2" />

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
