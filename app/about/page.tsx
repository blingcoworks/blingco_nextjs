"use client";

import { useState, useEffect } from 'react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import MarqueeText from '../components/MarqueeText';

export default function AboutPage() {
  return (
    <div className="bg-[#0c0c0c]">
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
      <div className="flex flex-col gap-[165px] items-center pt-[127px] pb-[165px] px-0 w-full">
        {/* Heading */}
        <div
          className={`flex items-center text-center text-white max-w-[562px] w-full h-[125px] font-['Pretendard'] not-italic font-bold text-[64px] leading-[80px] tracking-[-0.03em] transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex flex-col w-full">
            <p className="mb-0 whitespace-nowrap">당신만의 이야기로 만든</p>
            <p className="whitespace-nowrap">하나뿐인 패션 브랜드</p>
          </div>
        </div>

        {/* Product Grid Image */}
        <div
          className={`relative w-full max-w-[1280px] h-[801px] bg-cover bg-center transition-opacity duration-[1200ms] ease-out delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 73.32%, rgba(0, 0, 0, 0.5) 107.23%), linear-gradient(270deg, rgba(0, 0, 0, 0) 73.71%, rgba(0, 0, 0, 0.5) 108.05%), url(/about_first.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
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