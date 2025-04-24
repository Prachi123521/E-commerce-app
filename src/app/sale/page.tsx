import React from "react";
import { frame, pic } from "@/assets";

const Sale = () => {
  return (
    <>
      <hr></hr>
      <div className="px-4 sm:px-8 lg:px-20 py-10">
        {/* Grid layout for links and images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 md:gap-3 lg:gap-2 lg:px-30 ">
          {/* Highlights */}
          <div>
            <h1 className="font-maison-neue text-[10px] font-semibold text-gray-500 tracking-[0.6px] leading-[16px] hover:underline cursor-pointer">
              HIGHLIGHTS
            </h1>
            <ul className="mt-5 space-y-4">
              {[
                "Shop All New Arrivals",
                "The Gift Guide",
                "New Bottoms",
                "New Tops",
                "T-Shirt Bundles",
                "Under $100",
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

          {/* Featured Shops */}
          <div>
            <h1 className="font-maison-neue text-[10px] font-semibold text-gray-500 tracking-[0.6px] leading-[16px] hover:underline cursor-pointer">
              FEATURED SHOPS
            </h1>
            <ul className="mt-5 space-y-4">
              {[
                "The Holiday Outfit Edit",
                "Giftable Sweaters",
                "Uniform & Capsule",
                "The Performance Chino Shop",
                "Top Rated Men's Clothing",
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

          {/* First Image */}

          <div className="col-span-2 flex gap-4 sm:gap-3 md:gap-2 lg:gap-4 ">
            <div>
              <img
                src={frame.src}
                alt="frame"
                className="w-full max-w-[200px] object-cover"
              />
            </div>

            {/* Second Image */}
            <div className="flex-1">
              <img
                src={pic.src}
                alt="pic"
                className="w-full max-w-[200px] object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sale;
