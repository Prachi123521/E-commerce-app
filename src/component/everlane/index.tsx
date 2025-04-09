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
    vaiableWidth: false,
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
  };

  return (
    <>
      <div>
        <p className="text-center  font-maison-neue mt-24 leading-[40px] font-normal text-[26px]  cursor-pointer hover:underline">
          Everlane On You
        </p>
        <p className="text-center font-normal text-xs font-light hover:underline cursor-pointer  tracking-[1.4px] leading-[16.8px] font-maison-neue text-[14px] mt-4">
          Share your latest look with # EverlaneOnYou for a chance to be
          featured.
        </p>
        <p className=" text-sm text-center cursor-pointer font-normal tracking-[1.4px] underline hover:underline  ">
          Add Your Photo
        </p>
      </div>

      <div className=" absolute inset-0 ml-15 mt-1236">
        <button onClick={handlePrev}>
          {" "}
          <ChevronLeft />{" "}
        </button>
      </div>

      <div className="px-32">
        <Slider ref={sliderRef} {...settings}>
          {data.map((data) => (
            <div key={data.src} className="">
              <img src={data.src} alt="" className=" mt-2 items-center" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="absolute inset-0 ml-355 mt-1234 ">
        <button onClick={handleNext}>
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default Everlane;
