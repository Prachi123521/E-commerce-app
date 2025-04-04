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
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    centerMode:false,
  
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
        <p className="text-center text-3xl font-maison-neue mt-24">
          Everlane On You
        </p>
        <p className="text-center font-normal text-sm  tracking-[2] mt-4">
          Share your latest look with # EverlaneOnYou for a chance to be
          featured.
        </p>
        <p className="underline text-sm text-center font-normal tracking-[2]  ">
          Add Your Photo
        </p>
      </div>
      

      <div className=" absolute inset-0 ml-9 mt-1280 ">
        <button onClick={handleNext}>
          {" "}
          <ChevronLeft />{" "}
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        
        {data.map((data) => (
          <div key={data.src} className="" >
            <img src={data.src} alt="" className="ml-17 mt-2 items-center" />
          </div>
        ))}
        
      </Slider>

      <div className="absolute inset-0 ml-355 mt-1280 ">
        <button onClick={handlePrev}>
          <ChevronRight />
        </button>
      </div>
    </>
  );
};

export default Everlane;
