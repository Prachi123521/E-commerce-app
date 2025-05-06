import React from "react";
import { frame, pic } from "@/assets";

const PantsAndJeans = () => {
  return (
    <>
      <hr></hr>

      <div className="px-4 sm:px-8 lg:px-20 py-10">
        {/* Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 md:gap-3 lg:gap-2 lg:px-30">
          {/* Women's Pants & Jeans */}
          <div>
            <h1 className="font-maison-neue text-[10px] font-semibold text-gray-500 tracking-[0.6px] leading-[16px] hover:underline cursor-pointer">
              WOMEN&apos;S PANTS & JEANS
            </h1>
            <ul className="mt-5 space-y-4">
              {[
                "High-Rise Jeans",
                "Straight-Leg Jeans",
                "Wide-Leg Pants",
                "Work Pants",
                "Relaxed Fit",
                "Cropped Pants",
                "Utility Pants",
                "Leggings",
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

          {/* Men's Pants & Jeans */}
          <div>
            <h1 className="font-maison-neue text-[10px] font-semibold text-gray-500 tracking-[0.6px] leading-[16px] hover:underline cursor-pointer">
              MEN&apos;S PANTS & JEANS
            </h1>
            <ul className="mt-5 space-y-4">
              {[
                "Slim Fit Jeans",
                "Straight Fit Jeans",
                "Performance Chinos",
                "Relaxed Pants",
                "Workwear Pants",
                "Joggers",
                "Denim Shorts",
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
          <div className="col-span-2 flex gap-4 sm:gap-3 md:gap-2 lg:gap-4">
            <div>
              <img
                src={frame.src}
                alt="pants-jeans-1"
                className="w-full max-w-[200px] object-cover"
              />
            </div>
            <div className="flex-1">
              <img
                src={pic.src}
                alt="pants-jeans-2"
                className="w-full max-w-[200px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PantsAndJeans;
