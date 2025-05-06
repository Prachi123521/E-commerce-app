"use client";
import React, { useState } from "react";
import {
  image50,
  image51,
  image52,
  image54,
  image55,
  image56,
  image57,
  image58,
  rating,
} from "@/assets";

const data = [
  {
    id: 1,
    src: image50.src,
    title: "The Cloud Relaxed Cardigan",
    title0: "$188",
    discountedPrice: "$132",
    title1: "Black",
    category: "Cardigan",
    rating: 4.5,
  },
  {
    id: 2,
    src: image51.src,
    title: "The Organic Cotton Long-Sleeve Turtleneck",
    title0: "$50",
    discountedPrice: "$35",
    title1: "Black",
    title2: "ORGANIC COTTON",
    category: "Long-Sleeve",
    rating: 4,
  },
  {
    id: 3,
    src: image52.src,
    title: "The Wool Flannel Pant",
    title0: "$138",
    discountedPrice: "$97",
    title1: "Heather Charcoal",
    title2: "RENWED MATERIALS",
    title3: "CLEANER CHEMISTRY",
    category: "Pant",
    rating: 5,
  },
  {
    id: 4,
    src: image52.src,
    title: "The Cloud Relaxed Cardigan",
    title0: "$188",
    discountedPrice: "$32",
    title1: "Black",
    category: "Cardigan",
    rating: 3.5,
  },
  {
    id: 5,
    src: image54.src,
    title: "The Organic Cotton Long-Sleeve Turtleneck",
    title0: "$50",
    discountedPrice: "$35",
    title1: "Black",
    title2: "ORGANIC COTTON",
    category: "Long-Sleeve",
    rating: 4,
  },
  {
    id: 6,
    src: image55.src,
    title: "The Wool Flannel Pant",
    title0: "$138",
    discountedPrice: "$97",
    title1: "Heather Charcoal",
    title2: "RENWED MATERIALS",
    title3: "CLEANER CHEMISTRY",
    category: "Pant",
    rating: 3.5,
  },
  {
    id: 7,
    src: image56.src,
    title: "The Cloud Relaxed Cardigan",
    title0: "$188",
    discountedPrice: "$132",
    title1: "Black",
    category: "Cardigan",
    rating: 5,
  },
  {
    id: 8,
    src: image57.src,
    title: "The Organic Cotton Long-Sleeve Turtleneck",
    title0: "$50",
    discountedPrice: "$35",
    title1: "Black",
    title2: "ORGANIC COTTON",
    category: "Long-Sleeve",
    rating: 4.5,
  },
  {
    id: 9,
    src: image58.src,
    title: "The Wool Flannel Pant",
    title0: "$138",
    discountedPrice: "$97",
    title1: "Heather Charcoal",
    title2: "RENWED MATERIALS",
    title3: "CLEANER CHEMISTRY",
    category: "Pant",
    rating: 3.5,
  },
];

const categoryList = [
  "Everyone-All Gender Collection",
  "Accessories & Gift Cards",
  "Backpacks, Weekenders &  Duffle Bags",
  "Dress Shirts & Button Downs",
  "Hoodies & Sweatshirts",
];

const Men = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showCategoryDropdown, setShowCategoryDropdown] =
    useState<boolean>(true);
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [showColorDropdown, setShowColorDropdown] = useState(true);
  const [showMoreWaistSizes, setShowMoreWaistSizes] = useState(false);
  const allWaistSizes = [
    "30",
    "32",
    "34",
    "36",
    "38",
    "40",
    "42",
    "44",
    "46",
    "48",
    "50",
    "52",
  ];
  const visibleWaistSizes = showMoreWaistSizes
    ? allWaistSizes
    : allWaistSizes.slice(0, 8);
  const [showMoreClothingSizes, setShowMoreClothingSizes] = useState(false);

  const allClothingSizes = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
    "XXXL",
    "4XL",
    "5XL",
    "6XL",
    "7XL",
    "8XL",
  ];
  const visibleClothingSizes = showMoreClothingSizes
    ? allClothingSizes
    : allClothingSizes.slice(0, 8);

  const [showMoreColors, setShowMoreColors] = useState(false);

  const allColors = [
    { name: "Black", class: "bg-black" },
    { name: "Blue", class: "bg-blue-900" },
    { name: "Brown", class: "bg-brown-200" },
    { name: "Green", class: "bg-green-900" },
    { name: "Gray", class: "bg-gray-200" },
    { name: "Orange", class: "bg-orange-400" },
    { name: "Pink", class: "bg-pink-500" },
    { name: "Red", class: "bg-red-900" },
    { name: "Stone", class: "bg-stone-400" },
    { name: "Orange", class: "bg-orange-400" },
    { name: "Indigo", class: "bg-indigo-500" },
    { name: "Lime", class: "bg-lime-500" },
    { name: "Rose", class: "bg-rose-400" },
  ];

  const visibleColors = showMoreColors ? allColors : allColors.slice(0, 9);

  // ✅ Toggle category checkbox
  const handleCheckboxChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  // ✅ Optional: Filter products by selected categories
  const filteredProducts =
    selectedCategories.length > 0
      ? data.filter((item) => selectedCategories.includes(item.category))
      : data;

  return (
    <div className="flex mt-8 px-6 lg:px-20 gap-12">
      {/* Left Sidebar */}
      <div className="w-64 flex-shrink-0">
        <p className="text-sm font-medium mb-4 tracking-[0.2px] leading-[16px] text-[12px] font-normal font-maison-neue">
          249 Products
        </p>
        <div className="mt-7">
          <hr></hr>
        </div>

        {/* Category Section */}
        <div className="mb-6">
          <div
            className="flex justify-between items-center cursor-pointer mb-2"
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
          >
            <h3 className="text-sm font-semibold mt-4 tracking-[0.42px] leading-[21px] text-[14px] font-semibold font-maison-neue">
              Category
            </h3>
            <span
              className={`transform transition-transform duration-300 mt-5 ${
                showCategoryDropdown ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </div>

          {showCategoryDropdown && (
            <form className="space-y-2 text-sm text-gray-700 mt-3">
              {categoryList.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-2 cursor-pointer tracking-[0.2px] leading-[16px] text-[12px] font-normal font-maison-neue"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCheckboxChange(category)}
                    className="accent-black w-9 h-9 cursor-pointer "
                  />
                  {category}
                </label>
              ))}
              <button
                type="button"
                onClick={() => setShowMoreCategories(!showMoreCategories)}
                className="text-xs text-gray-600 underline mt-1 cursor-pointer"
              >
                {showMoreCategories ? "View Less" : "View More"}
              </button>
            </form>
          )}
        </div>
        <hr></hr>

        {/*Color Section */}

        <div className="mb-6">
          <div
            className="flex justify-between cursor-pointer mb-2"
            onClick={() => setShowColorDropdown((prev) => !prev)}
          >
            <h3 className="text-sm font-semibold mt-5">Color</h3>
            <span className="transform transition-transform duration-300 mt-5 cursor-pointer">
              ▼
            </span>
          </div>
          {showColorDropdown && (
            <div className="grid grid-cols-3 gap-x-4 gap-y-4 mt-4 lg:px-9">
              {visibleColors.map((color, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-1"
                >
                  <button
                    className={`w-6 h-6 rounded-full cursor-pointer border border-gray-300 ${color.class} hover:scale-105 transition-transform`}
                  />
                  <span className="text-[10px] text-gray-600">
                    {color.name}
                  </span>
                </div>
              ))}

              {/* View More / Less Button */}
              <div className="col-span-3 ">
                <button
                  onClick={() => setShowMoreColors(!showMoreColors)}
                  className="text-xs text-gray-600 underline mt-2 cursor-pointer"
                >
                  {showMoreColors ? "View Less" : "View More"}
                </button>
              </div>
            </div>
          )}
        </div>

        <hr className="my-5" />

        {/* Size Filter */}
        <div className="mb-6">
          <div className="flex justify-between items-center cursor-pointer mb-2">
            <h3 className="text-sm font-semibold">Size</h3>
            <span className="transform transition-transform duration-300">
              ▼
            </span>
          </div>
          <h4 className="text-xs font-semibold text-gray-600 mb-2 cursor-pointer">
            Waist
          </h4>
          <div className="grid grid-cols-4 gap-2 text-sm">
            {visibleWaistSizes.map((size) => (
              <button
                key={size}
                className="bg-gray-100 px-3 py-1 text-gray-700 border border-gray-300 cursor-pointer"
              >
                {size}
              </button>
            ))}
          </div>

          {/* Toggle View More / Less */}
          {allWaistSizes.length > 8 && (
            <button
              onClick={() => setShowMoreWaistSizes(!showMoreWaistSizes)}
              className="text-xs text-gray-600 underline mt-2 cursor-pointer"
            >
              {showMoreWaistSizes ? "View Less" : "View More"}
            </button>
          )}

          {/* Clothing Size Subsection */}
          <div className="mt-4">
            <h4 className="text-xs font-semibold text-gray-600 mb-2 cursor-pointer">
              Clothing Size
            </h4>
            <div className="grid grid-cols-4 gap-2 text-sm ">
              {visibleClothingSizes.map((size) => (
                <button
                  key={size}
                  className="border border-gray-300 px-3 py-1 text-gray-700 text-sm bg-white cursor-pointer hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>

            {allClothingSizes.length > 8 && (
              <button
                onClick={() => setShowMoreClothingSizes(!showMoreClothingSizes)}
                className="text-xs text-gray-600 underline mt-2 cursor-pointer"
              >
                {showMoreClothingSizes ? "View Less" : "View More"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Add more filter sections here if needed */}

      {/* Right Content: Products Grid */}
      <div className="flex-1">
        <div className="tracking-[0.2px] leading-[16px] text-[12px] font-normal font-maison-neue text-gray-500 cursor-pointer hover:underline hover:decoration-blue-400 mb-2">
          Home / Men
        </div>
        <h1 className="leading-[40px] text-[32px] font-normal font-maison-neue cursor-pointer hover:underline hover:decoration-blue-400 mb-2">
          Men&apos;s Clothing & Apparel - New Arrivals
        </h1>
        <p className="tracking-[0.64px] leading-[24px] text-[16px] font-normal font-maison-neue cursor-pointer hover:underline hover:decoration-blue-400 mb-4">
          Featured
        </p>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 ">
          {filteredProducts.map((item) => (
            <div key={item.id}>
              <div className="relative">
                <img src={item.src} alt={item.title} />
                <span className="absolute top-2 left-2 bg-white text-red-400 text-[10px] px-2 py-[2px] font-semibold">
                  30% off
                </span>
              </div>

              <div className="mt-2 flex justify-between items-center text-[12px] font-maison-neue">
                <p className="hover:underline cursor-pointer truncate">
                  {item.title}
                </p>
                <div className="flex items-center space-x-1">
                  <span className="line-through text-gray-500">
                    {item.title0}
                  </span>
                  <span className="font-semibold">{item.discountedPrice}</span>
                </div>
              </div>

              <p className="text-[12px] text-gray-500 hover:underline cursor-pointer">
                {item.title1}
              </p>

              <div className="flex gap-1 mt-1">
                <div className="w-4 h-4 rounded-full bg-black border"></div>
                <div className="w-4 h-4 rounded-full bg-green-900 border"></div>
                <div className="w-4 h-4 rounded-full bg-stone-400 border"></div>
              </div>

              <div className="flex gap-2 mt-2 flex-wrap">
                {item.title2 && (
                  <button className="text-[10px] text-gray-500 border border-gray-300 px-2 py-1">
                    {item.title2}
                  </button>
                )}
                {item.title3 && (
                  <button className="text-[10px] text-gray-500 border border-gray-300 px-2 py-1">
                    {item.title3}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Men;
