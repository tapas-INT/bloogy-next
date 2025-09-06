import Image from "next/image";
import React from "react";

export const ElevateYourLifeSection = (): React.ReactElement => {
  return (
    <section className="flex lg:flex-row flex-col lg:items-center xl:gap-24 gap-12 py-[90px] lg:py-[130px] container px-4">
      <div className="flex flex-col items-start gap-8 flex-1 lg:order-1 order-3 lg:max-w-[45%]">
        <div className="flex flex-col items-start gap-6">
          <h2 className="font-extralight text-neutralneutral-07 text-[length:var(--headings-heading-1-font-size)] tracking-[0] leading-[1.2]">
            Evolution Pathway
          </h2>

          <p className="font-body-18px-ragular font-[number:var(--body-18px-ragular-font-weight)] text-neutralneutral-03 text-[length:var(--body-18px-ragular-font-size)] tracking-[var(--body-18px-ragular-letter-spacing)] leading-[var(--body-18px-ragular-line-height)] [font-style:var(--body-18px-ragular-font-style)]">
            Explore our platform&#39;s capabilities. Enjoy enhanced
            productivity, collaboration, and innovative tools to boost your
            workflow.
          </p>
        </div>

        <p className="font-body-18px-ragular font-[number:var(--body-18px-ragular-font-weight)] text-neutralneutral-03 text-[length:var(--body-18px-ragular-font-size)] tracking-[var(--body-18px-ragular-letter-spacing)] leading-[var(--body-18px-ragular-line-height)] [font-style:var(--body-18px-ragular-font-style)]">
          Hey! I&#39;m Maya, and I&#39;m excited to share my journey with you.
          Let&#39;s connect and discover something new together. I&#39;ve always
          been a curious person, always seeking new experiences. I love to
          explore different cultures, try new foods, and meet new people.
          I&#39;m also a big fan of your hobbies or interests. I believe that
          everyone has a story. I hope you&#39;ll join me on this journey.
        </p>
      </div>      

      <div className="flex flex-col order-2 lg:max-w-[55%]">
      <Image
          className="w-full h-auto rounded-[30px]"
          alt="about-image1"
          src="/images/about-image1.png"
          width={685}
          height={551}
          priority
        />
        </div>
    </section>
  );
};
