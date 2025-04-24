import React from "react";
import { frame, pic } from "@/assets";

const Outerwear = () => {
  return (
    <>
      <hr></hr>
      <div className="px-4 sm:px-8 lg:px-20 py-10">
        {/* Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-4 md:gap-3 lg:gap-2 lg:px-30">
          {/* By Type */}
          <div>
            <h1 className="font-maison-neue text-[10px] font-semibold text-gray-500 tracking-[0.6px] leading-[16px] hover:underline cursor-pointer">
              BY TYPE
            </h1>
            <ul className="mt-5 space-y-4">
              {[
                "Jackets",
                "Coats",
                "Parkas",
                "Trench Coats",
                "Puffer Jackets",
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

          {/* By Material */}
          <div>
            <h1 className="font-maison-neue text-[10px] font-semibold text-gray-500 tracking-[0.6px] leading-[16px] hover:underline cursor-pointer">
              BY MATERIAL
            </h1>
            <ul className="mt-5 space-y-4">
              {["Leather", "Denim", "Wool", "Fleece", "Down"].map((item) => (
                <li
                  key={item}
                  className="text-[14px] font-normal tracking-[1.4px] leading-[16.8px] font-maison-neue hover:underline cursor-pointer"
                >
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* By Style */}
          <div>
            <h1 className="font-maison-neue text-[10px] font-semibold text-gray-500 tracking-[0.6px] leading-[16px] hover:underline cursor-pointer">
              BY STYLE
            </h1>
            <ul className="mt-5 space-y-4">
              {["Casual", "Streetwear", "Minimalist", "Techwear", "Luxury"].map(
                (item) => (
                  <li
                    key={item}
                    className="text-[14px] font-normal tracking-[1.4px] leading-[16.8px] font-maison-neue hover:underline cursor-pointer"
                  >
                    <a href="#">{item}</a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Images Section */}
          <div className="col-span-1 flex flex-row gap-4 mt-4 md:mt-0 justify-center items-center">
            <img
              src={frame.src}
              alt="outerwear-1"
              className="w-full max-w-[200px] object-cover"
            />
            <img
              src={pic.src}
              alt="outerwear-2"
              className="w-full max-w-[200px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Outerwear;
