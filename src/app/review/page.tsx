import { HeaderSection } from "@/components/sections/HeaderSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { InpageHeroSection } from "@/components/sections/InpageHeroSection";
import { ReviewListingSection } from "@/components/sections/ReviewListingSection";
const bannerContent = {
  title: "Happy Reader’s",
   description:
 "Read real testimonials from satisfied clients who have experienced firsthand the transformative power of our products or services.",
 
};

export default function ReviewPage() {
  return (
    <main className="flex flex-col w-full relative bg-neutralneutral-01">
      <HeaderSection className="bg-neutralneutral-02" />
      <InpageHeroSection content={bannerContent} />
      <ReviewListingSection />
      <CallToActionSection />
      <FooterSection />
    </main>
  );
}
