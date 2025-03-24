import React from 'react';
import Slider from 'react-slick';
import {image6} from "@/assets";



const Slider1 = () => {
    const settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1
    };
  return (
    <div>
        <Slider {...settings}>
        
    
            <div>
                <h2> <img src={image6.src} alt="" /></h2>
            </div>
            <div>
                <h2></h2>
            </div>
            <div>
                <h2>3</h2>
            </div>

        </Slider>
      
    </div>
  )
}

export default Slider1;