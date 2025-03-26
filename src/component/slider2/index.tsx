{/*import React from 'react';

import {image6} from "@/assets";
import {image7} from "@/assets";
import {image8} from "@/assets";
import {image9} from "@/assets";
import {image10} from "@/assets";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//import { Arrow } from '@radix-ui/react-popover';


const data =[
    {
   id : 1,
   src :image6.src,
   title1: "The Waffle Long Sleev Crew",
   price:"$60",
   title2: "Bone"

},
{
    id:2,
    src : image7.src,
    title1:"The Bomber Jacket | Uniform",
    price:"$148",
    title2:"Toasted Coconut"
},
{
    id:3,
    src:image8.src,
    title1:"The Slim 4-Way Stretch Organic Jean | ",
    //price:"$98",
    title2:"Dark Indigo"


},
{
    id:4,
    src:image9.src,
    title1:"The Essential Organic Crew",
    price:"$30",
    title2:"Vintage Black"
},
{
    id:5,
    src:image10.src,
    title1:"The Heavyweight",
    title2:"Heathered Brown"
}]



const Slider2 = () => {
  
    const settings ={
        dots:true,
        infinte:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
    }

   
  return (
    
    
    
        
        <div className='group-relative'>
        <div className="mt-20 flex gap-5 ml-14 mx-auto w-3/4 auto">
            <div>
        <button><ChevronLeft/></button>
        </div>
          <Slider {...settings}>
        {...data.map((data)=>(
        
        <div className=''>
        

  <img src = {data.src} alt=""  />
     <p className='text-xs font-maison-neue whitespace-nowrap'>{data.title1}<span className='ml-25 '>{data.price}</span></p>
          <p className='text-xs text-gray-500 font-maison-neue'>{data.title2}</p>
         
       
          
  </div>
 

    ))}
   </Slider>
   </div>
   </div>
 
    
    

  );
}

export default Slider2;*/}
