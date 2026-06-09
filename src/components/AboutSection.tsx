"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { HoverText } from "@/components/HoverText";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const glassCard =
  "group relative overflow-hidden rounded-2xl border border-white bg-white p-6 shadow-xl shadow-charcoal/10 ring-1 ring-inset ring-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-charcoal/15";

function GlassShine() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
    />
  );
}

export function AboutSection() {
  const { about, experience } = portfolioData;

  return (
    <section
      id="about"
      className="flex min-h-screen flex-col justify-center px-6 py-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="mb-2"
        >
          <HoverText
            text="About Me"
            hoverColor="var(--ink)"
            className="text-sm font-medium tracking-widest text-rose uppercase"
          />
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="mb-4 text-3xl font-bold text-ink sm:text-4xl"
        >
          {about.age} years old, born on{" "}
          <span className="text-rose">{about.birthDate}</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="mb-10 text-lg text-muted"
        >
          Based in {about.location} {about.flag}
        </motion.p>

        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="mb-12 border-l-4 border-rose pl-6 text-xl italic text-ink/75"
        >
          &ldquo;{about.quote}&rdquo;
        </motion.blockquote>

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { label: "Education", value: about.education },
            {
              label: "Languages",
              value: about.languages.join(" · "),
            },
            {
              label: "Interests",
              value: about.interests
                .map((i) => `${i.emoji} ${i.label}`)
                .join("  "),
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={4 + i}
              className={glassCard}
            >
              <GlassShine />
              <h4 className="relative mb-2 text-sm font-medium tracking-wider text-rose uppercase">
                {item.label}
              </h4>
              <p className="relative text-ink/75">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={7}
          className="mt-16 mb-6"
        >
          <HoverText
            text="Experience"
            className="text-2xl font-bold text-ink"
          />
        </motion.h3>

        <div className="space-y-4">
          {experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${job.role}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={8 + i}
              className={glassCard}
            >
              <GlassShine />
              <div className="relative flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="text-lg font-semibold text-ink">{job.role}</h4>
                <span className="text-sm text-rose">{job.period}</span>
              </div>
              <p className="relative mt-1 text-muted">{job.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
