"use client";
import React, { useState } from "react";
import { image14, image15, image16, image17 } from "@/assets";

const items = [
  { src: image14.src, title: "Women's Sweaters", category: "women" },
  { src: image15.src, title: "Women's Bottom", category: "women" },
  { src: image16.src, title: "Women's Boots", category: "women" },
  { src: image17.src, title: "Men's Best Sellers", category: "men" },
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="px-4 md:px-10 lg:px-20">
      {/* Search Bar */}
      <div className="mt-8 flex items-center gap-2 lg:px-59">
        <input
          className="bg-gray-100 border rounded-lg py-2 px-4 text-sm w-full sm:w-[750px]"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />

        <button
          onClick={() => setSearchTerm("")}
          className={`text-sm font-light font-maison-neue hover:underline cursor-pointer whitespace-nowrap ${
            searchTerm ? "text-black cursor-default" : "text-gray-400"
          }`}
        >
          Cancel
        </button>
      </div>

      {/* Category buttons */}
      <div className="mt-6 flex gap-4 lg:px-56">
        <button
          className={`text-sm font-maison-neue border px-4 py-1 rounded-full ${
            selectedCategory === "all"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>
        <button
          className={`text-sm font-maison-neue border px-4 py-1 rounded-full ${
            selectedCategory === "women"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setSelectedCategory("women")}
        >
          Women
        </button>
        <button
          className={`text-sm font-maison-neue border px-4 py-1 rounded-full ${
            selectedCategory === "men"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setSelectedCategory("men")}
        >
          Men
        </button>
      </div>

      {searchTerm && (
        <div className="mt-6">
          <p className="tracking-wide font-normal text-sm mb-4 lg:px-20">
            Search Results
          </p>
          <ul className="lg:px-20">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <li
                  key={item.title}
                  className="mb-2 text-[14px] font-maison-neue underline hover:decoration-blue-400 cursor-pointer"
                >
                  {item.title}
                </li>
              ))
            ) : (
              <p className="text-gray-500">No results found.</p>
            )}
          </ul>
        </div>
      )}

      <div className="mt-9">
        <hr></hr>
      </div>

      {/* Always Visible: Popular Categories */}
      <p className="tracking-wide font-normal text-sm mt-10 cursor-pointer hover:underline lg:px-20">
        Popular Categories
      </p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-x-4 mb-12">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col">
            <img src={item.src} alt={item.title} className="w-full" />
            <p className="mt-2 font-normal text-[14px] font-maison-neue underline hover:decoration-blue-400 cursor-pointer">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
