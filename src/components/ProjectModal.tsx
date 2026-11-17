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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#121724] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-white/[0.08] flex items-start justify-between gap-4 bg-[#0A0D14]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#182032] border border-white/10 text-[#60A5FA]">
                {project.category}
              </span>
              <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#182032] border border-white/10 text-[#F8FAFC]">
                {project.status}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#F8FAFC]">
              {project.title}
            </h2>
            <p className="text-xs text-[#94A3B8] mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#182032] hover:bg-[#3B82F6] text-[#94A3B8] hover:text-white border border-white/10 transition-colors shrink-0"
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
              <div key={mIdx} className="p-3 rounded-xl bg-[#0A0D14] border border-white/[0.06] text-center">
                <span className="text-[10px] font-mono text-[#94A3B8] block mb-1">
                  {metric.label}
                </span>
                <span className="text-base sm:text-lg font-bold font-heading text-[#F8FAFC]">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Business Problem & Dataset */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#0A0D14] border border-white/[0.06] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#60A5FA]">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>BUSINESS PROBLEM</span>
              </div>
              <p className="text-xs text-[#F8FAFC]/90 leading-relaxed">
                {project.businessProblem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0A0D14] border border-white/[0.06] space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#60A5FA]">
                <Database className="w-3.5 h-3.5" />
                <span>DATASET DETAILS</span>
              </div>
              <p className="text-xs text-[#F8FAFC]/90 leading-relaxed">
                {project.datasetInfo}
              </p>
            </div>
          </div>

          {/* Data Cleaning Approach */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#F8FAFC]">
              <Filter className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Data Cleaning &amp; Transformation</span>
            </div>
            <div className="space-y-1.5">
              {project.dataCleaningApproach.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#0A0D14] border border-white/[0.06] flex items-start gap-2 text-xs text-[#F8FAFC]/90">
                  <span className="text-[#3B82F6] font-mono font-bold text-[10px] shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#F8FAFC]">
              <Layers className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Analysis Methodology</span>
            </div>
            <div className="space-y-1.5">
              {project.analysisMethodology.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#0A0D14] border border-white/[0.06] flex items-start gap-2 text-xs text-[#F8FAFC]/90">
                  <span className="text-[#60A5FA] font-mono font-bold text-[10px] shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#F8FAFC]">
              <TrendingUp className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Key Analytical Insights</span>
            </div>
            <div className="space-y-1.5">
              {project.keyInsights.map((insight, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#0A0D14] border border-white/[0.06] flex items-start gap-2.5 text-xs text-[#F8FAFC]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Recommendations */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-[#F8FAFC]">
              <Lightbulb className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>Strategic Business Recommendations</span>
            </div>
            <div className="space-y-1.5">
              {project.businessRecommendations.map((rec, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#0A0D14] border border-white/[0.06] flex items-start gap-2.5 text-xs text-[#F8FAFC]">
                  <span className="text-[#3B82F6] font-bold shrink-0">→</span>
                  <span className="leading-relaxed">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="pt-2">
            <span className="text-[10px] font-mono text-[#94A3B8] block mb-1.5 uppercase">TECHNOLOGIES:</span>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded bg-[#182032] border border-white/10 text-[11px] font-mono text-[#F8FAFC]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-white/[0.08] bg-[#0A0D14] flex items-center justify-between gap-3">
          <span className="text-xs text-[#94A3B8]">
            Source repository available on GitHub
          </span>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-[#182032] border border-white/10 hover:border-[#3B82F6]/50 text-[#F8FAFC] text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Code</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-accent-sm"
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