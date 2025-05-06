import React from "react";
import { frame, pic } from "@/assets";

const ShoesAndBags = () => {
  return (
    <>
      <hr></hr>

      <div className="px-4 sm:px-8 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4 md:gap-3 lg:gap-2 lg:px-30">
          {/* Shoes */}
          <div>
            <h1 className="font-maison-neue text-[10px] font-semibold text-gray-500 tracking-[0.6px] leading-[16px] hover:underline cursor-pointer">
              SHOES
            </h1>
            <ul className="mt-5 space-y-3">
              {["Sneakers", "Boots", "Flats", "Heels", "Sandals"].map(
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

          {/* Bags */}
          <div>
            <h1 className="font-maison-neue text-[10px] font-semibold text-gray-500 tracking-[0.6px] leading-[16px] hover:underline cursor-pointer">
              BAGS
            </h1>
            <ul className="mt-5 space-y-3">
              {[
                "Tote Bags",
                "Crossbody Bags",
                "Backpacks",
                "Clutches",
                "Mini Bags",
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

          {/* Side-by-Side Images */}
          <div className="col-span-2 flex gap-4 sm:gap-3 md:gap-2 lg:gap-4 items-center  justify-center">
            <img
              src={frame.src}
              alt="shoe-img"
              className="w-full max-w-[200px] object-cover"
            />
            <img
              src={pic.src}
              alt="bag-img"
              className="w-full max-w-[200px] object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoesAndBags;
