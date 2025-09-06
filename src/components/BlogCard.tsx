import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface BlogPost {
  id: number;
  image: string;
  title: string;
  description: string;
  hasRoundedTop: boolean;
}

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Card className="flex flex-col bg-transparent border-none shadow-none">
      <CardContent className="p-0 h-full flex flex-col">
        <Image
          className={`w-full h-[291px] object-cover ${post.hasRoundedTop ? "rounded-[20px_20px_0px_0px]" : ""}`}
          alt="Blog post image"
          src={post.image}
          width={605}
          height={400}
          priority
        />
        <div className="flex flex-1 flex-col gap-10 px-8 py-8 mt-[-18px] bg-neutralneutral-02 rounded-[20px]">
          <div className="flex flex-col gap-4 flex-1">
            <h3 className="font-body-24px-regular font-[number:var(--body-24px-regular-font-weight)] text-neutralneutral-07 text-[length:var(--body-24px-regular-font-size)] tracking-[var(--body-24px-regular-letter-spacing)] leading-[var(--body-24px-regular-line-height)] [font-style:var(--body-24px-regular-font-style)]">
              {post.title}
            </h3>
            <p className="font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-neutralneutral-06 text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)]">
              {post.description}
            </p>
          </div>
          <div className="flex">
            <Button className="h-auto bg-theme-colortheme-color-04 hover:bg-theme-colortheme-color-04/90 text-neutralneutral-08 px-6 py-2 rounded-[100px] font-body-14px-regular font-[number:var(--body-14px-regular-font-weight)] text-[length:var(--body-14px-regular-font-size)] tracking-[var(--body-14px-regular-letter-spacing)] leading-[var(--body-14px-regular-line-height)] [font-style:var(--body-14px-regular-font-style)] group hover:bg-neutralneutral-08 hover:text-white">
              Read More
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
