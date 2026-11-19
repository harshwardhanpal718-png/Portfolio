import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#03001e]/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-[#03001e] border border-white/[0.1] rounded-3xl p-6 sm:p-8 shadow-glass-card overflow-hidden backdrop-blur-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#00f2fe]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading text-white">Harshwardhan Pal — Resume</h3>
              <p className="text-xs text-slate-400">Aspiring Data Analyst • B.Tech CSE (2027)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-4 text-xs text-slate-300">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#00f2fe] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">Verified Curriculum Details:</span>
              <p className="mt-1 text-slate-400 leading-relaxed">
                You can download the verified PDF resume directly or preview it in a new browser tab.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-[11px]">
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-slate-400 block mb-1">Core Analytical Stack</span>
              <span className="font-bold text-white">Python, SQL, Power BI, Excel</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <span className="text-slate-400 block mb-1">Academic Program</span>
              <span className="font-bold text-white">B.Tech CSE, Jagannath Univ.</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/[0.08]">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.04] text-xs font-medium transition-colors"
          >
            Close
          </button>
          <a
            href="/Harshwardhan_Pal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl btn-glass text-slate-200 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#00f2fe]" />
            <span>Preview</span>
          </a>
          <a
            href="/Harshwardhan_Pal_Resume.pdf"
            download="Harshwardhan_Pal_Resume.pdf"
            className="px-5 py-2.5 rounded-xl btn-gradient text-white text-xs font-bold flex items-center gap-1.5 transition-opacity"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};
