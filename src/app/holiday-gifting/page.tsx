"use client";
import React from "react";
import { frame, pic } from "@/assets"; // Update these to your actual image imports

const HolidayGifting = () => {
  return (
    <>
      <hr></hr>
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-10 max-w-[1440px] mx-auto">
        {/* Grid layout for links and images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 md:gap-3 lg:gap-2 lg:px-30">
          {/* Gift Ideas */}
          <div>
            <h1 className="font-maison-neue text-[10px] font-semibold text-gray-500 tracking-[0.6px] leading-[16px] hover:underline cursor-pointer">
              GIFT IDEAS
            </h1>
            <ul className="mt-5 space-y-4">
              {[
                "Gifts for Her",
                "Gifts for Him",
                "Under $50",
                "Under $100",
                "Matching Sets",
                "Beauty Gifts",
              ].map((item) => (
                <li
                  key={item}
                  className="text-[14px] font-normal tracking-[1.4px] leading-[16.8px] font-maison-neue hover:underline cursor-pointer"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Holiday Collections */}
          <div>
            <h1 className="font-maison-neue text-[10px] font-semibold text-gray-500 tracking-[0.6px] leading-[16px] hover:underline cursor-pointer">
              HOLIDAY COLLECTIONS
            </h1>
            <ul className="mt-5 space-y-4">
              {[
                "Cozy Essentials",
                "Festive Picks",
                "Stocking Stuffers",
                "Limited Edition",
                "Winter Accessories",
              ].map((item) => (
                <li
                  key={item}
                  className="text-[14px] font-normal tracking-[1.4px] leading-[16.8px] font-maison-neue hover:underline cursor-pointer"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Holiday Images */}
          <div className="col-span-2 flex gap-4 sm:gap-3 md:gap-2 lg:gap-4">
            <div>
              <img
                src={frame.src}
                alt="holiday frame"
                className="w-full max-w-[200px] object-cover"
              />
            </div>
            <div className="flex-1">
              <img
                src={pic.src}
                alt="gift image"
                className="w-full max-w-[200px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HolidayGifting;
