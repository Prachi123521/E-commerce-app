import React from "react";
import { ArrowRight } from "lucide-react";
import FooterMenu from "../footermenu";

const Footer = () => {
  return (
    <footer className="bg-neutral-200 dark:bg-gray-600">
      <div className="mx-auto w-full max-w-screen-xl width={194} height={182}">
        <div className="grid grid-col-2 gap-4 px-4 py-6 lg:py-4 md:grid-cols-5 ">
          <div>
            <h2 className="mb-6 text-sm font-medium  cursor-pointer hover:underline font-semibold leading-[24px] text-gray-900 text-[16px] dark:text-white  mt-9">
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
            <h2 className="mb-6 text-sm font-medium font-semibold leading-[24px] cursor-pointer hover:underline text-[16px] text-gray-900 dark:text-white mt-9">
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
            <h2 className="mb-6 text-sm font-bold text-gray-900 cursor-pointer hover:underline font-medium font-semibold leading-[24px] text-[16px]  dark:text-white mt-9 ">
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
            <h2 className="mb-6 text-sm font-bold text-gray-900  cursor-pointer hover:underline font-medium font-semibold leading-[24px] text-[16px]  dark:text-white mt-9 tracking-[0.2]">
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

          <div className="font-light  flex items-center justify-end">
            <h2 className="bg-stone-100 py-3 px-18  px-5  border-4 p-4  mb-42 bg-white-50 outline-offset float-top  ">
              <input type="email" placeholder="Email Address" />
            </h2>
            <div>
              <button className="text-white mb-42 bg-stone-900 py-3 px-3 ">
                <ArrowRight />
              </button>
            </div>
          </div>

          <FooterMenu />

          <div className="pt-15 flex  font-maison-neue cursor-pointer hover:underline  whitespace-nowrap text-gray-600 font-maison-neue font-light ml-69 text-sm ">
            <p> &copy; 2023 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
