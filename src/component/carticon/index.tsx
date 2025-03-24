import {ShoppingCart} from "lucide-react";
import React from 'react';
import Link from 'next/link';

const CartIcon = () => {
  return (
    <Link href = {"/cart"} className = "group relative">
    
      <ShoppingCart className="w-5 h-5 group-hover:text-stone-900 hoverEffect"/>
      {/*<span className="absolute -top-1 -right-1 bg-stone-900 text-white h-3.5 w-3.5 rounded-full text-xs font-semibold
      flex items-center justify-center">0</span>*/}
      
      
    </Link>
  )
}

export default CartIcon;
