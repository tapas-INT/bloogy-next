import { HeaderSection } from "@/components/sections/HeaderSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { EvolutionPathwaySection } from "@/components/sections/EvolutionPathwaySection";
import { PathOfTransformationSection } from "@/components/sections/PathOfTransformationSection";
import { ElevateYourLifeSection } from "@/components/sections/ElevateYourLifeSection";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full relative bg-neutralneutral-01">
      <HeaderSection className="bg-neutralneutral-02" />
      <AboutHeroSection />
      <ElevateYourLifeSection />
      <EvolutionPathwaySection />
      <PathOfTransformationSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
}
