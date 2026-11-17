import React from 'react';
import { certificationsData } from '../data/certificationsData';
import { Award, ExternalLink, Calendar } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 md:py-20 border-t border-[#235347]/60 bg-[#051F20] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-[#8EB69B] uppercase tracking-wider block mb-1">
            Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#DAF1DE] tracking-tight">
            Certifications &amp; Training
          </h2>
          <div className="w-12 h-1 bg-[#235347] mt-2 rounded-full" />
        </div>

        {/* Clean Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#163832] border border-[#235347] rounded-xl p-5 flex flex-col justify-between group hover:border-[#8EB69B] transition-all shadow-forest-sm"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#0B2B26] border border-[#235347] flex items-center justify-center text-[#8EB69B] shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#8EB69B] font-semibold block">
                        {cert.issuer}
                      </span>
                      <h3 className="text-sm font-bold text-[#DAF1DE] group-hover:text-[#8EB69B] transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#0B2B26] text-[#DAF1DE] border border-[#235347] shrink-0 font-medium">
                    {cert.status}
                  </span>
                </div>

                <p className="text-xs text-[#8EB69B] leading-relaxed font-sans mb-3">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {cert.skillsCovered.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B2B26] border border-[#235347] text-[#DAF1DE]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#235347] flex items-center justify-between text-xs text-[#8EB69B]">
                <span className="flex items-center gap-1.5 font-mono text-[11px]">
                  <Calendar className="w-3 h-3 text-[#8EB69B]" />
                  {cert.issueDate}
                </span>

                {cert.verificationUrl && cert.verificationUrl !== '#' && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8EB69B] hover:text-[#DAF1DE] font-medium flex items-center gap-1 transition-colors"
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
