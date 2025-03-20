import React from 'react';
import {image6} from "@/assets";
import { ChevronLeft } from 'lucide-react';
import {image7} from "@/assets";
import {image8} from "@/assets";

const Slider = () => {
    //const[current,setCurrent]=useState()
  return (

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-15">
      <div className="group relative">
      <div className="mt-4 flex justify-between gap-6">
        <div className='mt-52'>
        <ChevronLeft/>
        </div>
        <img src = {image6.src} alt="" />
        <p className='absolute inset-0 mt-110 text-sm font-maison-neue ml-18 font-light '>The Waffle Long Sleev Crew  <span className='ml-15 '>$60</span></p>
        <p className='absolute inset-0 mt-110 text-sm font-maison-neue ml-18 pt-6'>Bone</p>
        
        <img src = {image7.src} alt="" />
        <div className='border outline-none height={32} width={232}'>
        <p className='flex absolute mt-110 '>The Bomber Jacket | Uniform </p>
        </div>
        <img src ={image8.src} alt=""/>
        </div>
      </div>
    </div>
    
  )
}

export default Slider;
