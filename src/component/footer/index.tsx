import React from 'react';
import { ArrowRight } from 'lucide-react';
import FooterMenu from '../footermenu';

const Footer= () => {
  return (
    

<footer className="bg-neutral-200 dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl width={194} height={182}">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5 ">
        <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900  dark:text-white ">Account</h2>
            <ul className="text-gray-900 dark:text-gray-900 font-light">
                <li className="mb-2">
                    <a href="#" className=" hover:underline ">Log In</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Sign Up</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Redeem a Gift Card</a>
                </li>
                
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 dark:text-white">Company</h2>
            <ul className="text-gray-900 dark:text-gray-900 font-light">
                <li className="mb-2">
                    <a href="#" className="hover:underline">About</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Environmental Initiatives</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Factories</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">DEI</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Careers</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">International</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Accessibility</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900  dark:text-white">Get Help</h2>
            <ul className="text-gray-900 dark:text-gray-900 font-light">
                <li className="mb-2">
                    <a href="#" className="hover:underline">Help Center</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Return Policy</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Shipping Info</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Bulk Orders</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900  dark:text-white">Connect</h2>
            <ul className="text-gray-900 dark:text-gray-900 font-light">
                <li className="mb-2">
                    <a href="#" className="hover:underline">Facebook</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Instagram</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Twitter</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Affiliates</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="hover:underline">Out Stores</a>
                </li>
                  </ul>
        </div>
        <div className='font-light mt-8 flex items-center justify-end'>
          <div className='bg-stone-100 py-3 px-12  px-5 border-4 p-4  mb-2 bg-white-50 outline-offset float-top  '>
            <input type = 'email' placeholder='Email Address'/>
            </div>
            <div className='bg-stone-900 py-2 px-3 border-4 p-4  mr-2 '>
            <button className='text-white'><ArrowRight/></button>
          </div>
          </div>
    
            <FooterMenu/>
            

        
         <div className='pt-15 flex  font-maison-neue  mt-4 whitespace-nowrap text-gray-500 font-maison-neue font-light ml-69 text-sm '>
            <p> &copy; 2023 All Rights Reserved</p>
          </div>
         </div>
    </div>
</footer>

  );
}

export default Footer;
