import React from "react";
import { image12, image13 } from "@/assets";
import { frame1, frame2, frame3 } from "@/assets";
import Slider2 from "../slider2";
import Everlane from "../everlane";
import Next from "../next";

const Collections1 = () => {
  return (
    <>
      <Slider2 />
      

      <Next />

      <p className="absolute inset-0 mt-979 text-lg font-maison-neue mr-140 hover:underline  text-center ml-42">
        Our Holiday Gift Picks{" "}
      </p>
      <p className="absolute inset-0 mt-979 ml-223 text-lg font-maison-neue hover:underline ">
        Cleaner Fashion
      </p>

      <div className="w-[505px] h-[626px] pt-34 ml-89 mb-12 flex space-x-4 ">
        <img src={image12.src} alt="" />
        <img src={image13.src} alt="" />
        <p className="absolute ml-107 whitspace-nowrap mt-127 font-normal  hover:underline tracking-[1px] font-maison-neue text-xs text-[12px]  ">
          See the sustainability efforts behind each of our products.
        </p>
        <p className="absolute ml-145 mt-137 underline text-sm hover:underline tracking-[1.4px] leading-[20px] font-bold text-[10px] font-normal font-maison-neue ">
          Learn More
        </p>
      </div>
      <p className="ml-104 absolute inset-0 mt-1118 whitespace-nowrap tracking-[1.4px] leading-[16.8px] font-normal font-[400] hover:underline text-[12px]  ml-80 ">
        The best presents for everyone on your list.
      </p>
      <p className="ml-135 font-maison-neue hover:underline mt-15 tracking-[1.4px] leading-[20px] text-[10px] font-bold font-normal text-sm underline"> Read More</p>

      <hr className="mt-25 ml-50 mr-50 border-black"></hr>

      <Everlane />

      <div className="flex space-x-4 pl-28 mb-32 mt-25 ml-10">
        <img src={frame1.src} alt="" />
        <img src={frame2.src} alt="" />
        <img src={frame3.src} alt="" />
      </div>
    </>
  );
};

export default Collections1;
