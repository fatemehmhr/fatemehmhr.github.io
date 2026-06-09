"use client";

/**
 * Plain, gradient-free white canvas. Intentionally kept empty per design
 * preference — all visual interest lives in the section content itself.
 */
export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-white" />
  );
}
