import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Github, ArrowRight, Eye, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'Power BI', 'Python', 'SQL', 'Excel'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => 
        p.category === selectedCategory || p.tools.some(t => t.toLowerCase().includes(selectedCategory.toLowerCase()))
      );

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-[#0A0E17]/80 border-t border-white/5">
      {/* Background glow elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practical Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-muted text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Real-world data analytics projects analyzing revenue velocity, customer behavior, retention factors, and catalog dynamics.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                  : 'bg-dark-card border border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isPlanned = project.status === 'Planned';
            const isInProgress = project.status === 'In Progress';

            return (
              <div
                key={project.id}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative aspect-video w-full overflow-hidden bg-dark-bg border-b border-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Overlay status badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border backdrop-blur-md shadow-sm ${
                        isPlanned
                          ? 'bg-amber-950/70 border-amber-500/40 text-amber-300'
                          : isInProgress
                          ? 'bg-purple-950/70 border-purple-500/40 text-purple-300'
                          : 'bg-emerald-950/70 border-emerald-500/40 text-emerald-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Quick view button overlay */}
                    <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                      <button
                        onClick={() => setActiveProject(project)}
                        className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-600/30 transform translate-y-2 group-hover:translate-y-0 transition-transform"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Case Study</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6">
                    {/* Category & Tools Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tools.slice(0, 3).map((tool, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-dark-bg border border-white/5 text-blue-300"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-dark-bg border border-white/5 text-slate-400">
                          +{project.tools.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-lg font-bold font-heading text-white group-hover:text-blue-400 transition-colors line-clamp-1 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-muted line-clamp-2 mb-4 leading-relaxed">
                      {project.subtitle}
                    </p>

                    {/* Mini Metric highlights */}
                    <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-dark-bg/50 border border-white/5 mb-4">
                      {project.metricsSummary.slice(0, 2).map((metric, mIdx) => (
                        <div key={mIdx}>
                          <span className="text-[10px] font-mono text-slate-500 block truncate">
                            {metric.label}
                          </span>
                          <span className="text-xs font-bold font-heading text-slate-200">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 sm:p-6 pt-0 border-t border-white/5 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5 group-hover:gap-2 transition-all"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-dark-card border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 transition-colors"
                      title="GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400 hover:text-white hover:bg-blue-600 transition-colors"
                        title="Interactive View"
                        aria-label="Interactive View"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Detail Modal */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />

      </div>
    </section>
  );
};
