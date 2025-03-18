import { homeimage } from "@/assets";
import { homeimage1 } from "@/assets/index1";
import { homeimage2 } from "@/assets/index2";
import { homeimage3 } from "@/assets/index3";
import { homeimage4 } from "@/assets/index4";
import { homeimage5 } from "@/assets/index5";
import { homeimage6 } from "@/assets/index6";



import React from "react";
import HeaderMenu from "../HeaderMenu";
import Logo from "../Logo";
import Container from "../container";
import SearchBar from "../SearchBar";
import CartIcon from "../CartIcon";
import User from "../User";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


const Header = () =>{
    
return(
        
<>

     <header className="  border-b  border-bg-gray-500 mb-1 ">
      <div className="bg-stone-900 text-white text-sm  text-center py-2">
         Get early access on launches and offers. Sign Up For Texts


      
         <p className="text-white float-right pr-12 ">USD</p>
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
        
  <div className="w-full pl-15">
 <img src={homeimage.src} alt="" />
 </div>
 <div className="pl-15">
 <img src={homeimage1.src} alt="" />
 </div>
 <div className="pl-15">
 <img src={homeimage2.src} alt="" />
 </div>
 <div className="pl-15">
 <img src={homeimage3.src} alt="" />
 </div>
 <div className="pl-15">
 <img src={homeimage4.src} alt="" />
 </div>
 <div className="pl-15">
 <img src={homeimage5.src} alt="" />
 </div>
 <div className="pl-15">
 <img src={homeimage6.src} alt="" />
 </div>


 </>
 
)

    
}

export default Header;
