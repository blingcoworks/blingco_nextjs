"use client";

import { useState, useEffect } from 'react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import MarqueeText from '../components/MarqueeText';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-[var(--blingco-black)]">
      <AboutFirst />
      <MarqueeText />
      <AboutSecond />
      <AboutThird />
    </div>
  );
}

function AboutFirst() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="relative w-full bg-[var(--blingco-black)]">
      <div className="flex flex-col gap-[148px] items-center pt-[120px] pt-30 pb-37 px-0 w-full">
        {/* Heading */}
        <div
          className={`flex flex-col gap-[46px] items-center text-center text-white w-[800px] transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Subtitle */}
          <div className="flex flex-col justify-center w-full opacity-[0.43] font-['Pretendard'] font-semibold text-[32.564px] leading-[40.705px] tracking-[-0.9769px]">
            <p>크리에이터를 위한 패션 프로덕션 허브</p>
          </div>
          
          {/* Main Title */}
          <div className="flex flex-col justify-center w-full font-['Pretendard'] font-bold text-[64px] leading-[80px] tracking-[-1.92px]">
            <p className="mb-0">당신만의 이야기로 만든</p>
            <p>하나뿐인 패션이 되는 곳.</p>
          </div>
        </div>

        {/* Product Images Layout - Card Style */}
        <div
          className={`relative w-[1360px] h-[650px] transition-opacity duration-[1200ms] ease-out delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
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

function AboutSecond() {
  const { sectionRef, scrollProgress } = useScrollProgress();

  // Heading fade-in: 0 to 0.3
  const headingOpacity = Math.max(0, Math.min(1, scrollProgress / 0.3));

  // All circles fade-in together: 0.3 to 0.6
  const circlesOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.3) / 0.3));

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[200vh]"
    >
      <div
        className="sticky top-0 w-full h-screen flex flex-col items-center justify-center gap-[100px] px-0 bg-cover bg-center bg-no-repeat bg-[var(--blingco-black)]" 
        style={{ 
          backgroundImage: 'url(/about2_bg.png)'
        }}
      >
        {/* Heading */}
        <div 
          className="flex flex-col justify-center text-center text-white w-[615px] font-['Pretendard'] font-bold text-[64px] leading-[80px] tracking-[-1.92px] transition-opacity duration-300 ease-out"
          style={{ opacity: headingOpacity }}
        >
          <p className="mb-0 whitespace-nowrap">블링코만의 다양한 혜택을</p>
          <p className="whitespace-nowrap">확인해보세요.</p>
        </div>

        {/* Benefits circles */}
        <div 
          className="relative w-full flex justify-center items-center transition-opacity duration-300 ease-out"
          style={{ opacity: circlesOpacity }}
        >
          {/* Circle 1 - 제품 대여 */}
          <div className="relative flex items-center justify-center w-[438px] h-[452px] -mr-[15px] z-[1]">
            <div className="absolute inset-0 rounded-full border border-[var(--blingco-green)]" />
            <div className="relative text-center z-10">
              <h3 className="text-white text-[32px] font-['Pretendard'] font-semibold leading-[30px] tracking-[-0.96px] mb-[15px]">
                제품 대여
              </h3>
              <p className="text-[#B2B2B2] text-[20px] font-['Pretendard'] font-medium leading-[30px] tracking-[-0.6px]">
                500개 이상의 브랜드에서 제품을 대여하고<br />
                무한한 스타일링을 시작해보세요.
              </p>
            </div>
          </div>

          {/* Circle 2 - 제품 협찬 */}
          <div className="relative flex items-center justify-center w-[438px] h-[452px] -ml-[15px] -mr-[15px] z-10">
            <div className="absolute inset-0 rounded-full border border-[var(--blingco-green)]" />
            <div className="relative text-center z-10">
              <h3 className="text-white text-[32px] font-['Pretendard'] font-semibold leading-[30px] tracking-[-0.96px] mb-[15px]">
                제품 협찬
              </h3>
              <p className="text-[#B2B2B2] text-[20px] font-['Pretendard'] font-medium leading-[30px] tracking-[-0.6px]">
                500개 이상의 브랜드에서 제품을 대여하고<br />
                무한한 스타일링을 시작해보세요.
              </p>
            </div>
          </div>

          {/* Circle 3 - 행사 초대 */}
          <div className="relative flex items-center justify-center w-[438px] h-[452px] -ml-[15px] z-[1]">
            <div className="absolute inset-0 rounded-full border border-[var(--blingco-green)]" />
            <div className="relative text-center z-10">
              <h3 className="text-white text-[32px] font-['Pretendard'] font-semibold leading-[30px] tracking-[-0.96px] mb-[15px]">
                행사 초대
              </h3>
              <p className="text-[#B2B2B2] text-[20px] font-['Pretendard'] font-medium leading-[30px] tracking-[-0.6px]">
                500개 이상의 브랜드에서 제품을 대여하고<br />
                무한한 스타일링을 시작해보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutThird() {
  const { sectionRef, scrollProgress } = useScrollProgress();

  const benefits = [
    {
      title: "제품 대여",
      description: "500개 이상의 브랜드에서 제품을 대여하고\n무한한 스타일링을 시작해보세요."
    },
    {
      title: "제품 협찬",
      description: "500개 이상의 브랜드에서 제품을 대여하고\n무한한 스타일링을 시작해보세요."
    },
    {
      title: "행사 초대",
      description: "500개 이상의 브랜드에서 제품을 대여하고\n무한한 스타일링을 시작해보세요."
    }
  ];

  // Heading fade-in: 0 to 0.3
  const headingOpacity = Math.max(0, Math.min(1, scrollProgress / 0.3));

  // Cards fade-in sequentially
  const getCardOpacity = (index: number) => {
    const start = 0.2 + (index * 0.15); // Card 0: 0.2, Card 1: 0.35, Card 2: 0.5
    const end = start + 0.2;
    return Math.max(0, Math.min(1, (scrollProgress - start) / (end - start)));
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[200vh]"
    >
      <div
        className="sticky top-0 w-full h-screen flex flex-col items-center justify-center gap-[72px] px-0" 
        style={{ 
          backgroundColor: 'var(--blingco-black)'
        }}
      >
        {/* Heading */}
        <div 
          className="flex flex-col justify-center text-center text-white w-[615px] font-['Pretendard'] font-bold text-[64px] leading-[80px] tracking-[-1.92px] transition-opacity duration-300 ease-out"
          style={{ opacity: headingOpacity }}
        >
          <p className="mb-0 whitespace-nowrap">블링코만의 다양한 혜택을</p>
          <p className="whitespace-nowrap">확인해보세요.</p>
        </div>

        {/* Benefit Cards */}
        <div className="flex flex-col gap-[22px] w-auto px-4 ">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center rounded-[12px] px-[40px] py-[49px] h-[129px] bg-[rgba(151,71,255,0.3)] transition-opacity duration-300 ease-out"
              style={{ opacity: getCardOpacity(index) }}
            >
            {/* Title */}
            <div className="flex-shrink-0 text-center mr-[80px] whitespace-nowrap text-[var(--blingco-green)] font-['Pretendard'] font-semibold text-[40px] leading-[30px] tracking-[-1.2px]">
              {benefit.title}
            </div>
            
            {/* Description */}
            <div className="flex-1 font-['Pretendard'] font-medium text-[20px] leading-[30px] tracking-[-0.6px] text-[#B2B2B2]">
              {benefit.description.split('\n').map((line, i) => (
                <p key={i} className={i === 0 ? 'mb-0' : ''}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}