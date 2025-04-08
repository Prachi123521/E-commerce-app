
"use client";


import { useState, useEffect } from 'react';
import Image from 'next/image';
import React from 'react';
import { section01,twitter,facebook,linkedin,section03 } from '@/assets';


// Example mock data
const data = [
  { slug: 'how-to-style-winter-whites', img:'/images/section01.png '  },
  
];

{/*interface Params {
  slug :string;
}*/}

// Fetch dynamic route parameters directly from `params`
const BlogDetail = ({ params }: { params: { slug :string }}) => {
  const { slug } =  params; // Get the slug from params

  const [postData, setPostData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

 
 
  useEffect(() => {
    if (!slug) return; // Exit early if `slug` is not available yet

    // Find post data by slug
    const post = data.find((item) => item.slug === slug);

    if (post) {
      setPostData(post);
    }

    setLoading(false); // Set loading to false once the data is fetched
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>; // Display loading message until data is ready
  }

  if (!postData) {
    return <div>Post not found</div>; // Handle case where post is not found
  }

  return (
    <div> 
      <Image
      src={section01}  alt="image"  loading="lazy" className='w-full '/>
     <p className='bg-black h-[14] mt-23 ml-12 mr-12'> </p>
       <div className='flex space-x-2 mt-4 ml-12'>
     <Image src ={twitter} alt="twitter" className='mt-9 h-[28] w-[28]' />
      <Image src ={facebook} alt="facebook" className='h-[28] w-[28] mt-9 '/>
      <Image src ={linkedin} alt="linkedin" className='h-[28] w-[28] mt-9'/>
      <p className='mt-9 ml-38 w-[1036] h-[288] leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline'>In a season dominated by dark hues, redefine your<br></br> winter wardrobe with the timeless elegance
        of winter <br></br>whites. Whether top-to-toe white outfits, tonal mixing-<br></br>and-matching, or a key white piece (or two), give your <br></br>style a breath of fresh air
        with this list of winter white <br></br>closet essentials.
      </p>
     </div>
      
      <Image src={section03} alt="" className='mt-20 pl-60 ml-15 w-[1216] h-[1054]'/>
      <p className='ml-45 leading-[48px] text-[40px] font-semibold font-maison-neue'>Nail the Classics</p>
      <p className='mt-8 ml-45'>Do pure winter chic with a classic cashmere white sweater. Made in the softest<br></br> cashmere, it&apos;s a sweater
        that will last season after season. Effortlessly elevating any<br></br> winter outfit, a white sweater is a must for any capsule collection. 
        Just make sure you <br/>keep it clean and stain free, to maintain that clean, polished look. Pair it with dark jeans or Utility Barrel pants for a 
        casual yet refined ensemble, or layer it, or layer it over a collared shirt for a  peppy touch. 
      </p>

    </div>
  );
};

export default BlogDetail;
