import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-[#151022] border border-[#4717F6]/40 rounded-2xl p-6 sm:p-7 shadow-jewel-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#4717F6]/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#181228] border border-[#4717F6]/40 flex items-center justify-center text-[#A239CA]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-heading text-[#E7DFDD]">Harshwardhan Pal — Resume</h3>
              <p className="text-xs text-[#A99F9D]">Aspiring Data Analyst • B.Tech CSE (2027)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#A99F9D] hover:text-[#E7DFDD] hover:bg-[#181228] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-5 space-y-4 text-xs text-[#E7DFDD]">
          <div className="p-3.5 rounded-xl bg-[#181228] border border-[#4717F6]/30 text-xs text-[#A99F9D] flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#A239CA] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#E7DFDD]">Official Document Ready:</span>
              <p className="mt-0.5 text-[#A99F9D]">
                You can download the verified PDF resume directly or inspect it in a separate browser tab.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5 text-[11px]">
            <div className="p-3 rounded-lg bg-[#0E0B16] border border-[#4717F6]/25">
              <span className="text-[#A99F9D] block mb-0.5">Core Technical Stack</span>
              <span className="font-semibold text-[#E7DFDD]">Python, SQL, Power BI, Excel</span>
            </div>
            <div className="p-3 rounded-lg bg-[#0E0B16] border border-[#4717F6]/25">
              <span className="text-[#A99F9D] block mb-0.5">Academic Program</span>
              <span className="font-semibold text-[#E7DFDD]">B.Tech CSE, Jagannath Univ.</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-[#4717F6]/30">
          <button
            onClick={onClose}
            className="px-3.5 py-2 rounded-lg border border-[#4717F6]/30 text-[#A99F9D] hover:bg-[#181228] hover:text-[#E7DFDD] text-xs font-medium transition-colors"
          >
            Close
          </button>
          <a
            href="/Harshwardhan_Pal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-lg bg-[#181228] border border-[#4717F6]/30 text-[#E7DFDD] text-xs font-medium flex items-center gap-1.5 hover:border-[#A239CA] transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#A239CA]" />
            <span>Preview</span>
          </a>
          <a
            href="/Harshwardhan_Pal_Resume.pdf"
            download="Harshwardhan_Pal_Resume.pdf"
            className="px-4 py-2 rounded-lg bg-[#4717F6] hover:bg-[#A239CA] border border-[#4717F6] hover:border-[#A239CA] text-[#E7DFDD] text-xs font-semibold flex items-center gap-1.5 transition-all shadow-jewel-sm"
          >
            <Download className="w-3.5 h-3.5 text-[#E7DFDD]" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};