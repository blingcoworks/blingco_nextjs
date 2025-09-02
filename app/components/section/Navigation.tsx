"use client";

import Link from "next/link";
import { BlingcoLogo } from "../Blingco";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 bg-black/20 backdrop-blur-sm">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="#" className="text-white text-[40px] leading-[90%] tracking-[-0.03em]" style={{ fontFamily: 'var(--font-righteous)' }}>
          <BlingcoLogo />
        </Link>
      </div>

      {/* Navigation Menu */}
      <div className="flex items-center gap-6">
        <Link href="#about" className="blingco-nav-link hover:text-[#95FF8D] transition-colors">
          About
        </Link>
        <Link href="#services" className="blingco-nav-link hover:text-[#95FF8D] transition-colors">
          Services
        </Link>
        <Link href="#contact" className="blingco-nav-link hover:text-[#95FF8D] transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
}
