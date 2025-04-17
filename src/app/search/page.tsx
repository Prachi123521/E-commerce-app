import React from "react";
import { image14, image15, image16, image17 } from "@/assets";

const items = [
  { src: image14.src, title: "Women's Sweaters" },
  { src: image15.src, title: "Women's Bottom" },
  { src: image16.src, title: "Women's Boots" },
  { src: image17.src, title: "Men's Best Sellers" },
];

const Search = () => {
  return (
    <div className="px-4 md:px-12 lg:px-20">
      <div className="mt-4">
        <hr></hr>
      </div>

      <div className="flex flex-col sm:flex-row items-center mt-6 gap-4 lg:px-56">
        <input
          className="bg-gray-100 border rounded-lg py-2 px-4 w-full sm:w-[750px] font-light "
          type="text"
          placeholder="Search"
        />
        <span>
          <button className="text-sm font-light font-maison-neue mb-2 hover:underline cursor-pointer">
            Cancel
          </button>
        </span>
      </div>
      <div className="mt-9">
        <hr></hr>
      </div>
      <p className="tracking-wide font-normal text-sm mt-10  cursor-pointer hover:underline lg:px-20">
        Popular Categories
      </p>

      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-x-4 mb-12 ">
        {items.map((items) => (
          <div key={items.title} className="flex flex-col">
            <img src={items.src} alt="" className="w-full " />
            <p className="mt-2 font-normal text-[14px] font-maison-neue underline hover:decoration-blue-400 cursor-pointer">
              {items.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
