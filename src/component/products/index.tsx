import React from 'react';
import Slider from 'react-slick';
import {image6} from "@/assets";
import {image7} from "@/assets";
import {image8} from "@/assets";
import {image9} from "@/assets";
import {image10} from "@/assets";
import {useState} from "react";
import { ChevronLeft } from 'lucide-react';



const Products = () => {
    const settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        centerMode:true,
        arrows:true
        };
    
  return (
    <>
    <button className='mt-12'><ChevronLeft/></button>
   
    <div>

        <Slider {...settings}>
        
        
            <div>
                <h2> <img src={image6.src} alt=""  className='ml-14'/></h2>
                <p className='text-xs font-maison-neue ml-14'>The Waffle Long Sleev Crew  <span className='ml-27'>$60</span></p>
        <p className='text-gray-500 text-sm ml-14'>Bone</p>
            </div>
            <div>
                <h2><img src = {image7.src} alt =""/></h2>
                <p className='text-xs font-maison-neue'>The Bomber Jacket | Uniform <span className='ml-25'>$148</span></p>
                <p className='text-gray-500 text-sm '>Toasted Coconut</p>
                
            </div>
            <div>
                <h2><img src = {image8.src} alt =""/></h2>
                <p className='text-xs font-maison-neue'>The Slim 4-Way Stretch Organic Jean | <span className='ml-14'>$98</span><br></br> Uniform</p>
                <p className='text-gray-500 text-sm'>Dark Indigo</p>
            </div>
             
             <div>
               <h2><img src ={image9.src} alt = ""/></h2>
               <p className='text-xs font-maison-neue'>The Essential Organic Crew <span className='ml-28'>$30</span></p>
               <p className='text-gray-500 text-sm'>Vintage Black</p>
             </div>

             <div>
                <h2><img src ={image10.src} alt=""/></h2>
                <p className='text-xs font-maison-neue'>The Heavyweight</p>
                <p className='text-sm text-gray-500'>Heathered Brown</p>
             </div>


        </Slider>
      
    </div>
    </>
  )
}

export default Products;