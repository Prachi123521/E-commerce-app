import React from "react";
import { frame } from "@/assets"; // Replace with actual tops/sweaters image assets if needed
import { pic } from "@/assets";

const TopsAndSweaters = () => {
  return (
    <>
      <hr></hr>
      <div className="px-4 sm:px-8 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 md:gap-3 lg:gap-2 lg:px-30">
          {/* Women's Tops & Sweaters */}
          <div>
            <h1 className="font-maison-neue text-[10px] font-semibold text-gray-500 tracking-[0.6px] leading-[16px] hover:underline cursor-pointer">
              WOMEN'S TOPS & SWEATERS
            </h1>
            <ul className="mt-5 space-y-4">
              {[
                "T-Shirts",
                "Tank Tops",
                "Blouses",
                "Button-Downs",
                "Lightweight Sweaters",
                "Cardigans",
                "Pullovers",
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

          {/* Men's Tops & Sweaters */}
          <div>
            <h1 className="font-maison-neue text-[10px] font-semibold text-gray-500 tracking-[0.6px] leading-[16px] hover:underline cursor-pointer">
              MEN'S TOPS & SWEATERS
            </h1>
            <ul className="mt-5 space-y-4">
              {[
                "T-Shirts",
                "Henleys",
                "Polo Shirts",
                "Sweaters",
                "Crewnecks",
                "Zip-Ups",
                "Cardigans",
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

          {/* Image Section */}
          <div className="col-span-2 flex gap-4 sm:gap-3 md:gap-2 lg:gap-4">
            <div>
              <img
                src={frame.src}
                alt="tops-sweaters-1"
                className="w-full max-w-[200px] object-cover"
              />
            </div>
            <div className="flex-1">
              <img
                src={pic.src}
                alt="tops-sweaters-2"
                className="w-full max-w-[200px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopsAndSweaters;
