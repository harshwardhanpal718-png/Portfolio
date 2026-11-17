import React from 'react';
import { certificationsData } from '../data/certificationsData';
import { Award, ExternalLink, Calendar } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 md:py-20 border-t border-[#E8DFD5] bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-[#7E5331] uppercase tracking-wider block mb-1">
            Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#1C1612] tracking-tight">
            Certifications &amp; Training
          </h2>
          <div className="w-12 h-1 bg-[#7E5331] mt-2 rounded-full" />
        </div>

        {/* Clean Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border border-[#E8DFD5] rounded-xl p-5 flex flex-col justify-between group hover:border-[#C4A88E] transition-all shadow-warm-sm"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[#FAF6F2] border border-[#EADBCE] flex items-center justify-center text-[#7E5331] shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-[#7E5331] font-semibold block">
                        {cert.issuer}
                      </span>
                      <h3 className="text-sm font-bold text-[#1C1612] group-hover:text-[#7E5331] transition-colors">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F5F8F2] text-[#354823] border border-[#DCE8D4] shrink-0 font-medium">
                    {cert.status}
                  </span>
                </div>

                <p className="text-xs text-[#63564C] leading-relaxed font-sans mb-3">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {cert.skillsCovered.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FAF6F2] border border-[#EADBCE] text-[#46382E]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#F0E8DF] flex items-center justify-between text-xs text-[#8C7C70]">
                <span className="flex items-center gap-1.5 font-mono text-[11px]">
                  <Calendar className="w-3 h-3 text-[#B89370]" />
                  {cert.issueDate}
                </span>

                {cert.verificationUrl && cert.verificationUrl !== '#' && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7E5331] hover:text-[#2A170B] font-medium flex items-center gap-1 transition-colors"
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
