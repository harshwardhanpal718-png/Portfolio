import React from 'react';
import { certificationsData } from '../data/certificationsData';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28 relative bg-[#0A0E17]/60 border-t border-white/5">
      {/* Glow */}
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials &amp; Professional Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Verified <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-muted text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Industry credentials validating proficiency in data science pipelines, relational database analytics, and network systems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert) => {
            const isVerified = cert.status === 'Verified';

            return (
              <div
                key={cert.id}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Issuer */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-purple-400 block font-semibold">
                          {cert.issuer}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mt-0.5">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          <span>{cert.issueDate}</span>
                        </div>
                      </div>
                    </div>

                    <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                      isVerified
                        ? 'bg-emerald-950/30 border-emerald-500/20 text-emerald-300'
                        : 'bg-purple-950/30 border-purple-500/20 text-purple-300'
                    }`}>
                      {cert.status}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-blue-400 transition-colors mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                    {cert.description}
                  </p>

                  {/* Skills Covered Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-dark-bg border border-white/5 text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Credential Verification Link */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-500 text-[11px]">
                    ID: {cert.credentialId || 'Credential Pending'}
                  </span>

                  {cert.verificationUrl && cert.verificationUrl !== '#' ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-slate-500 italic text-[11px]">
                      Verification In Progress
                    </span>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
