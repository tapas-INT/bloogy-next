import React from "react";
import { Button } from "../ui/button";
import { TestimonialCard } from "./TestimonialCard";

const testimonialData = [
  {
    name: "Brooklyn Simmons",
    title: "Marketing Coordinator",
    image: "/images/reviewer-1.png",
    socialIcon: "/images/icons/linkedin-icon.png",
    socialAlt: "Linkedin logo",
    testimonial:
  "Reading Bloogy feels like a breath of fresh air. The posts are not only engaging but also filled with personal stories that resonate deeply. I always come away feeling more inspired and ready to tackle.",
  },
  {
    name: "Floyd Miles",
    title: "President of Sales",
    image: "/images/reviewer-2.png",
    socialIcon: "/images/icons/facebook-icon.png",
    socialAlt: "Facebook",
    testimonial:
  "Bloogy is my go-to blog for inspiration and thoughtful content. Every post feels like a conversation with a friend—real, insightful, & always inspiring. Love the variety of topics, and there's always something.",
  },
  {
    name: "Arlene McCoy",
    title: "Medical Assistant",
    image: "/images/reviewer-3.png",
    socialIcon: "/images/icons/x-icon.png",
    socialAlt: "X",
    testimonial:
  "I&apos;ve been following Bloogy for a while now, and it never disappoints! The content is so relatable and practical. It&apos;s helped me approach life with a fresh perspective, and I look forward to every new post!",
  },
  {
    name: "Savannah Nguyen",
    title: "Medical Assistant",
    image: "/images/reviewer-4.png",
    socialIcon: "/images/icons/instagram-icon.png",
    socialAlt: "Instagram",
    testimonial:
  "Bloogy has become a daily read for me. The insights and experiences shared here are so authentic and meaningful. It&apos;s one of the few blogs where I actually take something valuable away from every post",
  },
  {
    name: "Marvin McKinney",
    title: "Dog Trainer",
    image: "/images/reviewer-5.png",
    socialIcon: "/images/icons/threads-icon.png",
    socialAlt: "Threads",
    testimonial:
  "I can&apos;t recommend Bloogy enough! Whether you&apos;re looking for inspiration, tips, or just a good read, this blog covers it all. The writing style is both warm and informative, making it easy to get lost in the content.",
  },
  {
    name: "Ronald Richards",
    title: "Web Designer",
    image: "/images/reviewer-6.png",
    socialIcon: "/images/icons/Vector-icon.png",
    socialAlt: "Discord",
    testimonial:
  "Bloogy is one of the most refreshing blogs I&apos;ve come across. The content is always uplifting and thoughtful, with a focus on real-life experiences. It&apos;s like getting advice from a trusted friend.",
  },
  {
    name: "Jerome Bell",
    title: "President of Sales",
    image: "/images/reviewer-7.png",
    socialIcon: "/images/icons/linkedin-icon.png",
    socialAlt: "Linkedin logo",
    testimonial:
  "What I love most about Bloogy is how it feels so personal. The posts are filled with honesty and reflection, and they always leave me thinking about how I can apply the lessons to my own life.",
  },
  {
    name: "Guy Hawkins",
    title: "Dog Trainer",
    image: "/images/reviewer-8.png",
    socialIcon: "/images/icons/instagram-icon.png",
    socialAlt: "Instagram",
    testimonial:
  "I’ve read many blogs, but Bloogy stands out for its authenticity. The posts are well-written, insightful, and always seem to touch on topics that matter. It’s quickly become a favorite in my reading list!",
  },
  {
    name: "Bessie Cooper",
    title: "Nursing Assistant",
    image: "/images/reviewer-9.png",
    socialIcon: "/images/icons/x-icon.png",
    socialAlt: "X",
    testimonial:
  "Bloogy has such a unique voice. I appreciate how the posts are both insightful and easy to relate to. It feels like the blog really understands its readers, offering valuable content that always hits the mark.",
  },
];

export const ReviewListingSection = (): React.ReactElement => {
  return (
    <section className="w-full bg-neutralneutral-01 py-[119px]">
      <div className="container px-4 flex flex-col items-center gap-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
            ))}
        </div>
        <Button className="h-auto px-10 py-4 bg-theme-colortheme-color-01 hover:bg-theme-colortheme-color-01/90 rounded-[100px] text-black font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)] group hover:bg-neutralneutral-08 hover:text-white">
        Lode More Review
        </Button>
      </div>
    </section>
  );
};
