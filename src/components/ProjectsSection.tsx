"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="flex min-h-screen flex-col justify-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-sm font-medium tracking-widest text-rose uppercase"
        >
          Portfolio
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-12 text-3xl font-bold text-ink sm:text-4xl"
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col rounded-2xl border border-charcoal/10 bg-surface p-6 shadow-sm shadow-charcoal/5 transition-all hover:border-rose/40 hover:shadow-lg hover:shadow-rose/15"
            >
              <h3 className="mb-3 text-xl font-semibold text-ink group-hover:text-rose transition-colors">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-rose-soft/40 px-2.5 py-1 text-xs text-charcoal"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-auto flex items-center gap-1.5 text-sm font-medium text-rose transition-colors group-hover:text-charcoal">
                View Project →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
