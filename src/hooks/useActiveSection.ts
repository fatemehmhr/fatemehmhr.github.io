"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { SectionId } from "@/data/portfolio";

const sectionIds: SectionId[] = ["home", "about", "projects", "contact"];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const lockRef = useRef(false);
  const lockTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Use the native History API — never the Next.js router — so that updating
  // the query string never triggers a soft-navigation or scroll restoration.
  const updateUrl = useCallback((id: SectionId) => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("section") !== id) {
      params.set("section", id);
      window.history.replaceState(null, "", `?${params.toString()}`);
    }
  }, []);

  const scrollToSection = useCallback(
    (id: SectionId) => {
      const el = document.getElementById(id);
      if (!el) return;

      lockRef.current = true;
      if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);

      setActiveSection(id);
      updateUrl(id);
      el.scrollIntoView({ behavior: "smooth", block: "start" });

      lockTimeoutRef.current = setTimeout(() => {
        lockRef.current = false;
      }, 800);
    },
    [updateUrl],
  );

  // Deep-link support: read the URL once on mount using window.location
  // (not useSearchParams) so Next.js is never involved.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const section = params.get("section") as SectionId | null;
    if (section && sectionIds.includes(section) && section !== "home") {
      lockRef.current = true;
      requestAnimationFrame(() => {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "auto", block: "start" });
        setActiveSection(section);
        setTimeout(() => {
          lockRef.current = false;
        }, 100);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Determine the active section from scroll position rather than from
  // intersection ratios. Sections like "projects" are far taller than the
  // viewport, so a ratio-based observer never crosses its thresholds and the
  // section is never reported as active. Instead we pick the last section
  // whose top has scrolled past a reference line near the top of the viewport,
  // which is reliable regardless of section height.
  useEffect(() => {
    let frame = 0;

    const computeActiveSection = () => {
      frame = 0;
      if (lockRef.current) return;

      // Reference line ~35% down the viewport.
      const referenceLine = window.innerHeight * 0.35;
      let current: SectionId = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= referenceLine) {
          current = id;
        }
      }

      setActiveSection(current);
      updateUrl(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(computeActiveSection);
    };

    computeActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [updateUrl]);

  return { activeSection, scrollToSection };
}
