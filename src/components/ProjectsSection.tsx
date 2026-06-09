"use client";

import { Fragment } from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { BlurReveal } from "@/components/BlurReveal";
import { SectionHeader } from "@/components/SectionHeader";

/** Number of projects shown in full focus before the rest blur in on scroll. */
const VISIBLE_COUNT = 4;

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col justify-center px-5 py-5 sm:px-6 sm:py-12"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeader
          index="03"
          kicker="Portfolio"
          title={
            <>
              Featured <span className="text-gradient">Projects</span>
            </>
          }
          subtitle={`A selection of ${projects.length} things I've designed, built and shipped.`}
        />

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-5">
          {projects.map((project, i) => {
            const card = (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="card group flex h-full flex-col overflow-hidden p-4 sm:p-6"
              >
                {/* top edge accent that grows on hover */}
                <span className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-navy to-teal transition-[width] duration-500 group-hover:w-full" />

                <div className="mb-2 flex items-start justify-end gap-3 sm:mb-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-navy/10 bg-sky/30 text-navy transition duration-300 group-hover:rotate-45 group-hover:border-teal group-hover:bg-teal group-hover:text-white sm:h-9 sm:w-9">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="mb-2 text-[13px] font-semibold text-ink transition group-hover:text-navy xs:text-sm sm:text-lg">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-xs leading-relaxed text-muted xs:text-[13px] sm:text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag !text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            );

            // First batch is shown in full focus; the rest stay blurred/faded
            // until the user scrolls them into view.
            return (
              <Fragment key={project.id}>
                {i < VISIBLE_COUNT ? (
                  <Reveal direction="up" delay={(i % 2) * 0.08}>
                    {card}
                  </Reveal>
                ) : (
                  <BlurReveal delay={(i % 2) * 0.08}>{card}</BlurReveal>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
