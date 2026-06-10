"use client";

import { ArrowDownRight, ChevronDown, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

// Public assets are not rewritten with the deployment basePath, so prefix them
// manually. `NEXT_PUBLIC_BASE_PATH` is "" in dev and "/resume" in production.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

interface HeroSectionProps {
  onScrollDown: () => void;
}

export function HeroSection({ onScrollDown }: HeroSectionProps) {
  const { name, title, tagline, bio } = portfolioData;
  const stack = tagline.split("·").map((s) => s.trim());

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 sm:pt-10 sm:px-6 pb-64 sm:pb-28"
    >
      <div className="relative z-10 grid w-full max-w-5xl items-center gap-4 sm:gap-8 sm:grid-cols-[auto_1fr] sm:gap-12">
        {/* Avatar with spinning gradient ring */}
        <div className="animate-rise mx-auto sm:mx-0">
          <div className="gradient-ring spin h-32 w-32 xs:h-40 xs:w-40 sm:h-52 sm:w-52">
            <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-surface p-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}/profile.png`}
                alt={name.full}
                width={208}
                height={208}
                className="h-full w-full rounded-[1.1rem] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center sm:text-left">
          <h1
            className="animate-rise font-display mb-4 text-[2rem] leading-[1.05] tracking-tight xs:text-[2.6rem] sm:mb-5 sm:text-6xl md:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-xl font-normal text-navy/55 italic xs:text-2xl sm:text-3xl md:text-4xl">
              Hi, I&apos;m
            </span>
            <span className="text-gradient-anim capitalize">{name.first}</span>{" "}
            <span className="text-navy capitalize">{name.last}</span>
          </h1>

          <div
            className="animate-rise mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:mb-5 sm:justify-start"
            style={{ animationDelay: "0.18s" }}
          >
            <span className="inline-flex items-center gap-2 text-base font-semibold text-navy/90 xs:text-lg sm:text-2xl">
              <Sparkles className="h-4 w-4 text-teal xs:h-5 xs:w-5" aria-hidden="true" />
              {title}
            </span>
          </div>

          <p
            className="animate-rise mx-auto mb-6 max-w-xl text-left text-[12px] leading-relaxed text-muted xs:text-[14px] sm:mx-0 sm:mb-7 sm:text-base"
            style={{ animationDelay: "0.26s" }}
          >
            {bio}
          </p>


          <div
            className="animate-rise flex flex-wrap items-center justify-center gap-1 sm:gap-3 sm:justify-start"
            style={{ animationDelay: "0.38s" }}
          >
            <a
              href="#projects"
              className="btn-primary w-full justify-center xs:w-auto"
            >
              View my work
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="btn-ghost w-full justify-center xs:w-auto"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={onScrollDown}
        className="group absolute bottom-54 flex flex-col items-center gap-2 text-[11px] tracking-[0.3em] text-muted transition hover:text-navy sm:bottom-24"
        aria-label="Scroll to about section"
      >
        SCROLL
        <ChevronDown className="h-5 w-5 animate-bounce group-hover:text-teal" />
      </button>
    </section>
  );
}
