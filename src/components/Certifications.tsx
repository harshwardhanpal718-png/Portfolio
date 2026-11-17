import React from 'react';
import { certificationsData } from '../data/certificationsData';
import { Award, ExternalLink, Calendar } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 md:py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
            Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white tracking-tight">
            Certifications &amp; Training
          </h2>
          <div className="w-12 h-1 bg-blue-500 mt-2 rounded-full" />
        </div>

        {/* Clean Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#111827] border border-white/10 rounded-xl p-5 flex flex-col justify-between group hover:border-blue-500/30 transition-colors"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-blue-400 font-semibold block">
                        {cert.issuer}
                      </span>
                      <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/30 text-emerald-300 border border-emerald-500/20 shrink-0">
                    {cert.status}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-3">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {cert.skillsCovered.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080B12] border border-white/5 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-mono text-[11px]">
                  <Calendar className="w-3 h-3 text-slate-500" />
                  {cert.issueDate}
                </span>

                {cert.verificationUrl && cert.verificationUrl !== '#' && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
