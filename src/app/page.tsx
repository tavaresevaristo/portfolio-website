import { AboutSection } from "@/components/molecules/sections/about";
import { ContactGrid } from "@/components/molecules/sections/contact";
import { ServicesList } from "@/components/molecules/sections/services";
import { ProjectsSection } from "@/components/molecules/sections/projects";
import { SkillsTimeline } from "@/components/molecules/sections/hard-skills";
import { ExperienceLinkedIn } from "@/components/molecules/sections/experiences";
import { LandingHeroSection } from "@/components/molecules/sections/landing-hero";

export default function Home() {
  return (
    <>
      <LandingHeroSection />
      <AboutSection />
      <ServicesList />
      <SkillsTimeline />
      <ExperienceLinkedIn />
      <ProjectsSection />
      <ContactGrid />
    </>
  );
}
