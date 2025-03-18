"use client"
import React from "react";
import Link from "next/link";
import footerData from "@/constants";
import { usePathname } from "next/navigation";


const FooterMenu = () =>{
    const pathname = usePathname();

    return(
        <div className =' md: mt-8 w-1/3  gap-7 text-sm font-maison-neue capitalize pb-12  '>
          <h1>{footerData?.map((item)=>(
            <Link key = {item?.title} href={item?.href} className ={`mr-4 hover:text-stone-400 hoverEffect relative group
                ${pathname === item?.href && "text-stone-400"}`}>{item?.title}
                </Link>
          ))}
          </h1>

            </div>
    )
}
export default FooterMenu;