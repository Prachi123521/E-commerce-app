import React from 'react';

const Footer= () => {
  return (
    

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 ">
        <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900  dark:text-white ">Account</h2>
            <ul className="text-gray-900 dark:text-gray-900 font-light">
                <li className="mb-4">
                    <a href="#" className=" hover:underline ">Log In</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Sign Up</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Redeem a Gift Card</a>
                </li>
                
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900 dark:text-white">Company</h2>
            <ul className="text-gray-900 dark:text-gray-900 font-light">
                <li className="mb-4">
                    <a href="#" className="hover:underline">About</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Environmental Initiatives</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Factories</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">DEI</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Careers</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">International</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Accessibility</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900  dark:text-white">Get Help</h2>
            <ul className="text-gray-900 dark:text-gray-900 font-light">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Help Center</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Return Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Shipping Info</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Bulk Orders</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-bold text-gray-900  dark:text-white">Connect</h2>
            <ul className="text-gray-900 dark:text-gray-900 font-light">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Facebook</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Instagram</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Twitter</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Affiliates</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Out Stores</a>
                </li>
            </ul>
        </div>
    </div>
    </div>
</footer>

  );
}

export default Footer;
