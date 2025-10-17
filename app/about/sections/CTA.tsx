"use client";

import Link from 'next/link';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { ANIMATION_TIMINGS, useScrollOpacity } from './constants';

export default function CTA() {
  const { sectionRef, scrollProgress } = useScrollProgress();

  // Heading fade-in
  const headingOpacity = useScrollOpacity.heading(scrollProgress);

  // CTA button fade-in
  const ctaOpacity = useScrollOpacity.range(
    scrollProgress,
    ANIMATION_TIMINGS.CTA_START,
    ANIMATION_TIMINGS.CTA_END - ANIMATION_TIMINGS.CTA_START
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[100vh] bg-[var(--blingco-black)]"
    >
      <div
        className="sticky top-0 w-full h-screen flex flex-col items-center justify-center gap-[32px] sm:gap-[40px] md:gap-[50px] lg:gap-[60px] px-4"
      >
        {/* Heading */}
        <div
          className="flex flex-col justify-center text-center text-white w-full max-w-[90%] md:max-w-[800px] lg:w-[1000px] font-aggravo font-normal text-[40px] md:text-[72px] lg:text-[96px] leading-[1.25] lg:leading-[80px] tracking-[-0.03em] lg:tracking-[-2.88px] transition-opacity duration-300 ease-out"
          style={{ opacity: headingOpacity }}
        >
          <p className="mb-0 whitespace-nowrap">INTERESTED?</p>
        </div>

        {/* CTA Button */}
        <div
          className="transition-opacity duration-300 ease-out"
          style={{ opacity: ctaOpacity }}
        >
          <Link href="/contact" className="w-[240px] h-[56px] sm:w-[280px] sm:h-[64px] lg:w-[312px] lg:h-[70px] bg-[#95FF8D] text-[#2F2F2F] font-pretendard font-semibold text-[18px] sm:text-[20px] lg:text-[24px] leading-[30px] tracking-[-0.03em] lg:tracking-[-0.72px] rounded-[64px] hover:bg-[#95FF8D]/90 transition-colors duration-200 flex items-center justify-center gap-2">
            <span>LET&apos;S TOGETHER</span>
            <span className="text-[#2F2F2F] font-pretendard font-bold text-[28px] sm:text-[34px] lg:text-[40px] leading-[8.8px] tracking-[-0.03em] lg:tracking-[-1.2px]" style={{ WebkitTextStroke: '1px #000' }}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
