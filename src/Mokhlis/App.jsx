import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { HackathonsSection } from "./components/HackathonsSection";
import { SkillsSection } from "./components/SkillsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function Mokhliss({ onBack }) {
  // Image URLs from Unsplash

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection onBack={onBack} />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <HackathonsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

