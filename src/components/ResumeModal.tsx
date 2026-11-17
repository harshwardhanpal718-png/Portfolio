import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white border border-zinc-200 rounded-2xl p-6 sm:p-7 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading text-zinc-900">Harshwardhan Pal — Resume</h3>
              <p className="text-xs text-zinc-500">Aspiring Data Analyst • B.Tech CSE (2027)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-5 space-y-4 text-xs text-zinc-800">
          <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-700 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-zinc-900 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-zinc-900">Verified Curriculum Details:</span>
              <p className="mt-0.5 text-zinc-600">
                You can download the verified PDF resume directly or preview it in a new browser tab.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 text-[11px]">
            <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
              <span className="text-zinc-500 block mb-0.5">Core Technical Stack</span>
              <span className="font-semibold text-zinc-900">Python, SQL, Power BI, Excel</span>
            </div>
            <div className="p-3 rounded-lg bg-zinc-50 border border-zinc-200">
              <span className="text-zinc-500 block mb-0.5">Academic Program</span>
              <span className="font-semibold text-zinc-900">B.Tech CSE, Jagannath Univ.</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-zinc-200">
          <button
            onClick={onClose}
            className="px-3.5 py-2 rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 text-xs font-medium transition-colors"
          >
            Close
          </button>
          <a
            href="/Harshwardhan_Pal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-lg bg-white border border-zinc-200 text-zinc-800 text-xs font-medium flex items-center gap-1.5 hover:border-zinc-400 transition-colors shadow-2xs"
          >
            <ExternalLink className="w-3.5 h-3.5 text-zinc-600" />
            <span>Preview</span>
          </a>
          <a
            href="/Harshwardhan_Pal_Resume.pdf"
            download="Harshwardhan_Pal_Resume.pdf"
            className="px-4 py-2 rounded-lg bg-[#09090B] hover:bg-[#27272A] text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-zinc-300" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};