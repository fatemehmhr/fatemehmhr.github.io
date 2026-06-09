"use client";

import { motion } from "framer-motion";
import { sections, type SectionId } from "@/data/portfolio";

interface NavigationProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed bottom-4 left-1/2 z-50 w-max max-w-[calc(100vw-1rem)] -translate-x-1/2 sm:bottom-6">
      <div className="flex items-center gap-0.5 rounded-2xl border border-navy/10 bg-white/70 px-1.5 py-1.5 shadow-[0_12px_40px_-12px_rgba(47,65,86,0.4)] backdrop-blur-xl sm:gap-1 sm:px-2 sm:py-2">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className="relative rounded-xl px-2.5 py-2 text-xs font-medium whitespace-nowrap transition-colors sm:px-4 sm:py-2.5 sm:text-sm"
            >
              {isActive && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-navy to-teal shadow-[0_6px_18px_-6px_rgba(47,65,86,0.7)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  isActive ? "text-white" : "text-muted hover:text-navy"
                }`}
              >
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
