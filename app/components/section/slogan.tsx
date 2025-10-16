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

  // Figma 디자인 스타일 (Tailwind 클래스)
  const baseClassName = "whitespace-nowrap will-change-transform text-[32px] md:text-[72px] lg:text-[96px] 2xl:text-[120px] font-aggravo font-[550] leading-[120%] tracking-[-2.88px] text-center";
  const weAreClassName = "text-[20px] md:text-[51px] lg:text-[64px] 2xl:text-[80px] font-aggravo font-[550] leading-[120%] tracking-[-1.92px] text-center text-[#EEE]";
  const fashionClassName = "text-[28px] md:text-[72px] lg:text-[90px] 2xl:text-[120px] font-aggravo font-[550] leading-[120%] tracking-[-2.7px] text-center text-[#9747FF]";
  
  // 중앙에서 오프셋 값 (%)
  const OFFSET_PERCENTAGE = 25;

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[300vh] z-10"
    >
      {/* Sticky container - 화면에 고정되는 배경 */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center overflow-hidden bg-[var(--blingco-black)]">
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
                  className={`${baseClassName} text-[#EEE]`}
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
                  className={`${baseClassName} text-[#95FF8D]`}
                  style={{ transform: rightTransform }}
                >
                  Your Own Brand.
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
          <div className="text-center px-2 md:px-4 lg:px-8">
            <h2 className={weAreClassName}>
              WE ARE
            </h2>
            <h2 className={fashionClassName}>
              FASHION GOODS
            </h2>
            <h2 className={fashionClassName}>
              PUBLISHING SOLUTION
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

