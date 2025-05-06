import React from "react";
import { image6, image7, image8, image9, image10 } from "@/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    src: image6.src,
    title1: "The Waffle Long Sleev Crew",
    price: "$60",
    title2: "Bone",
  },
  {
    src: image7.src,
    title1: "The Bomber Jacket | Uniform",
    price: "$148",
    title2: "Toasted Coconut",
  },
  {
    src: image8.src,
    title1: "The Slim 4-Way Stretch Organic Jean |",
    title: "Uniform",
    price: "$98",
    title3: "Dark Indigo",
  },
  {
    src: image9.src,
    title1: "The Essential Organic Crew",
    price: "$30",
    title2: "Vintage Black",
  },
  {
    src: image10.src,
    title1: "The Heavyweight",
    title2: "Heathered Brown",
  },
];

const Slider2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = React.useRef<Slider>(null);

  const handleNext = () => sliderRef.current?.slickNext();
  const handlePrev = () => sliderRef.current?.slickPrev();

  return (
    <div className="relative px-4 sm:px-6 lg:px-12 py-15">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 bg-white z-10 "
      >
        <ChevronLeft />
      </button>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, index) => (
          <div key={index} >
            <img
              src={item.src}
              alt={item.title1}
              className="w-auto h-[420px] object-cover justify-center  "
            />

            {/* Title and Price on same line below the image */}
            <div className="mt-2 flex justify-between items-center text-[12px] font-maison-neue mx-auto">
              <p className="truncate hover:underline cursor-pointer">
                {item.title1}
              </p>
              <span className="font-semibold">{item.price}</span>
            </div>
            <p className="text-xs text-gray-500 font-maison-neue mb-12 hover:underline cursor-pointer">
              {item.title2}
            </p>
          </div>
        ))}
      </Slider>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white z-10"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default Slider2;
