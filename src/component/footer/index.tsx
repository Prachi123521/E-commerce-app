import React from 'react';

const Footer= () => {
  return (
    <div className='bg-gray-300   py-10'>
        <div className='grid grid-cols-4 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 mx-auto'>
        <div >
            <p className='font-bold'>Account</p>
            <div className='text-xs pt-3'>
            <li>Log In</li>
            <li>Sign Up</li>
            <li>Redeem a Gift Card</li>
            </div>

           <div>
                <h1 className='font-bold mb-6 float-right mb-8'>Company</h1>
                <div className='text-xs pt-3 float-right'>
                  <li>About</li>
                   <li>Environmental Initiatives</li>
                    <li>Factories</li>
                     <li>DEI</li>
                      <li>Careers</li>
                       <li>International</li>
                        <li>Accessibility</li>
                  
                </div>
            </div>

        </div>

        </div>

      
    </div>
      );
}

export default Footer;
