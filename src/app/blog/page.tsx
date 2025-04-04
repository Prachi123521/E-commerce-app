import React from "react";
import { Rectangle } from "@/assets";
import { image34, image35, image36 } from "@/assets";

const data = [
  { src: image34.src, title: "How To Style Winter Whites" },
  { src: image35.src, title: "We Won A Glossy Award" },
  {
    src: image36.src,
    title: (
      <>
        Coordinate Your Style:
        <br />
        Matching Outfits for
        <br /> Everyone
      </>
    ),
  },
];

const Blog = () => {
  return (
    <div>
      <img src={Rectangle.src} alt="" className="ml-25" />
      <div>
        <p className="text-7xl font-bold mt-4 ml-25 lineheight-176 hover:underline">
          everworld
        </p>
        <p className="ml-25 mt-4 text-xl font-maison- hover:underline">
          {" "}
          We&apos;re on a mission to clean up a dirty industry.
        </p>
        <p className="ml-25 text-xl font-maison-neue hover:underline">
          These are the people, stories, and ideas that will help us get there.
        </p>
      </div>

      <p className="text-5xl font-maison-neue  ml-25 font-bold mt-23 hover:underline">
        The Latest
      </p>
      <div className="flex space-x-8 ml-26 mt-4">
        {data.map((data) => (
          <div key={data.src}>
            <img src={data.src} alt="" />
            <p className="text-xl">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
