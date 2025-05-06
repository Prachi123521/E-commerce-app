"use client";
import React from "react";
import { Image1, Image2, Image3, picture1 } from "@/assets";
import Collections1 from "../collections1";

const Collections = () => {
  return (
    <>
      {/* Top Three Image Sections */}
      <div className="mt-15 px-4 sm:px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1 - New Arrivals */}
        <div className="relative text-center">
          <img
            src={Image1.src}
            alt="New Arrivals"
            className="w-full h-auto object-cover"
          />
          <p className="absolute tracking-[0.2px] cursor-pointer leading-[48px] whitespace-nowrap top-[40%] top-1/5 left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-4xl font-maison-neue font-normal hover:underline">
            New Arrivals
          </p>
          <button className="absolute tracking-[1.4px] cursor-pointer top-1/2 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs sm:text-sm font-maison-neue font-normal px-13 py-2 mt-3 whitespace-nowrap hover:underline">
            SHOP THE LATEST
          </button>
        </div>

        {/* 2 - Best Sellers */}
        <div className="relative text-center">
          <img
            src={Image2.src}
            alt="Best Sellers"
            className="w-full h-auto object-cover"
          />
          <p className="absolute cursor-pointer tracking-[0.2px] text-[40px] leading-[48px] top-1/4 left-1/2 top-[40%] transform -translate-x-1/2 text-white text-lg sm:text-4xl whitespace-nowrap font-maison-neue font-normal hover:underline">
            Best-Sellers
          </p>
          <button className="absolute cursor-pointer tracking-[1.4px] top-1/2 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs sm:text-sm font-maison-neue font-normal whitespace-nowrap px-7 py-2 mt-4 hover:underline">
            SHOP YOUR FAVOURITES
          </button>
        </div>

        {/* 3 - Holiday Outfit */}
        <div className="relative text-center">
          <img
            src={Image3.src}
            alt="The Holiday Outfit"
            className="w-full h-auto object-cover"
          />
          <p className="absolute cursor-pointer top-[40%] top-1/4 left-1/2 transform -translate-x-1/2 text-white text-lg sm:text-4xl whitespace-nowrap font-maison-neue hover:underline">
            The Holiday Outfit
          </p>
          <button className="absolute cursor-pointer tracking-[1.4px] top-1/2 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs whitespace-nowrap sm:text-sm font-maison-neue font-normal px-16 py-2 mt-2 hover:underline">
            SHOP OCCASION
          </button>
        </div>
      </div>

      {/* Mission Banner */}
      <div className="relative mt-23 px-4 sm:px-10">
        <img
          src={picture1.src}
          alt="Mission Banner"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 ">
          <p className="sm:text-lg md:text-2xl font-maison-neue font-semibold hover:underline whitespace-nowrap">
            We&apos;re on a Mission To Clean Up the Industry
          </p>
          <p className=" text-sm sm:text-base md:text-lg font-maison-neue font-light hover:underline">
            Read about our progress in our latest Impact Report.
          </p>
          <button className="bg-white text-black font-normal px-8 py-2 text-xs sm:text-sm md:text-base hover:underline whitespace-nowrap">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Everlane Favorites */}
      <div className="mt-20 text-center px-4">
        <p className="text-xl sm:text-2xl font-maison-neue cursor-pointer hover:underline">
          Everlane Favourites
        </p>
        <p className="mt-2 text-sm sm:text-base font-maison-neue hover:underline cursor-pointer">
          Beautifully Functional. Purposefully Designed. Consciously Crafted.
        </p>
      </div>

      {/* Collections Section */}
      <Collections1 />
    </>
  );
};

export default Collections;
