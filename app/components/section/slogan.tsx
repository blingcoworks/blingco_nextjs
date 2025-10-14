"use client";

import { useEffect, useRef, useState } from "react";

export default function Slogan() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // 스크롤 위치에 실시간 반응
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Phase 1: 섹션 하단이 화면 하단에서 시작 → 섹션 상단이 화면 상단에 닿을 때까지
      // Phase 2: 섹션이 sticky로 고정된 후 한 화면 더 스크롤

      const scrolledDistance = windowHeight - rect.top;
      const totalDistance = windowHeight * 2; // 두 화면 분량

      // 전체 진행률 계산 (0~1)
      const totalProgress = Math.max(0, Math.min(1, scrolledDistance / totalDistance));

      setScrollProgress(totalProgress);
    };

    // 초기 실행
    handleScroll();

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // 3단계 애니메이션 분할
  // Phase 1 (0-0.5): 슬라이드 인 애니메이션 (더 길게)
  // Phase 2 (0.5-0.75): 슬라이드 텍스트 페이드 아웃
  // Phase 3 (0.75-1.0): 새 텍스트 페이드 인

  let leftTransform: string;
  let rightTransform: string;
  let slideTextOpacity: number;
  let fadeInOpacity: number;

  if (scrollProgress < 0.5) {
    // Phase 1: 슬라이드 인
    const phase1Progress = scrollProgress / 0.5;
    const leftTranslate = (1 - phase1Progress) * -100;
    const rightTranslate = (1 - phase1Progress) * 100;
    leftTransform = `translateX(${leftTranslate}%)`;
    rightTransform = `translateX(${rightTranslate}%)`;
    slideTextOpacity = 1;
    fadeInOpacity = 0;
  } else if (scrollProgress < 0.75) {
    // Phase 2: 슬라이드 완료, 텍스트 페이드 아웃
    const phase2Progress = (scrollProgress - 0.5) / 0.25;
    leftTransform = `translateX(0%)`;
    rightTransform = `translateX(0%)`;
    slideTextOpacity = 1 - phase2Progress;
    fadeInOpacity = 0;
  } else {
    // Phase 3: 새 텍스트 페이드 인
    const phase3Progress = (scrollProgress - 0.75) / 0.25;
    leftTransform = `translateX(0%)`;
    rightTransform = `translateX(0%)`;
    slideTextOpacity = 0;
    fadeInOpacity = phase3Progress;
  }

  // 공통 스타일
  const textBaseClasses = "text-[48px] md:text-[80px] lg:text-[128px] font-black leading-[1.3] md:leading-[1.25] lg:leading-[1.2] tracking-[-0.02em] md:tracking-[-0.015em] lg:tracking-[-1.28px] whitespace-nowrap will-change-transform";
  
  // 중앙에서 오프셋 값 (%)
  const OFFSET_PERCENTAGE = 15;

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[200vh] z-10"
    >
      {/* Sticky container - 화면에 고정되는 배경 */}
      <div className="sticky top-0 w-full h-screen bg-[#0c0c0c] flex items-center justify-center overflow-hidden">
        {/* Phase 1: 슬라이드 애니메이션 */}
        <div
          className="absolute inset-0 flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-[32px]"
          style={{
            opacity: slideTextOpacity,
            willChange: "opacity",
          }}
        >
          <div className="relative w-full h-auto px-4 md:px-8 lg:px-[50px]">
            {/* First line - "Beyond Goods," slides from left - offset left from center */}
            <div className="relative w-full flex justify-center mb-4 md:mb-6 lg:mb-[32px]">
              <div className="relative" style={{ marginLeft: `-${OFFSET_PERCENTAGE}%` }}>
                <h2
                  className={`text-white ${textBaseClasses}`}
                  style={{ transform: leftTransform }}
                >
                  Beyond Goods,
                </h2>
              </div>
            </div>

            {/* Second line - "Your Own Brand" slides from right - offset right from center */}
            <div className="relative w-full flex justify-center">
              <div className="relative" style={{ marginRight: `-${OFFSET_PERCENTAGE}%` }}>
                <h2
                  className={`text-[#95ff8d] ${textBaseClasses}`}
                  style={{ transform: rightTransform }}
                >
                  Your Own Brand
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 3: 페이드 인 텍스트 - 중앙에 표시 */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: fadeInOpacity,
            willChange: "opacity",
          }}
        >
          <div className="text-center">
            <h2 className="font-black text-white text-[48px] md:text-[64px] lg:text-[80px] leading-tight">
              WE ARE
            </h2>
            <h2 className="font-black text-[#9747ff] text-[48px] md:text-[64px] lg:text-[80px] leading-none -mt-2 md:-mt-3 lg:-mt-4">
              FASHION GOODS
            </h2>
            <h2 className="font-black text-[#9747ff] text-[48px] md:text-[64px] lg:text-[80px] leading-none -mt-2 md:-mt-3 lg:-mt-4">
              PUBLINSHING SOLUTION
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

