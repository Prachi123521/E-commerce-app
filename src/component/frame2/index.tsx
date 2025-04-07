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
          <div className="mt-4 flex gap-5  pt-8 items-center w-33px h-16px  ">
            <img src={Image1.src} alt="" />
            <p className="absolute hover:underline flex item-center ml-1 justify-center tracking-[0.2px] text-2xl text-[26px] font-normal display-400 text-white  pl-16 mt-5 mb-14 font-maison-neue">
              New Arrivals
            </p>
            <button
              className="absolute flex item-center justify-center font-maison-neue font-light pt-2 pb-2 pl-6 pr-6
 bg-white ml-16  mt-13 leading-[16.8px] text-[5px] width={240} height={41}  text-xs text-[11px] font-normal tracking-[1.4px]"
              value={list}
              onChange={handleChange}
            >
              SHOP THE LATEST
            </button>

            <img src={Image2.src} alt="" />
            <p className="absolute flex whitespace-nowrap hover:underline text-white text-2xl text-[30px] tracking-[0.2px] font-normal inset-0 ml-94 display/400 mt-47 font-light">
              Best-Sellers
            </p>
            <button
              className="absolute flex bg-white text-display/200 text-xs ml-90 whitespace-nowrap w-240px h-41px
mt-13 font-maison-neue font-normal item-center tracking-[1.4px] leading-[16.8px] text-[10px] font-normal pt-2 pb-2 pl-4 pr-4 "
            >
              SHOP YOUR FAVOURITES
            </button>

            <img src={Image3.src} alt="The Holiday Outfit" />
            <p className="absolute flex ml-164  whitespace-nowrap text-white text-2xl tracking-[0.2px] font-normal text-[25px] mb-12 hover:underline">
              The Holiday Outfit
            </p>
            <button className="flex  whitespace-nowrap absolute ml-171 text-center pt-2 pb-2 pl-7 pr-7 text-[10px] tracking-[1.4px] font-normal mt-12 bg-white ">
              SHOP OCCASSION
            </button>
          </div>
        </div>
      </div>
      <div className="pt-10 pr-40 pl-40 w-1316px h-281px">
        <img src={picture1.src} alt="" />
        <p className=" absolute inset-0 flex mt-483 text-white text-2xl font-maison-neue items-center justify-center hover:underline ">
          We&apos;re on a Mission To Clean Up the Industry
        </p>
        <span className="absolute inset-0 flex mt-492 font-light text-{24} text-white  font-maison-neue items-center justify-center text-sm tracking-[0.64] hover:underline">
          Read about our progress in our latest Impact Report.{" "}
        </span>
        <button className="absolute inset-0 mt-500  ">
          Learn More
        </button>
      </div>

      <div>
        <p className="text-center mt-30 text-xl font-maison-neue hover:underline">
          Everlane Favourites
        </p>
        <p className="text-center mt-3 font-maison-neue text-sm hover:underline">
          Beautifully Functional. Purposefully Designed. Consciously Crafted.{" "}
        </p>
      </div>

      <Collections1 />
    </>
  );
};

export default Collections;
