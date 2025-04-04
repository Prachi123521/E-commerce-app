"use client";
import React from "react";
import { useState } from "react";
import { Image1, Image2, Image3, picture1 } from "@/assets";

import Collections1 from "../collections1";

const Collections = () => {
  const [list, setList] = useState("");

  const handleChange = () => {
    setList("");
    console.log("Button Click");
  };
  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 items-center pl-66 ">
        <div className=" group relative ">
          <div className="mt-4 flex gap-5  pt-8 items-center ">
            <img src={Image1.src} alt="" />
            <p className="absolute  flex item-center justify-center text-white text-3xl pl-16 display/400 mb-14 font-maison-neue">
              New Arrivals
            </p>
            <button
              className="absolute flex item-center justify-center font-maison-neue font-light 
 bg-white ml-15 py-2 px-6 mt-12 text-display/200 width={240} height={41}  text-xs text-[11px] font-normal tracking-[2]"
              value={list}
              onChange={handleChange}
            >
              SHOP THE LATEST
            </button>

            <img src={Image2.src} alt="" />
            <p className="absolute flex whitespace-nowrap text-white text-3xl inset-0 ml-94 display/400 mt-48">
              Best-Sellers
            </p>
            <button
              className="absolute flex bg-white text-display/200 text-xs ml-85 whitespace-nowrap
mt-13 py-2 px-4 font-maison-neue font-normal item-center tracking-[2] "
            >
              SHOP YOUR FAVOURITES
            </button>

            <img src={Image3.src} alt="The Holiday Outfit" />
            <p className="absolute flex ml-157  whitespace-nowrap text-white text-3xl dispaly/400 mb-12">
              The Holiday Outfit
            </p>
            <button className="flex  whitespace-nowrap absolute ml-170 text-center  text-xs tracking-[2] font-normal mt-12 bg-white py-2 px-6">
              SHOP OCCASSION
            </button>
          </div>
        </div>
      </div>
      <div className="pt-10 pr-42 pl-42 ">
        <img src={picture1.src} alt="" />
        <p className=" absolute inset-0 flex mt-470 text-white text-2xl font-maison-neue items-center justify-center hover:underline ">
          We&apos;re on a Mission To Clean Up the Industry
        </p>
        <span className="absolute inset-0 flex mt-478 font-light text-{24} text-white  font-maison-neue items-center justify-center text-sm tracking-[0.64] hover:underline">
          Read about our progress in our latest Impact Report.{" "}
        </span>
        <button className="absolute inset-0 mt-485 bg-white ">
          Learn More
        </button>
      </div>

      <div>
        <p className="text-center mt-30 text-xl font-maison-neue">
          Everlane Favourites
        </p>
        <p className="text-center mt-3 font-maison-neue text-sm">
          Beautifully Functional. Purposefully Designed. Consciously Crafted.{" "}
        </p>
      </div>

      <Collections1 />
    </>
  );
};

export default Collections;
