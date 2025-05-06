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
    <div className="overflow-x-hidden px-4 sm:px-8 md:px-12">
      <div className="text-center mt-12">
        <img
          src={section1.src}
          alt=""
          className="mx-auto mb-8  max-w-full h-auto"
        />
        <p className="font-normal mt-15  tracking-wide text-[18px] sm:text-[22px]  md:text-[28px] lg:text-[38px] leading-relaxed font-maison-neue ">
          At Everlane, we want the right choice to be as easy <br></br>as
          putting on a great T-shirt. That&apos;s why we partner<br></br> with
          the best, ethical factories around the world.<br></br> Source only the
          finest materials. And share those <br></br>stories with you-down to
          the true cost of every<br></br> product we make.It&apos;s a new way of
          doing things.<br></br>
          We call it Radical Transparency.
        </p>
      </div>

      <div className="flex flex-wrap items-stretch mt-16 ">
        <div className="flex-none w-full lg:w-1/2">
          <img
            src={image18.src}
            alt=""
            className="max-w-full h-auto object-cover "
          />
        </div>
        <div className="flex-none bg-neutral-200 p-6 lg:p-10 w-full lg:w-1/2  flex flex-col justify-center">
          <p className="text-xs  font-maison-neue font-maison-neue font-semibold hover:underline cursor-pointer tracking-wide">
            OUR FACTORIES
          </p>
          <p className="text-[20px]  sm:text-[28px] lg:text-[40px] mb-4 whitespace-nowrap hover:underline cursor-pointer font-normal font-maison-neue">
            Our ethical approach.
          </p>
          <p className="text-sm tracking-wide font-normal sm:text-base md:text-base lg:text-lg font-maison-neue ">
            We spend months finding the best factories around the world-the same
            <br></br>ones that produce your favourite designer labels. We visit
            them often and<br></br> build strong personal relationships with the
            owners.Each factory is given <br></br> a compliance audit to
            evalutate factors like fair wages, reasonable hours, <br></br>and
            environment. Our goal? A score of 90 or above for every factory.
          </p>
        </div>
      </div>

      <div className="my-12">
        <img
          src={image19.src}
          alt=""
          className="w-full h-auto object-cover max-w-full"
        />
      </div>

      <div className=" flex-none flex flex-col lg:flex-row items-stretch mt-16">
        <div className="w-full lg:w-1/2 bg-red-50 p-6 lg:p-10 flex flex-col justify-center">
          <p className="text-xs mb-2 font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer font-semibold">
            OUR QUALITY
          </p>
          <p className="text-[28px] lg:text-[40px] font-normal mb-4 font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer">
            Designed <br></br>to last.
          </p>
          <p className="whitespace-nowrap text-sm font-normal font-maison-neue ">
            At Everlane, we&apos;s re not on big trends. We want you to wear our
            pieces for<br></br> years, even decades, to come. That&apos;s why we
            source the finest materials<br></br> and factories for our timeless
            products- like our Grade-A cashmere<br></br> sweaters, italian
            shoes, and Peruvian Pema tees.
          </p>
        </div>
        <img
          src={image20.src}
          alt=""
          className="w-full lg:w-1/2 object-cover"
        />
      </div>

      <img src={image21.src} alt="" className="w-full my-12" />

      <div className="flex flex-col lg:flex-row items-center gap-8">
        <img src={pic2.src} alt="" className="w-full lg:w-1/2" />
        <div className="w-full lg:w-1/2">
          <p className="whitespace-nowrap text-sm mb-2 font-semibold font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer">
            OUR PRICES
          </p>
          <p className="whitespace-nowrap text-[28px] lg:text-[40px] mb-4 font-normal font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer ">
            Radically Transparent.
          </p>
          <p className="whitespace-nowrap text-sm font-normal font-maison-neue">
            We believe our customers have a right to know how much their clothes
            <br></br>cost to make. We reveal the true costs behind all of our
            products-from<br></br>
            materials to labor to tranportation-then offer them to you, minus
            the <br></br>traditional retail makeup.{" "}
          </p>
        </div>
      </div>

      <p className="mt-20 text-center text-[24px] lg:text-[32px] font-maison-neue font-normal hover:underline hover:decoration-blue-400 cursor-pointer">
        More to Explore
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-6 flex-wrap justify-center">
        {data.map((data) => (
          <div key={data.title} className="text-center">
            <img
              src={data.src}
              alt=""
              className="w-full max-w-[200px] mx-auto"
            />
            <p className="mt-4 text-[16px] font-semibold font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer mb-18">
              {data.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
