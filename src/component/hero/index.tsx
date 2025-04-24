import React from "react";
import { homeimage } from "@/assets";

const Hero = () => {
  return (
    <div className="mt-2 sm:px-8 md:px-12 lg:px-16 px-4 w-full">
      <img src={homeimage.src} alt="" className="w-full h-auto object-cover" />
    </div>
  );
};

export default Hero;
