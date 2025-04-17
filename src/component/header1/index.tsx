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
//import { IoIosArrowDown } from "react-icons/io";

const dropdownData = {
  holiday: [
    {
      title: "Gifts for Her",
      items: ["Jewelry", "Loungewear", "Accessories", "Beauty"],
    },
    {
      title: "Gifts for Him",
      items: ["Watches", "Tech Accessories", "Footwear", "Outerwear"],
    },
    {
      title: "Stocking Stuffers",
      items: ["Socks", "Lip Balm", "Keychains", "Mini Fragrances"],
    },
  ],
  newArrivals: [
    {
      title: "Women",
      items: ["Bags", "Lipsticks", "Nailpolish", "Accessories"],
    },
    {
      title: "Men",
      items: ["Watches", "Shoes", "Perfumes", "Accessories"],
    },
  ],
  bestSellers: [
    {
      title: "Top Picks",
      items: [
        "The Day Glove",
        "The Perform Legging",
        "ReNew Transit Bag",
        "The Organic Cotton Tee",
      ],
    },
    {
      title: "Customer Favorites",
      items: [
        "The Oversized Blazer",
        "The Dream Pant",
        "Modern Loafer",
        "The Utility Jean",
      ],
    },
  ],
  clothing: [
    {
      title: "Women",
      items: [
        "Tops & Tees",
        "Sweaters",
        "Dresses & Jumpsuits",
        "Pants & Jeans",
        "Outerwear",
        "Activewear",
        "Loungewear",
      ],
    },
    {
      title: "Men",
      items: [
        "T-Shirts",
        "Shirts",
        "Sweaters & Hoodies",
        "Pants & Jeans",
        "Shorts",
        "Jackets & Coats",
        "Activewear",
      ],
    },
  ],
  topsAndSweaters: [
    {
      title: "Women",
      items: [
        "T-Shirts",
        "Tank Tops",
        "Blouses",
        "Button-Downs",
        "Lightweight Sweaters",
        "Cardigans",
        "Pullovers",
      ],
    },
    {
      title: "Men",
      items: [
        "T-Shirts",
        "Henleys",
        "Polo Shirts",
        "Sweaters",
        "Crewnecks",
        "Zip-Ups",
        "Cardigans",
      ],
    },
  ],
  pantsAndJeans: [
    {
      title: "Women",
      items: [
        "High-Rise Jeans",
        "Straight-Leg Jeans",
        "Wide-Leg Pants",
        "Work Pants",
        "Relaxed Fit",
        "Cropped Pants",
        "Utility Pants",
        "Leggings",
      ],
    },
    {
      title: "Men",
      items: [
        "Slim Fit Jeans",
        "Straight Fit Jeans",
        "Performance Chinos",
        "Relaxed Pants",
        "Workwear Pants",
        "Joggers",
        "Denim Shorts",
      ],
    },
  ],
  outerwear: [
    {
      title: "By Type",
      items: ["Jackets", "Coats", "Parkas", "Trench Coats", "Puffer Jackets"],
    },
    {
      title: "By Material",
      items: ["Leather", "Denim", "Wool", "Fleece", "Down"],
    },
    {
      title: "By Style",
      items: ["Casual", "Streetwear", "Minimalist", "Techwear", "Luxury"],
    },
  ],
  shoesAndBags: [
    {
      title: "Shoes",
      items: ["Sneakers", "Boots", "Flats", "Heels", "Sandals"],
    },
    {
      title: "Bags",
      items: [
        "Tote Bags",
        "Crossbody Bags",
        "Backpacks",
        "Clutches",
        "Mini Bags",
      ],
    },
  ],
  sale: [
    {
      title: "Women",
      items: ["Clothing Sale", "Shoes on Sale", "Accessories Deals"],
    },
    {
      title: "Men",
      items: ["Apparel Discounts", "Footwear Offers", "Bag & Gear Deals"],
    },
    {
      title: "Clearance",
      items: ["Last Chance", "Under $50", "Final Few"],
    },
  ],
};

const Header1 = () => {
  const pathname = usePathname();

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
            <SearchBar />
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
            <Link href="#" className="hover:underline">
              Holiday Gifting{" "}
            </Link>
            <AnimatePresence>
              {isHolidayOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-0 w-full bg-white  py-12 px-45"
                >
                  <div className="grid grid-cols-3 gap-4">
                    {dropdownData.holiday.map((section) => (
                      <div
                        key={section.title}
                        className={`p-4 rounded-md ${
                          section.title.includes("Her")
                            ? "bg-pink-100"
                            : section.title.includes("Him")
                            ? "bg-blue-100"
                            : "bg-emerald-100"
                        }`}
                      >
                        <h3 className="font-semibold text-sm mb-2">
                          {section.title}
                        </h3>
                        <div className="flex flex-col gap-1">
                          {section.items.map((item) => (
                            <Link
                              key={`${section.title}-${item}`}
                              href="#"
                              className="text-sm text-black hover:underline"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
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
            <Link href="#" className="hover:underline ">
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
                  className="absolute top-8 left-0 w-66 bg-white rounded-md shadow-lg z-50 py-2"
                >
                  <div className="grid grid-cols-2 gap-x-6 px-4 pt-4">
                    {dropdownData.newArrivals.map((section) => (
                      <div
                        key={section.title}
                        className={`p-4 rounded-md  ${
                          section.title === "Women"
                            ? "bg-pink-100"
                            : "bg-blue-100"
                        }`}
                      >
                        <h3 className="font-semibold text-sm mb-1">
                          {section.title}
                        </h3>
                        <div className="flex flex-col gap-1">
                          {section.items.map((item) => (
                            <Link
                              key={`${section.title}-${item}`}
                              href="#"
                              className="text-sm hover:underline   text-black"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
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
            <Link href="#" className="hover:underline">
              Best-Sellers{" "}
            </Link>
            <AnimatePresence>
              {isBestSellersOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-0 w-90 bg-white rounded-md shadow-lg z-50 py-4 px-6"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {dropdownData.bestSellers.map((section) => (
                      <div
                        key={section.title}
                        className={`p-4 rounded-md ${
                          section.title === "Top Picks"
                            ? "bg-yellow-100"
                            : "bg-green-100"
                        }`}
                      >
                        <h3 className="font-semibold text-sm mb-2 whitespace-nowrap">
                          {section.title}
                        </h3>
                        <div className="flex flex-col gap-1">
                          {section.items.map((item) => (
                            <Link
                              key={`${section.title}-${item}`}
                              href="#"
                              className="text-sm text-black hover:underline "
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
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
            <Link href="#" className="hover:underline">
              Clothing{" "}
            </Link>
            <AnimatePresence>
              {isClothingOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-0 w-90 bg-white rounded-md shadow-lg z-50 py-4 px-6"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {dropdownData.clothing.map((section, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-md ${
                          section.title === "Women"
                            ? "bg-blue-100"
                            : "bg-green-100"
                        }`}
                      >
                        <h3 className="font-semibold text-sm mb-2 whitespace-nowrap">
                          {section.title}
                        </h3>
                        <div className="flex flex-col gap-1">
                          {section.items.map((item) => (
                            <Link
                              key={`${section.title}-${item}`}
                              href="#"
                              className="text-sm text-black hover:underline "
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
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
            <Link href="#" className="hover:underline">
              Tops & Sweaters
            </Link>
            <AnimatePresence>
              {isTopsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-0  w-90 bg-white rounded-md shadow-lg z-50 px-4 py-6"
                >
                  <div className=" mx-auto max-w-7xl grid grid-cols-2 gap-4">
                    {dropdownData.topsAndSweaters.map((section) => (
                      <div
                        key={section.title}
                        className={`p-4 rounded-md ${
                          section.title === "Women"
                            ? "bg-pink-50"
                            : "bg-blue-50"
                        }`}
                      >
                        <h3 className="font-semibold text-sm mb-2">
                          {section.title}
                        </h3>
                        <div className="flex flex-col gap-1">
                          {section.items.map((item) => (
                            <Link
                              key={`${section.title}-${item}`}
                              href="#"
                              className="text-sm text-black hover:underline"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
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
            <Link href="#" className="hover:underline">
              Pants & Jeans
            </Link>
            <AnimatePresence>
              {isPantsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-0 w-90 bg-white rounded-md shadow-lg z-50 py-4 px-6"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {dropdownData.pantsAndJeans.map((section) => (
                      <div
                        key={section.title}
                        className={`p-4 rounded-md ${
                          section.title === "Women"
                            ? "bg-pink-50"
                            : "bg-blue-50"
                        }`}
                      >
                        <h3 className="font-semibold text-sm mb-2">
                          {section.title}
                        </h3>
                        <div className="flex flex-col gap-1">
                          {section.items.map((item) => (
                            <Link
                              key={`${section.title}-${item}`}
                              href="#"
                              className="text-sm text-black hover:underline"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
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
            <Link href="#" className="hover:underline">
              Outerwear{" "}
            </Link>
            <AnimatePresence>
              {isOuterwearOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-0 w-90 bg-white rounded-md shadow-lg z-50 py-4 px-6"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {dropdownData.outerwear.map((section) => (
                      <div
                        key={section.title}
                        className={`p-4 rounded-md ${
                          section.title === "By Type"
                            ? "bg-pink-100"
                            : section.title === "By Material"
                            ? "bg-blue-100"
                            : "bg-yellow-100"
                        }`}
                      >
                        <h3 className="font-semibold text-sm mb-2">
                          {section.title}
                        </h3>
                        <div className="flex flex-col gap-1">
                          {section.items.map((item) => (
                            <Link
                              key={`${section.title}-${item}`}
                              href="#"
                              className="text-sm text-black hover:underline"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
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
            <Link href="#" className="hover:underline">
              Shoes & Bags{" "}
            </Link>
            <AnimatePresence>
              {isShoesBagsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-0 w-90 bg-white rounded-md shadow-lg z-50 py-4 px-6"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {dropdownData.shoesAndBags.map((section) => (
                      <div
                        key={section.title}
                        className={`p-4 rounded-md ${
                          section.title === "Shoes"
                            ? "bg-stone-100"
                            : "bg-amber-100"
                        }`}
                      >
                        <h3 className="font-semibold text-sm mb-2">
                          {section.title}
                        </h3>
                        <div className="flex flex-col gap-1">
                          {section.items.map((item) => (
                            <Link
                              key={`${section.title}-${item}`}
                              href="#"
                              className="text-sm text-black hover:underline"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
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
            <Link href="#" className="text-red-700 hover:underline">
              Sale
            </Link>
            <AnimatePresence>
              {isSaleOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 left-0 w-90 bg-white rounded-md shadow-lg z-50 py-4 px-6"
                >
                  <div className="grid grid-cols-3 gap-4">
                    {dropdownData.sale.map((section) => (
                      <div
                        key={section.title}
                        className={`p-4 rounded-md ${
                          section.title === "Women"
                            ? "bg-red-100"
                            : section.title === "Men"
                            ? "bg-orange-100"
                            : "bg-yellow-100"
                        }`}
                      >
                        <h3 className="font-semibold text-sm mb-2">
                          {section.title}
                        </h3>
                        <div className="flex flex-col gap-1">
                          {section.items.map((item) => (
                            <Link
                              key={`${section.title}-${item}`}
                              href="#"
                              className="text-sm text-black hover:underline"
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
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
