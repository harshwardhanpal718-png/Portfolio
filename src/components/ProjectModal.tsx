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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FAF7F2] rounded-[2rem] border border-[#EBE5DC] shadow-soft-lg overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-[#EBE5DC] flex items-start justify-between gap-4 bg-white">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#E8F1E8] text-emerald-900 border border-[#DCE9DF]">
                {project.category}
              </span>
              <span className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-[#EBE5DC] text-[#62616A] bg-[#FAF7F2]">
                {project.status}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#171923]">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#62616A] mt-1 font-sans">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full border border-[#EBE5DC] hover:border-[#171923] text-[#62616A] hover:text-[#171923] transition-colors shrink-0 bg-[#FAF7F2]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto font-sans">

          {/* Project Dashboard Screenshot Preview */}
          {project.image && (
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#EBE5DC] shadow-soft-sm bg-[#171923] group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-full bg-[#171923]/90 hover:bg-black text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-xs transition-colors shadow-soft"
                >
                  <span>Launch Live War Room</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A98468]" />
                </a>
              )}
            </div>
          )}

          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metricsSummary.map((metric, mIdx) => (
              <div key={mIdx} className="p-4 rounded-2xl bg-white border border-[#EBE5DC] text-center shadow-card">
                <span className="text-[10px] font-medium text-[#62616A] block mb-1 uppercase tracking-wider">
                  {metric.label}
                </span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-[#171923]">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>

          {/* Business Problem & Dataset Profile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#EBE5DC] space-y-2 shadow-card">
              <div className="flex items-center gap-2 text-xs font-bold text-[#A98468] uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>BUSINESS CONTEXT</span>
              </div>
              <p className="text-xs text-[#62616A] leading-relaxed">
                {project.businessProblem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#EBE5DC] space-y-2 shadow-card">
              <div className="flex items-center gap-2 text-xs font-bold text-[#A98468] uppercase tracking-wider">
                <Database className="w-4 h-4" />
                <span>DATASET PROFILE</span>
              </div>
              <p className="text-xs text-[#62616A] leading-relaxed">
                {project.datasetInfo}
              </p>
            </div>
          </div>

          {/* Data Cleaning & Preparation */}
          <div className="p-5 rounded-2xl bg-white border border-[#EBE5DC] space-y-3 shadow-card">
            <div className="flex items-center gap-2 text-xs font-bold text-[#171923] uppercase tracking-wider">
              <Filter className="w-4 h-4 text-[#A98468]" />
              <span>DATA CLEANING &amp; PREPARATION PIPELINE</span>
            </div>
            <ul className="space-y-2 text-xs text-[#62616A]">
              {project.dataCleaningApproach.map((step, sIdx) => (
                <li key={sIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Analysis Methodology */}
          <div className="p-5 rounded-2xl bg-white border border-[#EBE5DC] space-y-3 shadow-card">
            <div className="flex items-center gap-2 text-xs font-bold text-[#171923] uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#A98468]" />
              <span>ANALYTICAL METHODOLOGY &amp; MODELING</span>
            </div>
            <ul className="space-y-2 text-xs text-[#62616A]">
              {project.analysisMethodology.map((meth, mIdx) => (
                <li key={mIdx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A98468] shrink-0 mt-1.5" />
                  <span>{meth}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Findings & Recommendations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#E8F1E8] border border-[#DCE9DF] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-950 uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-emerald-700" />
                <span>KEY ANALYTICAL FINDINGS</span>
              </div>
              <ul className="space-y-2 text-xs text-[#171923]">
                {project.keyInsights.map((insight, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold shrink-0">→</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#F9EBDD] border border-[#EBE5DC] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8E6347] uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-[#A98468]" />
                <span>BUSINESS RECOMMENDATIONS</span>
              </div>
              <ul className="space-y-2 text-xs text-[#171923]">
                {project.businessRecommendations.map((rec, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <span className="text-[#A98468] font-bold shrink-0">✓</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="pt-2">
            <span className="text-[10px] font-semibold text-[#62616A] uppercase tracking-wider block mb-2">
              TOOLS &amp; PLATFORMS:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-full bg-white border border-[#EBE5DC] text-xs font-medium text-[#171923]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Links */}
        <div className="p-6 border-t border-[#EBE5DC] bg-white flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cream-border px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View GitHub Repo</span>
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5"
              >
                <span>Live Dashboard</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-medium text-[#62616A] hover:text-[#171923] transition-colors"
          >
            Close (Esc)
          </button>
        </div>

      </div>
    </div>
  );
};
