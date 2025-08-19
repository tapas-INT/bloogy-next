import { HeaderSection } from "@/components/sections/HeaderSection";
import { AboutMeSection } from "@/components/sections/AboutMeSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full relative bg-neutralneutral-01">
      <HeaderSection />
      <AboutMeSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
}
