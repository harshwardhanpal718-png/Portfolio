import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-[#0B0B0B] border border-[#242424] shadow-2xl p-6 sm:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-[#242424]">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 bg-[#050505] border border-[#C81024] flex items-center justify-center text-[#C81024]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-2xl text-white tracking-wide">
                HARSHWARDHAN PAL — RESUME
              </h3>
              <p className="text-xs font-mono text-[#A1A1AA]">
                Data Analyst • B.Tech CSE (Class of 2027)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A1A1AA] hover:text-white border border-[#242424] hover:border-[#C81024] bg-[#050505] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-4 text-xs font-mono text-[#A1A1AA]">
          <div className="p-4 bg-[#050505] border border-[#242424] flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-[#C81024] shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block uppercase mb-0.5">
                Verified Curriculum &amp; Analytical Details:
              </span>
              <p className="text-xs text-[#A1A1AA] font-sans leading-relaxed">
                You can download the verified PDF resume directly or preview it in a new browser window.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-[11px]">
            <div className="p-3.5 bg-[#050505] border border-[#242424]">
              <span className="text-[#71717A] block mb-1 uppercase tracking-wider">Core Analytical Stack</span>
              <span className="font-bold text-white">Python, SQL, Power BI, Excel</span>
            </div>
            <div className="p-3.5 bg-[#050505] border border-[#242424]">
              <span className="text-[#71717A] block mb-1 uppercase tracking-wider">Academic Program</span>
              <span className="font-bold text-white">B.Tech CSE, Jagannath Univ.</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-5 border-t border-[#242424]">
          <button
            onClick={onClose}
            className="px-4 py-2.5 border border-[#242424] text-[#A1A1AA] hover:text-white text-xs font-mono tracking-wider transition-colors"
          >
            CLOSE
          </button>
          <a
            href="/Harshwardhan_Pal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 btn-outline text-xs tracking-wider flex items-center gap-1.5 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#C81024]" />
            <span>PREVIEW</span>
          </a>
          <a
            href="/Harshwardhan_Pal_Resume.pdf"
            download="Harshwardhan_Pal_Resume.pdf"
            className="px-5 py-2.5 btn-crimson text-xs tracking-wider flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DOWNLOAD PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};
