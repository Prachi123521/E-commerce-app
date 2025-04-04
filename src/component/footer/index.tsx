import React from "react";
import { ArrowRight } from "lucide-react";
import FooterMenu from "../footermenu";

const Footer = () => {
  return (
    <footer className="bg-neutral-200 dark:bg-gray-50">
      <div className="mx-auto w-full max-w-screen-xl width={194} height={182}">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5  ">
          <div>
            <h2 className="mb-6 text-sm font-medium font-semibold leading-[24px] text-gray-900 text-[16px] dark:text-white  mt-9">
              Account
            </h2>
            <ul className="text-gray-500 dark:text-gray-900 font-light text-[14px] leading-[16.8px] tracking-[1.4] font-[300]">
              <li className="mb-2">
                <a href="#" className=" hover:underline ">
                  Log In
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Sign Up
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Redeem a Gift Card
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-medium font-semibold leading-[24px] text-[16px] text-gray-900 dark:text-white mt-9">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-900 font-light text-[14px] leading-[16.8px] tracking-[1.4] font-[300]">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Environmental Initiatives
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Factories
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  DEI
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  International
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 font-medium font-semibold leading-[24px] text-[16px]  dark:text-white mt-9">
              Get Help
            </h2>
            <ul className="text-gray-500 dark:text-gray-900 font-light text-[14px] leading-[16.8px] tracking-[1.4] font-[300]">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Return Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Shipping Info
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Bulk Orders
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 font-medium font-semibold leading-[24px] text-[16px]  dark:text-white mt-9 tracking-[0.2]">
              Connect
            </h2>
            <ul className="text-gray-500 dark:text-gray-900 font-light text-[14px] leading-[16.8px] tracking-[1.4] font-[300] font-maison-neue">
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Affiliates
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Out Stores
                </a>
              </li>
            </ul>
          </div>
          {/*<div>
                  <h2 className='bg-stone-100 px-8 py-1 mt-6  '>
                    <input type = 'email' placeholder='' className='py-2 px-4 w-full '/>
                  <div className=' absolute inset-0 mt-1510 ml-347 bg-stone-900 '>
                    <button className='bg-black  absolute inset-0 mt-1510 ml-347 bg-stone-900'><ArrowRight/></button> 
                 </div>
                    </h2> 
                    </div>*/}

          <div className="font-light  flex items-center justify-end">
            <h2 className="bg-stone-100 py-3 px-12  px-5 border-4 p-4  mb-34 bg-white-50 outline-offset float-top  ">
              <input type="email" placeholder="Email Address" />
            </h2>
            <div className=" ">
              <button className="text-white mb-34 bg-stone-900 py-3 px-3 ml-0">
                <ArrowRight />
              </button>
            </div>
          </div>

          <FooterMenu />

          <div className="pt-15 flex  font-maison-neue  mt-4 whitespace-nowrap text-gray-500 font-maison-neue font-light ml-69 text-sm ">
            <p> &copy; 2023 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
