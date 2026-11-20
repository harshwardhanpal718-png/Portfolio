import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Top 3 featured, expandable to full library
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-[#F5F0E9] relative overflow-hidden border-t border-[#EBE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#EBE5DC]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A98468] mb-2 block font-sans">
              FEATURED WORK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#171923] tracking-tight">
              Turning Data Into <span className="italic font-serif text-[#A98468]">Impact</span>.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-cream-border px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-card"
            >
              <span>{showAll ? 'Show Top 3 Projects' : 'View All Projects'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A98468]" />
            </button>
          </div>
        </div>

        {/* 3-Column Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="card-editorial p-5 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Thumbnail Preview Container */}
                <div
                  className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#EBE5DC] mb-5 cursor-pointer"
                  onClick={() => setActiveProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Category Pill Overlaid on Image */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-[#EBE5DC] text-[10px] font-bold uppercase tracking-wider text-[#171923] shadow-card">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="btn-dark px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-soft">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Title & Problem Summary */}
                <h3 
                  onClick={() => setActiveProject(project)}
                  className="font-serif text-xl font-bold text-[#171923] tracking-tight group-hover:text-[#A98468] transition-colors mb-2 cursor-pointer"
                >
                  {project.title}
                </h3>
                <p className="text-xs text-[#62616A] leading-relaxed line-clamp-2 mb-5 font-sans">
                  {project.subtitle}
                </p>

                {/* Tools Used Tags */}
                <div className="mb-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#EBE5DC] text-[11px] font-medium text-[#62616A] font-sans"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Outcome Metric */}
                {project.metricsSummary && project.metricsSummary.length > 0 && (
                  <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#EBE5DC] flex items-center justify-between text-xs mb-5">
                    <span className="text-[#62616A] font-medium">
                      {project.metricsSummary[0]?.label}:
                    </span>
                    <span className="font-serif font-bold text-[#171923] text-sm">
                      {project.metricsSummary[0]?.value}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Footer: View Project + Links */}
              <div className="pt-4 border-t border-[#EBE5DC] flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-xs font-semibold text-[#171923] hover:text-[#A98468] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A98468]" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#EBE5DC] hover:border-[#A98468] flex items-center justify-center text-[#171923] hover:text-[#A98468] transition-all"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#EBE5DC] hover:border-[#A98468] flex items-center justify-center text-[#171923] hover:text-[#A98468] transition-all"
                      title="Live Dashboard Preview"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
