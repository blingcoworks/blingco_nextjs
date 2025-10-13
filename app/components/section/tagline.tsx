"use client";

import { useEffect, useRef, useState } from "react";

interface TaglineProps {
  mode?: "scroll" | "trigger"; // scroll: 스크롤 위치에 반응, trigger: 한번만 실행
}

export default function Tagline({ mode = "scroll" }: TaglineProps) {
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
        
        // 텍스트(섹션)가 화면 하단에 나타나기 시작할 때부터 페이드 시작
        // 섹션이 화면 상단에 닿을 때까지 천천히 페이드
        // 페이드 속도를 더욱 늦추기 위해 거리를 크게 늘림
        const start = windowHeight * 2; // 섹션이 화면 아래쪽에서 훨씬 더 일찍 페이드 시작
        const end = -windowHeight * 1; // 섹션이 화면 위로 충분히 올라갈 때까지 페이드 지속
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

  // mode에 따라 opacity 값 계산
  const opacity = mode === "scroll" 
    ? scrollProgress 
    : (isTriggered ? 1 : 0);

  const fadeClasses = mode === "trigger" ? "transition-opacity duration-1000 ease-out" : "";

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-screen bg-[#0c0c0c] flex items-center justify-center z-10"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <h2
          className={`font-black text-[#f95c0f] text-[48px] md:text-[64px] lg:text-[80px] leading-normal text-center whitespace-pre-line ${fadeClasses}`}
          style={{ opacity }}
        >
          {"FASHION GOODS\nPUBLINSHING SOLUTION"}
        </h2>
      </div>
    </section>
  );
}

