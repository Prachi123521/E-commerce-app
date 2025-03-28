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
import Slider2 from '../slider2';
import Products from '../products';
//import Shopping from '../shopping';
import { useState } from 'react';
import Everlane from '../everlane';
import Next from '../next';





const Collections1 = () => {

  

   return (
      //<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'></div>
      <>
        
      
      {/*<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-15 width={1316} height={225}">
      <div className="group relative">
      <div className="mt-4 flex justify-between gap-6 ">
        <div className='mt-52 pl-7'>
        <ChevronLeft/>
        </div>
    
        <img src = {image6.src} alt="" />
        <p className='absolute inset-0 mt-110 text-sm font-maison-neue ml-18  '>The Waffle Long Sleev Crew  <span className='ml-21'>$60</span></p>
        <p className='absolute inset-0 mt-110 text-sm font-maison-neue ml-19 pt-6 text-gray-500 text-sm'>Bone</p>
        
        <img src = {image7.src} alt="" />
       
       <p className='absolute inset-0  flex ml-95 mt-110  font-maison-neue text-sm whitespace-nowrap'>The Bomber Jacket | Uniform <span className='ml-20'>$148</span></p>
       <p className='absolute flex whitespace-nowrap font-maison-neue ml-95 mt-110 pt-2 text-gray-500 text-sm '>Toasted Coconut</p>
        
        <img src ={image8.src} alt=""/>
        <p className='absolute inset-0 whitespace-nowrap ml-172 mt-110 tracking-[0.2px] font-maison-neue text-sm'>The Slim 4-Way Stretch Organic Jean | <span className='ml-4'>$98</span><br></br>
        Uniform </p>
        <p className='absolute flex whitespace-nowrap  text-sm text-gray-500 font-maison-neue ml-172 pt-6 mt-110'>Dark Indigo</p>


        <img src ={image9.src} alt=""/>
        <p className='absolute text-sm font-maison-neue inset-0 whitespace-nowrap ml-249 mt-110 '>The Essential Organic Crew <span className='ml-21'>$30</span></p>
        <p className='absolute flex text-gray-500 whitespace-nowrap font-maison-neue text-sm ml-250 mt-110 pt-2'>Vintage Black</p>



        <img src ={image10.src} alt=""/>
        <p className='absolute flex text-sm font-maison-neue whitespace-nowrap ml-325 mt-105'>The Heavyweight</p>
        <p className='absolute inset-0 text-sm text-gray-500 whitespace-nowrap font-maison-neue ml-325 mt-114'>Heathered Brown</p>
  
    
        <div className="mt-52">
        <ChevronRight/>
        </div>
        </div>
      </div>
      </div>
    */}
  
   {/* <div className='pt-3'> 
      <Products/>
      </div>*/}
      <Slider2/>
      
    
    
    
      {/*<div className='  ml-20  mt-112 absolute'>
      <ChevronLeft/>
      </div>
      <div>
      <div className="height={695} width={1400} pr-35 pl-35 flex pt-35 ">
      <p className='whitespace-nowrap text-right absolute ml-20  mt-59'>People Are Talking </p>
      <p className=' text-xl text-bottom mt-75 font-maison-neue ml-19'>"Love this shirt! Fits perfectly and <br></br>
         the fabric is thick without<br></br>
         being stuff."
        

      </p>
      
      <span className='ml-45'>
      <img src ={image11.src} alt=""/>
      </span>
     </div>
      </div>
      <div className='absolute inset-0 mt-825 ml-350'>
      <ChevronRight/>
        </div>
      <hr className='mt-28 bg-stone-950 '></hr>*/}
      <Next/>
      

  
  
    {/*<div className='float-right '>
        <ChevronRight/>
        </div>*/}

  

      <p className='absolute inset-0 mt-1045 text-lg font-maison-neue mr-140   text-center'>Our Holiday Gift Picks </p>
       <p className='absolute inset-0 mt-1045 ml-230 text-lg font-maison-neue '>Cleaner Fashion</p>
      

        <div className='width={505} height={626} pt-55  pl-55 mb-12 flex space-x-4'>
        
       <img src = {image12.src} alt="" />
       <img src = {image13.src} alt=""  />
       <p className='absolute ml-142 whitspace-nowrap mt-158 font-normal tracking-[1] font-maison-neue text-xs text-[14px]  '>See the sustainability efforts behind each of our products.</p>
       <p className='absolute ml-184 mt-168 underline text-sm font-maison-neue '>Learn More</p>
       </div>
       <p className='ml-39 absolute inset-0 mt-1217 whitespace-nowrap tracking-[1] font-normal  text-[14px] text-sm ml-80 '>The best presents for everyone on your list.</p>
       <p  className='ml-105 font-maison-neue text-sm underline'> Read More</p>

       <hr className='mt-25'></hr>
                                                                                
      

       {/*<p className='text-center text-3xl font-maison-neue mt-36'>Everlane On You</p>
       <p className='text-center font-normal text-sm  tracking-[2] mt-8'>Share your latest look with # EverlaneOnYou for a chance to be featured.</p>
       <p className='underline text-sm text-center font-normal tracking-[2]  '>Add Your Photo</p>

       <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-15 width={1400} height={477}">
      <div className="group relative">
      <div className=" flex justify-between gap-6">
        <div className='ml-29 mt-23'>
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
        </div>  */}

        <Everlane/>

        <div className='flex space-x-4 pl-28 mb-32 mt-25 ml-10'>
         <img src = {frame1.src} alt=""/> 
         <img src = {frame2.src} alt=""/> 
         <img src = {frame3.src} alt=""/> 
      
        </div>

    

      
  
    
    </>
    
  )
}

export default Collections1;
