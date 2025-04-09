import React from "react";
import { image11, star } from "@/assets";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";

const Next = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
      <div className=" absolute inset-0 ml-12 mt-822 ">
        <button onClick={handlePrev}>
          <ChevronLeft />
        </button>
      </div>

      <div className="px-18">
        <Slider ref={sliderRef} {...settings}>
          <div className="height={695} width={530}  flex  flex-col  ">
            <p className="whitespace-nowrap text-right absolute ml-45 mt-83 tracking-[0.64px] cursor-pointer leading-[24px] font-maison-neue text-[16px] font-normal hover:underline">
              People Are Talking{" "}
            </p>
            <img src={star.src} alt="" className="ml-45  absolute mt-98" />
            <p className=" text-xl text-bottom mt-108 font-maison-neue ml-44 hover:underline cursor-pointer leading-[33.24px] text-[24px] font-normal font-maison-neue">
              &quot;Love this shirt! Fits perfectly and <br></br>
              the fabric is thick without<br></br>
              being stuff.&quot;
            </p>
            <p className="ml-45 mt-12 text-sm hover:underline cursor-pointer tracking-[2]">
              -- JonSnSF ,{" "}
              <span className="border-b-2 border-black hover:border-blue-400">
                The HeavyWeight OverShirt
              </span>
            </p>
          </div>

          <div className="height={695} width={1400}  flex  flex-col  ">
            <img src={image11.src} alt="" className="mt-25 mb-12" />
          </div>
        </Slider>
      </div>

      <div className="absolute inset-0 mt-822 ml-350">
        <button onClick={handleNext}>
          <ChevronRight />
        </button>
      </div>
      <hr className="mt-28 ml-50 mr-50  border-black "></hr>
    </>
  );
};

export default Next;
