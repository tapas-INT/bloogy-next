import React from "react";
import { MobileMenu } from "../MobileMenu";

const navigationItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Review", href: "#" },
  { label: "Contact", href: "#" },
];

export const HeaderSection = (): React.ReactElement => (
<header className="relative z-10 container px-4">
  <nav className="flex items-center justify-between pt-10 pb-8">
    <div className="flex items-center justify-center gap-2">
      <h1 className="[font-family:'Nexa-ExtraLight',Helvetica] font-extralight text-neutralneutral-08 text-[32px] leading-[38.4px]">
        Bloogy
      </h1>
    </div>
    <div className="flex items-center gap-[72px]">
         {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-12">
        {navigationItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-neutralneutral-07 text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)] hover:text-neutralneutral-08 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
      {/* Mobile/Tablet Menu */}
      <MobileMenu navigationItems={navigationItems} />
    </div>
  </nav>
</header>
);
