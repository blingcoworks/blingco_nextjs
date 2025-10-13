"use client";

import { useEffect, useRef, useState } from "react";

interface SloganProps {
  mode?: "scroll" | "trigger"; // scroll: 스크롤 위치에 반응, trigger: 한번만 실행
}

export default function Slogan({ mode = "scroll" }: SloganProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    if (mode === "scroll") {
      // 스크롤 위치에 실시간 반응
      const handleScroll = () => {
        if (!sectionRef.current) return;

        const section = sectionRef.current;
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // 섹션이 화면에 들어오기 시작할 때부터 화면에 완전히 보일 때까지의 진행률 계산
        // 섹션 하단이 화면 하단에 닿을 때 시작 (0%), 섹션 상단이 화면 상단에 닿을 때 완료 (100%)
        const start = windowHeight;
        const end = 0;
        const distance = start - end;
        const progress = Math.max(0, Math.min(1, (start - rect.top) / distance));
        
        setScrollProgress(progress);
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
    } else if (mode === "trigger") {
      // IntersectionObserver로 한번만 트리거
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isTriggered) {
              setIsTriggered(true);
            }
          });
        },
        { threshold: 0.3 }
      );

      const currentRef = sectionRef.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }
  }, [mode, isTriggered]);

  // mode에 따라 transform 값 계산
  let leftTransform: string;
  let rightTransform: string;

  if (mode === "scroll") {
    // 스크롤 모드: 진행률에 따라 부드럽게 변화
    const leftTranslate = (1 - scrollProgress) * -100;
    const rightTranslate = (1 - scrollProgress) * 100;
    leftTransform = `translateX(${leftTranslate}%)`;
    rightTransform = `translateX(${rightTranslate}%)`;
  } else {
    // 트리거 모드: 한번만 실행
    leftTransform = isTriggered ? "translateX(0)" : "translateX(-100%)";
    rightTransform = isTriggered ? "translateX(0)" : "translateX(100%)";
  }

  // 공통 스타일
  const textBaseClasses = "text-[48px] md:text-[80px] lg:text-[128px] font-black leading-[1.3] md:leading-[1.25] lg:leading-[1.2] tracking-[-0.02em] md:tracking-[-0.015em] lg:tracking-[-1.28px] whitespace-nowrap";
  const animationClasses = mode === "trigger" ? "transition-transform duration-1000 ease-out" : "will-change-transform";
  
  // 중앙에서 오프셋 값 (%)
  const OFFSET_PERCENTAGE = 15;

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen bg-[#0c0c0c] flex items-center justify-center z-10"
    >
      {/* Animated text container with overflow */}
      <div className="relative w-full h-full flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-[32px] overflow-hidden">
        <div className="relative w-full h-auto px-4 md:px-8 lg:px-[50px]">
          {/* First line - "Beyond Goods," slides from left - offset left from center */}
          <div className="relative w-full flex justify-center mb-4 md:mb-6 lg:mb-[32px]">
            <div className="relative" style={{ marginLeft: `-${OFFSET_PERCENTAGE}%` }}>
              <h2
                className={`text-white ${textBaseClasses} ${animationClasses}`}
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
                className={`text-[#95ff8d] ${textBaseClasses} ${animationClasses}`}
                style={{ transform: rightTransform }}
              >
                Your Own Brand
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

