"use client";

import { useScrollProgress } from "@/app/hooks/useScrollProgress";
import { calculateThreePhaseOpacity } from "@/app/utils/threePhaseTransition";

export default function Message() {
  const { sectionRef, scrollProgress } = useScrollProgress();

  // 배경: 2단계 크로스페이드
  // 메시지: 3단계 순차 전환

  const phase1Progress = Math.min(scrollProgress / 0.5, 1); // 0~0.5를 0~1로 매핑
  const phase2Progress = Math.max(0, (scrollProgress - 0.5) / 0.5); // 0.5~1을 0~1로 매핑

  // 배경 이미지: 2단계 크로스페이드 (겹침 유지)
  const bg1Opacity = phase1Progress * 0.4 - phase2Progress * 0.4; // 0 → 0.4 → 0
  const bg2Opacity = phase2Progress * 0.4; // 0 → 0.4

  // 메시지: 3단계 순차 전환 (겹치지 않음)
  const { firstOpacity: message1Opacity, secondOpacity: message2Opacity } =
    calculateThreePhaseOpacity(scrollProgress);

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
        "세상에 하나뿐인 브랜드를 경험하세요.",
        "블링코와 함께하는 무한한 패션 굿즈의 세계를 경험하세요.",
        "블링코와 함께하는 무한한 패션 굿즈의 세계를 경험하세요."
      ],
      backgroundImage: "/message_bg_2.png"
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[300vh] z-10"
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
              className="font-bold text-white text-[48px] leading-[140%] tracking-[-0.03em] whitespace-pre-line flex flex-col items-center justify-center font-pretendard"
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
              className="font-semibold text-white text-[32px] leading-[140%] tracking-[-0.96px] whitespace-pre-line flex flex-col items-center justify-center font-pretendard"
            >
              {messageContent[2].text.join("\n")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

