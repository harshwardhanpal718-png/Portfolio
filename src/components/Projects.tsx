import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-white/[0.06] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00f2fe]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#7300ff]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#00f2fe] text-xs font-mono uppercase tracking-wider mb-3">
            <span>✦</span>
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00f2fe] via-[#7300ff] to-[#ec38bc] mt-3 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative aspect-video w-full bg-[#03001e] overflow-hidden border-b border-white/[0.08]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#03001e]/85 border border-white/[0.1] text-[#00f2fe] backdrop-blur-md">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.08] text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-[#00f2fe] transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4 font-sans">
                    {project.businessProblem}
                  </p>

                  {/* Quick Metric Snapshot */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[11px] font-mono">
                    {project.metricsSummary.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx}>
                        <span className="text-slate-400 block text-[10px] truncate">{m.label}</span>
                        <span className="text-white font-bold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-white/[0.06] mt-4">
                <button
                  onClick={() => setActiveProject(project)}
                  className="px-3.5 py-1.5 rounded-xl btn-glass text-xs font-semibold text-white hover:text-[#00f2fe] flex items-center gap-1.5 transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:border-[#ec38bc]/40 transition-colors"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl btn-gradient text-white transition-opacity"
                      title="Live Interactive Demo"
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
