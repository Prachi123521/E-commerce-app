import React from "react";
import { image12, image13 } from "@/assets";
import { frame1, frame2, frame3 } from "@/assets";
import Slider2 from "../slider2";
import Everlane from "../everlane";
import Next from "../next";

const Collections1 = () => {
  return (
    <>
      <Slider2 />

      <Next />

      <p className="absolute inset-0 mt-995 text-lg font-maison-neue mr-140   text-center">
        Our Holiday Gift Picks{" "}
      </p>
      <p className="absolute inset-0 mt-995 ml-230 text-lg font-maison-neue ">
        Cleaner Fashion
      </p>

      <div className="width={505} height={626} pt-55  pl-55 mb-12 flex space-x-4">
        <img src={image12.src} alt="" />
        <img src={image13.src} alt="" />
        <p className="absolute ml-142 whitspace-nowrap mt-158 font-normal tracking-[1] font-maison-neue text-xs text-[14px]  ">
          See the sustainability efforts behind each of our products.
        </p>
        <p className="absolute ml-184 mt-168 underline text-sm font-maison-neue ">
          Learn More
        </p>
      </div>
      <p className="ml-39 absolute inset-0 mt-1166 whitespace-nowrap tracking-[1.4] leading-[16.8px] font-normal font-[400]  text-[14px] text-sm ml-80 ">
        The best presents for everyone on your list.
      </p>
      <p className="ml-105 font-maison-neue text-sm underline"> Read More</p>

      <hr className="mt-25 ml-12 mr-12 border-black"></hr>

      <Everlane />

      <div className="flex space-x-4 pl-28 mb-32 mt-25 ml-10">
        <img src={frame1.src} alt="" />
        <img src={frame2.src} alt="" />
        <img src={frame3.src} alt="" />
      </div>
    </>
  );
};

export default Collections1;
