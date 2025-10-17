"use client";

import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { ANIMATION_TIMINGS, useScrollOpacity } from './constants';

export default function Benefits() {
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

  // Heading fade-in
  const headingOpacity = useScrollOpacity.heading(scrollProgress);

  // Cards fade-in sequentially
  const getCardOpacity = (index: number) =>
    useScrollOpacity.sequential(
      scrollProgress,
      index,
      ANIMATION_TIMINGS.CARD_START_BASE,
      ANIMATION_TIMINGS.CARD_INTERVAL,
      ANIMATION_TIMINGS.CARD_FADE_DURATION
    );

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
