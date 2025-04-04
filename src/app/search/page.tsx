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
    <div>
      <div className="mt-4">
        <hr></hr>
      </div>

      <div>
        <input
          className="bg-gray-100 border  rounded-lg py-2 px-78 p-16px ml-83 mt-6 font-light "
          type="text"
          placeholder="Search"
        />
        <span>
          <button className="ml-5 font-light font-maison-neue mb-2 hover:underline">
            Cancel
          </button>
        </span>
      </div>
      <div className="mt-9">
        <hr></hr>
      </div>
      <p className="tracking-[1.4] text-sm ml-50 mt-10 ">Popular Categories</p>

      <div className="flex space-x-8 ml-50 mt-4">
        {items.map((items) => (
          <div key={items.title}>
            <img src={items.src} alt="" />
            <p className="mt-2 text-sm underline">{items.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
