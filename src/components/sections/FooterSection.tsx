import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const FooterSection = ({ className }: { className?: string }): React.ReactElement => {
  const navigationLinks = [
    { label: "View Blog", href: "#" },
    { label: "Blog Details", href: "#" },
  ];

  return (    
    <footer className={`w-full bg-neutralneutral-01 py-[120px] ${className}`}>
      <div className="container px-4 flex flex-col gap-24">
        <div className="flex flex-col lg:flex-row  gap-10 items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <h2 className="[font-family:'Nexa-ExtraLight',Helvetica] font-extralight text-neutralneutral-08 text-[32px] leading-[38.4px]">
              Bloogy
            </h2>
          </div>

          <nav className="flex items-center gap-12">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-neutralneutral-07 text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)] hover:text-neutralneutral-08 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <div className="flex items-center gap-4">
              <Input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-neutralneutral-02 border border-solid border-black px-6 py-4 text-neutralneutral-06 font-body-16px-regular rounded-[100px] sm:min-w-[300px] min-h-[58px] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button
                size="icon"
                className="bg-neutralneutral-02 border border-solid border-black rounded-full flex items-center justify-center p-0 min-h-[58px] min-w-[80px] group hover:bg-neutralneutral-08"
              >
                <img src="/images/icons/send-icon.svg" alt="Send" className="h-6 w-6 transition-colors group-hover:brightness-0 group-hover:invert" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 w-full">
          <div className="w-full h-px bg-neutralneutral-05"></div>

          <div className="flex flex-col lg:flex-row items-center justify-between w-full">

            <div className="flex gap-6 lg:order-2 mb-10 lg:mb-0">
              <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutralneutral-02 group hover:bg-neutralneutral-08">
                <img src="/images/icons/facebook.svg" alt="Facebook" className="h-6 w-6 transition-colors group-hover:brightness-0 group-hover:invert" />
              </a>
              <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutralneutral-02 group hover:bg-neutralneutral-08">
                <img src="/images/icons/x.svg" alt="X" className="h-6 w-6 transition-colors group-hover:brightness-0 group-hover:invert" />
              </a>
              <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutralneutral-02 group hover:bg-neutralneutral-08">
                <img src="/images/icons/instagram.svg" alt="Instagram" className="h-6 w-6 transition-colors group-hover:brightness-0 group-hover:invert" />
              </a>
              <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutralneutral-02 group hover:bg-neutralneutral-08">
                <img src="/images/icons/discord.svg" alt="Discord" className="h-6 w-6 transition-colors group-hover:brightness-0 group-hover:invert" />
              </a>
              <a href="#" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutralneutral-02 group hover:bg-neutralneutral-08">
                <img src="/images/icons/YouTube.svg" alt="YouTube" className="h-6 w-6 transition-colors group-hover:brightness-0 group-hover:invert" />
              </a>
            </div>

            <p className="font-body-14px-regular font-[number:var(--body-14px-regular-font-weight)] text-[#5b5753] text-[length:var(--body-14px-regular-font-size)] tracking-[var(--body-14px-regular-letter-spacing)] leading-[var(--body-14px-regular-line-height)] [font-style:var(--body-14px-regular-font-style)] lg:order-1">
              Copyright © 2024, All Rights Reserved By FramerWebPro
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
