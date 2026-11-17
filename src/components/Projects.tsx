import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-16 md:py-20 border-t border-[#4717F6]/25 bg-[#0E0B16] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-10">
          <span className="text-xs font-mono text-[#A239CA] uppercase tracking-wider block mb-1">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#E7DFDD] tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-[#4717F6] to-[#A239CA] mt-2 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-[#151022] border border-[#4717F6]/30 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#A239CA] hover:bg-[#181228] transition-all duration-300 shadow-sm hover:shadow-fuschia-glow"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative aspect-video w-full bg-[#0E0B16] overflow-hidden border-b border-[#4717F6]/25">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#0E0B16]/90 border border-[#A239CA]/50 text-[#E7DFDD] backdrop-blur-sm">
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
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181228] border border-[#4717F6]/35 text-[#A239CA]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold font-heading text-[#E7DFDD] group-hover:text-[#A239CA] transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#A99F9D] leading-relaxed line-clamp-3 mb-4 font-sans">
                    {project.businessProblem}
                  </p>

                  {/* Quick Metric Snapshot */}
                  <div className="grid grid-cols-2 gap-2 p-2.5 rounded-lg bg-[#0E0B16] border border-[#4717F6]/25 text-[11px] font-mono">
                    {project.metricsSummary.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx}>
                        <span className="text-[#A99F9D]/75 block text-[10px] truncate">{m.label}</span>
                        <span className="text-[#E7DFDD] font-semibold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 flex items-center justify-between gap-3 border-t border-[#4717F6]/25 mt-4">
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-xs font-semibold text-[#A239CA] hover:text-[#E7DFDD] flex items-center gap-1 transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[#181228] border border-[#4717F6]/30 text-[#A99F9D] hover:text-[#E7DFDD] hover:border-[#A239CA] transition-colors"
                    title="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#4717F6] border border-[#4717F6] text-[#E7DFDD] hover:bg-[#A239CA] hover:border-[#A239CA] transition-colors"
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