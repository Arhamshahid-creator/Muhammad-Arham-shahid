import React from 'react';
import { Project } from '../types';
import { Layers, ExternalLink, Github, Smartphone, Zap } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono font-semibold">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>Production Work & Web Apps</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects & Progressive Web Apps
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Engineered with modern offline-first web technologies, responsive layouts, and zero-config cloud deployments under <strong className="text-slate-900">ARSGROUP</strong>.
          </p>
        </div>

        {/* 2-Column Responsive Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                className="bg-slate-50 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-lg hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Visual Image / Screenshot Preview Card */}
                  {project.image && (
                    <div className="relative w-full h-48 sm:h-56 bg-slate-900 overflow-hidden border-b border-slate-200 flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={`${project.name} preview`}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Gradient overlay for contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

                      {/* Floating Badge on Image */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 backdrop-blur-xs text-white text-[11px] font-mono font-bold shadow-xs">
                          {project.badge}
                        </span>
                        {project.liveUrl && (
                          <span className="text-[11px] font-mono text-slate-200 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                            Live on Vercel
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs font-mono font-bold text-cyan-700">{project.tagline}</p>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    {project.techStack && project.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-white text-slate-700 text-xs font-mono border border-slate-200 font-medium shadow-2xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 sm:p-7 pt-0 flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm shadow-emerald-600/20"
                    >
                      <span>Launch {project.name}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 transition-colors cursor-pointer text-xs font-mono font-semibold flex items-center gap-2 shadow-2xs"
                      title="View GitHub Source"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
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
