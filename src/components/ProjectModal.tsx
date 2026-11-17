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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#151022] border border-[#4717F6]/40 rounded-2xl shadow-jewel-md overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-[#4717F6]/30 flex items-start justify-between gap-4 bg-[#0E0B16]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#181228] border border-[#4717F6]/40 text-[#A239CA]">
                {project.category}
              </span>
              <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#181228] border border-[#A239CA]/50 text-[#E7DFDD]">
                {project.status}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#E7DFDD]">
              {project.title}
            </h2>
            <p className="text-xs text-[#A99F9D] mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#181228] hover:bg-[#4717F6] text-[#A99F9D] hover:text-[#E7DFDD] border border-[#4717F6]/30 transition-colors shrink-0"
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
              <div key={mIdx} className="p-3 rounded-xl bg-[#181228] border border-[#4717F6]/30 text-center">
                <span className="text-[10px] font-mono text-[#A99F9D] block mb-1">
                  {metric.label}
                </span>
                <span className="text-base sm:text-lg font-bold font-heading text-[#E7DFDD]">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Business Problem & Dataset */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#181228] border border-[#4717F6]/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#A239CA]">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>BUSINESS PROBLEM</span>
              </div>
              <p className="text-xs text-[#E7DFDD]/90 leading-relaxed">
                {project.businessProblem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#181228] border border-[#4717F6]/30 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#A239CA]">
                <Database className="w-3.5 h-3.5" />
                <span>DATASET DETAILS</span>
              </div>
              <p className="text-xs text-[#E7DFDD]/90 leading-relaxed">
                {project.datasetInfo}
              </p>
            </div>
          </div>

          {/* Data Cleaning Approach */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#E7DFDD]">
              <Filter className="w-3.5 h-3.5 text-[#A239CA]" />
              <span>Data Cleaning &amp; Transformation</span>
            </div>
            <div className="space-y-1.5">
              {project.dataCleaningApproach.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#0E0B16] border border-[#4717F6]/25 flex items-start gap-2 text-xs text-[#E7DFDD]/90">
                  <span className="text-[#A239CA] font-mono font-bold text-[10px] shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#E7DFDD]">
              <Layers className="w-3.5 h-3.5 text-[#4717F6]" />
              <span>Analysis Methodology</span>
            </div>
            <div className="space-y-1.5">
              {project.analysisMethodology.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#0E0B16] border border-[#4717F6]/25 flex items-start gap-2 text-xs text-[#E7DFDD]/90">
                  <span className="text-[#4717F6] font-mono font-bold text-[10px] shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#E7DFDD]">
              <TrendingUp className="w-3.5 h-3.5 text-[#A239CA]" />
              <span>Key Analytical Insights</span>
            </div>
            <div className="space-y-1.5">
              {project.keyInsights.map((insight, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#181228] border border-[#4717F6]/25 flex items-start gap-2.5 text-xs text-[#E7DFDD]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#A239CA] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Recommendations */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#E7DFDD]">
              <Lightbulb className="w-3.5 h-3.5 text-[#4717F6]" />
              <span>Strategic Business Recommendations</span>
            </div>
            <div className="space-y-1.5">
              {project.businessRecommendations.map((rec, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#181228] border border-[#4717F6]/25 flex items-start gap-2.5 text-xs text-[#E7DFDD]">
                  <span className="text-[#A239CA] font-bold shrink-0">→</span>
                  <span className="leading-relaxed">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="pt-2">
            <span className="text-[10px] font-mono text-[#A99F9D] block mb-1.5 uppercase">TECHNOLOGIES:</span>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded bg-[#181228] border border-[#4717F6]/30 text-[11px] font-mono text-[#E7DFDD]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-[#4717F6]/30 bg-[#0E0B16] flex items-center justify-between gap-3">
          <span className="text-xs text-[#A99F9D]">
            Repository available on GitHub
          </span>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-[#181228] border border-[#4717F6]/30 hover:border-[#A239CA] text-[#E7DFDD] text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Code</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#4717F6] hover:bg-[#A239CA] border border-[#4717F6] hover:border-[#A239CA] text-[#E7DFDD] text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-jewel-sm"
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