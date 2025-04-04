import React from "react";
import HeaderMenu from "../headermenu";
import Logo from "../logo";
import Container from "../container";
import SearchBar from "../searchbar";
import CartIcon from "../carticon";
import User from "../user";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Header1 = () => {
  return (
    <>
      <header className="  border-b  border-bg-gray-500 mb-1 hidden sm:block">
        <div className="bg-stone-900 text-white text-sm  text-size-12 text-center py-1  ">
          <p>
            {" "}
            Get early access on launches and offers.{" "}
            <span className="underline font-light">Sign Up For Texts </span>
            <span className="absolute">
              <ArrowRight className="w-4 h-6 font-light ml-2" />
            </span>{" "}
          </p>
          
          <p className="absolute inset-0 ml-347 font-light font-maison-neue pt-1 text-white">
            USD
          </p>

    
        </div>

        <Container className="flex items-center justify-between gap-7">
          <HeaderMenu />
          <div></div>
          <div className="w-auto md:w-1/3 flex items-center justify-center background: #262626;">
            <Logo>E V E R L A N E</Logo>
          </div>
          <div className=" w-auto md:w-1/3 flex items-center justify-end gap-5">
            <SearchBar />
            <User />
            <CartIcon />
          </div>
        </Container>
      </header>
      <div className="flex w-fit gap-10 mx-auto font-maison-neue text-black text-sm py-4 ">
        <Link href="#">Holiday Gifting </Link>
        <Link href="#"> New Arrivals </Link>
        <Link href="#">Best-Sellers </Link>
        <Link href="#">Clothing </Link>
        <Link href="#">Tops & Sweaters</Link>
        <Link href="#">Pants & Jeans</Link>
        <Link href="#">Outwear </Link>
        <Link href="#">Shoes & Bags </Link>
        <ul className="text-red-700">Sale </ul>
      </div>
    </>
  );
};

export default Header1;
