import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-xl bg-[#121724] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#182032] border border-white/10 flex items-center justify-center text-[#3B82F6]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading text-[#F8FAFC]">Harshwardhan Pal — Resume</h3>
              <p className="text-xs text-[#94A3B8]">Aspiring Data Analyst • B.Tech CSE (2027)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#182032] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-5 space-y-4 text-xs text-[#F8FAFC]">
          <div className="p-3.5 rounded-xl bg-[#182032] border border-white/[0.06] text-xs text-[#94A3B8] flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#F8FAFC]">Verified Curriculum Details:</span>
              <p className="mt-0.5 text-[#94A3B8]">
                You can download the verified PDF resume directly or preview it in a new browser tab.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 text-[11px]">
            <div className="p-3 rounded-lg bg-[#0A0D14] border border-white/[0.06]">
              <span className="text-[#94A3B8] block mb-0.5">Core Technical Stack</span>
              <span className="font-semibold text-[#F8FAFC]">Python, SQL, Power BI, Excel</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0A0D14] border border-white/[0.06]">
              <span className="text-[#94A3B8] block mb-0.5">Academic Program</span>
              <span className="font-semibold text-[#F8FAFC]">B.Tech CSE, Jagannath Univ.</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-white/[0.08]">
          <button
            onClick={onClose}
            className="px-3.5 py-2 rounded-lg border border-white/10 text-[#94A3B8] hover:bg-[#182032] hover:text-[#F8FAFC] text-xs font-medium transition-colors"
          >
            Close
          </button>
          <a
            href="/Harshwardhan_Pal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-lg bg-[#182032] border border-white/10 text-[#F8FAFC] text-xs font-medium flex items-center gap-1.5 hover:border-[#3B82F6]/50 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Preview</span>
          </a>
          <a
            href="/Harshwardhan_Pal_Resume.pdf"
            download="Harshwardhan_Pal_Resume.pdf"
            className="px-4 py-2 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-accent-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};