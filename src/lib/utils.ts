import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';