"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeaderMenu from "../headermenu";
import Logo from "../logo";
import Container from "../container";
import SearchBar from "../searchbar";
import CartIcon from "../carticon";
import User from "../user";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import HolidayGifting from "@/app/holiday-gifting/page";
import NewArrivals from "@/app/new-arrival/page";
import Clothing from "@/app/clothing/page";
import TopsAndSweaters from "@/app/tops-sweaters/page";
import PantsAndJeans from "@/app/pants-jeans/page";
import Outerwear from "@/app/outerwear/page";
import ShoesAndBags from "@/app/shoes-bags/page";
import Sale from "@/app/sale/page";
import BestSellers from "@/app/best-seller/page";


const Header1 = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isBlogPage = pathname.startsWith("/blog");
  const [isHolidayOpen, setIsHolidayOpen] = useState(false);
  const [isNewArrivalsOpen, setIsNewArrivalsOpen] = useState(false);
  const [isBestSellersOpen, setIsBestSellersOpen] = useState(false);
  const [isClothingOpen, setIsClothingOpen] = useState(false);
  const [isTopsOpen, setIsTopsOpen] = useState(false);
  const [isPantsOpen, setIsPantsOpen] = useState(false);
  const [isOuterwearOpen, setIsOuterwearOpen] = useState(false);
  const [isShoesBagsOpen, setIsShoesBagsOpen] = useState(false);
  const [isSaleOpen, setIsSaleOpen] = useState(false);

  const handleSearchClick = () => {
    router.push("/search");
  };

  return (
    <>
      <header className="  border-b  border-bg-gray-500 mb-1 hidden sm:block">
        <div className="bg-stone-900 text-white text-sm  text-[12px] tracking-[0.2] leading-[16px] font-semibold text-center py-1 hover:border-blue-400 hover:underline ">
          <p className="cursor-pointer ">
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
            <div onClick={handleSearchClick}>
              <SearchBar />
            </div>
            <User />
            <CartIcon />
          </div>
        </Container>
      </header>
      {!isBlogPage && (
        <div className="flex w-fit gap-10 mx-auto font-maison-neue text-black  py-4 leading-[16px] tracking-[0.2px] text-[12px] font-normal cursor-pointer">
          <div
            className="relative group"
            onMouseEnter={() => setIsHolidayOpen(true)}
            onMouseLeave={() => setIsHolidayOpen(false)}
          >
            <Link href="#" className="hover:underline hover:text-red-400">
              Holiday Gifting{" "}
            </Link>
            <AnimatePresence>
              {isHolidayOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="fixed left-0 top-[140px] w-full bg-white z-50 shadow-lg "
                >
                  <HolidayGifting />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/*NewArrival Section*/}
          <div
            className="relative group"
            onMouseEnter={() => setIsNewArrivalsOpen(true)}
            onMouseLeave={() => setIsNewArrivalsOpen(false)}
          >
            <Link href="#" className="hover:underline hover:text-red-400">
              {" "}
              New Arrivals {/*<IoIosArrowDown/>*/}
            </Link>
            <AnimatePresence>
              {isNewArrivalsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="fixed left-0 top-[140px] w-full bg-white z-50 shadow-lg"
                >
                  <NewArrivals />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/*BestSeller Section*/}
          <div
            className="relative group"
            onMouseEnter={() => setIsBestSellersOpen(true)}
            onMouseLeave={() => setIsBestSellersOpen(false)}
          >
            <Link href="#" className="hover:underline hover:text-red-400">
              Best-Sellers{" "}
            </Link>
            <AnimatePresence>
              {isBestSellersOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="fixed left-0 top-[140px] w-full bg-white z-50 shadow-lg"
                >
                  <BestSellers />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/*Clothing Section*/}
          <div
            className="relative group"
            onMouseEnter={() => setIsClothingOpen(true)}
            onMouseLeave={() => setIsClothingOpen(false)}
          >
            <Link href="#" className="hover:underline hover:text-red-400">
              Clothing{" "}
            </Link>
            <AnimatePresence>
              {isClothingOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="fixed left-0 top-[140px] w-full bg-white z-50 shadow-lg"
                >
                  <Clothing />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/*Tops & Sweaters Section*/}
          <div
            className="relative group"
            onMouseEnter={() => setIsTopsOpen(true)}
            onMouseLeave={() => setIsTopsOpen(false)}
          >
            <Link href="#" className="hover:underline hover:text-red-400">
              Tops & Sweaters
            </Link>
            <AnimatePresence>
              {isTopsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="fixed left-0 top-[140px] w-full bg-white z-50 shadow-lg"
                >
                  <TopsAndSweaters />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/*Pants & Jeans Section*/}
          <div
            className="relative group"
            onMouseEnter={() => setIsPantsOpen(true)}
            onMouseLeave={() => setIsPantsOpen(false)}
          >
            <Link href="#" className="hover:underline hover:text-red-400">
              Pants & Jeans
            </Link>
            <AnimatePresence>
              {isPantsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="fixed left-0 top-[140px] w-full bg-white z-50 shadow-lg"
                >
                  <PantsAndJeans />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/*OuterWear Section*/}
          <div
            className="relative group"
            onMouseEnter={() => setIsOuterwearOpen(true)}
            onMouseLeave={() => setIsOuterwearOpen(false)}
          >
            <Link href="#" className="hover:underline hover:text-red-400">
              Outerwear{" "}
            </Link>
            <AnimatePresence>
              {isOuterwearOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="fixed left-0 top-[140px] w-full bg-white z-50 shadow-lg"
                >
                  <Outerwear />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Shoes and Bags Section*/}
          <div
            className="relative group"
            onMouseEnter={() => setIsShoesBagsOpen(true)}
            onMouseLeave={() => setIsShoesBagsOpen(false)}
          >
            <Link href="#" className="hover:underline hover:text-red-400">
              Shoes & Bags{" "}
            </Link>
            <AnimatePresence>
              {isShoesBagsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="fixed left-0 top-[140px] w-full bg-white z-50 shadow-lg"
                >
                  <ShoesAndBags />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/*Sale Section*/}

          <div
            className="relative group"
            onMouseEnter={() => setIsSaleOpen(true)}
            onMouseLeave={() => setIsSaleOpen(false)}
          >
            <Link href="#" className="hover:underline hover:text-red-400">
              Sale
            </Link>
            <AnimatePresence>
              {isSaleOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="fixed left-0 top-[140px] w-full bg-white z-50 shadow-lg"
                >
                  <Sale />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/*<ul className="text-red-700 hover:underline">Sale </ul>*/}
        </div>
      )}
    </>
  );
};

export default Header1;
