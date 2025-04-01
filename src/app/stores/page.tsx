import React from 'react';
//import { useRouter } from 'next/router';
import {image25} from "@/assets";
import {image26} from "@/assets";
import {image27} from "@/assets";
import {image28} from "@/assets";
import {image29} from "@/assets";
import {image30} from "@/assets";
import {image31} from "@/assets";
import {image32} from "@/assets";
import {image33} from "@/assets";







const Stores = () => {

    const data=[
        {src:image25.src,
            title:"SEATTLE",
            title1:"University Village"
        },
        {src:image26.src,
        title:"SAN FRANCISSCO",
        title1:"Valencia Street, San Francissco"},

       {src:image27.src,
        title:"PALO ALTO",
        title1:"Stanford"},
                

    ]

    const data1=[
        {src:image28.src,
        title:"LOS ANGELES",
        title1:"Abbot Kinney",
        },
        {src:image29.src,
            title:"BOSTON",
            title1:"Seaport",
            },
            {src:image30.src,
                title:"NEW YORK",
                title1:"Prince Street, New York",
                },
    ]

    const data2=[
        {src:image31.src,
         title:"BROOKLYN",
         title1:"Williamsburg",  
        },
        {src:image32.src,
         title:"KING OF PRUSSIA",
         title1:"King of Prussia",  
        },
        {src:image33.src,
            title:"KING OF PRUSSIA",
            title1:"King of Prussia",  
           },
    ]
    
    
  return (
    <div>
    <p className='text-center mt-9 text-3xl'>Stores</p>
    <p className='text-center mt-4'>Find one of our 11 stores nearest you.</p>
    <div className='flex space-x-8 ml-23 mt-18'>
       {data.map((data)=>(
        <div key={data.title}>
        <img src={data.src} alt=""/>
        <div>
        <p className='font-maison-neue tracking-[1]  text-xs hover:underline'>{data.title}</p>
        <p className='hover:underline text-sm mt-2 tracking-[0.64]'>{data.title1}</p>
        </div>
        </div>
       ))} 
        
        </div>
        <div className='flex space-x-8 mt-15 ml-21'>
            {data1.map((data1)=>(
            <>
                <div key={data1.title}>
                <img src ={data1.src} alt=""/>
                 <div>
                <p className='whitespace-nowrap text-xs tracking-[1] hover:underline' >{data1.title}</p>
                <p className='whitespace-nowrap hover:underline text-sm mt-2 tracking-[0.64]' >{data1.title1}</p>
                </div>
                </div>
            </>
            ))}
        </div>

        <div>
            <div className='flex space-x-8 mt-12 ml-21'>
              {data2.map((data2)=>(
                <div key={data2.title}>
                <img src ={data2.src} alt =""/>
                <p>{data2.title}</p>
                <p>{data2.title1}</p>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Stores;
