import React from "react";
//import { useRouter } from 'next/router';
import {
  image25,
  image26,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image27,
} from "@/assets";

const Stores = () => {
  const data = [
    { id: 1, src: image25.src, title: "SEATTLE", title1: "University Village" },
    {
      id: 2,
      src: image26.src,
      title: "SAN FRANCISSCO",
      title1: "Valencia Street, San Francissco",
    },

    { id: 3, src: image27.src, title: "PALO ALTO", title1: "Stanford" },
  ];

  const data1 = [
    { id: 4, src: image28.src, title: "LOS ANGELES", title1: "Abbot Kinney" },
    { id: 5, src: image29.src, title: "BOSTON", title1: "Seaport" },
    {
      id: 6,
      src: image30.src,
      title: "NEW YORK",
      title1: "Prince Street, New York",
    },
  ];

  const data2 = [
    { id: 7, src: image31.src, title: "BROOKLYN", title1: "Williamsburg" },
    {
      id: 8,
      src: image32.src,
      title: "KING OF PRUSSIA",
      title1: "King of Prussia",
    },
    { id: 9, src: image33.src, title: "GEORGETOWN", title1: "Georgetown" },
  ];

  return (
    <div  className="px-4 sm:px-6 lg:px-16">
      <p className="text-center mt-9 font-normal text-[32px] leading-[40px] font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer">
        Stores
      </p>
      <p className="text-center mt-4 tracking-[0.64px] leading-[24px] text-[16px] font-normal font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer">
        Find one of our 11 stores nearest you.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-3">
        {data.map((data) => (
          <div key={data.id}>
            <img src={data.src} alt="" className="w-full h-auto "/>
            <div>
              <p className="font-maison-neue mt-2 tracking-[1px] leading-[16px] text-[10px] font-normal hover:underline hover:decoration-blue-400 cursor-pointer">
                {data.title}
              </p>
              <p className="hover:underline  mt-1 tracking-[0.64px] leading-[24px] text-[16px] font-normal font-maison-neue hover:decoration-blue-400 cursor-pointer">
                {data.title1}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-3">
        {data1.map((data1) => (
          <div key={data1.id}>
            <img src={data1.src} alt="" />
            <div>
              <p className="whitespace-nowrap mt-2 tracking-[1px] leading-[16px] text-[10px] font-normal font-maison-neue hover:decoration-blue-400 cursor-pointer hover:underline">
                {data1.title}
              </p>
              <p className="whitespace-nowrap hover:underline  mt-1 tracking-[0.64px] leading-[24px] text-[16px] font-normal font-maison-neue hover:decoration-blue-400 cursor-pointer">
                {data1.title1}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-3 mb-12">
          {data2.map((data2) => (
            <div key={data2.id}>
              <img src={data2.src} alt="" />
              <p className="whitespace-nowrap mt-2  hover:underline hover:decoration-blue-400 cursor-pointer tracking-[1px] leading-[16px] font-normal text-[10px] font-maison-neue ">
                {data2.title}
              </p>
              <p className="whitespace-nowrap mt-1 tracking-[0.64px] leading-[24px] text-[16px] font-normal font-maison-neue hover:decoration-blue-400 cursor-pointer hover:underline">
                {data2.title1}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stores;
