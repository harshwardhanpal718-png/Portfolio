import React, { useEffect } from 'react';
import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  Github, 
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

  const isPlanned = project.status === 'Planned';
  const isInProgress = project.status === 'In Progress';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-dark-card border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Glow bar */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${project.accentGradient}`} />

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between gap-4 bg-[#0D1322]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                {project.category}
              </span>

              <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                isPlanned 
                  ? 'bg-amber-950/30 border-amber-500/30 text-amber-300'
                  : isInProgress
                  ? 'bg-purple-950/30 border-purple-500/30 text-purple-300'
                  : 'bg-emerald-950/30 border-emerald-500/30 text-emerald-300'
              }`}>
                {project.status}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              {project.title}
            </h2>
            <p className="text-sm text-slate-muted mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Transparency Notice if Planned/In Progress */}
        {(isPlanned || isInProgress) && (
          <div className="mx-6 sm:mx-8 mt-6 p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 text-xs text-amber-200/90 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-amber-300">Project Transparency Note:</span>
              <p className="mt-0.5 text-amber-200/80">
                This project represents an active analytical architecture and planned methodology. Real-world insights and results will be populated as research concludes.
              </p>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          
          {/* Project Screenshot / Visual Mockup */}
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-dark-bg">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover max-h-[380px]"
            />
          </div>

          {/* Key Metrics Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metricsSummary.map((metric, mIdx) => (
              <div key={mIdx} className="p-3.5 rounded-xl bg-dark-bg/60 border border-white/5 text-center">
                <span className="text-[11px] font-mono text-slate-muted block mb-1">
                  {metric.label}
                </span>
                <span className="text-lg sm:text-xl font-bold font-heading text-white">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Business Problem & Dataset Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-dark-bg/40 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-rose-400">
                <AlertCircle className="w-4 h-4" />
                <span>BUSINESS PROBLEM</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {project.businessProblem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-dark-bg/40 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-400">
                <Database className="w-4 h-4" />
                <span>DATASET INFORMATION</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {project.datasetInfo}
              </p>
            </div>
          </div>

          {/* Data Cleaning Approach */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-heading font-bold text-white">
              <Filter className="w-4 h-4 text-cyan-400" />
              <span>Data Cleaning &amp; Transformation Approach</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.dataCleaningApproach.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-dark-bg/50 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Analysis Methodology */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-heading font-bold text-white">
              <Layers className="w-4 h-4 text-purple-400" />
              <span>Analysis Methodology &amp; Analytical Framework</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.analysisMethodology.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-dark-bg/50 border border-white/5 flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center font-mono font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-heading font-bold text-white">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Key Analytical Insights</span>
            </div>
            <div className="space-y-2">
              {project.keyInsights.map((insight, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-emerald-950/15 border border-emerald-500/20 flex items-start gap-3 text-xs sm:text-sm text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{insight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Recommendations */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-heading font-bold text-white">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              <span>Strategic Business Recommendations</span>
            </div>
            <div className="space-y-2">
              {project.businessRecommendations.map((rec, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-amber-950/15 border border-amber-500/20 flex items-start gap-3 text-xs sm:text-sm text-amber-200">
                  <span className="text-amber-400 font-bold shrink-0">→</span>
                  <span className="leading-relaxed">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="pt-2">
            <span className="text-xs font-mono text-slate-muted block mb-2">TECHNOLOGY STACK:</span>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-dark-bg border border-white/10 text-xs font-mono text-blue-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-white/10 bg-[#0B101D] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Case study repository documented on GitHub
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <Github className="w-4 h-4 text-slate-300" />
              <span>View Repository</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                onClick={() => {
                  if (project.liveDemoUrl?.startsWith('#')) {
                    onClose();
                  }
                }}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Interactive View</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
