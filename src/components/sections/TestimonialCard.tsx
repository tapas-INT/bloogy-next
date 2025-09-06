import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";

interface TestimonialCardProps {
  testimonial: {
    name: string;
    title: string;
    image: string;
    socialIcon: string;
    socialAlt: string;
    testimonial: string;
  };
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
  <Card className="bg-white rounded-[20px] backdrop-blur-[10.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10.5px)_brightness(100%)] border-0 shadow-none">
    <CardContent className="p-[39px] flex flex-col gap-7">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <Avatar className="w-[60px] h-[60px]">
            <AvatarImage
              src={testimonial.image}
              alt={testimonial.name}
              className="object-cover"
            />
            <AvatarFallback>
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center">
            <h3 className="font-body-18px-medium font-[number:var(--body-18px-medium-font-weight)] text-neutralneutral-07 text-[length:var(--body-18px-medium-font-size)] tracking-[var(--body-18px-medium-letter-spacing)] leading-[var(--body-18px-medium-line-height)] [font-style:var(--body-18px-medium-font-style)]">
              {testimonial.name}
            </h3>
            <p className="font-body-14px-regular font-[number:var(--body-14px-regular-font-weight)] text-neutralneutral-06 text-[length:var(--body-14px-regular-font-size)] tracking-[var(--body-14px-regular-letter-spacing)] leading-[var(--body-14px-regular-line-height)] [font-style:var(--body-14px-regular-font-style)]">
              {testimonial.title}
            </p>
          </div>
        </div>
        <img
          className="h-10 w-auto"
          alt={testimonial.socialAlt}
          src={testimonial.socialIcon}
        />
      </div>
      <Separator className="w-full h-px bg-gray-200" />
      <blockquote className="font-body-18px-ragular font-[number:var(--body-18px-ragular-font-weight)] text-neutralneutral-07 text-[length:var(--body-18px-ragular-font-size)] tracking-[var(--body-18px-ragular-letter-spacing)] leading-[var(--body-18px-ragular-line-height)] [font-style:var(--body-18px-ragular-font-style)]">
         "{testimonial.testimonial.replace(/'/g, '&apos;')}"
      </blockquote>
    </CardContent>
  </Card>
);
