"use client";
import React from "react";
import headerData from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className=" md: mt-8 w-1/3  gap-7 text-sm font-maison-neue capitalize pb-5 tracking-[0.2] leading-[16px] text-[12px] font-normal text-[200]  ">
      <h1>
        {headerData?.map((item) => (
          <Link
            key={item?.title}
            href={item?.href}
            className={`mr-4 hover:text-stone-400 hoverEffect relative group
         ${pathname === item?.href && "text-stone-400"}`}
          >
            {item?.title}
            <span
              className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-blue-400 hoverEffect group-hover:w-1/2 group-hover:left-0 
            ${pathname === item?.href && "w-1/2"} `}
            />
            <span
              className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-blue-400 hoverEffect group-hover:w-1/2 group-hover:right-0 
            ${pathname === item?.href && "w-1/2"} `}
            />
          </Link>
        ))}
      </h1>
    </div>
  );
};

export default HeaderMenu;
