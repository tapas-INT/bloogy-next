import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const AboutMeSection = (): React.ReactElement => {
  return (
    <section className="w-full bg-neutralneutral-01 pb-[120px]">
      <div className="container px-4">
        <div className="flex flex-col items-center gap-24">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="font-extralight text-neutralneutral-07 text-[length:var(--headings-heading-1-font-size)] tracking-[0] leading-[1.2]">
              A Bit About Me
            </h2>
            <p className="max-w-md font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-neutralneutral-06 text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)]">
              Hey! I&#39;m Maya, and I&#39;m excited to share my journey with you. Let&#39;s
              connect and discover something new together.
            </p>
          </div>

          <div className="lg:flex gap-14 w-full">
            <div
              className="flex-1 xl:h-[744px] lg:h-auto h-[400px] lg:mb-0 mb-14 rounded-[30px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/images/about-me.png)" }}
            />

            <Card className="flex-1 bg-theme-colortheme-color-02 rounded-[30px] border-0">
              <CardContent className="h-full flex flex-col justify-between p-16">
                <p className="font-body-28px-regular font-[number:var(--body-28px-regular-font-weight)] text-neutralneutral-07 text-[length:var(--body-28px-regular-font-size)] tracking-[var(--body-28px-regular-letter-spacing)] leading-[var(--body-28px-regular-line-height)] [font-style:var(--body-28px-regular-font-style)] mb-10">
                  Hey! I&#39;m Maya, and I&#39;m excited to share my journey with you.
                  Let&#39;s connect and discover something new together. I&#39;ve always
                  been a curious person, always seeking new experiences. I love
                  to explore different cultures, try new foods, and meet new
                  people. I&#39;m also a big fan of your hobbies or interests. I
                  believe that everyone has a story. I hope you&#39;ll join me on
                  this journey discovery and exploration.
                </p>

                <Button className="bg-theme-colortheme-color-01 text-neutralneutral-08 rounded-full px-10 py-4 h-auto font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)] w-fit group hover:bg-neutralneutral-08 hover:text-white">
                  Read My Story
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
