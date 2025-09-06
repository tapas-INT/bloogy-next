import { HeaderSection } from "@/components/sections/HeaderSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { InpageHeroSection } from "@/components/sections/InpageHeroSection";
import { BlogListingSection } from "@/components/sections/BlogListingSection";

const bannerContent = {
  title: "Explore the World",
   description:
 "Join me on a journey of discovery as we explore the fascinating world of art, nature, history, and more. Let's uncover hidden gems, learn from.",
 
};

export default function BlogPage() {
  return (
    <main className="flex flex-col w-full relative bg-neutralneutral-01">
      <HeaderSection className="bg-neutralneutral-02" />
      <InpageHeroSection content={bannerContent} />
      <BlogListingSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
}
