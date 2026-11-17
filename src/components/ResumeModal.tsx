import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-[#0B2B26] border border-[#235347] rounded-2xl p-6 sm:p-7 shadow-forest-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#235347]">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#163832] border border-[#235347] flex items-center justify-center text-[#8EB69B]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading text-[#DAF1DE]">Harshwardhan Pal — Resume</h3>
              <p className="text-xs text-[#8EB69B]">Aspiring Data Analyst • B.Tech CSE (2027)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#8EB69B] hover:text-[#DAF1DE] hover:bg-[#163832] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-5 space-y-4 text-xs text-[#DAF1DE]">
          <div className="p-3.5 rounded-xl bg-[#163832] border border-[#235347] text-xs text-[#8EB69B] flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#8EB69B] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#DAF1DE]">Official Document Ready:</span>
              <p className="mt-0.5 text-[#8EB69B]">
                You can download the verified PDF resume directly or inspect it in a separate browser tab.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 text-[11px]">
            <div className="p-3 rounded-lg bg-[#051F20] border border-[#235347]">
              <span className="text-[#8EB69B] block mb-0.5">Core Technical Stack</span>
              <span className="font-semibold text-[#DAF1DE]">Python, SQL, Power BI, Excel</span>
            </div>
            <div className="p-3 rounded-lg bg-[#051F20] border border-[#235347]">
              <span className="text-[#8EB69B] block mb-0.5">Academic Program</span>
              <span className="font-semibold text-[#DAF1DE]">B.Tech CSE, Jagannath Univ.</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-[#235347]">
          <button
            onClick={onClose}
            className="px-3.5 py-2 rounded-lg border border-[#235347] text-[#8EB69B] hover:bg-[#163832] hover:text-[#DAF1DE] text-xs font-medium transition-colors"
          >
            Close
          </button>
          <a
            href="/Harshwardhan_Pal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-lg bg-[#163832] border border-[#235347] text-[#DAF1DE] text-xs font-medium flex items-center gap-1.5 hover:border-[#8EB69B] transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#8EB69B]" />
            <span>Preview</span>
          </a>
          <a
            href="/Harshwardhan_Pal_Resume.pdf"
            download="Harshwardhan_Pal_Resume.pdf"
            className="px-4 py-2 rounded-lg bg-[#235347] hover:bg-[#163832] border border-[#235347] hover:border-[#8EB69B] text-[#DAF1DE] text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-[#8EB69B]" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};
