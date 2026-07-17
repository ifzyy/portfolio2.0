import React from 'react';
import { ExternalLink, Github, Lock } from 'lucide-react';
import { projects } from '../data/portfolio';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const Portfolio = () => {
  return (
    <section id="work" className="section bg-black border-t border-white/5">
      <div className="max-w-content mx-auto px-6">
        <SectionHeading
          eyebrow="More Work"
          title="Beyond the flagship."
          subtitle="A range of products and interfaces I've shipped for clients around the world."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const hasSource = project.sourceUrl && project.sourceUrl !== 'private';
            return (
              <Reveal key={project.id} delay={(index % 2) * 0.08}>
                <article className="card group h-full overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      loading="lazy"
                      decoding="async"
                      className="h-60 w-full object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-4 left-4 font-semibold text-sm text-ink/90 mix-blend-difference tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-semibold text-ink transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-muted leading-relaxed">{project.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center gap-5 text-sm">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium text-accent transition-colors hover:text-white"
                      >
                        View live
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      {hasSource ? (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-medium text-muted transition-colors hover:text-ink"
                        >
                          Source
                          <Github className="h-4 w-4" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-muted/70">
                          Private
                          <Lock className="h-3.5 w-3.5" />
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
