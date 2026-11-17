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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-slate-200 flex items-start justify-between gap-4 bg-slate-50/80">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700">
                {project.category}
              </span>
              <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-800 shadow-2xs">
                {project.status}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900">
              {project.title}
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-800 border border-slate-200 transition-colors shrink-0 shadow-2xs"
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
              <div key={mIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                <span className="text-[10px] font-mono text-slate-500 block mb-1">
                  {metric.label}
                </span>
                <span className="text-base sm:text-lg font-bold font-heading text-slate-900">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Business Problem & Dataset */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-700">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>BUSINESS PROBLEM</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {project.businessProblem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-700">
                <Database className="w-3.5 h-3.5" />
                <span>DATASET DETAILS</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {project.datasetInfo}
              </p>
            </div>
          </div>

          {/* Data Cleaning Approach */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-slate-900">
              <Filter className="w-3.5 h-3.5 text-blue-600" />
              <span>Data Cleaning &amp; Transformation</span>
            </div>
            <div className="space-y-1.5">
              {project.dataCleaningApproach.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2 text-xs text-slate-700">
                  <span className="text-blue-600 font-mono font-bold text-[10px] shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-slate-900">
              <Layers className="w-3.5 h-3.5 text-blue-600" />
              <span>Analysis Methodology</span>
            </div>
            <div className="space-y-1.5">
              {project.analysisMethodology.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2 text-xs text-slate-700">
                  <span className="text-blue-600 font-mono font-bold text-[10px] shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-slate-900">
              <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
              <span>Key Analytical Insights</span>
            </div>
            <div className="space-y-1.5">
              {project.keyInsights.map((insight, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-blue-50/60 border border-blue-100 flex items-start gap-2.5 text-xs text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Recommendations */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-slate-900">
              <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
              <span>Strategic Business Recommendations</span>
            </div>
            <div className="space-y-1.5">
              {project.businessRecommendations.map((rec, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-800">
                  <span className="text-blue-600 font-bold shrink-0">→</span>
                  <span className="leading-relaxed">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="pt-2">
            <span className="text-[10px] font-mono text-slate-500 block mb-1.5 uppercase">TECHNOLOGIES:</span>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-slate-200 bg-slate-50/80 flex items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Source repository available on GitHub
          </span>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-white border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-slate-900 text-xs font-medium flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Code</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-accent-sm"
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