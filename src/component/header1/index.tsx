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
        <div className="bg-stone-900 text-white text-sm  text-[12px] tracking-[0.2] leading-[16px] font-semibold text-center py-1 hover:underline ">
          <p>
            {" "}
            Get early access on launches and offers.{" "}
            <span className="underline font-normal text-[200] leading-[16px] tracking-[0.2px] font-normal ">
              Sign Up For Texts{" "}
            </span>
            <span className="absolute">
              <ArrowRight className="w-4 h-4 font-light ml-2" />
            </span>{" "}
          </p>

          <p className="absolute inset-0 ml-347 font-light font-maison-neue pt-1 text-white">
            USD
          </p>
        </div>

        <Container className="flex items-center justify-between gap-7">
          <HeaderMenu />
          <div></div>
          <div className="w-auto md:w-1/3 flex items-center justify-center background: #262626; mr-4">
            <Logo>E V E R L A N E</Logo>
          </div>
          <div className=" w-auto md:w-1/3 flex items-center justify-end gap-5">
            <SearchBar />
            <User />
            <CartIcon />
          </div>
        </Container>
      </header>
      <div className="flex w-fit gap-10 mx-auto font-maison-neue text-black text-sm py-4 leading-[16px] tracking-[0.2px] text-[12px] font-normal text-[200] ">
        <Link href="#" className="hover:underline">
          Holiday Gifting{" "}
        </Link>
        <Link href="#" className="hover:underline">
          {" "}
          New Arrivals{" "}
        </Link>
        <Link href="#" className="hover:underline">
          Best-Sellers{" "}
        </Link>
        <Link href="#" className="hover:underline">
          Clothing{" "}
        </Link>
        <Link href="#" className="hover:underline">
          Tops & Sweaters
        </Link>
        <Link href="#" className="hover:underline">
          Pants & Jeans
        </Link>
        <Link href="#" className="hover:underline">
          Outwear{" "}
        </Link>
        <Link href="#" className="hover:underline">
          Shoes & Bags{" "}
        </Link>
        <ul className="text-red-700">Sale </ul>
      </div>
    </>
  );
};

export default Header1;
