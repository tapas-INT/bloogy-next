import { HeaderSection } from "@/components/sections/HeaderSection";
import { FooterSection } from "@/components/sections/FooterSection";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col w-full relative bg-neutralneutral-01 min-h-screen">
      <HeaderSection className="bg-neutralneutral-02" />
      <section className="container px-4 py-32 text-center">
        <h1 className="text-5xl font-bold mb-6 text-[#C2BFC9] text-[100px] lg:text-[234px] leading-[1]">404</h1>
      </section>
      <FooterSection />
    </main>
  );
}
