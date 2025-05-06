import React from "react";
import { image, image1, image2, image3, image4, image5 } from "@/assets";

const categories = [
  { img: image, label: "SHIRTS" },
  { img: image1, label: "DENIM" },
  { img: image2, label: "TEES" },
  { img: image3, label: "PANTS" },
  { img: image4, label: "SWEATERS" },
  { img: image5, label: "OUTERWEAR" },
];

const Category = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <p className="pt-20 text-center font-maison-neue text-xl sm:text-2xl font-normal hover:underline cursor-pointer leading-[33.24px]">
        Shop by Category
      </p>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 ">
        {categories.map((cat, index) => (
          <div key={index} className="text-center">
            <img
              src={cat.img.src}
              alt={cat.label}
              className="mx-auto w-[180px] sm:w-[200px] md:w-[220px] object-cover"
            />
            <p className="mt-2 inline-block text-sm font-normal font-maison-neue border-b-1 border-black hover:border-blue-400 tracking-[1.4px] leading-[20px] cursor-pointer">
              {cat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
