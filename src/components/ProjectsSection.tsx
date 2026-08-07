import React from 'react';
import { Project } from '../types';
import { Layers, CheckCircle2, ExternalLink, Github } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono font-semibold">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            <span>ARSGROUP Projects Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Key Projects & Web Solutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            High-performance Progressive Web Apps and utility solutions built with modern web standards and clean UI design.
          </p>
        </div>

        {/* Visible Boxed Project Cards Grid (No Picture Banners) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Card Header Box (Visible Name, Badge & URL) */}
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                        {project.name}
                      </h3>
                      <p className="text-xs font-mono font-semibold text-cyan-700">{project.tagline}</p>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold shrink-0">
                      {project.badge}
                    </span>
                  </div>

                  {/* Concise 1-2 line description */}
                  <p className="text-slate-700 text-sm leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Direct Visible URL tag */}
                  {project.liveUrl && (
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs font-mono text-emerald-800 flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Live URL:</span>
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="font-bold text-emerald-700 hover:underline truncate ml-2">
                        {project.liveUrl}
                      </a>
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-white text-slate-700 text-xs font-mono border border-slate-200 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Direct Link Buttons */}
                <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm shadow-emerald-600/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open {project.name}</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="py-3 px-4 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-800 border border-cyan-200 transition-colors cursor-pointer text-xs font-mono font-semibold flex items-center gap-2"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4 text-cyan-700" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
