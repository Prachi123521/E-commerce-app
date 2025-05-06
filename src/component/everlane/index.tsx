import React from "react";
import { frame14, frame20, frame21, frame19, frame22 } from "@/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";

const data = [
  { src: frame14.src },
  { src: frame20.src },
  { src: frame21.src },
  { src: frame19.src },
  { src: frame22.src },
];

const Everlane = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280, // large screens
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // phones
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  const sliderRef = React.useRef<Slider>(null);
  const handleNext = () => sliderRef.current?.slickNext();
  const handlePrev = () => sliderRef.current?.slickPrev();

  return (
    <div className="w-full relative mt-16">
      {/* Section Header */}
      <div className="text-center px-4">
        <p className="font-maison-neue text-[22px] sm:text-[26px] font-normal leading-[40px] cursor-pointer hover:underline">
          Everlane On You
        </p>
        <p className="text-sm sm:text-base font-light tracking-wide font-maison-neue mt-2 cursor-pointer hover:underline">
          Share your latest look with #EverlaneOnYou for a chance to be
          featured.
        </p>
        <p className="text-sm underline cursor-pointer hover:text-blue-500 mt-1">
          Add Your Photo
        </p>
      </div>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-[63%] top-1/2 transform -translate-y-1/2 z-10 bg-white p-2"
      >
        <ChevronLeft />
      </button>

      <div className="px-4 sm:px-10 lg:px-20 mt-10">
        <Slider ref={sliderRef} {...settings}>
          {data.map((item) => (
            <div key={item.src} className="">
              <img
                src={item.src}
                alt="Everlane user"
                className="w-full h-auto object-cover "
              />
            </div>
          ))}
        </Slider>
      </div>

      <button
        onClick={handleNext}
        className="absolute right-2 top-[63%] top-1/2 transform -translate-y-1/2 z-10 bg-white p-2"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Everlane;
