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
          className={`flex flex-col gap-[20px] sm:gap-[30px] md:gap-[38px] lg:gap-[46px] items-center text-center text-white w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:w-[800px] transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Subtitle */}
          <div className="flex flex-col justify-center w-full opacity-[0.43] font-pretendard font-semibold text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32.564px] leading-[1.25] lg:leading-[40.705px] tracking-[-0.03em] lg:tracking-[-0.9769px]">
            <p>크리에이터를 위한 패션 프로덕션 허브</p>
          </div>
          
          {/* Main Title */}
          <div className="flex flex-col justify-center w-full font-pretendard font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-[1.25] lg:leading-[80px] tracking-[-0.03em] lg:tracking-[-1.92px]">
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Heading fade-in: 0 to 0.3
  const headingOpacity = Math.max(0, Math.min(1, scrollProgress / 0.3));

  // Desktop: All circles fade-in together: 0.3 to 0.6
  const circlesOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.3) / 0.3));

  // Mobile: 3단계 순차 전환 (message.tsx 방식)
  // Circle 1: 0.3-0.5 (fade in & stay), 0.5-0.6 (fade out)
  // Circle 2: 0.5-0.6 (fade in & stay), 0.75-0.85 (fade out)
  // Circle 3: 0.75-0.85 (fade in & stay)
  const getCircleOpacity = (index: number) => {
    if (!isMobile) return 1; // Desktop: always visible (controlled by parent)

    // Mobile: sequential fade
    if (index === 0) {
      // Circle 1: 0.3에서 나타나서 0.55에서 사라짐
      if (scrollProgress < 0.3) return 0;
      if (scrollProgress < 0.4) return (scrollProgress - 0.3) / 0.1; // fade in
      if (scrollProgress < 0.55) return 1; // stay
      if (scrollProgress < 0.65) return 1 - (scrollProgress - 0.55) / 0.1; // fade out
      return 0;
    } else if (index === 1) {
      // Circle 2: 0.55에서 나타나서 0.8에서 사라짐
      if (scrollProgress < 0.55) return 0;
      if (scrollProgress < 0.65) return (scrollProgress - 0.55) / 0.1; // fade in
      if (scrollProgress < 0.8) return 1; // stay
      if (scrollProgress < 0.9) return 1 - (scrollProgress - 0.8) / 0.1; // fade out
      return 0;
    } else {
      // Circle 3: 0.8에서 나타남
      if (scrollProgress < 0.8) return 0;
      if (scrollProgress < 0.9) return (scrollProgress - 0.8) / 0.1; // fade in
      return 1; // stay
    }
  };

  const circles = [
    {
      title: "STRATEGY",
      subtitle: "데이터 기반의 성공 설계",
      description: "당신의 감성과 시장의 데이터를 결합합니다.\n팬들이 열광하고 실제로 팔리는, \n실패 확률을 줄인 성공적인 브랜드를 설계합니다."
    },
    {
      title: "COLLABORATION",
      subtitle: "전문가 그룹의 공동 창작",
      description: "당신의 콘텐츠에 패션 전문가의 감각을 더합니다.\n아이디어를 함께 나누고,\n가장 당신다운 브랜드를 공동으로 창작합니다."
    },
    {
      title: "SYSTEM",
      subtitle: "운영의 완전한 분리",
      description: "당신은 콘텐츠와 팬에만 집중하세요. \n브랜드 기획부터 운영까지, \n가장 복잡한 과정은 블링코의 시스템이 책임집니다."
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[200vh]"
    >
      <div
        className="sticky top-0 w-full h-screen flex flex-col items-center justify-center gap-[40px] sm:gap-[60px] md:gap-[80px] lg:gap-[100px] px-4 bg-cover bg-center bg-no-repeat bg-[var(--blingco-black)]" 
        style={{ 
          backgroundImage: 'url(/about2_bg.png)'
        }}
      >
        {/* Heading */}
        <div 
          className="flex flex-col justify-center pt-[20px] sm:pt-[30px] md:pt-[40px] lg:pt-[50px] items-center text-center w-full max-w-[90%] sm:w-auto lg:w-[523px] lg:h-[132px] transition-opacity duration-300 ease-out"
          style={{ opacity: headingOpacity }}
        >
          <p className="mb-0 whitespace-nowrap text-white font-pretendard font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.5] lg:leading-[90px] tracking-[-0.03em] lg:tracking-[-1.8px]">BLING.CO</p>
          <p className="whitespace-nowrap text-[var(--blingco-green)] font-pretendard font-bold text-[48px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[1.5] lg:leading-[90px] tracking-[-0.03em] lg:tracking-[-2.7px]">CORE VALUE</p>
        </div>

        {/* Benefits circles - Desktop: flex-row, Mobile: absolute overlay */}
        <div 
          className="relative w-full md:flex md:flex-row md:justify-center md:items-center md:gap-0 transition-opacity duration-300 ease-out"
          style={{ opacity: isMobile ? 1 : circlesOpacity }}
        >
          {/* Mobile: stacked circles at same position */}
          {isMobile ? (
            <div className="relative flex justify-center items-center w-full h-[300px] sm:h-[340px]">
              {circles.map((circle, index) => (
                <div
                  key={index}
                  className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-out"
                  style={{ 
                    opacity: getCircleOpacity(index),
                    willChange: 'opacity'
                  }}
                >
                  <div className="relative flex items-center justify-center w-[280px] h-[300px] sm:w-[320px] sm:h-[340px]">
                    <div className="absolute inset-0 rounded-full border border-[var(--blingco-green)]" />
                    <div className="relative flex flex-col items-center justify-center text-center z-10 w-[80%]">
                      <h3 className="text-white text-[24px] sm:text-[28px] font-pretendard font-bold leading-[30px] tracking-[-0.03em] mb-[12px] sm:mb-[15px]">
                        {circle.title}
                      </h3>
                      <p className="text-[#DFDFDF] text-[14px] sm:text-[16px] font-pretendard font-semibold leading-[21px] tracking-[-0.03em] mb-[10px] sm:mb-[12px]">
                        {circle.subtitle}
                      </p>
                      <p className="text-white text-[12px] sm:text-[13px] font-pretendard font-normal leading-[18px] sm:leading-[20px] tracking-[-0.03em]">
                        {circle.description.split('\n').map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < circle.description.split('\n').length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Desktop: side by side circles
            <>
              {/* Circle 1 - STRATEGY */}
              <div className="relative flex items-center justify-center w-[360px] h-[380px] lg:w-[438px] lg:h-[452px] -mr-[15px] z-[1]">
                <div className="absolute inset-0 rounded-full border border-[var(--blingco-green)]" />
                <div className="relative flex flex-col items-center justify-center text-center z-10 w-[280px] lg:w-[320px]">
                  <h3 className="text-white text-[34px] lg:text-[40px] font-pretendard font-bold leading-[30px] tracking-[-0.03em] mb-[15px] lg:mb-[20px]">
                    STRATEGY
                  </h3>
                  <p className="text-[#DFDFDF] text-[18px] lg:text-[20px] font-pretendard font-semibold leading-[21px] tracking-[-0.03em] mb-[12px] lg:mb-[15px]">
                    데이터 기반의 성공 설계
                  </p>
                  <p className="text-white text-[14px] lg:text-[16.417px] font-pretendard font-normal leading-[20px] lg:leading-[22px] tracking-[-0.03em]">
                    당신의 감성과 시장의 데이터를 결합합니다.
                    <br />팬들이 열광하고 실제로 팔리는, 
                    <br />실패 확률을 줄인 성공적인 브랜드를 설계합니다.
                  </p>
                </div>
              </div>

              {/* Circle 2 - COLLABORATION*/}
              <div className="relative flex items-center justify-center w-[360px] h-[380px] lg:w-[438px] lg:h-[452px] -ml-[15px] -mr-[15px] z-10">
                <div className="absolute inset-0 rounded-full border border-[var(--blingco-green)]" />
                <div className="relative flex flex-col items-center justify-center text-center z-10 w-[280px] lg:w-[320px]">
                  <h3 className="text-white text-[34px] lg:text-[40px] font-pretendard font-bold leading-[30px] tracking-[-0.03em] mb-[15px] lg:mb-[20px]">
                    COLLABORATION
                  </h3>
                  <p className="text-[#DFDFDF] text-[18px] lg:text-[20px] font-pretendard font-semibold leading-[21px] tracking-[-0.03em] mb-[12px] lg:mb-[15px]">
                    전문가 그룹의 공동 창작
                  </p>
                  <p className="text-white text-[14px] lg:text-[16.417px] font-pretendard font-normal leading-[20px] lg:leading-[22px] tracking-[-0.03em]">
                    당신의 콘텐츠에 패션 전문가의 감각을 더합니다.
                    <br />아이디어를 함께 나누고,
                    <br />가장 당신다운 브랜드를 공동으로 창작합니다.
                  </p>
                </div>
              </div>

              {/* Circle 3 - SYSTEM */}
              <div className="relative flex items-center justify-center w-[360px] h-[380px] lg:w-[438px] lg:h-[452px] -ml-[15px] z-[1]">
                <div className="absolute inset-0 rounded-full border border-[var(--blingco-green)]" />
                <div className="relative flex flex-col items-center justify-center text-center z-10 w-[280px] lg:w-[320px]">
                  <h3 className="text-white text-[34px] lg:text-[40px] font-pretendard font-bold leading-[30px] tracking-[-0.03em] mb-[15px] lg:mb-[20px]">
                    SYSTEM
                  </h3>
                  <p className="text-[#DFDFDF] text-[18px] lg:text-[20px] font-pretendard font-semibold leading-[21px] tracking-[-0.03em] mb-[12px] lg:mb-[15px]">
                    운영의 완전한 분리
                  </p>
                  <p className="text-white text-[14px] lg:text-[16.417px] font-pretendard font-normal leading-[20px] lg:leading-[22px] tracking-[-0.03em]">
                    당신은 콘텐츠와 팬에만 집중하세요. 
                    <br />브랜드 기획부터 운영까지, 
                    <br />가장 복잡한 과정은 블링코의 시스템이 책임집니다.
                  </p>
                </div>
              </div>
            </>
          )}
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
        className="sticky top-0 w-full h-screen flex flex-col items-center justify-center gap-[32px] sm:gap-[48px] md:gap-[60px] lg:gap-[72px] px-4 pt-[80px] sm:pt-[80px] md:pt-[40px] lg:pt-0" 
        style={{ 
          backgroundColor: 'var(--blingco-black)'
        }}
      >
        {/* Heading */}
        <div 
          className="flex flex-col justify-center text-center text-white w-full max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:w-[615px] font-pretendard font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-[1.25] lg:leading-[80px] tracking-[-0.03em] lg:tracking-[-1.92px] transition-opacity duration-300 ease-out"
          style={{ opacity: headingOpacity }}
        >
          <p className="mb-0 whitespace-nowrap">블링코와 함께라면</p>
          <p className="whitespace-nowrap">고민할 필요 없습니다.</p>
        </div>

        {/* Benefit Cards */}
        <div className="flex flex-col gap-[16px] sm:gap-[18px] md:gap-[20px] lg:gap-[22px] w-full max-w-[95%] sm:max-w-full md:max-w-[800px] lg:max-w-[1000px] px-0 sm:px-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start rounded-[8px] sm:rounded-[10px] lg:rounded-[12px] px-[8px] sm:pl-[20px] sm:pr-[40px] py-[24px] sm:py-[30px] md:py-[40px] lg:py-[49px] min-h-[100px] sm:h-auto lg:h-[129px] bg-[rgba(151,71,255,0.3)] transition-opacity duration-300 ease-out"
              style={{ opacity: getCardOpacity(index) }}
            >
            {/* Title */}
            <div className="flex-shrink-0 text-center mb-[12px] sm:mb-0 sm:mr-[20px] md:mr-[30px] lg:mr-[35px] w-full sm:w-[200px] md:w-[280px] lg:w-[350px] text-[var(--blingco-green)] font-pretendard font-semibold text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] leading-[1.25] lg:leading-[30px] tracking-[-0.03em] lg:tracking-[-1.2px]">
              {benefit.title}
            </div>
            
            {/* Description */}
            <div className="flex-1 font-pretendard font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5] lg:leading-[30px] tracking-[-0.03em] lg:tracking-[-0.6px] text-[#B2B2B2] text-center sm:text-left">
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
          <button className="w-[240px] h-[56px] sm:w-[280px] sm:h-[64px] lg:w-[312px] lg:h-[70px] bg-[#95FF8D] text-[#2F2F2F] font-pretendard font-semibold text-[18px] sm:text-[20px] lg:text-[24px] leading-[30px] tracking-[-0.03em] lg:tracking-[-0.72px] rounded-[64px] hover:bg-[#95FF8D]/90 transition-colors duration-200 flex items-center justify-center gap-2">
              <span>LET&apos;S TOGETHER</span>
            <span className="text-[#2F2F2F] font-pretendard font-bold text-[28px] sm:text-[34px] lg:text-[40px] leading-[8.8px] tracking-[-0.03em] lg:tracking-[-1.2px]" style={{ WebkitTextStroke: '1px #000' }}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}