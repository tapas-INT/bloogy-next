"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";

interface NavigationItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  navigationItems: NavigationItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ navigationItems }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden p-2 hover:bg-neutralneutral-02/50"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6 text-neutralneutral-07" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-sm bg-neutralneutral-01 border-0 shadow-xl">
        <div className="flex flex-col gap-6 pt-8">
          <div className="flex items-center justify-between">
            <h2 className="[font-family:'Nexa-ExtraLight',Helvetica] font-extralight text-neutralneutral-08 text-2xl">
              Bloogy
            </h2>
          </div>
          
          <nav className="flex flex-col gap-4">
            {navigationItems.map((item, index) => (
              <DialogClose key={index} asChild>
                <a
                  href={item.href}
                  className="font-body-18px-ragular font-[number:var(--body-18px-ragular-font-weight)] text-neutralneutral-07 text-[length:var(--body-18px-ragular-font-size)] tracking-[var(--body-18px-ragular-letter-spacing)] leading-[var(--body-18px-ragular-line-height)] [font-style:var(--body-18px-ragular-font-style)] hover:text-neutralneutral-08 transition-colors py-3 px-2 rounded-lg hover:bg-neutralneutral-02/30"
                >
                  {item.label}
                </a>
              </DialogClose>
            ))}
          </nav>
        </div>
      </DialogContent>
    </Dialog>
  );
};