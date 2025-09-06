import React from "react";
import Image from "next/image";

export const AboutHeroSection = (): React.ReactElement => {
  return (
    <section className="relative w-full bg-neutralneutral-02 overflow-hidden xl:py-[66px] lg:py-[30px] pt-[40px] pb-[90px]">
        <div className="container px-4">
        <div className="relative w-full xl:h-[523px] lg:h-[400px]">
          
          <Image
            className="absolute xl:w-[289px] xl:h-[337px] w-[200px] h-[230px] top-1 left-1 rounded-[20px] object-cover hidden lg:block"
            alt="Image"
            src="/images/about-hero-1.png"
            width={289}
            height={337}
            priority
          />

        <Image
            className="absolute xl:w-[331px] xl:h-[385px] w-[200px] h-[230px] top-[134px] right-1 rounded-[20px] object-cover hidden lg:block"
            alt="Image"
            src="/images/about-hero-2.png"
            width={331}
            height={432}
            priority
          />

          <div className="flex flex-col lg:w-[598px] items-center gap-6 lg:absolute xl:top-[173px] lg:top-[100px] lg:left-1/2 lg:transform lg:-translate-x-1/2">
            <h1 className="relative self-stretch mt-[-1.00px] text-center font-extralight text-neutralneutral-07 text-[length:var(--headings-heading-1-font-size)] tracking-[0] leading-[1.2]">
              Bloogy&apos;s Story
            </h1>

            <p className="relative max-w-[514px] font-body-18px-ragular font-[number:var(--body-18px-ragular-font-weight)] text-neutralneutral-06 text-[length:var(--body-18px-ragular-font-size)] text-center tracking-[var(--body-18px-ragular-letter-spacing)] leading-[var(--body-18px-ragular-line-height)] [font-style:var(--body-18px-ragular-font-style)]">
              Step into my world and explore my passions. I&#39;m Maya, a
              blogger sharing my thoughts, ideas, and adventures.
            </p>
          </div>
        </div>
        </div>
      </section>
  );
};
