import { ShoppingCart, ShoppingCartIcon } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const CartIcon = () => {
  return (
    <Link href = {"/cart"} className = "group relative">
      <ShoppingCart className='w-5 h-5 group-hover:text-stone-400 hoverEffect'/>
      
    </Link>
  )
}

export default CartIcon;
