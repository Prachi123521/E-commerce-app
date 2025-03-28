import React from 'react';
import { frame14 } from '@/assets';
import {frame20} from "@/assets";
import {frame21} from '@/assets';
import {frame19} from '@/assets';
import {frame22} from '@/assets'; 
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import Slider from 'react-slick';


const data = [
    {src:frame14.src},
    {src:frame20.src},
    {src:frame21.src},
    {src:frame19.src},
    {src:frame22.src},
]

const Everlane = () => {
    const settings = {
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false
        };
        
        const sliderRef = React.useRef<Slider>(null);
        const handleNext  = () => {
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
<div>
    <div>
       <p className='text-center text-3xl font-maison-neue mt-24'>Everlane On You</p>
       <p className='text-center font-normal text-sm  tracking-[2] mt-4'>Share your latest look with # EverlaneOnYou for a chance to be featured.</p>
       <p className='underline text-sm text-center font-normal tracking-[2]  '>Add Your Photo</p>

  </div>

        <div className='ml-19 mt-20 '>
       <button onClick={handleNext}> <ChevronLeft/> </button>
         </div>
        
        {/* <div className="group relative">*/}
         {/*<div className=" mt-6  ml-12 mb-12 "></div>*/}

         <Slider  ref={sliderRef} {...settings}>
            {data.map((data)=>(
                <div>
                <img src = {data.src} alt="" className='ml-80 mb-10  ml-12 '/>
                </div>
            ))}
          {/*<div>
          <img src = {frame14.src} alt="" className='ml-150 mb-12 object-top '/>
   </div>
          <div>
        <img src = {frame20.src} alt=""/>
    </div>
        <div>
        <img src = {frame21.src} alt=""/>
        </div>
        <div>
        <img src = {frame19.src} alt=""/>
        </div>
        <div>
        <img src = {frame22.src} alt=""/>
        </div>*/}

    
      </Slider>
      {/*</div>*/}
      
      
      

        <div className='absolute inset-0 ml-355 mt-1325'>
          <button onClick={handlePrev}><ChevronRight/></button>
        </div>

</div>
       
        
  )
}

export default Everlane;
