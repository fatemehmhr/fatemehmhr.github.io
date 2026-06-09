"use client";

import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function JourneySection() {
  const { journey, stats, vision } = portfolioData;

  return (
    <section className="flex min-h-screen flex-col justify-center px-6 sm:pb-16">
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeader
          index="02"
          kicker="My Journey"
          title={journey.title}
          subtitle={journey.subtitle}
        />

        {/* Skill cards with running index */}
        <div className="mb-2 grid gap-1 sm:gap-3 sm:grid-cols-2 sm:gap-2 lg:grid-cols-3">
          {journey.skills.map((skill, i) => (
            <Reveal key={skill.title} direction="up" delay={i * 0.06}>
              <div className="card group h-full overflow-hidden p-3 sm:p-3">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky/40 text-2xl transition group-hover:-rotate-6 group-hover:bg-teal/20">
                  {skill.emoji}
                </span>
                <h3 className="mb-2 text-base font-semibold text-ink sm:text-lg">
                  {skill.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted sm:text-sm">
                  {skill.items}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        

        {/* Vision — high-contrast navy panel */}
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-navy p-8 text-white shadow-[0_30px_70px_-30px_rgba(47,65,86,0.7)] sm:p-8">
            {/* decorative glows */}
            <div className="animate-float-slow pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-teal/40 opacity-60 blur-3xl" />
            <div className="animate-float-slower pointer-events-none absolute -bottom-28 -left-10 h-72 w-72 rounded-full bg-sky/30 opacity-50 blur-3xl" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage:
                  "radial-gradient(ellipse at 70% 0%, black 30%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at 70% 0%, black 30%, transparent 80%)",
              }}
            />

            <div className="relative">
              <span className="kicker !text-sky">Vision &amp; Mission</span>
              <h2 className="font-display mt-3 mb-3 text-xl text-white sm:text-3xl">
                {vision.heading}
              </h2>
              <p className="mb-8 max-w-2xl text-sm text-sky/85 sm:text-base">
                {vision.subheading}
              </p>

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm transition hover:bg-white/[0.1]">
                  <h3 className="mb-2 text-sm font-semibold text-sky sm:text-base">
                    Vision
                  </h3>
                  <p className="text-sm text-white/80 sm:text-[15px]">
                    {vision.visionText}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-sm transition hover:bg-white/[0.1]">
                  <h3 className="mb-2 text-sm font-semibold text-sky sm:text-base">
                    Mission
                  </h3>
                  <p className="text-sm text-white/80 sm:text-[15px]">
                    {vision.mission}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
