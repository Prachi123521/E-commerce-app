import React from "react";
import { frame, pic } from "@/assets";

const Clothing = () => {
  return (
    <>
      <hr></hr>

      <div className="px-4 sm:px-8 lg:px-20 py-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 md:gap-3 lg:gap-2 lg:px-30">
          {/* Women’s Clothing */}
          <div>
            <h1 className="font-maison-neue text-[10px] font-semibold text-gray-500 tracking-[0.6px] leading-[16px] hover:underline cursor-pointer">
              WOMEN'S CLOTHING
            </h1>
            <ul className="mt-5 space-y-4">
              {[
                "Tops & Tees",
                "Dresses & Jumpsuits",
                "Sweaters",
                "Outerwear",
                "Activewear",
                "Pants & Jeans",
                "Loungewear",
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

          {/* Men’s Clothing */}
          <div>
            <h1 className="font-maison-neue text-[10px] font-semibold text-gray-500 tracking-[0.6px] leading-[16px] hover:underline cursor-pointer">
              MEN'S CLOTHING
            </h1>
            <ul className="mt-5 space-y-4">
              {[
                "T-Shirts",
                "Shirts",
                "Sweaters & Hoodies",
                "Jackets & Coats",
                "Pants & Jeans",
                "Shorts",
                "Activewear",
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

          {/* Clothing Images */}
          <div className="col-span-2 flex gap-4 sm:gap-3 md:gap-2 lg:gap-4">
            <div>
              <img
                src={frame.src}
                alt="clothing-look-1"
                className="w-full max-w-[200px] object-cover"
              />
            </div>
            <div className="flex-1">
              <img
                src={pic.src}
                alt="clothing-look-2"
                className="w-full max-w-[200px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clothing;
