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
        className="relative w-full max-w-2xl bg-dark-card border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10 relative z-10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading text-white">Harshwardhan Pal — Resume</h3>
              <p className="text-xs text-slate-muted">Aspiring Data Analyst • B.Tech CSE (2027)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-muted hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-5 text-sm text-slate-300 relative z-10">
          <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/20 text-xs text-blue-200 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white">Resume Document Ready:</span>
              <p className="mt-0.5 text-blue-300/90">
                You can download the full PDF resume directly to your device or view it in a separate browser tab.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-lg bg-dark-bg/60 border border-white/5">
              <span className="text-slate-muted block mb-1">Core Expertise</span>
              <span className="font-semibold text-white">SQL, Python, Power BI, Excel, EDA</span>
            </div>
            <div className="p-3.5 rounded-lg bg-dark-bg/60 border border-white/5">
              <span className="text-slate-muted block mb-1">Current Academic Program</span>
              <span className="font-semibold text-white">B.Tech CSE, Jagannath University (2027)</span>
            </div>
            <div className="p-3.5 rounded-lg bg-dark-bg/60 border border-white/5">
              <span className="text-slate-muted block mb-1">Availability</span>
              <span className="font-semibold text-emerald-400">Open to Internships & Projects</span>
            </div>
            <div className="p-3.5 rounded-lg bg-dark-bg/60 border border-white/5">
              <span className="text-slate-muted block mb-1">Location</span>
              <span className="font-semibold text-white">Jaipur, Rajasthan, India</span>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            Need a customized resume format or specific technical assessment references? Feel free to reach out directly via the contact form or email.
          </p>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-5 border-t border-white/10 relative z-10">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 text-xs font-medium transition-colors"
          >
            Cancel
          </button>
          <a
            href="/Harshwardhan_Pal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-slate-300" />
            Preview in Tab
          </a>
          <a
            href="/Harshwardhan_Pal_Resume.pdf"
            download="Harshwardhan_Pal_Resume.pdf"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 transition-all"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};
