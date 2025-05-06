"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const item = [
  { title: "Privacy Policy", href: "/privacy policy" },
  { title: "Terms Of Service", href: "/terms of service" },
  {
    title: "Do Not Sell Or Share My Personal Information",
    href: "/do not sell or share my personal information",
  },
  {
    title: "CS Supply Or Chain Transparency",
    href: "/cs supply or chain transparency",
  },
  { title: "Vendor Code Of Conduct", href: "/vendor code of conduct" },
  { title: "Sitemap Pages", href: "/sitemap pages" },
  { title: "Sitemap Product", href: "/sitemap products" },
];

const FooterMenu = () => {
  const pathname = usePathname();

  return (
    <div className=" md: mt-2 w-1/3  gap-23 text/200 text-sm  font-maison-neue tracking[0.2px] leading-[16px]  text-[14px]  pb-12 font-normal  flex whitespace-nowrap font-light text-gray-600 ml-12 ">
      <h1>
        {item?.map((item) => (
          <Link
            key={item?.title}
            href={item?.href}
            className={`mr-4 hover:text-stone-400 hoverEffect relative group
                ${pathname === item?.href && "text-stone-400"}`}
          >
            {item?.title}
          </Link>
        ))}
      </h1>
    </div>
  );
};
export default FooterMenu;
