"use client";

import { useEffect, useState } from 'react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { ANIMATION_TIMINGS, MOBILE_BREAKPOINT, useScrollOpacity } from './constants';

export default function CoreValues() {
  const { sectionRef, scrollProgress } = useScrollProgress();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Heading fade-in
  const headingOpacity = useScrollOpacity.heading(scrollProgress);

  // Desktop: All circles fade-in together
  const circlesOpacity = useScrollOpacity.range(
    scrollProgress,
    ANIMATION_TIMINGS.CIRCLES_START,
    ANIMATION_TIMINGS.CIRCLES_END - ANIMATION_TIMINGS.CIRCLES_START
  );

  // Mobile: 3단계 순차 전환
  const getCircleOpacity = (index: number) => {
    if (!isMobile) return 1; // Desktop: always visible (controlled by parent)

    const { MOBILE } = ANIMATION_TIMINGS;

    // Mobile: sequential fade
    if (index === 0) {
      // Circle 1: fade in, stay, fade out
      if (scrollProgress < MOBILE.CIRCLE1_FADE_IN) return 0;
      if (scrollProgress < MOBILE.CIRCLE1_STAY)
        return (scrollProgress - MOBILE.CIRCLE1_FADE_IN) / MOBILE.FADE_DURATION;
      if (scrollProgress < MOBILE.CIRCLE1_FADE_OUT) return 1;
      if (scrollProgress < MOBILE.CIRCLE1_FADE_OUT_END)
        return 1 - (scrollProgress - MOBILE.CIRCLE1_FADE_OUT) / MOBILE.FADE_DURATION;
      return 0;
    } else if (index === 1) {
      // Circle 2: fade in, stay, fade out
      if (scrollProgress < MOBILE.CIRCLE2_FADE_IN) return 0;
      if (scrollProgress < MOBILE.CIRCLE2_STAY)
        return (scrollProgress - MOBILE.CIRCLE2_FADE_IN) / MOBILE.FADE_DURATION;
      if (scrollProgress < MOBILE.CIRCLE2_FADE_OUT) return 1;
      if (scrollProgress < MOBILE.CIRCLE2_FADE_OUT_END)
        return 1 - (scrollProgress - MOBILE.CIRCLE2_FADE_OUT) / MOBILE.FADE_DURATION;
      return 0;
    } else {
      // Circle 3: fade in and stay
      if (scrollProgress < MOBILE.CIRCLE3_FADE_IN) return 0;
      if (scrollProgress < MOBILE.CIRCLE3_STAY)
        return (scrollProgress - MOBILE.CIRCLE3_FADE_IN) / MOBILE.FADE_DURATION;
      return 1;
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
