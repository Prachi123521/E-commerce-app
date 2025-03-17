import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
  
    <nav className='hidden lg-block'>
      <div className='container'>
        <div className='flex w-fit gap-10 mx-auto font-medium py-4'>
          <Link className='navbar_link relative' href = '#'> Holiday Gifting</Link>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;
