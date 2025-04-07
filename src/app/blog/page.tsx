import React, { JSX } from "react";
import { Rectangle } from "@/assets";
import Link from "next/link";
import { image34, image35, image36, image37, image38, image39, image40, image41, image42, image43 } from "@/assets";

interface BlogPost {
  slug: string;
  src: string;
  title: string | JSX.Element;
  title1: string;
}

const data : BlogPost[]= [
  {slug:"how-to-style-winter-whites", src: image34.src, title: "How To Style Winter Whites", title1: "Style" },
  {slug:"we-won-a-glossy-award", src: image35.src, title: "We Won A Glossy Award", title1: "Transparency" },
  {slug:"coordinate-your-style",
    src: image36.src,
    title: (
      <>
        Coordinate Your Style:
        <br />
        Matching Outfits for
        <br /> Everyone
      </>
    ),
    title1: "Style"},

];

{/*const data1 =[
  {slug:"black-friday-fund",src: image37.src, title:"Black Friday Fund 2023", title1:"Transparency"},
  { slug:"holiday-outfits", src: image38.src, 
    title:(
    <>What to Wear this Season:
    <br/>
    Holiday Outfits & Ideas
    
    </>),
    title1: "Style"},
    {slug:"thanksgiving-outfits-ideas", src:image39.src, title:"Thanksgiving Outfit Ideas", title1:"Style"},
]

const data2 =[
  {slug:"carbon-commitment", src:image41.src, title:"Carbon Commitment"},
  {slug:"environmental-initiatives", src:image42.src, title:"Environmental Initiatives"},
  {slug:"better-factories",src:image43.src, title:"Better Factories"},
]
*/}
const Blog = () => {
  
  return (
    <div>
      <img src={Rectangle.src} alt="" className="ml-25" />
      <div>
        <p className="text-[160px] font-maison-neue font-semibold mt-2 ml-25 leading-[176px]  hover:underline">
          everworld
        </p>
        <p className="ml-25 mt-2 leading-[33.24px] text-[24px] font-normal font-maison-neue  hover:underline">
          {" "}
          We&apos;re on a mission to clean up a dirty industry.
        </p>
        <p className="ml-25 text-[24px] leading-[33.24px] font-normal  font-maison-neue hover:underline">
          These are the people, stories, and ideas that will help us get there.
        </p>
      </div>

      <p className=" font-maison-neue  ml-25 font-semibold  leading-[72px] text-[54px] mt-23 hover:underline">
        The Latest
      </p>
      <div className="flex space-x-8 ml-26 mt-4">
        {data.map((post) => (
          
          <div key={post.slug}>
            <img src={post.src} alt=""/>
            <p className="text-[32px] leading-[40px] font-normal  font-maison-neue hover:underline mt-2">
              {post.title}
            </p>
            <Link href ={`blog/${post.slug}`}>
            <a>
            <button className="tracking-[0.2px] leading-[16px] text-[12px] font-maison-neue hover:underline font-semibold p-2 mt-2 py-1 px-6 rounded-full border-2 border-gray-200">
              {post.title1}
            </button>
            </a>
            </Link>
          </div>
        ))}
      </div>

      {/*<div className="flex space-x-8 ml-26 mt-28">
        {data1.map((data1)=>(
          <div key={data1.src}>
          <img src ={data1.src} alt=""/>
          <p className="leading-[40px] text-[32px] font-normal font-maison-neue mt-3 hover:underline">{data1.title}</p>
          <button className="tracking-[0.2px] leading-[16px] text-[12px] font-semibold font-maison-neue hover:underline mt-2 py-1 px-6 rounded-full border-2 border-gray-200">{data1.title1}</button>
          </div>
        ))}
      </div>
      <button className="ml-172 px-8 py-4 mt-8 tracking-[0.42px] leading-[21px] text-[14px] hover:underline hover-border-purple-400 font-semibold text-white bg-stone-950 rounded-sm">Load more Articals</button>
       
       <div>
        <img src={image40.src} alt="" className="ml-10 mt-8"/>
       </div>
       <p className="mt-8 ml-23 text-[54px] leading-[72px] font-semibold ">Our Progress </p>
     
     <div className="flex space-x-8 ml-24 mt-6 ">
      {data2.map((data2)=>(
        <div key={data2.src}>
        <img src ={data2.src} alt="" className=""/>
        <p className="leading-[40px] text-[32px] font-normal font-maison-neue mt-2">{data2.title}</p>
        </div>
      ))}
     </div>
     
     <p className="mt-30  px-15 bg-stone-950 text-white py-25 leading-[72px] text-[54px] font-semibold font-maison-neue ">Follow us on social for more <br></br>
     <span>
     <button className="leading-[21px] tracking[0.2px] font-semibold text-[14px] bg-white text-black px-7 py-4 rounded-sm text-xs">@Everlane Instagram</button>
     </span>
     </p>*/}

    </div>
  );
};

export default Blog;
