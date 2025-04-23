"use client";
import React, { useState } from "react";
import { Rectangle } from "@/assets";
import Link from "next/link";
import {
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  image40,
  image41,
  image42,
  image43,
} from "@/assets";

const data = [
  {
    slug: "how-to-style-winter-whites",
    src: image34.src,
    title: "How To Style Winter Whites",
    title1: "Style",
  },
  {
    slug: "we-won-a-glossy-award",
    src: image35.src,
    title: "We Won A Glossy Award",
    title1: "Transparency",
  },
  {
    slug: "coordinate-your-style",
    src: image36.src,
    title: (
      <>
        Coordinate Your Style:
        <br />
        Matching Outfits for
        <br /> Everyone
      </>
    ),
    title1: "Style",
  },
];

const data2 = [
  { slug: "carbon-commitment", src: image41.src, title: "Carbon Commitment" },
  {
    slug: "environmental-initiatives",
    src: image42.src,
    title: "Environmental Initiatives",
  },
  { slug: "better-factories", src: image43.src, title: "Better Factories" },
];

const allArticals = [
  {
    slug: "black-friday-fund",
    src: image37.src,
    title: "Black Friday Fund 2023",
    title1: "Transparency",
  },
  {
    slug: "holiday-outfits",
    src: image38.src,
    title: (
      <>
        What to Wear this Season:
        <br />
        Holiday Outfits & Ideas
      </>
    ),
    title1: "Style",
  },
  {
    slug: "thanksgiving-outfits-ideas",
    src: image39.src,
    title: "Thanksgiving Outfit Ideas",
    title1: "Style",
  },
  {
    slug: "how-to-style-winter-whites",
    src: image34.src,
    title: "How To Style Winter Whites",
    title1: "Style",
  },
  {
    slug: "we-won-a-glossy-award",
    src: image35.src,
    title: "We Won A Glossy Award",
    title1: "Transparency",
  },
  {
    slug: "coordinate-your-style",
    src: image36.src,
    title: (
      <>
        Coordinate Your Style:
        <br />
        Matching Outfits for
        <br /> Everyone
      </>
    ),
    title1: "Style",
  },
];

const Blog = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleToggleArticles = () => {
    if (visibleCount >= allArticals.length) {
      setVisibleCount(3); // Show less: reset to initial
    } else {
      setVisibleCount((prevCount) => prevCount + 3); // Load more
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <img src={Rectangle.src} alt="" className="w-full mt-12" />
      <div className="mt-6">
        <p className="lg:text-[160px]  text-[48px] sm:text-[72px] font-maison-neue font-semibold mt-2 ml-25 leading-tight hover:underline hover:decoration-blue-400 cursor-pointer">
          everworld
        </p>
        <p className=" mt-4  text-[18px] sm:text-[20px] lg:text-[24px] font-normal font-maison-neue  hover:underline hover:decoration-blue-400 cursor-pointer">
          {" "}
          We&apos;re on a mission to clean up a dirty industry.
        </p>
        <p className=" text-[18px] sm:text-[20px] lg:text-[24px] font-normal  font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer">
          These are the people, stories, and ideas that will help us get there.
        </p>
      </div>

      <p className=" font-maison-neue  ml-25 font-semibold  leading-[72px] text-[54px] mt-23 mb-8 hover:underline hover:decoration-blue-400 cursor-pointer">
        The Latest
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((data) => (
          <div key={data.src}>
            <img src={data.src} alt="" className="w-full h-auto" />
            <Link href={`blog/${data.slug}`}>
              <p className="text-[20px] sm:text-[24px] font-normal font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer mt-2">
                {data.title}
              </p>
            </Link>

            <button className=" text-[12px] font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer font-semibold  mt-2 py-1 px-6 rounded-full border-2 border-gray-200">
              {data.title1}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allArticals.slice(0, visibleCount).map((artical, index) => (
            <div key={index}>
              <img src={artical.src} alt="" className="w-full h-auto" />
              <Link href={`/blog/${artical.slug}`}>
                <p className="text-[20px] sm:text-[24px] font-normal font-maison-neue mt-3 hover:underline hover:decoration-blue-400 cursor-pointer">
                  {artical.title}
                </p>
              </Link>
              <button className="text-[12px] font-semibold font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer mt-2 py-1 px-6 rounded-full border-2 border-gray-200">
                {artical.title1}
              </button>
            </div>
          ))}
        </div>
      </div>

      {allArticals.length > 3 && (
        <div className="mt-16 text-center">
          <button
            onClick={handleToggleArticles}
            className=" px-8 py-4  tracking-wide text-sm hover:underline font-maison-neue font-maison-neue hover:decoration-blue-400 cursor-pointer font-semibold text-white bg-stone-950 rounded-sm"
          >
            {visibleCount >= allArticals.length
              ? "Show Less"
              : "Load More Articles"}
          </button>
        </div>
      )}

      <div className="mt-16">
        <img src={image40.src} alt="" className="w-full h-auto" />
      </div>
      <div className="mt-16">
        <p className="mb-8 text-[36px] sm:text-[48px] md:text-[54px] font-semibold font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer">
          Our Progress{" "}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data2.map((data2) => (
          <div key={data2.src}>
            <img src={data2.src} alt="" className="w-full h-auto" />
            <p className="text-[20px] sm:text-[24px] font-normal font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer mt-2">
              {data2.title}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-24 bg-stone-950 text-white py-16 px-15 ">
        <p className=" mb-6 text-[32px] sm:text-[48px] font-semibold font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer">
          Follow us on social for more{" "}
        </p>

        <button className="font-semibold bg-white font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer text-black px-7 py-4 rounded-sm text-sm">
          @Everlane Instagram
        </button>
      </div>
    </div>
  );
};

export default Blog;
