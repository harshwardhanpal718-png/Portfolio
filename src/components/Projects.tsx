import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 md:py-20 border-t border-slate-200 bg-[#F8FAFC] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-blue-600 uppercase tracking-wider block mb-1">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-[#2563EB] mt-2 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-blue-300 hover:shadow-premium-lg transition-all duration-300"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative aspect-video w-full bg-slate-100 overflow-hidden border-b border-slate-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-white/95 border border-slate-200 text-slate-800 backdrop-blur-sm shadow-xs">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 border border-blue-100 text-blue-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold font-heading text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4 font-sans">
                    {project.businessProblem}
                  </p>

                  {/* Quick Metric Snapshot */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px] font-mono">
                    {project.metricsSummary.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx}>
                        <span className="text-slate-500 block text-[10px] truncate">{m.label}</span>
                        <span className="text-slate-900 font-semibold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-4">
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-blue-400 transition-colors shadow-2xs"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors shadow-2xs"
                      title="Demo"
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