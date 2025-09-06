import React from "react";
import { Button } from "../ui/button";
import { BlogCard } from "../BlogCard";

const blogPosts = [
  {
    id: 1,
    image: "/images/blog-1.png",
    title: "The Art of Minimalism, Decluttering Your Life",
     description:
   "In today&apos;s fast-paced world, it&apos;s easy to feel overwhelmed by clutter. Minimalism offers a solution by focusing on the essentials.",
    hasRoundedTop: true,
  },
  {
    id: 2,
    image: "/images/blog-2.png",
    title: "The Power of Positive Thinking, Transforming Your Mindset",
     description:
   "Positive thinking can have a profound impact on your mental and emotional well-being. Learn how to cultivate a positive mindset.",
    hasRoundedTop: true,
  },
  {
    id: 3,
    image: "/images/blog-3.png",
    title: "Healthy Eating Habits, Fueling Your Body for Success",
    description:
  "Good nutrition is essential for overall health and well-being. Discover the benefits of a healthy diet, tips for making nutritious choices.",
    hasRoundedTop: true,
  },
  {
    id: 4,
    image: "/images/blog-4.png",
    title: "Effective Time Management, Maximizing Your Productivity",
    description:
      "Are you feeling overwhelmed by deadlines and commitments? Learn effective time management techniques to improve your productivity.",
    hasRoundedTop: true,
  },
  {
    id: 5,
    image: "/images/blog-hub-5.png",
    title: "Effective Time Management, Max Your Productivity",
    description:
      "Good nutrition is essential for overall health and well-being. Discover the benefits of a healthy diet, tips for making nutritious choices.",
    hasRoundedTop: true,
  },
  {
    id: 6,
    image: "/images/blog-hub-6.png",
    title: "The Art of Minidisk, Decluttering Your Life",
    description:
      "In today's fast-paced world, it's easy to feel overwhelmed by clutter. Minimalism offers a solution by focusing on the essentials.",
    hasRoundedTop: true,
  },
  {
    id: 7,
    image: "/images/blog-hub-7.png",
    title: "The Power of Positive Thinking, Transforming Your Mindset",
    description:
      "Positive thinking can have a profound impact on your mental and emotional well-being. Learn how to cultivate a positive mindset.",
    hasRoundedTop: true,
  },
  {
    id: 8,
    image: "/images/blog-hub-8.png",
    title: "Healthy Eating Habits, Fueling Your Body for Success",
    description:
      "Are you feeling overwhelmed by deadlines and commitments? Learn effective time management techniques to improve your productivity.",
    hasRoundedTop: true,
  },
  {
    id: 9,
    image: "/images/blog-hub-9.png",
    title: "Exploring the World, Tips for Traveling on a Budget",
    description:
      "Traveling can be an enriching experience, but it doesn't have to break the bank. Discover tips for traveling on a budget, finding affordable.",
    hasRoundedTop: true,
  },
];

export const BlogListingSection = (): React.ReactElement => {
  return (
    <section className="w-full bg-neutralneutral-01 py-[119px]">
      <div className="container px-4 flex flex-col items-center gap-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}          
        </div>
        <Button className="h-auto px-10 py-4 bg-theme-colortheme-color-01 hover:bg-theme-colortheme-color-01/90 rounded-[100px] text-black font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)] group hover:bg-neutralneutral-08 hover:text-white">
        Lode More Blog
        </Button>
      </div>
    </section>
  );
};
