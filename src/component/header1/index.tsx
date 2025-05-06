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
import { ArrowRight, Menu, X } from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearchClick = () => {
    router.push("/search");
  };

  return (
    <>
      <header className="  border-b  border-bg-gray-500 mb-1 bg-white z-50 relative ">
        {/*<div className="bg-stone-900 text-white text-[12px] font-semibold relative">
          <div className="flex items-center justify-center py-1 px-4 text-center">
            <p className="cursor-pointer leading-[16px] tracking-[0.2px]">
              Get early access on launches and offers.{" "}
              <span className="underline font-normal">Sign Up For Texts</span>
              <ArrowRight className="inline w-4 h-4 ml-2" />
            </p>
          </div>
          <div className="absolute right-4 top-1 text-white font-normal text-xs">
            USD
          </div>
        </div>*/}

        <div className="bg-stone-900 text-white text-[12px] font-semibold px-4 py-1">
          <div className="flex items-center justify-between w-full">
            <p className="cursor-pointer text-center w-full leading-[16px] tracking-[0.2px]">
              Get early access on launches and offers.{" "}
              <span className="underline font-normal">Sign Up For Texts</span>
              <ArrowRight className="inline w-4 h-4 ml-2" />
            </p>
            <div className="ml-4 text-white font-normal text-xs whitespace-nowrap">
              USD
            </div>
          </div>
        </div>

        {/* Desktop Header */}

        <div className="hidden sm:flex items-center justify-between px-9 py-1">
          <HeaderMenu />

          <div className="w-1/3 flex justify-center">
            <Link href="/">
              <Logo>E V E R L A N E</Logo>
            </Link>
          </div>
          <div className="w-1/3 flex justify-end items-center gap-5">
            <div onClick={handleSearchClick}>
              <SearchBar />
            </div>
            <User />
            <CartIcon />
          </div>
        </div>

        {/* Mobile Header */}
        <div className="flex sm:hidden items-center justify-between px-4 py-2">
          <Link href="/">
            <Logo>E V E R L A N E</Logo>
          </Link>
          <button onClick={toggleMenu}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Secondary Navigation */}
        <div className="sm:hidden flex flex-col items-start px-4 py-2 space-y-2 text-sm font-medium">
          <Link href="/men" className="text-gray-800 hover:underline">
            Men
          </Link>
          <Link href="/women" className="text-gray-800 hover:underline">
            Women
          </Link>
          <Link href="/about" className="text-gray-800 hover:underline">
            About
          </Link>
          <Link href="/stores" className="text-gray-800 hover:underline">
            Stores
          </Link>
          <Link href="/blog" className="text-gray-800 hover:underline">
            Blog
          </Link>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden fixed left-0 top-0 w-full bg-white z-50 shadow-lg"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link href="#" className="hover:underline hover:text-red-400">
                Holiday Gifting
              </Link>
              <Link href="#" className="hover:underline hover:text-red-400">
                New Arrivals
              </Link>
              <Link href="#" className="hover:underline hover:text-red-400">
                Best-Sellers
              </Link>
              <Link href="#" className="hover:underline hover:text-red-400">
                Clothing
              </Link>
              <Link href="#" className="hover:underline hover:text-red-400">
                Tops & Sweaters
              </Link>
              <Link href="#" className="hover:underline hover:text-red-400">
                Pants & Jeans
              </Link>
              <Link href="#" className="hover:underline hover:text-red-400">
                Outerwear
              </Link>
              <Link href="#" className="hover:underline hover:text-red-400">
                Shoes & Bags
              </Link>
              <Link href="#" className="hover:underline hover:text-red-400">
                Sale
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isBlogPage && (
        <div className="hidden sm:flex w-fit gap-10 mx-auto font-maison-neue text-black  py-4 leading-[16px] tracking-[0.2px] text-[12px] font-normal cursor-pointer">
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
