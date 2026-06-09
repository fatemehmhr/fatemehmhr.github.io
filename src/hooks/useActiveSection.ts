"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import type { SectionId } from "@/data/portfolio";

const sectionIds: SectionId[] = ["home", "about", "projects", "contact"];

export function useActiveSection() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  // While a programmatic (click-triggered) scroll is in progress we lock the
  // observer so it doesn't override the target section as we pass through the
  // intermediate ones.
  const lockRef = useRef(false);
  const lockTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const updateUrl = useCallback(
    (id: SectionId) => {
      const params = new URLSearchParams(window.location.search);
      if (params.get("section") !== id) {
        params.set("section", id);
        router.replace(`?${params.toString()}`, { scroll: false });
      }
    },
    [router],
  );

  const scrollToSection = useCallback(
    (id: SectionId) => {
      const el = document.getElementById(id);
      if (!el) return;

      lockRef.current = true;
      if (lockTimeoutRef.current) clearTimeout(lockTimeoutRef.current);

      setActiveSection(id);
      updateUrl(id);
      el.scrollIntoView({ behavior: "smooth", block: "start" });

      // Release the lock once the smooth scroll has settled.
      lockTimeoutRef.current = setTimeout(() => {
        lockRef.current = false;
      }, 800);
    },
    [updateUrl],
  );

  // Deep-link support: run only once on mount.
  useEffect(() => {
    const section = searchParams.get("section") as SectionId | null;
    if (section && sectionIds.includes(section) && section !== "home") {
      lockRef.current = true;
      requestAnimationFrame(() => {
        document
          .getElementById(section)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(section);
        setTimeout(() => {
          lockRef.current = false;
        }, 800);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (lockRef.current) return;

        // Pick the most visible intersecting section.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          const id = visible.target.id as SectionId;
          if (sectionIds.includes(id)) {
            setActiveSection(id);
            updateUrl(id);
          }
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-80px 0px -45% 0px" },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [updateUrl]);

  return { activeSection, scrollToSection };
}
