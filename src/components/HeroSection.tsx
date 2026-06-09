"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { HoverText } from "@/components/HoverText";

// Public assets are not rewritten with the deployment basePath, so prefix them
// manually. `NEXT_PUBLIC_BASE_PATH` is "" in dev and "/resume" in production.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

interface HeroSectionProps {
  onScrollDown: () => void;
}

export function HeroSection({ onScrollDown }: HeroSectionProps) {
  const { name, title, tagline, bio } = portfolioData;

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 pb-32 overflow-hidden"
    >
      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-rose/20 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute -bottom-40 -right-20 h-[450px] w-[450px] rounded-full bg-charcoal/20 blur-[130px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-rose/10 blur-[150px]"
      />

      {/* Noise / vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-canvas/60" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-10 max-w-4xl sm:flex-row sm:items-center sm:text-left"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="shrink-0 h-36 w-36 overflow-hidden rounded-full border border-charcoal/10 bg-surface p-1 shadow-lg shadow-rose/30 ring-2 ring-rose/40 sm:h-44 sm:w-44"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/profile.png`}
            alt={portfolioData.name.full}
            width={176}
            height={176}
            className="h-full w-full rounded-full object-cover"
          />
        </motion.div>

        <div className="text-center sm:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          >
            <span className="text-ink">It&apos;s </span>
            <span className="bg-gradient-to-r from-rose to-charcoal bg-clip-text text-transparent">
              {name.first}
            </span>
            <span className="text-ink"> {name.last}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="mb-2"
          >
            <HoverText
              text={title}
              hoverColor="var(--rose)"
              className="text-2xl font-semibold text-ink/80 sm:text-3xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6, ease: "easeOut" }}
            className="mb-5"
          >
            <HoverText
              text={tagline}
              hoverColor="var(--ink)"
              className="text-base font-medium tracking-widest text-rose uppercase"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
            className="max-w-xl text-lg leading-relaxed text-muted"
          >
            {bio}
          </motion.p>
        </div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        onClick={onScrollDown}
        className="absolute bottom-28 flex flex-col items-center gap-2 text-xs tracking-[0.3em] text-muted transition-colors hover:text-ink"
        aria-label="Scroll to about section"
      >
        SCROLL
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.button>
    </section>
  );
}
