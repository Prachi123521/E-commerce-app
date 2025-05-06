import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
import { cn } from "@/lib/utils";

const Logo = ({ children, className }: Props) => {
  return (
    <h2 className={cn("text-2xl font-bold uppercase", className)}>
      {children}
    </h2>
  );
};

export default Logo;
