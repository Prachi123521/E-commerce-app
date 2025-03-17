import { homeimage } from "@/assets";

import React from "react";
import HeaderMenu from "../HeaderMenu";
import Logo from "../Logo";
import Container from "../container";
import SearchBar from "../SearchBar";
import CartIcon from "../CartIcon";
import User from "../User";

const Header = () =>{
    
return(
        
<>

     <header className="  border-b border-bg-gray-500 py-3 ">
      <div className="bg-stone-900 py-1 text-white text-sm">
         Get early access on launches and offers.
      </div>
      <Container className="flex items-center justify-between gap-7">
         
            <HeaderMenu/>
            <div>
            </div>
            <div className="w-auto md:w-1/3 flex items-center justify-center">
               <Logo>E V E R L A N E</Logo>
         
            </div>
            <div className=" w-auto md:w-1/3 flex items-center justify-end gap-5">
            <SearchBar/>
            <User/>
            <CartIcon/>
             </div>
         </Container>

         

      </header>
        
  
 {/*<img src={homeimage.src

 } alt="" />*/}
 </>
 
)

    
}

export default Header;
