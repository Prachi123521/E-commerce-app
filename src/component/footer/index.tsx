import React from 'react';
import { ArrowRight } from 'lucide-react';
import FooterMenu from '../FooterMenu';

const Footer= () => {
  return (
    

<footer className="bg-neutral-200 dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
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
          <div className='bg-stone-100 py-2 px-7  mb-2'>
            <input type = 'email' placeholder='Email Address'/>
            </div>
            <div className='bg-stone-900 '>
            <button className='text-white'><ArrowRight/></button>
          </div>
          </div>
            <FooterMenu/>

         {/* <div className='flex w-fit gap-10  mx-auto font-light display-block  '>
            <ul>Privacy Policy</ul>
            <ul>Terms Of Service</ul>
            <ul>Do Not Sell Or Share My Personal Information</ul>
            <ul>CS Supply Or Chain Transparency</ul>
            <ul>Vendor Code Of Conduct</ul>
            <ul>Sitemap Pages</ul>
            <ul>Sitemap Products</ul>
          </div>*/}
         <div className='pt-15 flex items-center text-center font-light '>
            <p> &copy; 2023 All Rights Reserved</p>
          </div>
         </div>
    </div>
</footer>

  );
}

export default Footer;
