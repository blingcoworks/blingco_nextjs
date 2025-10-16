"use client";

import { useState, useEffect, useRef } from 'react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import MarqueeText from '../components/MarqueeText';
import Image from 'next/image';
import { startTransition } from 'react';

export default function AboutPage() {
  return (
    <div className="bg-[var(--blingco-black)]">
      <AboutFirst />
      <MarqueeText />
      <AboutSecond />
      <AboutThird />
      <AboutFourth />
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

function AboutFirstLotate() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 보이는 첫 번째 이미지의 인덱스
  const [rotation, setRotation] = useState(0); // 누적 회전각
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const images = [
    "/about/image_1.png",
    "/about/image_2.png", 
    "/about/image_3.png",
    "/about/image_4.png",
    "/about/image_5.png", 
    "/about/image_6.png"
  ];

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || isAnimating) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const mouseX = e.clientX - centerX;
    const threshold = rect.width * 0.3; // 30% of container width

    if (mouseX > threshold) {
      // Move right: shift all images right
      rotateImages('right');
    } else if (mouseX < -threshold) {
      // Move left: shift all images left
      rotateImages('left');
    }
  };

  const rotateImages = (direction: 'left' | 'right') => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Use React's startTransition for smooth rotation
    startTransition(() => {
      if (direction === 'right') {
        // 오른쪽으로 회전: rotation 증가, currentIndex 감소
        setRotation(prev => prev + 60);
        setCurrentIndex(prev => prev === 0 ? 5 : prev - 1);
      } else {
        // 왼쪽으로 회전: rotation 감소, currentIndex 증가
        setRotation(prev => prev - 60);
        setCurrentIndex(prev => (prev + 1) % 6);
      }
    });

    // Reset animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  return (
    <section id="about" className="relative w-full bg-[var(--blingco-black)]">
      <div className="flex flex-col gap-[220px] items-center pt-[120px] pt-30 pb-37 px-0 w-full">
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

        {/* Cylindrical Card Rotation */}
        <div
          ref={containerRef}
          className={`relative w-[800px] h-[650px] transition-opacity duration-[1200ms] ease-out delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            perspective: '1200px'
          }}
          onMouseMove={handleMouseMove}
        >
            {/* Cylindrical container */}
            <div
              className="relative w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${rotation}deg)`,
                transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
            {[0, 1, 2, 3, 4, 5].map((cardIndex) => {
              const imageIndex = (currentIndex + cardIndex) % 6;
              return (
                <div
                  key={cardIndex}
                  className="absolute w-[450px] h-[600px] rounded-[12px] overflow-hidden shadow-2xl"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: '-225px',
                    marginTop: '-300px',
                    transform: `rotateY(${cardIndex * 60}deg) translateZ(400px)`,
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <Image
                    src={images[imageIndex]}
                    alt={`Card ${cardIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>

          {/* Instructions */}
          <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 text-white/60 text-sm text-center">
            <p>마우스를 좌우로 움직여 이미지를 회전시켜보세요</p>
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
          className="flex flex-col justify-center pt-[50px] items-center text-center w-[523px] h-[132px] transition-opacity duration-300 ease-out"
          style={{ opacity: headingOpacity }}
        >
          <p className="mb-0 whitespace-nowrap text-white font-['Pretendard'] font-bold text-[60px] leading-[90px] tracking-[-1.8px]">BLING.CO</p>
          <p className="whitespace-nowrap text-[var(--blingco-green)] font-['Pretendard'] font-bold text-[90px] leading-[90px] tracking-[-2.7px]">CORE VALUE</p>
        </div>

        {/* Benefits circles */}
        <div 
          className="relative w-full flex justify-center items-center transition-opacity duration-300 ease-out"
          style={{ opacity: circlesOpacity }}
        >
          {/* Circle 1 - STRATEGY */}
          <div className="relative flex items-center justify-center w-[438px] h-[452px] -mr-[15px] z-[1]">
            <div className="absolute inset-0 rounded-full border border-[var(--blingco-green)]" />
            <div className="relative flex flex-col items-center justify-center text-center z-10 w-[320px]">
              <h3 className="text-white text-[40px] font-['Pretendard'] font-bold leading-[30px] tracking-[-0.03em] mb-[20px]">
                STRATEGY
              </h3>
              <p className="text-[#DFDFDF] text-[20px] font-['Pretendard'] font-semibold leading-[21px] tracking-[-0.03em] mb-[15px]">
                데이터 기반의 성공 설계
              </p>
              <p className="text-white text-[16.417px] font-['Pretendard'] font-normal leading-[22px] tracking-[-0.03em]">
                당신의 감성과 시장의 데이터를 결합합니다.
                <br />팬들이 열광하고 실제로 팔리는, 
                <br />실패 확률을 줄인 성공적인 브랜드를 설계합니다.
              </p>
            </div>
          </div>

          {/* Circle 2 - COLLABORATION*/}
          <div className="relative flex items-center justify-center w-[438px] h-[452px] -ml-[15px] -mr-[15px] z-10">
            <div className="absolute inset-0 rounded-full border border-[var(--blingco-green)]" />
            <div className="relative flex flex-col items-center justify-center text-center z-10 w-[320px]">
              <h3 className="text-white text-[40px] font-['Pretendard'] font-bold leading-[30px] tracking-[-0.03em] mb-[20px]">
                COLLABORATION
              </h3>
              <p className="text-[#DFDFDF] text-[20px] font-['Pretendard'] font-semibold leading-[21px] tracking-[-0.03em] mb-[15px]">
                전문가 그룹의 공동 창작
              </p>
              <p className="text-white text-[16.417px] font-['Pretendard'] font-normal leading-[22px] tracking-[-0.03em]">
                당신의 콘텐츠에 패션 전문가의 감각을 더합니다.
                <br />아이디어를 함께 나누고,
                <br />가장 당신다운 브랜드를 공동으로 창작합니다.
              </p>
            </div>
          </div>

          {/* Circle 3 - SYSTEM */}
          <div className="relative flex items-center justify-center w-[438px] h-[452px] -ml-[15px] z-[1]">
            <div className="absolute inset-0 rounded-full border border-[var(--blingco-green)]" />
            <div className="relative flex flex-col items-center justify-center text-center z-10 w-[320px]">
              <h3 className="text-white text-[40px] font-['Pretendard'] font-bold leading-[30px] tracking-[-0.03em] mb-[20px]">
                SYSTEM
              </h3>
              <p className="text-[#DFDFDF] text-[20px] font-['Pretendard'] font-semibold leading-[21px] tracking-[-0.03em] mb-[15px]">
                운영의 완전한 분리
              </p>
              <p className="text-white text-[16.417px] font-['Pretendard'] font-normal leading-[22px] tracking-[-0.03em]">
                당신은 콘텐츠와 팬에만 집중하세요. 
                <br />브랜드 기획부터 운영까지, 
                <br />가장 복잡한 과정은 블링코의 시스템이 책임집니다.
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
      title: "비용 걱정 없는 시작",
      description: "초기 제작 비용도, 재고 부담도 모두 0원입니다.\n아이디어만으로 리스크 없이 당신의 첫 상품을 만들어 보세요."
    },
    {
      title: "차원이 다른 수익성",
      description: "저가형 굿즈와 비교할 수 없는 퀄리티로, 더 높은 판매 단가와\n수익률을 보장하여 당신의 영향력을 확실한 수 익으로 연결합니다."
    },
    {
      title: "실패 없는 팬 경험",
      description: "퀄리티 논란과 팬들의 실망을 원천 차단합니다.\n당신의 이름에 자부심이 될, 단 하나의 작품을 만들어 팬들의\n열광적인 지지를 이끌어냅니다."
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
          <p className="mb-0 whitespace-nowrap">블링코와 함께라면</p>
          <p className="whitespace-nowrap">고민할 필요 없습니다.</p>
        </div>

        {/* Benefit Cards */}
        <div className="flex flex-col gap-[22px] w-auto px-4 ">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center justify-start rounded-[12px] pl-[20px] pr-[40px] py-[49px] h-[129px] bg-[rgba(151,71,255,0.3)] transition-opacity duration-300 ease-out"
              style={{ opacity: getCardOpacity(index) }}
            >
            {/* Title */}
            <div className="flex-shrink-0 text-center mr-[35px] w-[350px] text-[var(--blingco-green)] font-['Pretendard'] font-semibold text-[40px] leading-[30px] tracking-[-1.2px]">
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

function AboutFourth() {
  const { sectionRef, scrollProgress } = useScrollProgress();

  // Heading fade-in: 0 to 0.3
  const headingOpacity = Math.max(0, Math.min(1, scrollProgress / 0.3));

  // CTA button fade-in: 0.3 to 0.6
  const ctaOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.3) / 0.3));

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[100vh] bg-[var(--blingco-black)]"
    >
      <div
        className="sticky top-0 w-full h-screen flex flex-col items-center justify-center gap-[60px] px-0" 
      >
        {/* Heading */}
        <div 
          className="flex flex-col justify-center text-center text-white w-[1000px] font-aggravo font-normal text-[96px] leading-[80px] tracking-[-2.88px] transition-opacity duration-300 ease-out"
          style={{ opacity: headingOpacity }}
        >
          <p className="mb-0 whitespace-nowrap">INTERESTED?</p>
        </div>

        {/* CTA Button */}
        <div 
          className="transition-opacity duration-300 ease-out"
          style={{ opacity: ctaOpacity }}
        >
          <button className="w-[312px] h-[70px] bg-[#95FF8D] text-[#2F2F2F] font-pretendard font-semibold text-[24px] leading-[30px] tracking-[-0.72px] rounded-[64px] hover:bg-[#95FF8D]/90 transition-colors duration-200 flex items-center justify-center gap-2">
              <span>LET&apos;S TOGETHER</span>
            <span className="text-[#2F2F2F] font-pretendard font-bold text-[40px] leading-[8.8px] tracking-[-1.2px]" style={{ WebkitTextStroke: '1px #000' }}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}