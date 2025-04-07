import React from "react";
import { section1 } from "@/assets";
import {
  image18,
  image19,
  image20,
  image21,
  pic2,
  image22,
  image23,
  image24,
} from "@/assets";


const data = [
  { src: image22.src, title: "Our Products" },
  { src: image23.src, title: "Our Stores" },
  { src: image24.src, title: "Careers" },
];

const About = () => {
  return (
    <div>
      <div>
        <img src={section1.src} alt="" className="ml-14" />
        <p className="text-center font-normal mt-14 tracking-[0.2px] justify-between leading-[53.2px] text-[38px]">
          At Everlane, we want the right choice to be as easy <br></br>as
          putting on a great T-shirt. That&apos;s why we partner<br></br> with
          the best, ethical factories around the world.<br></br> Source only the
          finest materials. And share those <br></br>stories with you-down to
          the true cost of every<br></br> product we make.It&apos;s a new way of
          doing things.<br></br>
          We call it Radical Transparency.
        </p>
      </div>

      <div className="flex ">
        <img src={image18.src} alt="" className="mt-12 w-700 " />
        <div className="bg-stone-300  w-700 mt-12">
          <p className="mt-82 ml-20 whitespace-nowrap pr-[70px] text-xs font-semibold tracking-[0.2px] leading-[16px] text-[12px]">
            OUR FACTORIES
          </p>
          <p className="ml-20 whitespace-nowrap text-4xl tracking-[0.2]">
            Our ethical approach.
          </p>
          <p className="ml-20 mt-6 tracking-[1.2] font-maison-neue whitespace-nowrap">
            We spend months finding the best factories around the world-the same
            <br></br>ones that produce your favourite designer labels. We visit
            them often and<br></br> build strong personal relationships with the
            owners.Each factory is given <br></br> a compliance audit to
            evalutate factors like fair wages, reasonable hours, <br></br>and
            environment. Our goal? A score of 90 or above for every factory.
          </p>
        </div>
      </div>

      <div>
        <img src={image19.src} alt="" className="w-1400" />
      </div>

      <div className=" flex ">
        <div>
          <p className="ml-12 mt-45 text-xs font-bold">OUR QUALITY</p>
          <p className="ml-12 text-5xl">
            Designed <br></br>to last.
          </p>
          <p className="whitespace-nowrap ml-12 mt-5">
            At Everlane, we&apos;s re not on big trends. We want you to wear our
            pieces for<br></br> years, even decades, to come. That&apos;s why we
            source the finest materials<br></br> and factories for our timeless
            products- like our Grade-A cashmere<br></br> sweaters, italian
            shoes, and Peruvian Pema tees.
          </p>
        </div>
        <img src={image20.src} alt="" className="ml-64" />
      </div>

      <img src={image21.src} alt="" className="w-1400" />

      <div className="flex">
        <img src={pic2.src} alt="" className="ml-12" />
        <div className="mt-56 ml-25">
          <p className="whitespace-nowrap">OUR PRICES</p>
          <p className="whitespace-nowrap text-4xl">Radically Transparent.</p>
          <p className="whitespace-nowrap mt-9 tracking-[1.4] font-base">
            We believe our customers have a right to know how much their clothes
            <br></br>cost to make. We reveal the true costs behind all of our
            products-from<br></br>
            materials to labor to tranportation-then offer them to you, minus
            the <br></br>traditional retail makeup.{" "}
          </p>
        </div>
      </div>
      <p className="mt-12 text-center text-3xl">More to Explore</p>
      <div className="flex space-x-8 ml-55 mt-8 text-center">
        {data.map((data) => (
          <div key={data.title}>
            <img src={data.src} alt="" />
            <p className="mt-4 tracking-[0.2] text-sm font-base hover:underline mb-18">
              {data.title}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default About;
