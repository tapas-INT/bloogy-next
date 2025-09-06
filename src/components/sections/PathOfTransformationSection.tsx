import Image from "next/image";
import React from "react";

export const PathOfTransformationSection = (): React.ReactElement => {
  return (
    <section className="flex lg:flex-row flex-col lg:items-center xl:gap-24 gap-12 pb-[90px] lb:py-[130px] container px-4">
      <div className="flex flex-col gap-6 flex-1 flex-1 lg:order-1 order-3 lg:max-w-[45%]">
        <div className="flex flex-col gap-6">
          <h2 className="font-extralight text-neutralneutral-07 text-[length:var(--headings-heading-1-font-size)] tracking-[0] leading-[1.2]">
            Path of Transformation
          </h2>

          <p className="font-body-18px-ragular font-[number:var(--body-18px-ragular-font-weight)] text-neutralneutral-03 text-[length:var(--body-18px-ragular-font-size)] tracking-[var(--body-18px-ragular-letter-spacing)] leading-[var(--body-18px-ragular-line-height)] [font-style:var(--body-18px-ragular-font-style)]">
            Discover our features for better productivity and seamless
            collaboration.
          </p>
        </div>

        <p className="font-body-18px-ragular font-[number:var(--body-18px-ragular-font-weight)] text-neutralneutral-03 text-[length:var(--body-18px-ragular-font-size)] tracking-[var(--body-18px-ragular-letter-spacing)] leading-[var(--body-18px-ragular-line-height)] [font-style:var(--body-18px-ragular-font-style)]">
          Hello! I&#39;m Alex, thrilled to share my adventures with you.
          Let&#39;s connect and uncover new experiences together. My curiosity
          drives me to explore diverse cultures, savor unique cuisines, and meet
          fascinating individuals. I&#39;m also passionate about your interests
          and hobbies. Everyone has a unique story, and I invite you to join me
          on this exciting journey.
        </p>
      </div>

      <div className="flex flex-col order-2 lg:max-w-[55%]">
      <Image
          className="w-full h-auto rounded-[30px]"
          alt="about-image1"
          src="/images/about-image3.png"
          width={685}
          height={635}
          priority
        />
        </div>
    </section>
  );
};