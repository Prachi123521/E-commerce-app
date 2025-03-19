import React from 'react';
import { Image1 } from '@/assets';
import { Image2 } from '@/assets';
import { Image3 } from '@/assets';


const Collections = () => {
  return (
    
<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
<div className=" group relative">
<div className="mt-4 flex justify-between gap-5 flex-reverse pt-8 items-center">
<img src ={Image1.src} alt=""/>
<p className="absolute  flex item-center justify-center text-white text-4xl pl-20 display/400 mb-14 font-maison-neue">New Arrivals</p>
<button className='absolute flex item-center justify-center font-maison-neue font-light
 bg-white ml-21 py-1 px-10 mt-12 text-display/200 width={240} height={41} text-sm'>SHOP THE LATEST</button>


<img src ={Image2.src} alt=""/>
<p className='absolute pl-128'>Best-Sellers</p>


<img src ={Image3.src} alt=""/>


</div>
</div>
</div>


  )
}

export default Collections;
