import React from 'react';
import {image6} from "@/assets";
import {image7} from "@/assets";
import {image8} from "@/assets";
import {image9} from "@/assets";
import {image10} from "@/assets";
import Carousel from '../carousel';




const Data = () => {
  return (
    <div className='app'>
     <Carousel>
        <img src ={image6.src}/>
        <img src ={image7.src}/>
        <img src ={image8.src}/>
        <img src ={image9.src}/>
        <img src ={image10.src}/>
        </Carousel> 
    </div>
  )
}

export default Data;
