"use client";

import { motion } from "framer-motion";
import { sections, type SectionId } from "@/data/portfolio";

interface NavigationProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-2xl border border-charcoal/10 bg-surface/70 px-2 py-2 shadow-xl shadow-charcoal/10 backdrop-blur-xl">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className="relative rounded-xl px-4 py-2.5 text-sm font-medium transition-colors"
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-rose to-charcoal"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  isActive ? "text-white" : "text-muted hover:text-ink"
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
