import { HeaderSection } from "@/components/sections/HeaderSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";
import { FooterSection } from "@/components/sections/FooterSection";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col w-full relative bg-neutralneutral-01 min-h-screen">
      <HeaderSection className="bg-neutralneutral-02" />
      <section className="container px-4 py-32 text-center">
        <h1 className="text-5xl font-bold mb-6">404 - Page Not Found</h1>
        <p className="text-neutralneutral-07 mb-8">Sorry, the page you are looking for does not exist.</p>
        <Link href="/" className="inline-block px-6 py-3 bg-neutralneutral-08 text-white rounded-full font-semibold hover:bg-neutralneutral-07 transition-colors">Go to Home</Link>
      </section>
      <CallToActionSection />
      <FooterSection />
    </main>
  );
}
