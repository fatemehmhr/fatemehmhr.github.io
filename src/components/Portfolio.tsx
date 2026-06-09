"use client";

import { AboutSection } from "@/components/AboutSection";
import { Background } from "@/components/Background";
import { ContactSection } from "@/components/ContactSection";
import { CustomCursor } from "@/components/CustomCursor";
import { HeroSection } from "@/components/HeroSection";
import { JourneySection } from "@/components/JourneySection";
import { Navigation } from "@/components/Navigation";
import { ProjectsSection } from "@/components/ProjectsSection";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Portfolio() {
  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <>
      <CustomCursor />
      <Background />
      <main className="relative">
        <HeroSection onScrollDown={() => scrollToSection("about")} />
        <AboutSection />
        <JourneySection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
    </>
  );
}
