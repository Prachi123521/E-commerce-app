import React from "react";
import { ArrowRight } from "lucide-react";
import FooterMenu from "../footermenu";

const Footer = () => {
  return (
    <footer className="bg-neutral-200 dark:bg-gray-600">
      <div className="mx-auto w-full max-w-screen-xl width={194} height={182}">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-6 py-8 ">
          <div>
            <h2 className="mb-6 text-sm font-medium  cursor-pointer hover:underline font-semibold leading-[24px] text-gray-900 text-[16px] sm:text-[18px] lg:text-[20px] mb-4 sm:mb-6 mt-6 sm:mt-9 dark:text-white  mt-9">
              Account
            </h2>
            <ul className="text-gray-600 dark:text-gray-900 font-light text-[14px] leading-[16.8px] tracking-[1.4] font-[300]">
              <li className="mb-3">
                <a href="#" className=" hover:underline ">
                  Log In
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Sign Up
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Redeem a Gift Card
                </a>
              </li>
            </ul>
          </div>
          <div className="px-[-2]">
            <h2 className="mb-6 text-sm font-medium font-semibold leading-[24px] cursor-pointer hover:underline text-[16px] sm:text-[18px] lg:text-[20px] mb-4 sm:mb-6 mt-6 sm:mt-9 text-gray-900 dark:text-white mt-9">
              Company
            </h2>
            <ul className="text-gray-600 dark:text-gray-900 font-light text-[14px] leading-[16.8px] tracking-[1.4] font-[300]">
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Environmental <br></br>Initiatives
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Factories
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  DEI
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  International
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="mb-6 text-sm font-bold text-gray-900 cursor-pointer hover:underline font-medium font-semibold leading-[24px] text-[16px]sm:text-[18px] lg:text-[20px] mb-4 sm:mb-6 mt-6 sm:mt-9  dark:text-white mt-9 ">
              Get Help
            </h2>
            <ul className="text-gray-600 dark:text-gray-900 font-light text-[14px] leading-[16.8px] tracking-[1.4] font-[300]">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Return Policy
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Shipping Info
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900  cursor-pointer hover:underline font-medium font-semibold leading-[24px] text-[16px] sm:text-[18px] lg:text-[20px] mb-4 sm:mb-6 mt-6 sm:mt-9 dark:text-white mt-9 tracking-[0.2]">
              Connect
            </h2>
            <ul className="text-gray-600 dark:text-gray-900 font-light text-[14px] leading-[16.8px] tracking-[1.4] font-[300] font-maison-neue">
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Affiliates
                </a>
              </li>
              <li className="mb-3">
                <a href="#" className="hover:underline">
                  Out Stores
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row items-start  sm:items-center pb-43 justify-left">
            <h2>
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white text-sm px-4 h-13 w-[280px] border border-gray-300  text-left "
              />
            </h2>

            <button className="text-white  bg-stone-900 h-13  px-4 ">
              <ArrowRight />
            </button>
          </div>

          <FooterMenu />

          <div className="pt-15 flex  text-center  font-maison-neue cursor-pointer hover:underline  whitespace-nowrap text-gray-600 font-maison-neue font-light ml-69 text-sm ">
            <p> &copy; 2023 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
