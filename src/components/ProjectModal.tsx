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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#0B0B0B] border border-[#242424] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#242424] flex items-start justify-between gap-4 bg-[#050505]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 bg-[#C81024] text-white">
                {project.category}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border border-[#242424] text-[#A1A1AA]">
                {project.status}
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl text-white tracking-wide">
              {project.title}
            </h2>
            <p className="text-xs text-[#A1A1AA] mt-1 font-sans">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 border border-[#242424] hover:border-[#C81024] text-[#A1A1AA] hover:text-white transition-colors shrink-0 bg-[#0B0B0B]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto font-sans">
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metricsSummary.map((metric, mIdx) => (
              <div key={mIdx} className="p-4 bg-[#050505] border border-[#242424] text-center">
                <span className="text-[10px] font-mono text-[#A1A1AA] block mb-1 uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="font-display text-2xl text-[#C81024] font-bold">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Business Problem & Dataset */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-[#050505] border border-[#242424] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C81024] uppercase tracking-wider">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>BUSINESS PROBLEM</span>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {project.businessProblem}
              </p>
            </div>

            <div className="p-5 bg-[#050505] border border-[#242424] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FFFFFF] uppercase tracking-wider">
                <Database className="w-3.5 h-3.5 text-[#C81024]" />
                <span>DATASET DETAILS</span>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {project.datasetInfo}
              </p>
            </div>
          </div>

          {/* Data Cleaning Approach */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5 text-[#C81024]" />
              <span>Data Cleaning &amp; Preparation</span>
            </div>
            <div className="space-y-1.5">
              {project.dataCleaningApproach.map((item, idx) => (
                <div key={idx} className="p-3 bg-[#050505] border border-[#242424] flex items-start gap-2.5 text-xs text-[#A1A1AA]">
                  <span className="text-[#C81024] font-mono font-bold text-[11px] shrink-0">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-[#C81024]" />
              <span>Analytical Methodology</span>
            </div>
            <div className="space-y-1.5">
              {project.analysisMethodology.map((item, idx) => (
                <div key={idx} className="p-3 bg-[#050505] border border-[#242424] flex items-start gap-2.5 text-xs text-[#A1A1AA]">
                  <span className="text-[#C81024] font-mono font-bold text-[11px] shrink-0">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5 text-[#C81024]" />
              <span>Key Analytical Insights</span>
            </div>
            <div className="space-y-1.5">
              {project.keyInsights.map((insight, idx) => (
                <div key={idx} className="p-3.5 bg-[#050505] border border-[#242424] flex items-start gap-2.5 text-xs text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C81024] shrink-0 mt-0.5" />
                  <span className="leading-relaxed text-[#D4D4D8]">{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Recommendations */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-wider">
              <Lightbulb className="w-3.5 h-3.5 text-[#C81024]" />
              <span>Actionable Recommendations</span>
            </div>
            <div className="space-y-1.5">
              {project.businessRecommendations.map((rec, idx) => (
                <div key={idx} className="p-3.5 bg-[#050505] border border-[#242424] flex items-start gap-2.5 text-xs text-white">
                  <span className="text-[#C81024] font-bold shrink-0">→</span>
                  <span className="leading-relaxed text-[#D4D4D8]">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="pt-2">
            <span className="text-[10px] font-mono text-[#71717A] block mb-2 uppercase tracking-wider">
              TECHNOLOGIES USED:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#050505] border border-[#242424] text-xs font-mono text-white"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-[#242424] bg-[#050505] flex items-center justify-between gap-4">
          <span className="text-xs font-mono text-[#A1A1AA]">
            GitHub Repository Verified
          </span>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-[#242424] hover:border-[#C81024] text-xs font-mono tracking-wider text-white flex items-center gap-2 transition-colors bg-[#0B0B0B]"
            >
              <Github className="w-3.5 h-3.5 text-[#C81024]" />
              <span>VIEW REPO</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#C81024] hover:bg-[#E31B32] text-xs font-mono tracking-wider text-white font-bold flex items-center gap-2 transition-colors"
              >
                <span>LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
