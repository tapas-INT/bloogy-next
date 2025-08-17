import { AboutMeSection } from "@/components/sections/AboutMeSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";
import { FeaturedPostsSection } from "@/components/sections/FeaturedPostsSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ReaderFeedbackSection } from "@/components/sections/ReaderFeedbackSection";

export default function Home() {
  // Ensure this is a server component (default in app directory)
  return (
    <main className="flex flex-col w-full relative bg-neutralneutral-01">
      <HeroSection />
      <FeaturedPostsSection />
      <AboutMeSection />
      <ReaderFeedbackSection />
      <BlogSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
}
