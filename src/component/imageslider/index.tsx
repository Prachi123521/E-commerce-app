import React from 'react';
import {image6} from "@/assets";
import {image7} from "@/assets";
import {image8} from "@/assets";
import {image9} from "@/assets";
import {image10} from "@/assets";
import imageslider from "../imageslider"


const images = [
    image6,
    image7,
    image8,
    image9,
    image10,
]



const Home : React.FC =()=>{
  return (
    <imageslider images ={images}/>
  )
}

export default Home;
