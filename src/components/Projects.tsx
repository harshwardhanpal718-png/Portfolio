import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ProjectModal } from './ProjectModal';
import { Project } from '../types';
import { ArrowUpRight, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Strictly 3 projects as required by Master Prompt
  const showcaseProjects = projectsData.slice(0, 3);

  return (
    <section id="projects" className="py-24 border-t border-[#242424] bg-[#050505] relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#C81024]/08 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Subheading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#242424]">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#C81024] uppercase block mb-2 font-bold">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase">
              SELECTED <span className="text-[#C81024]">PROJECTS</span>
            </h2>
          </div>
          <p className="text-sm font-mono text-[#A1A1AA] max-w-md">
            Real-world analytical case studies across business intelligence, streaming diagnostics, and customer segmentation.
          </p>
        </div>

        {/* 3 Horizontal Project Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseProjects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-[#0B0B0B] border border-[#242424] hover:border-[#C81024] transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-2xl"
            >
              <div>
                {/* Top Number & Category Header */}
                <div className="p-6 pb-4 flex items-center justify-between border-b border-[#242424]">
                  <span className="font-display text-3xl sm:text-4xl text-[#C81024]">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono tracking-wider text-[#A1A1AA] uppercase border border-[#242424] px-2.5 py-0.5 bg-[#050505]">
                    {project.category}
                  </span>
                </div>

                {/* Project Thumbnail / Dashboard Preview */}
                <div 
                  className="relative aspect-[16/10] w-full bg-[#050505] overflow-hidden border-b border-[#242424] cursor-pointer"
                  onClick={() => setActiveProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60" />
                  
                  {/* Hover Overlay Indicator */}
                  <div className="absolute inset-0 bg-[#C81024]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-[#050505] border border-[#C81024] text-white font-mono text-xs font-bold tracking-wider flex items-center gap-1.5 shadow-xl">
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4 text-[#C81024]" />
                    </span>
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 
                    onClick={() => setActiveProject(project)}
                    className="font-display text-2xl sm:text-3xl text-white tracking-wide group-hover:text-[#C81024] transition-colors mb-2 cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Short Subtitle */}
                  <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-2 mb-6 font-sans">
                    {project.subtitle}
                  </p>

                  {/* Technology Stack Tags */}
                  <div className="pt-2 border-t border-[#1C1C1C]">
                    <span className="text-[10px] font-mono text-[#71717A] uppercase block mb-2 tracking-wider">
                      TECHNOLOGY STACK:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2 py-0.5 bg-[#050505] border border-[#242424] text-[#A1A1AA]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Small Arrow Interaction & View Project */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#1C1C1C] mt-4">
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-xs font-mono font-bold tracking-wider text-white group-hover:text-[#C81024] flex items-center gap-1 transition-colors hover-red-line py-1"
                >
                  <span>VIEW PROJECT</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C81024] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#242424] hover:border-[#C81024] text-[#A1A1AA] hover:text-white transition-colors bg-[#050505]"
                  title="GitHub Repository"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
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
