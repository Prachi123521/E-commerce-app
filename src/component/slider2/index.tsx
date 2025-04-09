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
    infinte: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
  };

  const sliderRef = React.useRef<Slider>(null);
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
    console.log("hello");
  };

  return (
    <>
      <div className="absolute inset-0 ml-5 mt-640 ">
        <button onClick={handlePrev}>
          <ChevronLeft />
        </button>
      </div>

      <div className="px-10">
        <Slider ref={sliderRef} {...settings}>
          {data.map((data) => (
            <div key={data.title1}>
              <img src={data.src} alt="" className="mt-8 ml-20  h-[420px]" />
              <p className="text-xs tracking-[0.2] font-maison-neue whitespace-nowrap ml-20 ">
                {data.title1}

                <span className="ml-20 ">{data.price}</span>
              </p>

              <p className="text-xs text-gray-500 font-maison-neue ml-20 mb-12 hover:underline cursor-pointer">
                {data.title2}
                <span className="text-stone-950">{data.title}</span>
                <br></br>

                <span className="mt-4">{data.title3}</span>
              </p>
            </div>
          ))}
        </Slider>
      </div>

      <div className="absolute inset-0 ml-368 mt-640">
        <button onClick={handleNext}>
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default Slider2;
