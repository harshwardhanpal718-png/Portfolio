import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white border border-[#E8DFD5] rounded-2xl p-6 sm:p-7 shadow-warm-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#F0E8DF]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6F2] border border-[#EADBCE] flex items-center justify-center text-[#7E5331]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading text-[#1C1612]">Harshwardhan Pal — Resume</h3>
              <p className="text-xs text-[#63564C]">Aspiring Data Analyst • B.Tech CSE (2027)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8C7C70] hover:text-[#1C1612] hover:bg-[#FAF6F2] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-5 space-y-4 text-xs text-[#46382E]">
          <div className="p-3.5 rounded-xl bg-[#FAF6F2] border border-[#EADBCE] text-xs text-[#643F23] flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#7E5331] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#1C1612]">Official Document Ready:</span>
              <p className="mt-0.5 text-[#63564C]">
                You can download the verified PDF resume directly or inspect it in a separate browser tab.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 text-[11px]">
            <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E8DFD5]">
              <span className="text-[#8C7C70] block mb-0.5">Core Technical Stack</span>
              <span className="font-semibold text-[#1C1612]">Python, SQL, Power BI, Excel</span>
            </div>
            <div className="p-3 rounded-lg bg-[#FAF8F5] border border-[#E8DFD5]">
              <span className="text-[#8C7C70] block mb-0.5">Academic Program</span>
              <span className="font-semibold text-[#1C1612]">B.Tech CSE, Jagannath Univ.</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-[#F0E8DF]">
          <button
            onClick={onClose}
            className="px-3.5 py-2 rounded-lg border border-[#E8DFD5] text-[#63564C] hover:bg-[#FAF6F2] text-xs font-medium transition-colors"
          >
            Close
          </button>
          <a
            href="/Harshwardhan_Pal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-lg bg-[#FAF6F2] border border-[#EADBCE] text-[#46382E] text-xs font-medium flex items-center gap-1.5 hover:bg-[#F3EAE0] transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#7E5331]" />
            <span>Preview</span>
          </a>
          <a
            href="/Harshwardhan_Pal_Resume.pdf"
            download="Harshwardhan_Pal_Resume.pdf"
            className="px-4 py-2 rounded-lg bg-[#2A170B] hover:bg-[#462A16] text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-[#E4D3C0]" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};
