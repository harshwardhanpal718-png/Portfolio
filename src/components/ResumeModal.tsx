import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-xl bg-[#FAF7F2] rounded-[2rem] border border-[#EBE5DC] shadow-soft-lg p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-[#EBE5DC]">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#F9EBDD] border border-[#EBE5DC] flex items-center justify-center text-[#A98468]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#171923]">
                Harshwardhan Pal — Resume
              </h3>
              <p className="text-xs text-[#A98468] font-sans font-medium">
                Data Analyst • B.Tech CSE (Class of 2027)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#62616A] hover:text-[#171923] rounded-full border border-[#EBE5DC] hover:border-[#171923] bg-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-4 text-xs font-sans text-[#62616A]">
          <div className="p-4 rounded-2xl bg-white border border-[#EBE5DC] flex items-start gap-3 shadow-card">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#171923] block mb-0.5">
                Verified Curriculum &amp; Analytical Details:
              </span>
              <p className="text-xs text-[#62616A] leading-relaxed">
                You can download the verified PDF resume directly or preview it in a new browser window.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-[11px]">
            <div className="p-4 rounded-2xl bg-[#E8F1E8] border border-[#DCE9DF]">
              <span className="text-[#62616A] block mb-1 font-semibold uppercase tracking-wider">Core Stack</span>
              <span className="font-bold text-[#171923]">Python, SQL, Power BI, Excel</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#E5EEF8] border border-[#D2E2F2]">
              <span className="text-[#62616A] block mb-1 font-semibold uppercase tracking-wider">Academic Track</span>
              <span className="font-bold text-[#171923]">B.Tech CSE, Jagannath Univ.</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-5 border-t border-[#EBE5DC]">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-full border border-[#EBE5DC] text-[#62616A] hover:text-[#171923] text-xs font-semibold tracking-wide transition-colors cursor-pointer"
          >
            Close
          </button>
          <a
            href="/Harshwardhan_Pal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 btn-cream-border rounded-full text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#A98468]" />
            <span>Preview</span>
          </a>
          <a
            href="/Harshwardhan_Pal_Resume.pdf"
            download="Harshwardhan_Pal_Resume.pdf"
            className="px-5 py-2.5 btn-dark rounded-full text-xs font-semibold tracking-wide flex items-center gap-1.5 cursor-pointer shadow-soft"
          >
            <Download className="w-3.5 h-3.5 text-[#A98468]" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};
