import React from 'react';
import {frame} from "@/assets";
import {pic} from "@/assets";


const Navigation  = () => {
  return (
    <div>
    <div className='mt-4'>
        <hr></hr>
    </div>
    <div>
    <div className=' grid grid-col-2 gap-6 px -8'>
        <div className='pl-[140px] pt-[54px] pr-[140px] pb-[90px] gap-24 '>
            <div>
            <h1 className='font-maison-neue text-base  text-size-10px font-sans text-gray-500 tracking-[1]'>HIGHLIGHTS</h1>
            <ul>
                <li className='mt-3 text-xl tracking-[1.4] font-maison-neue text-size-[14]'>
                <a href="#" className=" ">Shop All New Arrivals</a>
                </li>

                <li className='mt-3 tracking-[1.4] font-maison-neue text-xl'>
                <a href="#" className="  ">The Gift Guide</a>
                </li>

                <li className='mt-3 tracking-[1.4] font-maison-neue text-xl'>
                <a href="#" className="  ">New Bottoms</a>
                </li>

                <li className='mt-3 tracking-[1.4] font-maison-neue text-xl' >
                <a href="#" className="  ">New Tops</a>
                </li>

                <li className='mt-3 tracking-[1.4] font-maison-neue text-xl'>
                <a href="#" className="  ">T-Shirt Bundles</a>
                </li>

                <li className='mt-3 tracking-[1.4] font-maison-neue text-xl'>
                <a href="#" className="  ">Under $100</a>
                </li>
            </ul>
            </div>
              
              
            <div className='absolute inset-0 ml-125 mt-59'>
            <h1 className='font-maison-neue text-base  text-size-10px font-sans text-gray-500 tracking-[1]'>FEATURED SHOPS</h1>
            <ul>
                <li className='mt-3 text-xl tracking-[2] font-maison-neue '>
                <a href="#" className="">The Holiday Outfit Edit</a>
                </li>

                <li className='mt-3 tracking-[2] font-maison-neue text-xl'>
                <a href="#" className="  ">Giftable Sweaters</a>
                </li>

                <li className='mt-3 tracking-[2] font-maison-neue text-xl'>
                <a href="#" className="  ">Uniform & Capsule</a>
                </li>

                <li className='mt-3 tracking-[2] font-maison-neue text-xl' >
                <a href="#" className="  ">The Performance Chino Shop</a>
                </li>

                <li className='mt-3 tracking-[2] font-maison-neue text-xl'>
                <a href="#" className="  ">Top Rated Men's Clothing</a>
                </li>

                
            </ul>
            </div>
            <div className='absolute inset-0 ml-223 mt-60'>
         <img src ={frame.src} alt=""/>
         </div>
            <div className='absolute inset-0 ml-295 mt-60'>
                <img src ={pic.src} alt=""/>
            </div>
          
          

        </div>

    </div>
    </div>
    
    </div>
  )
}

export default Navigation;