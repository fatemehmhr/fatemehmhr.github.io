"use client";

import { type ElementType } from "react";

interface HoverTextProps {
  /** The text to render. */
  text: string;
  /** Element/component to render the wrapper as (e.g. "h1", "span"). */
  as?: ElementType;
  className?: string;
}

/** Renders `text` inside the chosen wrapper element. Static, no animation. */
export function HoverText({ text, as, className }: HoverTextProps) {
  const Wrapper = (as ?? "span") as ElementType;

  return <Wrapper className={className}>{text}</Wrapper>;
}
