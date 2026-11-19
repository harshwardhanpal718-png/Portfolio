import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types';
import { Github, ExternalLink, ArrowRight, BarChart2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-white/[0.06] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#7C3AED]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#06B6D4] text-xs font-mono uppercase tracking-wider mb-3">
            <span>✦</span>
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Featured <span className="gradient-text">Projects.</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#06B6D4] via-[#7C3AED] to-[#F59E0B] mt-3 rounded-full" />
        </div>

        {/* Projects Grid (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative aspect-video w-full bg-[#06070D] overflow-hidden border-b border-white/[0.08]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#06070D]/90 border border-white/[0.1] text-[#06B6D4] backdrop-blur-md">
                      PROJECT 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#7C3AED]/20 border border-[#7C3AED]/40 text-[#d8b4fe] backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-[#94A3B8]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-[#06B6D4] transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Problem Statement Preview */}
                  <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-3 mb-5 font-sans">
                    {project.businessProblem}
                  </p>

                  {/* Key Metrics Snapshot */}
                  <div className="grid grid-cols-2 gap-2.5 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono">
                    {project.metricsSummary.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx}>
                        <span className="text-[#94A3B8] block text-[10px] truncate">{m.label}</span>
                        <span className="text-white font-bold text-xs">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 sm:p-7 pt-0 flex items-center justify-between gap-3 border-t border-white/[0.06] mt-4">
                <button
                  onClick={() => setActiveProject(project)}
                  className="px-4 py-2 rounded-xl btn-secondary text-xs font-semibold text-white hover:text-[#06B6D4] flex items-center gap-1.5 transition-colors"
                >
                  <BarChart2 className="w-3.5 h-3.5 text-[#06B6D4]" />
                  <span>Deep Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[#94A3B8] hover:text-white hover:border-[#7C3AED]/50 transition-colors"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl btn-primary text-white transition-opacity"
                      title="Live Interactive Demo / Notebook"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
};
