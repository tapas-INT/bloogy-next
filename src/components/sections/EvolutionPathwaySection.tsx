import Image from "next/image";
import React from "react";

export const EvolutionPathwaySection = (): React.ReactElement => {
  const benefits = [
    "Increased efficiency and productivity.",
    "Streamlined communication and collaboration.",
    "Optimized decision-making processes.",
    "Enhanced project management capabilities.",
    "Improved data analysis and reporting.",
  ];

  return (
    <section className="flex lg:flex-row flex-col lg:items-center xl:gap-24 gap-12 pb-[90px] lg:pb-[130px] container px-4">
      <div className="flex flex-col lg:max-w-[55%]">
      <Image
          className="w-full h-auto rounded-[30px]"
          alt="about-image1"
          src="/images/about-image2.png"
          width={718}
          height={539}
          priority
        />
        </div>

      <div className="flex flex-col items-start gap-10 lg:max-w-[45%]">
        <header className="flex flex-col gap-6 items-start">
          <h2 className="font-extralight text-neutralneutral-07 text-[length:var(--headings-heading-1-font-size)] tracking-[0] leading-[1.2]">
            Elevate Your Life
          </h2>

          <p className="font-body-18px-ragular font-[number:var(--body-18px-ragular-font-weight)] text-neutralneutral-03 text-[length:var(--body-18px-ragular-font-size)] tracking-[var(--body-18px-ragular-letter-spacing)] leading-[var(--body-18px-ragular-line-height)] [font-style:var(--body-18px-ragular-font-style)]">
            Discover the transformative power of My service. Experience a range
            of benefits, including:
          </p>
        </header>

        <ul className="flex flex-col items-start gap-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="flex items-center gap-2.5 pt-[11px] pb-0 px-0">
                <div className="w-[9px] h-[9px] bg-theme-colortheme-color-03 rounded-[4.5px]" />
              </div>

              <span className="w-fit mt-[-1.00px] font-body-18px-ragular font-[number:var(--body-18px-ragular-font-weight)] text-neutralneutral-06 text-[length:var(--body-18px-ragular-font-size)] tracking-[var(--body-18px-ragular-letter-spacing)] leading-[var(--body-18px-ragular-line-height)] [font-style:var(--body-18px-ragular-font-style)]">
                {benefit}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};