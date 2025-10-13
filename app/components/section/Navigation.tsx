"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-[40px] bg-black/20 backdrop-blur-sm">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="block">
          <Image 
            src="/blingco_logo.svg"
            alt="Blingco"
            width={197}
            height={33}
            className="h-8 w-auto"
          />
        </Link>
      </div>

      {/* Navigation Menu */}
      <div className="flex items-center gap-[30px]">
        <Link href="/#about" className="text-white text-[16px] font-semibold leading-[100px] tracking-[-0.16px] hover:text-[#95FF8D] transition-colors whitespace-nowrap">
          About us
        </Link>
        <Link href="/#services" className="text-white text-[16px] font-semibold leading-[100px] tracking-[-0.16px] hover:text-[#95FF8D] transition-colors whitespace-nowrap">
          Solution
        </Link>
        <Link href="/#insight" className="text-white text-[16px] font-semibold leading-[100px] tracking-[-0.16px] hover:text-[#95FF8D] transition-colors whitespace-nowrap">
          Insight
        </Link>
        <Link href="/#contact" className="text-white text-[16px] font-semibold leading-[100px] tracking-[-0.16px] hover:text-[#95FF8D] transition-colors whitespace-nowrap">
          Contact
        </Link>
      </div>
    </nav>
  );
}
