import React from 'react';
import Link from 'next/link';
interface Props{
    children:React.ReactNode;
    className?:string
}
import {cn} from "@/lib/utils"

const Logo = ({children,className}:Props) => {
  return (
    <Link href = {"/"}>
      <h2 className={cn('text-2xl font-bold uppercase',className)}>{children}</h2>
    </Link>
  )
}

export default Logo;
