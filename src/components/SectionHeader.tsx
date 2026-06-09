"use client";

import { type ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

interface SectionHeaderProps {
  /** Two-digit index, e.g. "01". */
  index: string;
  /** Small uppercase eyebrow. */
  kicker: string;
  /** Main heading (string or rich nodes). */
  title: ReactNode;
  /** Optional supporting line under the title. */
  subtitle?: ReactNode;
  className?: string;
}

/**
 * Editorial section header: an oversized faint serif index sits behind a
 * kicker + display title, giving every section a magazine-like rhythm.
 */
export function SectionHeader({
  index,
  kicker,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={`relative sm:mb-4 mb-2  ${className ?? ""}`}>
      

      <div className="relative pl-1">
        <Reveal direction="left">
          <span className="kicker">{kicker}</span>
        </Reveal>
        <Reveal direction="up" delay={0.05}>
          <h2 className="font-display mt-3 text-lg sm:text-2xl leading-tight text-navy sm:text-4xl md:text-[2.75rem]">
            {title}
          </h2>
        </Reveal>
        {subtitle && (
          <Reveal direction="up" delay={0.12}>
            <p className="mt-3 max-w-2xl text-sm text-muted sm:text-base">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
