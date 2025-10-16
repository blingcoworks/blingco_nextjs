"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinkClass = "text-white text-[16px] font-semibold tracking-[-0.16px] hover:text-[#95FF8D] transition-colors whitespace-nowrap";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // 페이지 배경 블러 처리 (네비게이션 제외)
  useEffect(() => {
    if (isMenuOpen) {
      // body의 모든 자식 요소에 블러 적용 (네비게이션 제외)
      const bodyChildren = Array.from(document.body.children);
      bodyChildren.forEach((child) => {
        if (!child.classList.contains('navigation-container')) {
          (child as HTMLElement).style.filter = 'blur(8px)';
        }
      });
      document.body.style.overflow = 'hidden';
    } else {
      // 모든 요소의 블러 제거
      const bodyChildren = Array.from(document.body.children);
      bodyChildren.forEach((child) => {
        (child as HTMLElement).style.filter = 'none';
      });
      document.body.style.overflow = 'auto';
    }

    // 컴포넌트 언마운트 시 스타일 초기화
    return () => {
      const bodyChildren = Array.from(document.body.children);
      bodyChildren.forEach((child) => {
        (child as HTMLElement).style.filter = 'none';
      });
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <nav className="navigation-container fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-10 py-5 bg-black/20 backdrop-blur-sm">
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

      {/* Desktop Navigation Menu */}
      <div className="hidden md:flex items-center gap-[30px]">
        <Link href="/about" className={navLinkClass}>
          About us
        </Link>
        <Link href="/solution" className={navLinkClass}>
          Solution
        </Link>
        <Link href="/insight" className={navLinkClass}>
          Insight
        </Link>
        <Link href="/contact" className={navLinkClass}>
          Contact
        </Link>
      </div>

      {/* Mobile Hamburger Menu */}
      {!isMenuOpen && (
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-[#95FF8D] transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-transparent z-40">
          {/* Mobile Header */}
          <div className="flex justify-between items-center px-4 py-5">
            <Link href="/" className="block" onClick={() => setIsMenuOpen(false)}>
              <Image 
                src="/blingco_logo.svg"
                alt="Blingco"
                width={197}
                height={33}
                className="h-8 w-auto"
              />
            </Link>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#95FF8D] transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex flex-col items-start justify-start h-full px-8 pt-20 gap-12">
            <Link 
              href="/about" 
              className="text-white text-[32px] font-bold tracking-[-0.96px] hover:text-[#95FF8D] transition-colors uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
            <Link 
              href="/solution" 
              className="text-white text-[32px] font-bold tracking-[-0.96px] hover:text-[#95FF8D] transition-colors uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Solution
            </Link>
            <Link 
              href="/insight" 
              className="text-white text-[32px] font-bold tracking-[-0.96px] hover:text-[#95FF8D] transition-colors uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Insight
            </Link>
            <Link 
              href="/#contact" 
              className="text-white text-[32px] font-bold tracking-[-0.96px] hover:text-[#95FF8D] transition-colors uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
