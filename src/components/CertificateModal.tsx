import React, { useEffect } from 'react';
import { X, Download, ExternalLink, Award, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificateUrl: string;
  title: string;
  issuer: string;
  date: string;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  certificateUrl,
  title,
  issuer,
  date,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-[2rem] border border-[#EBE5DC] shadow-soft-lg overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#EBE5DC] flex items-center justify-between gap-4 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E8F1E8] border border-[#DCE9DF] flex items-center justify-center text-emerald-800">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl font-bold text-[#171923]">
                  {title}
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8F1E8] text-emerald-900 border border-[#DCE9DF] text-[10px] font-bold uppercase font-sans">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Credential
                </span>
              </div>
              <p className="text-xs text-[#62616A] font-sans">
                Issued by <strong className="text-[#171923]">{issuer}</strong> • {date}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-[#EBE5DC] hover:border-[#171923] text-[#62616A] hover:text-[#171923] transition-colors shrink-0 bg-[#FAF7F2]"
            aria-label="Close certificate modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image View */}
        <div className="p-4 sm:p-6 bg-[#F5F0E9] flex justify-center items-center max-h-[75vh] overflow-auto">
          <div className="relative rounded-2xl overflow-hidden border border-[#EBE5DC] shadow-soft-md bg-white">
            <img
              src={certificateUrl}
              alt={`${title} - ${issuer}`}
              className="max-h-[68vh] w-auto object-contain"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-[#EBE5DC] bg-white flex flex-wrap items-center justify-between gap-4 font-sans">
          <div className="text-xs text-[#62616A]">
            <span>Student: <strong className="text-[#171923]">Harshwardhan Pal (1BG23CS407)</strong></span>
            <span className="mx-2">•</span>
            <span>Jagannath University, Jaipur</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cream-border px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-card"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#A98468]" />
              <span>Open Full Image</span>
            </a>
            <a
              href={certificateUrl}
              download="Knowx_Internship_Certificate_Harshwardhan_Pal.jpg"
              className="btn-dark px-5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-soft"
            >
              <Download className="w-3.5 h-3.5 text-[#A98468]" />
              <span>Download Certificate</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
