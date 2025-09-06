import React from "react";

interface InpageHeroSection {
  title: string;
  description: string;
}

interface InpageHeroSectionProps {
  content: InpageHeroSection;
}

export const InpageHeroSection: React.FC<InpageHeroSectionProps> = ({ content }) => {
  return (
    <section className="relative w-full bg-neutralneutral-02 overflow-hidden xl:py-[66px] lg:py-[30px] pt-[40px] pb-[90px]">
        <div className="container px-4 relative w-full lg:min-h-[400px] flex items-center justify-center">          
          <div className="flex flex-col lg:w-[690px] items-center gap-6">
            <h1 className="relative self-stretch mt-[-1.00px] text-center font-extralight text-neutralneutral-07 text-[length:var(--headings-heading-1-font-size)] tracking-[0] leading-[1.2]">
            {content.title}
            </h1>

            <p className="relative font-body-18px-ragular font-[number:var(--body-18px-ragular-font-weight)] text-neutralneutral-06 text-[length:var(--body-18px-ragular-font-size)] text-center tracking-[var(--body-18px-ragular-letter-spacing)] leading-[var(--body-18px-ragular-line-height)] [font-style:var(--body-18px-ragular-font-style)]">
            {content.description}
            </p>
          </div>
        </div>
      </section>
  );
};