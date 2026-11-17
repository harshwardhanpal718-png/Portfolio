import React from 'react';
import { GraduationCap, Building2, Calendar, Target, Database, Filter, LineChart, Lightbulb, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const infoCards = [
    {
      icon: GraduationCap,
      label: 'Degree',
      value: 'B.Tech CSE',
      detail: 'Computer Science Engineering',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10 border-blue-500/20'
    },
    {
      icon: Building2,
      label: 'University',
      value: 'Jagannath University',
      detail: 'Jaipur, Rajasthan, India',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10 border-purple-500/20'
    },
    {
      icon: Calendar,
      label: 'Graduation',
      value: '2027',
      detail: 'Expected Completion Year',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/20'
    },
    {
      icon: Target,
      label: 'Career Interest',
      value: 'Data Analytics',
      detail: 'Business Intelligence & SQL',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10 border-cyan-500/20'
    }
  ];

  const pipelineSteps = [
    {
      step: '01',
      title: 'Raw Data Ingestion',
      desc: 'Querying relational databases, pulling logs, or processing multi-table CSVs.',
      icon: Database,
      tool: 'SQL & MySQL'
    },
    {
      step: '02',
      title: 'Data Cleaning & ETL',
      desc: 'Resolving null values, handling outliers, formatting dates, and deduplicating.',
      icon: Filter,
      tool: 'Pandas & Power Query'
    },
    {
      step: '03',
      title: 'Exploratory Modeling',
      desc: 'Calculating distributions, correlations, cohorts, and hypothesis testing.',
      icon: LineChart,
      tool: 'Python & Statistics'
    },
    {
      step: '04',
      title: 'Actionable Insights',
      desc: 'Designing intuitive executive dashboards that guide strategic decision-making.',
      icon: Lightbulb,
      tool: 'Power BI & Excel'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#0A0E17]/60 border-t border-white/5">
      {/* Background Subtle Accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span>Background &amp; Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            A Little <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Professional Introduction Block */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-white/10 shadow-glass">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-purple-600" />
            
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-sans font-normal italic">
              "I am a Computer Science Engineering student with a strong interest in Data Analytics and Business Intelligence. I enjoy working with datasets, identifying patterns, cleaning data and creating visualizations that help people make better decisions."
            </p>

            <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Foundational focus on rigorous analytical methodology</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Committed to transparent, reproducible data wrangling</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {infoCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-5 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl ${card.bgColor} border flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <span className="text-xs uppercase font-mono text-slate-muted tracking-wider block mb-1">
                    {card.label}
                  </span>
                  <h3 className="text-lg font-bold font-heading text-white">
                    {card.value}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mt-2 pt-2 border-t border-white/5 font-sans">
                  {card.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Statistics-Inspired Data Workflow Pipeline Illustration */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
              End-to-End Analytical Workflow
            </span>
            <h3 className="text-xl font-bold font-heading text-white">
              How I Approach Data Problems
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {pipelineSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-5 border border-white/10 relative flex flex-col justify-between group hover:border-blue-500/40 transition-colors"
                >
                  {/* Top Step Number & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold text-blue-400/80 bg-blue-500/10 px-2 py-0.5 rounded">
                        STEP {step.step}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-dark-card border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
                        <StepIcon className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="text-sm font-bold font-heading text-white mb-2">
                      {step.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Tool Pill */}
                  <div className="mt-4 pt-3 border-t border-white/5">
                    <span className="inline-block text-[10px] font-mono font-medium text-blue-300 bg-blue-950/40 border border-blue-500/20 px-2 py-0.5 rounded">
                      {step.tool}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
