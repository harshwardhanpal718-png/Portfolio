import React, { useEffect } from 'react';
import { Project } from '../types';
import { 
  X, 
  Github, 
  ExternalLink,
  Database, 
  Filter, 
  TrendingUp, 
  Lightbulb, 
  Layers, 
  CheckCircle2, 
  AlertCircle
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white border border-[#E8DFD5] rounded-2xl shadow-warm-lg overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-[#E8DFD5] flex items-start justify-between gap-4 bg-[#FAF8F5]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#F3EAE0] border border-[#E4D3C0] text-[#7E5331]">
                {project.category}
              </span>
              <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white border border-[#E4D3C0] text-[#643F23]">
                {project.status}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#1C1612]">
              {project.title}
            </h2>
            <p className="text-xs text-[#63564C] mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white hover:bg-[#F3EAE0] text-[#63564C] hover:text-[#1C1612] border border-[#E8DFD5] transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-6 max-h-[70vh] overflow-y-auto font-sans">
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {project.metricsSummary.map((metric, mIdx) => (
              <div key={mIdx} className="p-3 rounded-xl bg-[#FAF6F2] border border-[#EADBCE] text-center">
                <span className="text-[10px] font-mono text-[#8C7C70] block mb-1">
                  {metric.label}
                </span>
                <span className="text-base sm:text-lg font-bold font-heading text-[#2A170B]">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Business Problem & Dataset */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#FAF6F2] border border-[#EADBCE] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#8A5A36]">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>BUSINESS PROBLEM</span>
              </div>
              <p className="text-xs text-[#46382E] leading-relaxed">
                {project.businessProblem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF6F2] border border-[#EADBCE] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#7E5331]">
                <Database className="w-3.5 h-3.5" />
                <span>DATASET DETAILS</span>
              </div>
              <p className="text-xs text-[#46382E] leading-relaxed">
                {project.datasetInfo}
              </p>
            </div>
          </div>

          {/* Data Cleaning Approach */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#1C1612]">
              <Filter className="w-3.5 h-3.5 text-[#7E5331]" />
              <span>Data Cleaning &amp; Transformation</span>
            </div>
            <div className="space-y-1.5">
              {project.dataCleaningApproach.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E8DFD5] flex items-start gap-2 text-xs text-[#46382E]">
                  <span className="text-[#7E5331] font-mono font-bold text-[10px] shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#1C1612]">
              <Layers className="w-3.5 h-3.5 text-[#9B714B]" />
              <span>Analysis Methodology</span>
            </div>
            <div className="space-y-1.5">
              {project.analysisMethodology.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#FAF8F5] border border-[#E8DFD5] flex items-start gap-2 text-xs text-[#46382E]">
                  <span className="text-[#9B714B] font-mono font-bold text-[10px] shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#1C1612]">
              <TrendingUp className="w-3.5 h-3.5 text-[#5A6E46]" />
              <span>Key Analytical Insights</span>
            </div>
            <div className="space-y-1.5">
              {project.keyInsights.map((insight, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#F5F8F2] border border-[#DCE8D4] flex items-start gap-2.5 text-xs text-[#354823]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5A6E46] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Recommendations */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#1C1612]">
              <Lightbulb className="w-3.5 h-3.5 text-[#B8863A]" />
              <span>Strategic Business Recommendations</span>
            </div>
            <div className="space-y-1.5">
              {project.businessRecommendations.map((rec, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#FAF6EE] border border-[#EFE2C6] flex items-start gap-2.5 text-xs text-[#634E22]">
                  <span className="text-[#B8863A] font-bold shrink-0">→</span>
                  <span className="leading-relaxed">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="pt-2">
            <span className="text-[10px] font-mono text-[#8C7C70] block mb-1.5 uppercase">TECHNOLOGIES:</span>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded bg-[#FAF6F2] border border-[#EADBCE] text-[11px] font-mono text-[#7E5331]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-[#E8DFD5] bg-[#FAF8F5] flex items-center justify-between gap-3">
          <span className="text-xs text-[#8C7C70]">
            Repository available on GitHub
          </span>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-white border border-[#E8DFD5] text-[#1C1612] text-xs font-medium flex items-center gap-1.5 hover:bg-[#F3EAE0] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Code</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#2A170B] hover:bg-[#462A16] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Live View</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
