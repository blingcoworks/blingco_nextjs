"use client";

import { useScrollProgress } from "@/app/hooks/useScrollProgress";
import { calculateThreePhaseOpacity } from "@/app/utils/threePhaseTransition";

export default function Slogan() {
  const { sectionRef, scrollProgress } = useScrollProgress();

  // 3단계 애니메이션 분할
  const {
    firstOpacity: slideTextOpacity,
    secondOpacity: fadeInOpacity,
    firstThreshold,
  } = calculateThreePhaseOpacity(scrollProgress);

  // Transform 계산 (슬라이드 애니메이션)
  let leftTransform: string = `translateX(0%)`;
  let rightTransform: string = `translateX(0%)`;

  if (scrollProgress < firstThreshold) {
    // Phase 1: 슬라이드 인
    const phase1Progress = scrollProgress / firstThreshold;
    const leftTranslate = (1 - phase1Progress) * -100;
    const rightTranslate = (1 - phase1Progress) * 100;
    leftTransform = `translateX(${leftTranslate}%)`;
    rightTransform = `translateX(${rightTranslate}%)`;
  }

  // 공통 스타일
  const textBaseClasses = "text-[48px] md:text-[80px] lg:text-[128px] font-black leading-[1.3] md:leading-[1.25] lg:leading-[1.2] tracking-[-0.02em] md:tracking-[-0.015em] lg:tracking-[-1.28px] whitespace-nowrap will-change-transform";
  
  // 중앙에서 오프셋 값 (%)
  const OFFSET_PERCENTAGE = 15;

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[300vh] z-10"
    >
      {/* Sticky container - 화면에 고정되는 배경 */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: 'var(--blingco-bg-dark)' }}>
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

