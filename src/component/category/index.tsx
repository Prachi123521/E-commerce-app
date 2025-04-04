import React from "react";
import { image, image1, image2, image3, image4, image5 } from "@/assets";

const Category = () => {
  return (
    <div>
      <p className="pt-18 text-center font-maison-neue text-xl ">
        Shop by Category
      </p>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div className="group relative">
          <div className="mt-4 flex justify-between gap-4 ml-18">
            <img src={image.src} alt="" />

            <img src={image1.src} alt="" />
            <img src={image2.src} alt="" />
            <img src={image3.src} alt="" />
            <img src={image4.src} alt="" />
            <img src={image5.src} alt="" />
          </div>
        </div>
      </div>

      <div className=" mt-4 flex  items-center justify-center gap-46 underline ml-10 text-xs font-solid  tracking-[2] ">
        <p>SHIRTS</p>
        <p>DENIM</p>
        <p>TEES</p>
        <p>PANTS</p>
        <p>SWEATERS</p>
        <p>OUTERWEAR</p>
      </div>
    </div>
  );
};

export default Category;
