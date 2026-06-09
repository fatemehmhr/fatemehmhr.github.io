"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface BlurRevealProps {
  children: ReactNode;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Blur amount (px) applied while hidden. */
  blur?: number;
  className?: string;
}

/**
 * Scroll-triggered wrapper that starts blurred + faded and resolves into focus
 * once the element enters the viewport. Used for "secondary" content that should
 * stay de-emphasised until the user scrolls to it. Respects reduced-motion.
 */
export function BlurReveal({
  children,
  delay = 0,
  blur = 10,
  className,
}: BlurRevealProps) {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: reduce
      ? { opacity: 0.7 }
      : { opacity: 0.65, filter: `blur(${blur}px)`, scale: 0.98 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      {children}
    </motion.div>
  );
}
