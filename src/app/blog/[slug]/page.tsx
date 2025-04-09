"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import React, { use } from "react";
import {
  section01,
  twitter,
  facebook,
  linkedin,
  section03,
  image44,image45,image46,image47,image48,image49
} from "@/assets";

const data1=[
  {src:image45.src,
    title:"The Cashmere Boxy Crew Sweater",
    price:"$139",
    title1:"Bone",
  },
  {src:image46.src,
    title:"The Coduory Wide-Leg Pant",
    price:"$69",
    title1:"Canavas",
  },
  {src:image47.src,
    title:"The Organic Cotton Chunky Beanie",
    price:"$32",
    title1:"Canavas",
  },
  {src:image48.src,
    title:"The Chelsea",
    price:"$137",
    title1:"Off-White",
  },
  {src:image49.src,
    title:"The Re:Down@Puffer",
    title1:"Bone",
  },

]

// Example mock data
const data = [
  { slug: "how-to-style-winter-whites", img: "/images/section01.png " ,title:"How to Style Winter Whites"},
];

{/*interface Params {
  slug: string;
}*/}

interface Post {
  slug: string;
  img: string;
}

// Fetch dynamic route parameters directly from `params`
const BlogDetail = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params); // Get the slug from params

  const [postData, setPostData] = useState<Post | null>(null);
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
  
  {/*const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode:false,
    arrows: false,
  };

  const sliderRef = React.useRef<Slider>(null);
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
    console.log("hello");
  };
*/}


  return (
    <div>
  
      <Image src={section01} alt="image" loading="lazy" className="w-full " />
      <p className="bg-black h-[14] mt-23 ml-12 mr-12"> </p>
      <div className="flex space-x-2 mt-4 ml-12">
        <Image src={twitter} alt="twitter" className="mt-9 h-[28] w-[28]" />
        <Image src={facebook} alt="facebook" className="h-[28] w-[28] mt-9 " />
        <Image src={linkedin} alt="linkedin" className="h-[28] w-[28] mt-9" />
        <p className="mt-9 ml-38 w-[1036] h-[288] leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline">
          In a season dominated by dark hues, redefine your<br></br> winter
          wardrobe with the timeless elegance of winter <br></br>whites. Whether
          top-to-toe white outfits, tonal mixing-<br></br>and-matching, or a key
          white piece (or two), give your <br></br>style a breath of fresh air
          with this list of winter white <br></br>closet essentials.
        </p>
      </div>

      <Image
        src={section03}
        alt=""
        className="mt-20 pl-60 ml-15 w-[1216] h-[1054]"
      />
      <div className="w-[1400] h-[1131]">
        <p className="ml-60 leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline">
          Nail the Classics
        </p>
        <p className="mt-8 ml-60 leading-[33.24px] text-[24px] font-normal font-maison-neue hover:underline w-[944] h-[200]">
          Do pure winter chic with a
          <span className="underline text-solid">
            {" "}
            classic cashmere white sweater
          </span>
          . Made in the softest<br></br> cashmere, it&apos;s a sweater that will
          last season after season. Effortlessly elevating any <br /> winter
          outfit, a white sweater is a must for any capsule collection. Just
          make{" "}
          <span className="underline text-solid">
            sure you <br />
            keep it clean and stain free
          </span>
          , to maintain that clean, polished look. Pair it with dark jeans
          <br /> or<span className="underline text-solid">
            {" "}
            Utility Barrel
          </span>{" "}
          pants for a casual yet refined ensemble, or layer it over a collared
          shirt
          <br /> for a peppy touch.
        </p>

        <p className="leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline mt-12 ml-60">
          Monochromatic Magic
        </p>
        <p className="ml-60 mt-10 leading-[33.24px] text-[24px] font-normal hover:underline w-[944] h-[200]">
          Nothing feels more luxe than an all-white winter outfit. And the best
          part? You don&apos;t
          <br /> have to break the bank to create a super chic top-to-toe look.
          Pair classic{" "}
          <span className="underline text-solid">
            corduroy <br />
            pants
          </span>{" "}
          in a modern wide-legged silhouette with a relaxed{" "}
          <span className="underline text-solid">
            Oxford style white shirt{" "}
          </span>
          for a <br />
          mix-and-match texture play. <br />
          Extra points if you add a{" "}
          <span className="underline text-solid">
            white blazer, cardigan, or sweater
          </span>
          . Accessorize with subtle
          <br /> metallic accents or a bold red lip for a pop of color, letting
          your outfit take center stage.
        </p>

        <p className="ml-60 mt-12 leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline">
          Keep Warm in White
        </p>
        <p className="mt-12 ml-60 leading-[33.24px] text-[24px] font-normal hover:underline w-[944] h-[167]">
          Stay warm all winter long with a
          <span className="underline text-solid"> white puffer jacket</span>{" "}
          puffer jacket. This durable, cold
          <br /> weather jacket is puffed-up for extra warmth, giving an
          on-point blown out silhouette. A<br /> white coat not only stands out
          against the sea of dark winter jackets but also provides a <br />
          fun canvas for experimenting with textures and patterns. Throw on a
          white coat over a <br />
          neutral-toned outfit for an easy elegant look.
        </p>
      </div>

      <img src={image44.src} alt="" className="ml-78 h-[1054] w-[790] pl-34" />
       <div>
      <p className="mt-28 ml-63 leading-[48px] text-[30px] font-semibold font-maison-neue">
        Textures and Layers
      </p>
      <p className="ml-63 mt-12 leading-[33.24px] text-[24px] font-normal font-maison-neue">
        Winter fashion is all about layering, and white outfits provide the
        perfect base for
        <br /> playing with textures and layers. Start with your
        <span className="underline text-solid"> white turtleneck </span>and
        experiment with
        <br /> different fabrics like wool, cashmere, and silk to add depth and
        interest to your look. A<br />{" "}
        <span className="underline text-solid">white silk blouse </span>layered
        under a chunky knit sweater or a white wool skirt paired with a<br />
        <span className="underline text-solid">turtleneck </span>creates a
        textural look that&apos;s both cozy and chic.
      </p>

      <p className="ml-63 mt-15 leading-[48px] text-[40px] font-semibold font-maison-neue ">
        Accessorize with Neutrals
      </p>
      <p className="ml-63 mt-15 leading-[33.24px] text-[24px] font-normal font-maison-neue">
        When working with a predominantley white palette, neutrals become your
        best friends.
        <br />
        From{" "}
        <span className="underline text-solid">
          white leather Chelsea boots
        </span>{" "}
        to<span className="underline text-solid"> off-white-beanies</span>
        mix in plenty of winter-ready <br/> accessories and shoes for those finishing
        outfit tonal touches.
        </p>
        
         <p className="ml-63 mt-5 leading-[33.24px] text-[24px] font-normal font-maison-neue"> So, step into the season with confidence, and let your winter whites
          make a bold and <br/>beautiful statement. Shop our
          <span className="underline text-solid"> winter white edit here.</span>
        </p>

      </div>
      <p className="leading-[48px] text-[40px] font-semibold font-maison-neue text-center mt-25">The White Whites Edit</p>

     {/*<div className="flex space-x-8 ml-35 mt-12">
     <div><ChevronLeft/></div>
      
      <Slider ref={sliderRef} {...settings}>*/}
      <div className="flex space-x-8 ml-35 mt-12">
      {data1.map((data1)=>(
        <div key={data1.src}>
        <img src ={data1.src} alt=""/>
        <p className="tracking-[0.2px] leading-[16px] font-normal font-maison-neue text-[12px]">{data1.title} <span className="ml-5">{data1.price}</span></p>
        <p className="tracking-[0.2px] leading-[16px] mt-1 font-normal font-maison-neue text-[12px] text-gray-500">{data1.title1}</p>
        </div>
      ))}
     </div>
     {/*</Slider>
    
     <div>
      <ChevronRight/>
     </div>*/}
    </div>
  );
};

export default BlogDetail;
