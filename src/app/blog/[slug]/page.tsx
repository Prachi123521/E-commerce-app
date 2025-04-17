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
  image44,
  image45,
  image46,
  image47,
  image48,
  image49,
  image34,
  image35,
  image36,
  image37,
  
} from "@/assets";

const list = [
  {  id:1,
    slug: "how-to-style-winter-whites",
    src: image34.src,
    title: "How To Style Winter Whites",
    title1: "Style",
  },
  { id:2,
    slug: "we-won-a-glossy-award",
    src: image35.src,
    title: "We Won A Glossy Award",
    title1: "Transparency",
  },
  { id:3,
    slug: "coordinate-your-style",
    src: image36.src,
    title: (
      <>
        Coordinate Your Style:
        <br />
        Matching Outfits for Everyone
      </>
    ),
    title1: "Style",
  },
];

const data1 = [
  { id:1,
    src: image45.src,
    title: "The Cashmere Boxy Crew Sweater",
    price: "$139",
    title1: "Bone",
  },
  { id:2,
    src: image46.src,
    title: "The Coduory Wide-Leg Pant",
    price: "$69",
    title1: "Canavas",
  },
  { id:3,
    src: image47.src,
    title: "The Organic Cotton Chunky Beanie",
    price: "$32",
    title1: "Canavas",
  },
  { id:4, 
    src: image48.src,
    title: "The Chelsea",
    price: "$137",
    title1: "Off-White",
  },
  { id:5,src: image49.src, title: "The Re:Down@Puffer", title1: "Bone" },
];

const data2 = [{ src: image35, title: "Glossy Award" }];

// Example mock data
const data = [
  {
    slug: "how-to-style-winter-whites",
    img: "/images/section01.png",
    title: "How to Style Winter Whites",
  },
  {
    slug: "we-won-a-glossy-award",
    img: "/images/image35.png",
    title: "We Won A Glossy Award",
  },
  {
    slug: "coordinate-your-style",
    img: "/images/image36.png",
    title: "Coordinate your Style",
  },
  {
    slug: "black-friday-fund",
    img: "/images/image37.png",
    title: "Black Friday Fund 2023",
  },
  {
    slug: "what-to-wear-this-season-holiday-outfit-&-ideas",
    img: "/images/image38.png",
    title: "What to Wear this Season Holiday Outfit & Ideas",
  },
  {
    slug: "thanks-giving-outfit-ideas",
    img: "/images/image39.png",
    title: "Thanks Giving Outfit Ideas",
  },
];

{
  /*interface Params {
  slug: string;
}*/
}

interface Post {
  slug: string;
  img: string;
}

// Fetch dynamic route parameters directly from `params`
const BlogDetail = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params); // Get the slug from params
  const isGlossy = slug === "we-won-a-glossy-award";
  const isCoordinate = slug === "coordinate-your-style";
  const isBlackFriday = slug === "black-friday-fund";

  {
    /*const selectedData = slug === "won-a-glossy-award" ? data2 : data1;*/
  }

  const [postData, setPostData] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!slug) return; // Exit early if `slug` is not available yet

    // Find post data by slug
    const post = data.find((item) => item.slug.trim() === slug.trim());

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

  {
    /*const settings = {
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
*/
  }

  return (
    <>
      {isGlossy ? (
        //  Glossy Award Page Layout
        <div className="p-12">
          <h1 className="text-[40px] font-bold font-maison-neue text-center mb-8">
            We Won a Glossy Award{" "}
          </h1>

          <div className="flex justify-center mb-12 ">
            <Image
              src={image35}
              alt="Glossy Award"
              className="w-full h-[800]"
            />
          </div>

          <p className="text-center text-[20px] max-w-[800px] mx-auto font-maison-neue">
            We are honored to receive a Glossy Award for innovation and style.
            This achievement reflects the creativity and dedication of our
            entire team. Thank you to our customers and supporters for believing
            in our journey.
          </p>

          <div className="mt-20 text-center">
            <div className="flex justify-center space-x-8 mt-6">
              {data2.map((item, index) => (
                <div key={index}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={300}
                    height={300}
                  />
                  <p className="text-[18px] mt-2 font-maison-neue">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[1400px] mx-auto mt-12">
            <p className="ml-60 leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline cursor-pointer">
              Celebrating a Milestone
            </p>
            <p className="mt-8 ml-60 leading-[33.24px] text-[24px] font-normal font-maison-neue w-[944px]">
              We&apos;re thrilled to announce that we&apos;ve been honored with
              a <span className="underline text-solid">Glossy Award</span> for
              our commitment to innovation in fashion and sustainability. This
              recognition shines a light on the passion and hard work our team
              puts into every detail — from design to customer experience.
            </p>

            <p className="leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline  cursor-pointer mt-12 ml-60">
              Behind the Brand
            </p>
            <p className="ml-60 mt-10 leading-[33.24px] text-[24px] font-normal font-maison-neue w-[944px]">
              What sets us apart? It&apos;s our{" "}
              <span className="underline text-solid">
                community-first mindset
              </span>{" "}
              and our drive to make sustainable fashion more accessible. We
              continuously explore materials, processes, and styles that
              minimize impact without compromising on quality or design.
            </p>

            <p className="ml-60 mt-12 leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline cursor-pointer">
              What&apos;s Next?
            </p>
            <p className="mt-12 ml-60 leading-[33.24px] text-[24px] font-normal font-maison-neue w-[944px]">
              While this award means the world to us, it&apos;s just the
              beginning. We&apos;re doubling down on our mission to create
              meaningful pieces that you love to wear — and feel good about
              wearing. From expanding our{" "}
              <span className="underline text-solid">recycled collections</span>{" "}
              to exploring new creative collaborations, we can&apos;t wait to
              show you what&apos;s coming next.
            </p>
          </div>

          <div className="flex justify-center mt-19">
            <Image
              src={image35}
              alt="Glossy Award"
              width={800}
              height={500}
              className="rounded-lg"
            />
          </div>

          <div>
            <p className="mt-28 ml-63 leading-[48px] text-[30px] font-semibold font-maison-neue hover:underline cursor-pointer">
              Honoring the Team Behind the Vision
            </p>
            <p className="ml-63 mt-12 leading-[33.24px] text-[24px] font-normal font-maison-neue">
              Our success wouldn&apos;t be possible without the incredible minds,
              hands, and hearts behind<br></br> our brand. Every piece we
              design, every shoot we plan, every customer interaction — it all
              <br></br> comes back to our people. This award is for the
              creatives, the problem-solvers, and the <br></br>passionate
              individuals who breathe life into everything we do.
            </p>

            <p className="ml-63 mt-15 leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline cursor-pointer">
              Building a More Thoughtful Future
            </p>
            <p className="ml-63 mt-15 leading-[33.24px] text-[24px] font-normal font-maison-neue">
              At the core of our mission is responsibility — to the planet, to
              our customers, and to<br></br> future generations. From using more
              sustainable materials to implementing ethical<br></br> production
              practices, we&apos;re not just following trends, we&apos;re
              creating them — with<br></br> intention. This recognition
              motivates us to keep pushing for change, one mindful<br></br>{" "}
              decision at a time.
            </p>

            <p className="ml-63 mt-5 leading-[33.24px] text-[24px] font-normal font-maison-neue mb-19">
              Thank you for being a part of this journey.{" "}
              <span className="underline text-solid">
                Together, we&apos;re redefining what fashion can be.
              </span>
            </p>
          </div>
        </div>
      ) : isCoordinate ? (
        //  Custom "Coordinate Your Style" Content
        <div className="p-12">
          <h1 className="text-[40px] font-bold font-maison-neue text-center mb-8">
            Coordinate Your Style
          </h1>

          <div className="flex justify-center mb-12">
            <Image src={image36} alt="Coordinate" className="w-full h-[800]" />
          </div>

          <p className="text-center text-[20px] max-w-[800px] mx-auto font-maison-neue">
            Express your personal aesthetic with pieces designed for real-life
            versatility. This edit is about pairing timeless neutrals and bold
            silhouettes in ways that feel effortless but look elevated.
          </p>

          <div className="w-[1400px] mx-auto mt-20">
            <p className="ml-60 leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline cursor-pointer">
              Your Style, Your Rules
            </p>
            <p className="mt-8 ml-60 leading-[33.24px] text-[24px] font-normal font-maison-neue w-[944px]">
              Our Coordinate Your Style campaign encourages you to build a
              wardrobe with intention — think layering core pieces, adding pops
              of contrast, and never underestimating the power of accessories.
              Whether you&apos;re dressing up for work or dialing it down on the
              weekend, style is what you make of it.
            </p>

            <p className="ml-60 mt-15 leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline cursor-pointer">
              Featured Favorites
            </p>
            <div className="flex space-x-8 mt-15 ml-32">
              {data1.map((item, index) => (
                <div key={index}>
                  <img src={item.src} alt={item.title} />
                  <p className="text-[12px] mt-2 font-maison-neue">
                    {item.title}{" "}
                  </p>
                  <p className="text-[12px] text-gray-500 font-maison-neue">
                    {item.title1}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-center mt-16 leading-[33.24px] text-[24px] font-normal font-maison-neue mb-12">
              Style isn&apos;t just about what you wear — it&apos;s how you wear it.
              <br></br>{" "}
              <span className="underline text-solid">
                Coordinate your style
              </span>
              with ease, confidence, and a little help from us.
            </p>
          </div>
        </div>
      ) : isBlackFriday ? (
        <div className="p-12">
          <h1 className="text-[40px] font-bold font-maison-neue text-center mb-8">
            Black Friday Fund 2023
          </h1>

          <div className="flex justify-center mb-12">
            <Image
              src={image37}
              alt="Black Friday Fund"
              className="w-full h-[800]"
            />
          </div>

          <p className="text-center text-[20px] max-w-[800px] mx-auto font-maison-neue">
            This Black Friday, we&apos;re investing in more than just discounts.
            With every purchase made, a portion goes toward supporting community
            organizations focused on sustainability, education, and empowerment.
            Together, we&apos;re making an impact that lasts well beyond the
            holiday season.
          </p>

          <div className="w-[1400px] mx-auto mt-20">
            <p className="ml-60 leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline cursor-pointer">
              Shop With Purpose
            </p>
            <p className="mt-8 ml-60 leading-[33.24px] text-[24px] font-normal font-maison-neue w-[944px]">
              Our Black Friday Fund is our way of giving back while you shop.
              This year, we&apos;re partnering with local and global initiatives
              to provide resources, mentorship, and opportunities to underserved
              communities.
            </p>

            <p className="ml-60 mt-15 leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline cursor-pointer">
              Where Your Dollars Go
            </p>
            <p className="ml-60 mt-10 leading-[33.24px] text-[24px] font-normal font-maison-neue w-[944px]">
              For every order placed during our Black Friday weekend, we&apos;re
              donating a percentage of proceeds to
              <span className="underline text-solid">
                {" "}
                our selected charity partners
              </span>
              . It&apos;s fashion that feels good — and does good.
            </p>

            <p className="ml-60 mt-15 leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline cursor-pointer">
              Join the Movement
            </p>
            <p className="ml-60 mt-10 leading-[33.24px] text-[24px] font-normal font-maison-neue w-[944px]">
              Whether you&apos;re treating yourself or gifting someone else,
              your support fuels progress. Let&apos;s make this Black Friday
              more meaningful — together.
            </p>
          </div>

          <div className="flex justify-center mt-20">
            <Image
              src={image37}
              alt="Black Friday Fund"
              width={300}
              height={500}
              className="rounded-lg"
            />
          </div>

          <p className="text-center mt-16 leading-[33.24px] text-[24px] font-normal font-maison-neue mb-12">
            Thank you for shopping with purpose.{" "}
            <span className="underline text-solid">
              Learn more about our impact here.
            </span>
          </p>
        </div>
      ) : (
        <div>
          <Image
            src={section01}
            alt="image"
            loading="lazy"
            className="w-full "
          />
          <p className="bg-black h-[14] mt-23 ml-12 mr-12"> </p>
          <div className="flex space-x-2 mt-4 ml-12">
            <Image src={twitter} alt="twitter" className="mt-9 h-[28] w-[28]" />
            <Image
              src={facebook}
              alt="facebook"
              className="h-[28] w-[28] mt-9 "
            />
            <Image
              src={linkedin}
              alt="linkedin"
              className="h-[28] w-[28] mt-9"
            />
            <p className="mt-9 ml-38 w-[1036] h-[288] leading-[48px] text-[40px] font-semibold font-maison-neue ">
              In a season dominated by dark hues, redefine your<br></br> winter
              wardrobe with the timeless elegance of winter <br></br>whites.
              Whether top-to-toe white outfits, tonal mixing-<br></br>
              and-matching, or a key white piece (or two), give your <br></br>
              style a breath of fresh air with this list of winter white{" "}
              <br></br>closet essentials.
            </p>
          </div>

          <Image
            src={section03}
            alt=""
            className="mt-20 pl-60 ml-15 w-[1216] h-[1054]"
          />
          <div className="w-[1400] h-[1131]">
            <p className="ml-60 leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline hover:decoration-blue-400  cursor-pointer">
              Nail the Classics
            </p>
            <p className="mt-8 ml-60 leading-[33.24px] text-[24px] font-normal font-maison-neue  w-[944] h-[200]">
              Do pure winter chic with a
              <span className="underline text-solid hover:bg-blue-200 cursor-pointer">
                {" "}
                classic cashmere white sweater
              </span>
              . Made in the softest<br></br> cashmere, it&apos;s a sweater that
              will last season after season. Effortlessly elevating any <br />{" "}
              winter outfit, a white sweater is a must for any capsule
              collection. Just make{" "}
              <span className="underline text-solid hover:bg-blue-200 cursor-pointer">
                sure you <br />
                keep it clean and stain free
              </span>
              , to maintain that clean, polished look. Pair it with dark jeans
              <br /> or
              <span className="underline text-solid hover:bg-blue-400 cursor-pointer">
                {" "}
                Utility Barrel
              </span>{" "}
              pants for a casual yet refined ensemble, or layer it over a
              collared shirt
              <br /> for a peppy touch.
            </p>

            <p className="leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer mt-12 ml-60">
              Monochromatic Magic
            </p>
            <p className="ml-60 mt-10 leading-[33.24px] text-[24px] font-normal w-[944] h-[200]">
              Nothing feels more luxe than an all-white winter outfit. And the
              best part? You don&apos;t
              <br /> have to break the bank to create a super chic top-to-toe
              look. Pair classic{" "}
              <span className="underline text-solid hover:bg-blue-200 cursor-pointer">
                corduroy <br />
                pants
              </span>{" "}
              in a modern wide-legged silhouette with a relaxed{" "}
              <span className="underline text-solid hover:bg-blue-200 cursor-pointer">
                Oxford style white shirt{" "}
              </span>
              for a <br />
              mix-and-match texture play. <br />
              Extra points if you add a{" "}
              <span className="underline text-solid hover:bg-blue-200 cursor-pointer">
                white blazer, cardigan, or sweater
              </span>
              . Accessorize with subtle
              <br /> metallic accents or a bold red lip for a pop of color,
              letting your outfit take center stage.
            </p>

            <p className="ml-60 mt-12 leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer">
              Keep Warm in White
            </p>
            <p className="mt-12 ml-60 leading-[33.24px] text-[24px] font-normal  w-[944] h-[167]">
              Stay warm all winter long with a
              <span className="underline text-solid hover:bg-blue-200 cursor-pointer">
                {" "}
                white puffer jacket
              </span>{" "}
              puffer jacket. This durable, cold
              <br /> weather jacket is puffed-up for extra warmth, giving an
              on-point blown out silhouette. A<br /> white coat not only stands
              out against the sea of dark winter jackets but also provides a{" "}
              <br />
              fun canvas for experimenting with textures and patterns. Throw on
              a white coat over a <br />
              neutral-toned outfit for an easy elegant look.
            </p>
          </div>

          <img
            src={image44.src}
            alt=""
            className="ml-78 h-[1054] w-[790] pl-34"
          />
          <div>
            <p className="mt-28 ml-63 leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer">
              Textures and Layers
            </p>
            <p className="ml-63 mt-12 leading-[33.24px] text-[24px] font-normal font-maison-neue">
              Winter fashion is all about layering, and white outfits provide
              the perfect base for
              <br /> playing with textures and layers. Start with your
              <span className="underline text-solid hover:bg-blue-200 cursor-pointer">
                {" "}
                white turtleneck{" "}
              </span>
              and experiment with
              <br /> different fabrics like wool, cashmere, and silk to add
              depth and interest to your look. A<br />{" "}
              <span className="underline text-solid hover:bg-blue-200 cursor-pointer">
                white silk blouse{" "}
              </span>
              layered under a chunky knit sweater or a white wool skirt paired
              with a<br />
              <span className="underline text-solid hover:bg-blue-200 cursor-pointer">
                turtleneck{" "}
              </span>
              creates a textural look that&apos;s both cozy and chic.
            </p>

            <p className="ml-63 mt-15 leading-[48px] text-[40px] font-semibold font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer ">
              Accessorize with Neutrals
            </p>
            <p className="ml-63 mt-15 leading-[33.24px] text-[24px] font-normal font-maison-neue">
              When working with a predominantley white palette, neutrals become
              your best friends.
              <br />
              From{" "}
              <span className="underline text-solid hover:bg-blue-200 cursor-pointer">
                white leather Chelsea boots
              </span>{" "}
              to
              <span className="underline text-solid hover:bg-blue-200 cursor-pointer">
                {" "}
                off-white-beanies
              </span>
              mix in plenty of winter-ready <br /> accessories and shoes for
              those finishing outfit tonal touches.
            </p>

            <p className="ml-63 mt-5 leading-[33.24px] text-[24px] font-normal font-maison-neue">
              {" "}
              So, step into the season with confidence, and let your winter
              whites make a bold and <br />
              beautiful statement. Shop our
              <span className="underline text-solid hover:bg-blue-200 cursor-pointer">
                {" "}
                winter white edit here.
              </span>
            </p>
          </div>
          <p className="leading-[48px] text-[40px] font-semibold font-maison-neue text-center mt-25 hover:underline hover:decoration-blue-400 cursor-pointer">
            The White Whites Edit
          </p>

          {/*<div className="flex space-x-8 ml-35 mt-12">
     <div><ChevronLeft/></div>
      
      <Slider ref={sliderRef} {...settings}>*/}
          <div className="flex space-x-8 ml-35 mt-12 mb-12">
            {data1.map((data1) => (
              <div key={data1.id}>
                <img src={data1.src} alt="" />
                <p className="tracking-[0.2px] leading-[16px] font-normal font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer text-[12px]">
                  {data1.title} <span className="ml-5">{data1.price}</span>
                </p>
                <p className="tracking-[0.2px] leading-[16px] mt-1 font-normal hover:underline hover:decoration-blue-400 cursor-pointer font-maison-neue text-[12px] text-gray-500">
                  {data1.title1}
                </p>
              </div>
            ))}
          </div>

          {/*</Slider>
    
     <div>
      <ChevronRight/>
     </div>*/}

          <div className="text-center ">
            <button className="bg-black mb-12 px-15 py-4 text-white rounded tracking-[0.42px] leading-[21px] text-[14px] font-semibold font-maison-neue cursor-pointer hover:underline hover:decoration-purple-400">
              Shop Now
            </button>
          </div>

          <div className="flex space-x-8 ml-30 mb-12">
            {list.map((list) => (
              <div key={list.id}>
                <img src={list.src} alt="" />
                <p className="text-[30px] leading-[40px] font-normal font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer mt-2">
                  {list.title}
                </p>
                <button className="tracking-[0.2px] leading-[16px] text-[12px] font-maison-neue hover:underline hover:decoration-blue-400 cursor-pointer font-semibold p-2 mt-2 py-1 px-6 rounded-full border-2 border-gray-200">
                  {list.title1}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BlogDetail;
