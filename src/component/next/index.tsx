import React from 'react';
import {image11} from "@/assets";
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import Slider from 'react-slick';

 


const Next = () => {

    const settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        centerMode:true,
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
            console.log("hello");
          };

  return (
    <>
    
    <div className='  ml-20  mt-95 absolute'>
      <button onClick={handlePrev}><ChevronLeft/></button>
      </div>
      
     {/* <p className='whitespace-nowrap text-right absolute ml-45 mt-60'>People Are Talking </p>
      <p className=' text-xl text-bottom mt-76 font-maison-neue ml-45'>"Love this shirt! Fits perfectly and <br></br>
         the fabric is thick without<br></br>
         being stuff."
        </p>*/}
      
        <Slider ref={sliderRef} {...settings}>
        
        
      <div className="height={695} width={530}  flex  flex-col ">
      <p className='whitespace-nowrap text-right absolute ml-45 mt-60'>People Are Talking </p>
      <p className=' text-xl text-bottom mt-76 font-maison-neue ml-45'>"Love this shirt! Fits perfectly and <br></br>
         the fabric is thick without<br></br>
         being stuff."
        </p>
        <p className="ml-45 mt-8 text-sm  tracking-[2]">-- JonSnSF , <span className="underline">The HeavyWeight OverShirt</span></p>
      </div>
      <div>
       <img src ={image11.src} alt="" className='float-right mr-23 mt-25 mb-12'/>

     </div>

     <div className="height={695} width={1400}  flex  flex-col  ">
     
       <img src ={image11.src} alt="" className='mt-25'/>

     </div>
     </Slider>
      
      <div className='absolute inset-0 mt-854 ml-350'>
      <button onClick={handleNext}><ChevronRight/></button>
        </div>
      <hr className='mt-28 bg-stone-950 '></hr>
      </>
  )
}

export default Next;
