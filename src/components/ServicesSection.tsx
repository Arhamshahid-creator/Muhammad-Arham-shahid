import React from 'react';
import { servicesData } from '../data/portfolioData';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="w-[min(1150px,92%)] mx-auto py-24 sm:py-32 relative">
      
      {/* Section Title */}
      <div className="mb-14 reveal">
        <small className="text-[#888899] font-mono text-xs tracking-[2px] uppercase block mb-2 font-medium">
          What I Do
        </small>
        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-[#F5F5F7]">
          Services.
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {servicesData.map((service, index) => {
          // Alternating reveals
          const revealClass =
            index === 0
              ? 'reveal'
              : index === 1
              ? 'reveal up'
              : index === 2
              ? 'reveal up'
              : 'reveal right';

          return (
            <div
              key={service.id}
              className={`p-7 sm:p-9 rounded-[24px] border border-white/8 bg-white/[0.025] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-400 hover:-translate-y-2.5 flex flex-col justify-between group ${revealClass}`}
            >
              <div>
                <div className="text-3xl text-[#E5C158] mb-6 select-none font-mono">
                  {service.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#F5F5F7] mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-[#888899] text-sm leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/6">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-[#777788] border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
