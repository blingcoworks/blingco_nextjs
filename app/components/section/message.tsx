"use client";

import { useEffect, useRef, useState } from "react";

export default function Message() {
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

  // 배경: 2단계 크로스페이드
  // 메시지: 3단계 순차 전환

  const phase1Progress = Math.min(scrollProgress / 0.5, 1); // 0~0.5를 0~1로 매핑
  const phase2Progress = Math.max(0, (scrollProgress - 0.5) / 0.5); // 0.5~1을 0~1로 매핑

  // 배경 이미지: 2단계 크로스페이드 (겹침 유지)
  const bg1Opacity = phase1Progress * 0.4 - phase2Progress * 0.4; // 0 → 0.4 → 0
  const bg2Opacity = phase2Progress * 0.4; // 0 → 0.4

  // 메시지: 3단계 순차 전환 (겹치지 않음)
  let message1Opacity: number;
  let message2Opacity: number;

  if (scrollProgress < 0.5) {
    // Phase 1: 메시지 1 페이드 인
    message1Opacity = scrollProgress / 0.5;
    message2Opacity = 0;
  } else if (scrollProgress < 0.75) {
    // Phase 2: 메시지 1 페이드 아웃
    message1Opacity = 1 - (scrollProgress - 0.5) / 0.25;
    message2Opacity = 0;
  } else {
    // Phase 3: 메시지 2 페이드 인
    message1Opacity = 0;
    message2Opacity = (scrollProgress - 0.75) / 0.25;
  }

  // 메시지 내용과 배경 이미지 설정
  const messageContent = {
    1: {
      text: [
        "우리는 당신의 콘텐츠를 통해,",
        "브랜드가 세상에 빛나는 순간을 만듭니다."
      ],
      backgroundImage: "/message_bg_1.png"
    },
    2: {
      text: [
        "오직 당신의 콘텐츠만이 만들 수 있는",
        "세상에 하나뿐인 브랜드를 경험하세요."
      ],
      backgroundImage: "/message_bg_2.png"
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[200vh] z-10"
    >
      {/* Sticky container - 화면에 고정되는 배경 */}
      <div className="sticky top-0 w-full h-screen bg-[#0c0c0c] flex items-center justify-center overflow-hidden">
        {/* 배경 이미지 1 */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${messageContent[1].backgroundImage})`,
            opacity: bg1Opacity,
            willChange: "opacity",
          }}
        />

        {/* 배경 이미지 2 */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${messageContent[2].backgroundImage})`,
            opacity: bg2Opacity,
            willChange: "opacity",
          }}
        />

        {/* 메시지 1 */}
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center px-4 md:px-8 lg:px-16"
          style={{
            opacity: message1Opacity,
            willChange: "opacity",
          }}
        >
          <div className="text-center max-w-4xl">
            <div
              className="font-bold text-white text-[48px] leading-[140%] tracking-[-0.03em] whitespace-pre-line flex flex-col items-center justify-center"
              style={{
                fontFamily: 'Pretendard, sans-serif',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '140%',
                letterSpacing: '-0.03em',
                color: '#FFFFFF'
              }}
            >
              {messageContent[1].text.join("\n")}
            </div>
          </div>
        </div>

        {/* 메시지 2 */}
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center px-4 md:px-8 lg:px-16"
          style={{
            opacity: message2Opacity,
            willChange: "opacity",
          }}
        >
          <div className="text-center max-w-4xl">
            <div
              className="font-bold text-white text-[48px] leading-[140%] tracking-[-0.03em] whitespace-pre-line flex flex-col items-center justify-center"
              style={{
                fontFamily: 'Pretendard, sans-serif',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '48px',
                lineHeight: '140%',
                letterSpacing: '-0.03em',
                color: '#FFFFFF'
              }}
            >
              {messageContent[2].text.join("\n")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

