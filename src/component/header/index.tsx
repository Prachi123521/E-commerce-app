import { homeimage } from "@/assets";



import React from "react";
import HeaderMenu from "../headermenu";
import Logo from "../logo";
import Container from "../container";
import SearchBar from "../searchbar";
import CartIcon from "../carticon";
import User from "../user";
import Link from "next/link";
import Image from "../frame1";
import { ArrowRight } from "lucide-react";
import Collections from "../frame2";
//import { FlagofAmerica } from "lucide-react";


const Header = () =>{
    
return(
        
<>

     <header className="  border-b  border-bg-gray-500 mb-1 ">
      <div className="bg-stone-900 text-white text-sm  text-center py-1  ">
        <p> Get early access on launches and offers. <span className="underline">Sign Up For Texts</span> </p>
        {/*<span><ArrowRight/></span>*/}
       {/* <div className=" space-x-4 ">
          
          <p>USD</p>
        </div>*/}
       {/* <p className="text-white flex-right  flex flex-col items-center justify-end  ">USD</p>*/}
      </div>
      
      <Container className="flex items-center justify-between gap-7">
         
            <HeaderMenu/>
            <div>
            </div>
            <div className="w-auto md:w-1/3 flex items-center justify-center background: #262626;">
               <Logo>E V E R L A N E</Logo>
         
            </div>
            <div className=" w-auto md:w-1/3 flex items-center justify-end gap-5">
            <SearchBar/>
            <User/>
            <CartIcon/>
             </div>
         </Container>
          </header>
          <div className="flex w-fit gap-10 mx-auto font-maison-neue text-black text-sm py-4 ">
            <Link href ="#">Holiday Gifting </Link>
            <Link href ="#"> New Arrivals </Link>
            <Link href ="#">Best-Sellers </Link>
            <Link href ="#">Clothing </Link>
            <Link href ="#">Tops & Sweaters</Link>
            <Link href ="#">Pants & Jeans</Link>
            <Link href ="#">Outwear </Link>
            <Link href="#">Shoes & Bags </Link>
            <ul className="text-red-700">Sale </ul>
          </div>
        
  <div className="pl-15">
 <img src={homeimage.src} alt="" />
 </div>
 <Image/>
 <Collections/>

 
 
 

 </>
 
)

    
}

export default Header;
