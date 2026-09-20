import React from 'react';
import { ShowcaseProject } from '../data/portfolioData';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

interface LargeProjectsSectionProps {
  projects: ShowcaseProject[];
}

export const LargeProjectsSection: React.FC<LargeProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="work" className="w-[min(1150px,92%)] mx-auto py-24 sm:py-32 relative">
      
      {/* Section Header */}
      <div className="mb-14 reveal">
        <small className="text-[#888899] font-mono text-xs tracking-[2px] uppercase block mb-2 font-medium">
          Selected Work
        </small>
        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-[#F5F5F7]">
          Projects.
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 sm:gap-16">
        {projects.map((project, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <article
              key={project.id}
              className={`project-card-glass rounded-[28px] sm:rounded-[34px] p-5 sm:p-7 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center overflow-hidden group ${
                isEven ? 'reveal right' : 'reveal'
              }`}
            >
              {/* Project Image Container */}
              <div
                className={`lg:col-span-7 h-[280px] sm:h-[380px] lg:h-[420px] rounded-[20px] sm:rounded-[24px] overflow-hidden bg-[#111] relative ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Subtle Glass Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090C]/80 via-transparent to-transparent opacity-60"></div>
                
                {/* Metrics Badge */}
                {project.metrics && (
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#08090C]/85 border border-white/10 backdrop-blur-md text-[11px] font-mono text-[#E5C158] flex items-center gap-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E5C158] shadow-[0_0_6px_#E5C158]"></span>
                    <span>{project.metrics.value}</span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div
                className={`lg:col-span-5 p-2 sm:p-4 flex flex-col justify-between ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div>
                  <span className="text-[#888899] font-mono text-xs uppercase tracking-wider block mb-3">
                    {project.number}
                  </span>

                  <h3 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[42px] tracking-tight text-[#F5F5F7] mb-3 group-hover:text-[#E5C158] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[#9999AA] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-[#AAA] border border-white/8"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Direct Live Link Action */}
                <div className="flex items-center gap-4 pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-heading font-medium text-white border-b border-[#555] hover:border-[#E5C158] hover:text-[#E5C158] pb-1 transition-all group/link"
                  >
                    <span>Explore Project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-[#888] hover:text-white border border-white/8 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

    </section>
  );
};
