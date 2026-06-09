"use client";

import { useState, type ElementType } from "react";
import { motion } from "framer-motion";

interface HoverTextProps {
  /** The text to render with the per-letter hover wave. */
  text: string;
  /** Element/component to render the wrapper as (e.g. "h1", "span"). */
  as?: ElementType;
  className?: string;
  /** Color each letter shifts to while the wave plays. Defaults to the rose accent. */
  hoverColor?: string;
}

const ROSE = "var(--rose)";

/**
 * Renders `text` split into individual letters. On hover, each letter springs
 * upward in sequence (a left-to-right wave) and briefly tints to `hoverColor`,
 * then settles back. Spaces are preserved as non-breaking gaps.
 */
export function HoverText({
  text,
  as,
  className,
  hoverColor = ROSE,
}: HoverTextProps) {
  const [hovered, setHovered] = useState(false);
  const Wrapper = (as ?? "span") as ElementType;
  const letters = Array.from(text);

  return (
    <Wrapper
      data-cursor="hover"
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: "inline-block", whiteSpace: "pre-wrap" }}
    >
      {letters.map((char, i) => {
        if (char === " ") {
          return <span key={i}>{"\u00A0"}</span>;
        }
        return (
          <motion.span
            key={i}
            style={{
              display: "inline-block",
              willChange: "transform",
              color: hovered ? hoverColor : undefined,
              transition: `color 0.3s ease ${hovered ? i * 0.035 : 0}s`,
            }}
            animate={
              hovered
                ? { y: [0, -12, 0], rotate: [0, -6, 0] }
                : { y: 0, rotate: 0 }
            }
            transition={{
              duration: 0.45,
              delay: hovered ? i * 0.035 : 0,
              ease: "easeInOut",
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </Wrapper>
  );
}
