import React from 'react';
import { certificationsData } from '../data/certificationsData';
import { Award, ExternalLink, Calendar } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 md:py-20 border-t border-[#4717F6]/25 bg-[#0E0B16] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-[#A239CA] uppercase tracking-wider block mb-1">
            Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#E7DFDD] tracking-tight">
            Certifications &amp; Training
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#4717F6] to-[#A239CA] mt-2 rounded-full" />
        </div>

        {/* Clean Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#151022] border border-[#4717F6]/30 rounded-xl p-5 flex flex-col justify-between group hover:border-[#A239CA] hover:bg-[#181228] transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#181228] border border-[#4717F6]/40 flex items-center justify-center text-[#A239CA] shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#A239CA] font-semibold block">
                        {cert.issuer}
                      </span>
                      <h3 className="text-sm font-bold text-[#E7DFDD] group-hover:text-[#A239CA] transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#0E0B16] text-[#E7DFDD] border border-[#4717F6]/30 shrink-0 font-medium">
                    {cert.status}
                  </span>
                </div>

                <p className="text-xs text-[#A99F9D] leading-relaxed font-sans mb-3">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {cert.skillsCovered.map((skill: string, sIdx: number) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0E0B16] border border-[#4717F6]/30 text-[#E7DFDD]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#4717F6]/25 flex items-center justify-between text-xs text-[#A99F9D]">
                <span className="flex items-center gap-1.5 font-mono text-[11px]">
                  <Calendar className="w-3 h-3 text-[#A239CA]" />
                  {cert.issueDate}
                </span>

                {cert.verificationUrl && cert.verificationUrl !== '#' && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A239CA] hover:text-[#E7DFDD] font-medium flex items-center gap-1 transition-colors"
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