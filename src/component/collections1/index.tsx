import React from "react";
import { image12, image13 } from "@/assets";
import { frame1, frame2, frame3 } from "@/assets";
import Slider2 from "../slider2";
import Everlane from "../everlane";
import Next from "../next";

const Collections1 = () => {
  return (
    <div className="w-full">
      {/* Sliders */}
      <Slider2 />
      <Next />

      {/* Gift Picks Images with Overlay Text */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-12 px-4 sm:px-8 lg:px-28">
        {/* Image 1 */}
        <div className="relative w-full max-w-sm">
          <img
            src={image12.src}
            alt="Gift 1"
            className="w-full h-auto object-cover "
          />
          <p className="absolute top-[-36] left-1/2 transform -translate-x-1/2 text-sm sm:text-base font-maison-neue bg-white/80 px-3 py-1 rounded hover:underline cursor-pointer">
            Our Holiday Gift Picks
          </p>

          <p className="text-xs sm:text-sm font-maison-neue tracking-wide hover:underline text-center">
            The best presents for everyone on your list.
          </p>
          <p className="text-sm text-center underline cursor-pointer hover:text-blue-500 mt-1">
            Read More
          </p>
        </div>

        {/* Image 2 */}
        <div className="relative w-full max-w-sm">
          <img
            src={image13.src}
            alt="Gift 2"
            className="w-full h-auto object-cover"
          />
          <p className="absolute top-[-36] left-1/2 transform -translate-x-1/2 text-sm sm:text-base font-maison-neue bg-white/80 px-3 py-1 rounded hover:underline cursor-pointer">
            Cleaner Fashion
          </p>
          <p className="text-xs sm:text-sm font-maison-neue tracking-wide hover:underline text-center">
            See the sustainability efforts behind each of our products.
          </p>
          <p className="text-sm  underline cursor-pointer hover:text-blue-500 mt-1 text-center">
            Learn More
          </p>
        </div>
      </div>

      {/* Horizontal Rule */}
      <hr className="mt-10 mx-6 sm:mx-20 border-black" />

      {/* Everlane Section */}
      <Everlane />

      {/* Bottom Frames */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 px-4 sm:px-8 lg:px-28 mb-16">
        <img
          src={frame1.src}
          alt="Frame 1"
          className="w-full sm:w-auto max-w-xs"
        />
        <img
          src={frame2.src}
          alt="Frame 2"
          className="w-full sm:w-auto max-w-xs"
        />
        <img
          src={frame3.src}
          alt="Frame 3"
          className="w-full sm:w-auto max-w-xs"
        />
      </div>
    </div>
  );
};

export default Collections1;
