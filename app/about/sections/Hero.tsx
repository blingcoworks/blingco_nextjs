"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const parentWidth = containerRef.current.parentElement?.offsetWidth || window.innerWidth;
        const baseWidth = 1280;
        const newScale = Math.min(parentWidth / baseWidth, 1);
        setScale(newScale);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <section id="about" className="relative w-full bg-[var(--blingco-black)]">
      <div className="flex flex-col gap-[0px] sm:gap-[80px] md:gap-[100px] lg:gap-[140px] items-center pt-[100px] pb-[0px] sm:pb-[100px] md:pb-[120px] lg:pb-[150px] px-4 w-full">
        {/* Heading */}
        <div
          className={`flex flex-col gap-[10px] sm:gap-[30px] md:gap-[38px] lg:gap-[40px] items-center text-center text-white w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:w-[800px] transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Subtitle */}
          <div className="flex flex-col justify-center w-full opacity-[0.43] font-pretendard font-semibold text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32.564px] leading-[1.25] lg:leading-[40.705px] tracking-[-0.03em] lg:tracking-[-0.9769px]">
            <p>크리에이터를 위한 패션 프로덕션 허브</p>
          </div>

          {/* Main Title */}
          <div className="flex flex-col justify-center w-full font-pretendard font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-[1.25] lg:leading-[80px] tracking-[-0.03em] lg:tracking-[-1.92px]">
            <p className="mb-0">당신만의 이야기로 만든</p>
            <p className="mb-20 sm:mb-10 lg:mb-0">하나뿐인 패션이 되는 곳.</p>
          </div>
        </div>

        {/* Product Images Layout - Card Style */}
        <div
          ref={containerRef}
          className={`relative transition-opacity duration-[1200ms] ease-out delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            width: '1360px',
            height: '650px',
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            perspective: '1000px'
          }}
        >
          {/* Left panel - tilted outward */}
          <div
            className="absolute left-0 top-[10.75px] w-[450px] h-[628.674px] rounded-[12px] overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%)',
              transform: 'rotateY(-25deg) translateX(-60px) translateZ(-100px)',
              transformOrigin: 'left center',
              transformStyle: 'preserve-3d'
            }}
          >
            <Image
              src="/about/image_2.png"
              alt="Left panel"
              fill
              className="object-cover"
            />
          </div>

          {/* Center panel - forward */}
          <div
            className="absolute left-[401.657px] top-0 w-[556.596px] h-[650.174px] rounded-[12px] overflow-hidden shadow-2xl z-10"
            style={{
              transform: 'translateZ(50px)',
              transformStyle: 'preserve-3d'
            }}
          >
            <Image
              src="/about/image_1.png"
              alt="Center panel"
              fill
              className="object-cover"
            />
          </div>

          {/* Right panel - tilted outward */}
          <div
            className="absolute right-0 top-[10.75px] w-[450px] h-[628.674px] rounded-[12px] overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%)',
              transform: 'rotateY(25deg) translateX(60px) translateZ(-100px)',
              transformOrigin: 'right center',
              transformStyle: 'preserve-3d'
            }}
          >
            <Image
              src="/about/image_3.png"
              alt="Right panel"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
