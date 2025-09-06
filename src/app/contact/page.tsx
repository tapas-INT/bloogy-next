import { HeaderSection } from "@/components/sections/HeaderSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { InpageHeroSection } from "@/components/sections/InpageHeroSection";
const bannerContent = {
  title: "Share Me Your Story",
  description: "Have questions, need assistance, or simply want to share your thoughts? We're here to listen and help. Whether you have a query about our products or services.",
 
};
export default function ContactPage() {
  return (
    <main className="flex flex-col w-full relative bg-neutralneutral-01">
      <HeaderSection className="bg-neutralneutral-02" />
      <InpageHeroSection content={bannerContent} />
      <ContactFormSection />
      <FooterSection className="bg-neutralneutral-02" />
    </main>
  );
}
