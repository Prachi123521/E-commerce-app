import React from 'react';
import {image6} from "@/assets";
import { ChevronLeft } from 'lucide-react';
import {image7} from "@/assets";
import {image8} from "@/assets";
import {image9} from "@/assets";
import {image10} from "@/assets";
import { ChevronRight } from 'lucide-react';
import {image11} from "@/assets";
import {image12} from "@/assets";
import {image13} from "@/assets";
import { frame14 } from '@/assets';
import {frame20} from "@/assets";
import {frame21} from '@/assets';
import {frame19} from '@/assets';
import {frame22} from '@/assets'; 
import {frame1} from '@/assets';
import {frame2} from "@/assets";
import {frame3} from "@/assets";




const Slider = () => {
    //const[current,setCurrent]=useState()
  return (
      //<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'></div>
      <>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-15 width={1316} height={225}">
      <div className="group relative">
      <div className="mt-4 flex justify-between gap-6">
        <div className='mt-52 pl-7'>
        <ChevronLeft/>
        </div>
        <img src = {image6.src} alt="" />
        <p className='absolute inset-0 mt-110 text-sm font-maison-neue ml-18 font-light '>The Waffle Long Sleev Crew  <span className='ml-23 '>$60</span></p>
        <p className='absolute inset-0 mt-110 text-sm font-maison-neue ml-19 pt-6'>Bone</p>
        
        <img src = {image7.src} alt="" />
       
       {/*<p className=' text-center text-x-1/2'>The Bomber Jacket | Uniform </p>*/}
    
        
        <img src ={image8.src} alt=""/>
        <img src ={image9.src} alt=""/>
        <img src ={image10.src} alt=""/>
        <div className="mt-52">
        <ChevronRight/>
        </div>
        </div>
      </div>
      </div>
  
    
    
    
      <div className='ml-10 mt-90'>
      <ChevronLeft/>
      </div>
      <div>
      <div className="height={695} width={1400} pr-35 pl-35 flex ">
      <p className='mt-58 ml-40'>People Are Talking </p>
      <p className='mt-75  text-xl font-maison-neue'>"Love this shirt! Fits perfectly and <br></br>
         the fabric is thick without<br></br>
         being stuff."
        

      </p>
      <span className='ml-28'>
      <img src ={image11.src} alt=""/>
      </span>
      </div>
      </div>

  
  
    {/*<div className='float-right '>
        <ChevronRight/>
        </div>*/}

  


        <div className='width={505} height={626} pt-55  pl-55 mb-12 flex space-x-3'>
          
       <img src = {image12.src} alt="" />
       <img src = {image13.src} alt=""  />
       </div>

       <p className='text-center text-lg font-maison-neue'>Everlane On You</p>
       <p className='text-center font-light text-sm mt-4'>Share your latest look with # EverlaneOnYou for a chance to be featured.</p>
       <p className='underline text-sm text-center font-light'>Add Your Photo</p>

       <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-15 width={1400} height={477}">
      <div className="group relative">
      <div className=" flex justify-between gap-6">
        <div className='ml-29 mt-25'>
        <ChevronLeft/>
        </div>
        <img src = {frame14.src} alt=""/>
        <img src = {frame20.src} alt=""/>
        <img src = {frame21.src} alt=""/>
        <img src = {frame19.src} alt=""/>
        <img src = {frame22.src} alt=""/>
        <div className='mt-25'>
          <ChevronRight/>
        </div>

        </div>
        </div>
        </div>  

        <div className='flex space-x-4 pl-28 mb-15'>
         <img src = {frame1.src} alt=""/> 
         <img src = {frame2.src} alt=""/> 
         <img src = {frame3.src} alt=""/> 
      
        </div>

      
  
    
    </>
    
  )
}

export default Slider;
