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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#03001e]/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#03001e] border border-white/[0.1] rounded-3xl shadow-glass-card overflow-hidden my-8 backdrop-blur-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-white/[0.08] flex items-start justify-between gap-4 bg-white/[0.02]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300">
                {project.category}
              </span>
              <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe]">
                {project.status}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
              {project.title}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white border border-white/[0.08] transition-colors shrink-0"
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
              <div key={mIdx} className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center">
                <span className="text-[10px] font-mono text-slate-400 block mb-1">
                  {metric.label}
                </span>
                <span className="text-base sm:text-lg font-bold font-heading text-white">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Business Problem & Dataset */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ec38bc]">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>BUSINESS PROBLEM</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.businessProblem}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#00f2fe]">
                <Database className="w-3.5 h-3.5" />
                <span>DATASET DETAILS</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.datasetInfo}
              </p>
            </div>
          </div>

          {/* Data Cleaning Approach */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-white">
              <Filter className="w-3.5 h-3.5 text-[#00f2fe]" />
              <span>Data Cleaning &amp; Transformation</span>
            </div>
            <div className="space-y-1.5">
              {project.dataCleaningApproach.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="text-[#00f2fe] font-mono font-bold text-[10px] shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-white">
              <Layers className="w-3.5 h-3.5 text-[#ec38bc]" />
              <span>Analysis Methodology</span>
            </div>
            <div className="space-y-1.5">
              {project.analysisMethodology.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="text-[#ec38bc] font-mono font-bold text-[10px] shrink-0 mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-white">
              <TrendingUp className="w-3.5 h-3.5 text-[#7300ff]" />
              <span>Key Analytical Insights</span>
            </div>
            <div className="space-y-1.5">
              {project.keyInsights.map((insight, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Recommendations */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-heading font-bold text-white">
              <Lightbulb className="w-3.5 h-3.5 text-[#00f2fe]" />
              <span>Strategic Business Recommendations</span>
            </div>
            <div className="space-y-1.5">
              {project.businessRecommendations.map((rec, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5 text-xs text-slate-200">
                  <span className="text-[#ec38bc] font-bold shrink-0">→</span>
                  <span className="leading-relaxed">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="pt-2">
            <span className="text-[10px] font-mono text-slate-400 block mb-2 uppercase">TECHNOLOGIES USED:</span>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 border-t border-white/[0.08] bg-white/[0.02] flex items-center justify-between gap-3">
          <span className="text-xs text-slate-400">
            Source repository verified on GitHub
          </span>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl btn-glass text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Code</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl btn-gradient text-xs font-bold flex items-center gap-1.5 transition-opacity"
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
