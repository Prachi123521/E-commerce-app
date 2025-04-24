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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = React.useRef<Slider>(null);

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="relative w-full py-10">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
      >
        <ChevronLeft />
      </button>

      {/* Slider */}
      <div className="px-4 sm:px-6 lg:px-12">
        <Slider ref={sliderRef} {...settings}>
          {/* Text Slide */}
          <div className="flex flex-col justify-center px-6 sm:px-40  mt-44  py-6">
            <div className="mt-45 sm:mt-16">
              <p className="text-sm sm:text-base text-right sm:text-left font-maison-neue tracking-wide mb-4 hover:underline">
                People Are Talking
              </p>
              <img src={star.src} alt="star" className="mb-4 w-6 sm:w-8" />
              <p className="text-base sm:text-xl font-maison-neue mb-4 leading-snug hover:underline cursor-pointer">
                &quot;Love this shirt! Fits perfectly and{" "}
                <br className="hidden sm:block" />
                the fabric is thick without <br className="hidden sm:block" />
                being stuff.&quot;
              </p>
              <p className="text-xs sm:text-sm mt-2 hover:underline cursor-pointer">
                -- JonSnSF,{" "}
                <span className="border-b-2 border-black hover:border-blue-400">
                  The HeavyWeight OverShirt
                </span>
              </p>
            </div>
          </div>

          {/* Image Slide */}
          <div className="flex justify-center items-center px-4 sm:px-12 py-6">
            <img
              src={image11.src}
              alt="testimonial"
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </div>
        </Slider>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
      >
        <ChevronRight />
      </button>

      <hr className="mt-16 mx-6 sm:mx-20 border-black" />
    </div>
  );
};

export default Next;
