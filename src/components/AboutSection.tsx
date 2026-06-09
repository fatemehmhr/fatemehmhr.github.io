"use client";

import { GraduationCap, Languages, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

const infoCards = (about: typeof portfolioData.about) => [
  {
    label: "Education",
    value: about.education,
    Icon: GraduationCap,
  },
  {
    label: "Languages",
    value: about.languages.join("  ·  "),
    Icon: Languages,
  },
  {
    label: "Interests",
    value: about.interests.map((i) => `${i.emoji} ${i.label}`).join("   "),
    Icon: Sparkles,
  },
];

export function AboutSection() {
  const { about, experience } = portfolioData;

  return (
    <section
      id="about"
      className="flex min-h-screen flex-col justify-center px-5 pt-5 pb-20 sm:px-6 sm:py-0 sm:pb-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeader
          index="01"
          kicker="About Me"
          title={
            <>
              {about.age} years old, based in{" "}
              <span className="text-gradient">{about.location}</span>
            </>
          }
        />

        <Reveal direction="up">
          <blockquote className="relative mb-5 overflow-hidden rounded-2xl border border-teal/15 bg-white/60 py-4 pr-4 pl-6 backdrop-blur-sm sm:py-5 sm:pr-6 sm:pl-8">
            <span className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-navy to-teal" />
            <p className="relative text-xs italic text-navy/80 xs:text-[13px] sm:text-lg">
              {about.quote}
            </p>
          </blockquote>
        </Reveal>

        <div className="mb-4 grid gap-1 sm:gap-4 sm:grid-cols-3 sm:gap-6">
          {infoCards(about).map((item, i) => (
            <Reveal key={item.label} direction="up" delay={i * 0.08}>
              <div
                className="card group h-full overflow-hidden p-3 sm:p-6"
                style={{ backgroundColor: "#2F4156" }}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white transition group-hover:bg-teal group-hover:text-white">
                  <item.Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h4 className="mb-2 text-[11px] font-semibold tracking-wider text-sky uppercase sm:text-xs">
                  {item.label}
                </h4>
                <p className="text-xs leading-relaxed text-white/80 sm:text-[15px]">
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up">
          <h3 className="font-display mb-6 text-lg text-navy sm:text-2xl">
            Experience
          </h3>
        </Reveal>

        {/* Vertical timeline */}
        <div className="relative pl-7 sm:pl-9">
          <span className="absolute top-1 bottom-1 left-[6px] w-px bg-gradient-to-b from-navy via-teal to-transparent sm:left-[10px]" />
          <div className="space-y-4 sm:space-y-5">
            {experience.map((job, i) => (
              <Reveal key={`${job.company}-${job.role}`} direction="left" delay={i * 0.08}>
                <div className="group relative">
                  {/* Node */}
                  <span className="absolute top-5 -left-[26px] flex h-3.5 w-3.5 items-center justify-center sm:-left-[34px]">
                    <span className="absolute h-3.5 w-3.5 rounded-full bg-teal/30 transition group-hover:scale-150" />
                    <span className="relative h-2 w-2 rounded-full bg-navy ring-2 ring-white" />
                  </span>

                  <div className="card flex flex-wrap items-baseline justify-between gap-2 p-4 sm:p-5">
                    <div>
                      <h4 className="text-[13px] font-semibold text-ink sm:text-base">
                        {job.role}
                      </h4>
                      <p className="mt-1 text-xs text-muted sm:text-sm">{job.company}</p>
                    </div>
                    <span className="rounded-full bg-sky/40 px-2.5 py-1 text-[11px] font-medium text-navy sm:px-3 sm:text-xs">
                      {job.period}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
