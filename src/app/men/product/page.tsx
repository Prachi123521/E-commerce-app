"use client";
import React, { useState } from "react";
import {
  picture,
  image55,
  image59,
  star,
  image60,
  van,
  image61,
  image62,
  image63,
  image64,
  image65,
  image66,
  rating,
  frame0,
  ratings,
} from "@/assets";

const data = [
  { id: 1, src: picture.src },
  { id: 2, src: image55.src },
  { id: 3, src: image59.src },
  { id: 4, src: image60.src },
  { id: 5, src: image61.src },
  { id: 6, src: image62.src },
];

const data1 = [
  {
    id: 1,
    src: image63.src,
    title: "The Waffle Long-Sleeve Crew",
    title1: "Bone",
  },
  {
    id: 2,
    src: image64.src,
    title: "The Waffle Long-Sleeve Crew",
    title1: "Bone",
  },
  {
    id: 3,
    src: image65.src,
    title: "The Waffle Long-Sleeve Crew",
    title1: "Bone",
  },
  {
    id: 4,
    src: image66.src,
    title: "The Waffle Long-Sleeve Crew",
    title1: "Bone",
  },
];

const sizes = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "XXS",
  "3XL",
  "4XL",
  "5XL",
  "6XL",
  "7XL",
];

const Product = () => {
  const [showAllSizes, setShowAllSizes] = useState(false);
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 p-12">
        {/* Left Side */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          {data.map((item) => (
            <div key={item.id}>
              <img
                src={item.src}
                alt={`Product ${item.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Content: Text */}
        <div className="md:w-1/2 flex flex-col">
          <h2 className="mb-1 tracking-[0.2px] leading-[16px] text-[12px] font-normal font-maison-neue text-gray-500 hover:underline hover:decoration-blue-400">
            Men / Outerwear - Jackets & Coats
          </h2>

          <div className="leading-[33.24px] text-[24px] font-normal font-maison-neue">
            <p className="text-gray-700 text-lg hover:underline hover:decoration-blue-400">
              The ReWool&reg;{" "}
              <span className="line-through text-gray-400 ml-4">$238</span>
              <span className="ml-2">$167</span>
            </p>
            <p className="hover:underline hover:decoration-blue-400">
              Oversized Shirt Jacket
            </p>
          </div>

          <div className="flex gap-2 mt-2">
            <img src={star.src} alt="star rating" />
            <span className="text-sm text-gray-600 hover:underline hover:decoration-blue-400">
              5.0 <span className="text-gray-400">(2 Reviews)</span>
            </span>
          </div>

          <hr className=" mt-4" />

          {/* Color Info */}
          <div className="mt-1">
            <p className="text-sm text-gray-600 mb-2 tracking-[0.2px] leading-[16px] text-[12px] font-semibold font-maison-neue hover:underline hover:decoration-blue-400">
              Color
              <span className="font-medium text-black ml-2 tracking-[0.2px] leading-[16px] text-[12px] font-semibold font-maison-neue hover:underline hover:decoration-blue-400">
                Black / Olive
              </span>
            </p>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-black border border-gray-300"></div>
              <div className="w-6 h-6 rounded-full bg-[#708238] border border-gray-300"></div>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-3">
            <div className="flex items-center justify-between w-full max-w-md mb-2">
              <p className="text-sm text-gray-600 tracking-[0.2px] leading-[16px] text-[12px] font-semibold font-maison-neue hover:underline hover:decoration-blue-400">
                Size
              </p>
              <button
                className="text-sm text-gray-600 border-b border-gray-400 hover:text-black hover:border-black cursor-pointer tracking-[0.2px] leading-[16px] text-[12px] font-semibold font-maison-neue"
                onClick={() => setShowAllSizes(!showAllSizes)}
              >
                {showAllSizes ? "Hide Sizes" : "Select Size"}
              </button>
            </div>

            <div className="grid grid-cols-6 gap-x-2 gap-y-1 max-w-md">
              {(showAllSizes ? sizes : sizes.slice(0, 6)).map((size) => (
                <div
                  key={size}
                  className="w-12 h-8 border border-gray-300 flex items-center justify-center text-sm bg-gray-300 cursor-pointer hover:border-black hover:text-black transition"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Add to Bag Button */}
          <div className="flex justify-center mt-5">
            <button className="w-full py-2 bg-black text-white  hover:bg-gray-800 transition">
              Add to Bag
            </button>
          </div>

          <hr className="mt-5" />
          <div className="flex items-start gap-4 mt-4">
            <img src={van.src} alt="Van Icon" className="w-8 h-8 mt-1" />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-black tracking-[0.42px] leading-[21px] text-[14px] font-semibold font-maison-neue hover:underline hover:decoration-blue-400">
                Free Shipping
              </p>
              <p className="text-sm text-gray-600 tracking-[0.42px] leading-[21px] text-[14px] font-semibold font-maison-neue hover:underline hover:decoration-blue-400">
                Free shipping on all U.S. orders over $100.{""}
                <a
                  href="#"
                  className="text-sm text-gray-800 underline hover:text-black mt-1"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mt-4">
            <img src={van.src} alt="Van Icon" className="w-8 h-8 mt-1" />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-black tracking-[0.42px] leading-[21px] text-[14px] font-semibold font-maison-neue hover:underline hover:decoration-blue-400">
                Easy Returns
              </p>
              <p className="text-sm text-gray-600 tracking-[0.42px] leading-[21px] text-[14px] font-semibold font-maison-neue hover:underline hover:decoration-blue-400">
                Extended returns through January 31.{""}
                <a
                  href="#"
                  className="text-sm text-gray-800 underline hover:text-black mt-1"
                >
                  Return Details
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mt-4">
            <img src={van.src} alt="Van Icon" className="w-8 h-8 mt-1" />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-black tracking-[0.42px] leading-[21px] text-[14px] font-semibold font-maison-neue hover:underline hover:decoration-blue-400">
                Send It As A Gift Card
              </p>
              <p className="text-sm text-gray-600 tracking-[0.42px] leading-[21px] text-[14px] font-semibold font-maison-neue hover:underline hover:decoration-blue-400">
                Add a free personalized note during checkout.{""}
              </p>
            </div>
          </div>

          <hr className="mt-4"></hr>

          <p className="tracking-[0.2px] leading-[24px] text-[16px] font-semibold font-maison-neue mt-4 hover:underline hover:decoration-blue-400">
            Part shirt, part jacket, all style.
          </p>
          <p className=" tracking-[1.4px] leading-[16.8px] text-[14px] font-normal font-maison-neue mt-4">
            Meet your new chilly weather staple. The<br></br> ReWool&reg;
            Oversized Shirt Jacket has all the<br></br> classic shirt
            detailing-collar , cuffs with buttons ,<br></br> and a shirttail hem
            , along with two front chest flap <br></br> pockets and on-seam
            pockets. The sleeves are<br></br> fully lines for added warmth and
            it&apos; made with a <br></br>GRS-certified recycled Italian Wool
            and GRS-<br></br> certified recycled nylon blend. Think cozy, comfy,
            <br></br>and oh-so easy to layer.With the goal of<br></br>{" "}
            increasing the use of recycled materials <br></br>and reducing the
            harmful impacts of production , the <br></br>Global Recycled
            Standards (GRS) sets requirements<br></br> for third party
            certification of recycled input in
            <br></br>products-including chain of custody , social and <br></br>
            environmental practices , and chemical <br></br> restrictions
          </p>
        </div>
      </div>

      <div>
        <p className="ml-58 tracking-[0.2px] leading-[24px] text-[16px] font-semibold font-maison-neue hover:underline hover:decoration-blue-300">
          Recommended Products
        </p>
        <div className="flex gap-4 justify-center mt-4">
          {data1.map((data1) => (
            <div key={data1.id}>
              <img src={data1.src} alt="" />
              <p className="tracking-[0.2px] leading-[16px] text-[12px] font-normal font-maison-neue mt-4 hover:underline hover:decoration-blue-300">
                {data1.title}
              </p>
              <p className="tracking-[0.2px] text-gray-500 leading-[16px] text-[12px] font-normal font-maison-neue mt-2 hover:underline hover:decoration-blue-300">
                {data1.title1}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="leading-[33.24px] text-[24px] font-semibold font-maison-neue text-center mt-8">
        Reviews
      </p>
      <div className="flex justify-center mt-8">
        <img src={rating.src} alt="" />
      </div>

      <div className="w-full max-w-5xl mx-auto flex justify-between items-center mt-6 px-4">
        {/* Filter Section */}
        <div className="flex justify-between items-center w-40 border border-gray-300 px-6 py-4">
          <p className="text-sm font-medium text-gray-800 mr-5 ">Filter</p>
          <div className="w-3 h-3 flex flex-col justify-between gap-[2px]">
            <span className="w-full h-[2px] bg-black"></span>
            <span className="w-full h-[2px] bg-black"></span>
            <span className="w-full h-[2px] bg-black"></span>
          </div>
        </div>

        {/* Sort By Section */}
        <div className="flex flex-col items-start w-48 border border-gray-300 px-4 py-2 ">
          <select className="text-sm bg-transparent focus:outline-none cursor-pointer w-full">
            <option value="highest">Sort by</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
          <span className="text-xs text-gray-500 mt-1">
            Highest to Lowest Rating
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <img src={frame0.src} alt="" />
      </div>

      <div className="flex justify-center mt-4">
        <img src={ratings.src} alt="" />
      </div>

      <p className="leading-[33.24px] text-[24px] font-semibold font-maison-neue flex justify-center hover:underline hover:decoration-blue-400">
        Transparent Pricing
      </p>
      <p className="text-center mt-4 tracking-[1.4px] leading-[16.8px] text-[14px] font-normal font-maison-neue">
        We publish what it costs us to make every one of our products. There are
        a lot of costs<br></br>we can&apos;t neatly account for - like design,
        fittings, wear testing, rent on office and retail <br></br>space - but
        we believe you deserve to know what goes into making the products you{" "}
        <br></br>love.
      </p>
    </>
  );
};

export default Product;
