import { useEffect, useRef, useState } from "react";

/**
 * 스크롤 진행률을 추적하는 커스텀 훅
 *
 * 섹션의 스크롤 위치를 기반으로 0~1 사이의 진행률을 계산합니다.
 * 섹션 높이는 200vh(화면 높이의 2배)를 가정합니다.
 *
 * @returns {Object} sectionRef - 섹션 엘리먼트에 연결할 ref
 * @returns {number} scrollProgress - 스크롤 진행률 (0~1)
 */
export function useScrollProgress() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 섹션 하단이 화면 하단에서 시작 → 섹션 상단이 화면 상단에 닿을 때까지
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

  return { sectionRef, scrollProgress };
}
