import { Hero } from "@/components/sections/Hero";
import { StatsMarquee } from "@/components/sections/StatsMarquee";
import { AboutMe } from "@/components/sections/AboutMe";
import { TechStack } from "@/components/sections/TechStack";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProjectShowcase } from "@/components/sections/ProjectShowcase";
import { LeadMagnet } from "@/components/sections/LeadMagnet";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsMarquee />
      <AboutMe />
      <TechStack />
      <ServicesGrid />
      <ProjectShowcase />
      <LeadMagnet />
    </>
  );
}