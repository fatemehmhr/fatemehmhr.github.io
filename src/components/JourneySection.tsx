"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export function JourneySection() {
  const { journey, stats, vision } = portfolioData;

  return (
    <section className="flex min-h-screen flex-col justify-center px-6 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2 text-sm font-medium tracking-widest text-rose uppercase"
        >
          My Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-3 text-3xl font-bold text-ink sm:text-4xl"
        >
          {journey.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-lg text-muted"
        >
          {journey.subtitle}
        </motion.p>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {journey.skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-2xl border border-charcoal/10 bg-surface p-8 shadow-sm shadow-charcoal/5 transition-shadow hover:border-rose/40 hover:shadow-lg hover:shadow-rose/15"
            >
              <span className="mb-4 block text-4xl">{skill.emoji}</span>
              <h3 className="mb-3 text-xl font-semibold text-ink">
                {skill.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {skill.items}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mb-20 grid grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-charcoal/10 bg-surface py-8 text-center shadow-sm shadow-charcoal/5"
            >
              <div className="mb-1 text-4xl font-bold bg-gradient-to-r from-rose to-charcoal bg-clip-text text-transparent sm:text-5xl">
                {stat.value}
              </div>
              <div className="text-sm text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-charcoal/10 bg-gradient-to-br from-rose-soft/40 via-surface to-rose/10 p-8 shadow-sm shadow-charcoal/5 sm:p-12"
        >
          <h2 className="mb-3 text-2xl font-bold text-ink sm:text-3xl">
            {vision.heading}
          </h2>
          <p className="mb-8 max-w-2xl text-muted">{vision.subheading}</p>

          <div className="mb-8 flex flex-wrap gap-3">
            {vision.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-rose/40 bg-rose/15 px-4 py-1.5 text-sm font-medium text-charcoal"
              >
                {role}
              </span>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-charcoal/10 bg-surface/70 p-6">
              <h3 className="mb-2 font-semibold text-rose">Vision</h3>
              <p className="text-ink/75">{vision.visionText}</p>
            </div>
            <div className="rounded-xl border border-charcoal/10 bg-surface/70 p-6">
              <h3 className="mb-2 font-semibold text-charcoal">Mission</h3>
              <p className="text-ink/75">{vision.mission}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
