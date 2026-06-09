"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useMemo, type ElementType, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  /** Element to render (defaults to a div). */
  as?: ElementType;
  /** Entrance direction. */
  direction?: Direction;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Travel distance in px. */
  distance?: number;
  className?: string;
}

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 1 },
  down: { x: 0, y: -1 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Lightweight scroll-triggered entrance wrapper. Respects reduced-motion and
 * animates once when ~20% of the element enters the viewport.
 */
export function Reveal({
  children,
  as,
  direction = "up",
  delay = 0,
  distance = 26,
  className,
}: RevealProps) {
  const reduce = useReducedMotion();
  // Reuse the stable `motion.div` for the common case; only build a custom
  // motion component when a different element is requested (memoised so the
  // component type stays stable across renders and children don't remount).
  const MotionTag = useMemo(
    () => (as ? motion(as) : motion.div),
    [as],
  );
  const { x, y } = offsets[direction];

  const variants: Variants = {
    hidden: reduce
      ? { opacity: 0 }
      : { opacity: 0, x: x * distance, y: y * distance },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionTag>
  );
}
