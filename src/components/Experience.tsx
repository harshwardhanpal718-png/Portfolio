import React from 'react';
import { experienceData } from '../data/experienceData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-[#0A0E17]/60 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience &amp; Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Experience &amp; <span className="text-gradient">Internships</span>
          </h2>
          <p className="text-slate-muted text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Practical technical internships and structured industry programs focused on data analysis and computational systems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-12">
          {experienceData.map((item) => {
            const isPython = item.id.includes('python');
            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline node bullet */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 bg-dark-bg flex items-center justify-center transition-transform group-hover:scale-110 ${
                  isPython ? 'border-blue-500 text-blue-400' : 'border-purple-500 text-purple-400'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${isPython ? 'bg-blue-400' : 'bg-purple-400'}`} />
                </div>

                {/* Experience Card */}
                <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-white/10">
                  
                  {/* Top Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                          {item.type}
                        </span>
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-emerald-300">
                          {item.statusBadge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-heading text-white">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-slate-300">
                        {item.organization}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-400 font-mono gap-1 shrink-0">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-sans">
                    {item.summary}
                  </p>

                  {/* Verified Responsibilities */}
                  <div className="space-y-2 mb-5">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Key Responsibilities &amp; Outcomes:
                    </span>
                    {item.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools Used Pill Row */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-500 mr-1">TECH:</span>
                    {item.toolsUsed.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-dark-bg border border-white/5 text-blue-300"
                      >
                        {tool}
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
