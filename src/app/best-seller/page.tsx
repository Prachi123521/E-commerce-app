"use client";
import React from "react";
import { frame, pic } from "@/assets"; // Replace with your actual images

const BestSellers = () => {
  return (
    <>
      <hr />

      <div className="px-4 sm:px-8 lg:px-20 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-3 lg:gap-2 lg:px-30">
          {/* Top Picks */}
          <div>
            <h1 className="font-maison-neue text-[10px] font-semibold text-gray-500 tracking-[0.6px] leading-[16px] hover:underline cursor-pointer">
              TOP PICKS
            </h1>
            <ul className="mt-5 space-y-3">
              {[
                "The Day Glove",
                "The Perform Legging",
                "ReNew Transit Bag",
                "The Organic Cotton Tee",
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

          {/* Customer Favorites */}
          <div>
            <h1 className="font-maison-neue text-[10px] font-semibold text-gray-500 tracking-[0.6px] leading-[16px] hover:underline cursor-pointer">
              CUSTOMER FAVORITES
            </h1>
            <ul className="mt-5 space-y-3">
              {[
                "The Oversized Blazer",
                "The Dream Pant",
                "Modern Loafer",
                "The Utility Jean",
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

          {/* Images */}
          <div className="col-span-2 flex gap-4 items-center justify-center">
            <img
              src={frame.src}
              alt="bestseller-frame"
              className="w-full max-w-[200px] object-cover"
            />
            <img
              src={pic.src}
              alt="popular-product"
              className="w-full max-w-[200px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellers;
