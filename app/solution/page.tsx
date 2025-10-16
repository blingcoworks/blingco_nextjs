"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import StepSection from "../components/common/StepSection";
import { useScrollProgress } from '@/app/hooks/useScrollProgress';

export default function SolutionPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0c0c0c]">
      {/* Hero Section - Our solutions */}
      <section 
        className="min-h-screen flex items-center justify-center py-[140px] px-4 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: 'url(/soultion_title_bg.png)' }}
      >
        <div 
          className="flex flex-col items-center"
          style={{
            gap: '47px',
            width: '758px',
            maxWidth: '100%'
          }}
        >
          {/* Our solutions SVG */}
          <div 
            className={`relative transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{
              width: '751.48px',
              height: '98.44px',
              maxWidth: '100%',
              flex: 'none',
              order: 0,
              flexGrow: 0
            }}
          >
            <Image 
              src="/solution/our-solutions.svg"
              alt="Our solutions"
              width={751.48}
              height={98.44}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <DefineCraftLaunchSection />

      <StepSection
        stepNumber="Step 01"
        title={{
          primary: "Define Your",
          secondary: "Brand Identity"
        }}
        subtitle="상품 기획"
        descriptionText={[
          "모든 것은 당신의 콘텐츠에서 시작됩니다.",
          "블링코 AI가 당신의 콘텐츠와 팬덤을 심층 분석하고,",
          "시장데이터에 기반한 최적의 상품화 콘셉트를 함께 수립합니다."
        ]}
        description={[
          "전문 전략팀 1:1 미팅",
          "AI를 통한 콘텐츠 및 팬덤 특성 분석",
          "시장 데이터 기반 상품화 전략 수립"
        ]}
        imageSrc="/solution/step01.svg"
        imageAlt="Step 01 illustration"
        layout="left"
      />

      <StepSection
        stepNumber="Step 02"
        title={{
          primary: "Craft Your Signature",
          secondary: "Fashion Goods"
        }}
        subtitle="패션 굿즈 개발"
        descriptionText={[
          "블링코의 전문 패션 디자이너와 콘텐츠 디자이너가 한 팀이 되어,",
          "당신의 철학을 담은 세상에 없던 디자인을 개발합니다.",
          "100개 이상의 패션 생산 전문 업체 네트워크를 통해 최적의 샘플을 제작하고,",
          "당신이 직접 확인하고 만족할 때까지 함께 완성합니다."
        ]}
        description={[
          "전문 패션 디자이너 & 콘텐츠 디자이너 협업",
          "크리에이터 1:1 피드백 기반 디자인 완성",
          "엄선된 생산 업체를 통한 샘플 제작",
          "실물 샘플 최종 컨펌"
        ]}
        imageSrc="/solution/step02.svg"
        imageAlt="Step 02 illustration"
        layout="right"
      />

      <StepSection
        stepNumber="Step 03"
        title={{
          primary: "Launch",
          secondary: "Your Product"
        }}
        subtitle="상품 런칭 및 판매"
        descriptionText={[
          "당신만의 새로운 패션 굿즈를 팬들에게 공식적으로 선보입니다.",
          "블링코는 당신을 위한 최적의 판매 환경을 구축하고 지원하며,",
          "선주문 시스템을 통해 재고 리스크 없이 안전하게 판매를 시작하고 주문을 받습니다."
        ]}
        description={[
          "맞춤형 판매 채널 전략 시행",
          "선주문 시스템 판매",
          "리스크 없는 주문 접수 및 생산"
        ]}
        imageSrc="/solution/step03.svg"
        imageAlt="Step 03 illustration"
        layout="left"
      />

      <StepSection
        stepNumber="Step 04"
        title={{
          primary: "Hands-Free",
          secondary: "Operation"
        }}
        subtitle="통합 운영 관리"
        descriptionText={[
          "본격적인 생산부터 전 세계 팬들에게 전달되는 배송, 그리고 고객 응대(CS)까지,",
          "가장 복잡한 모든 과정을 블링코의 통합 시스템이 책임집니다.",
          "당신은 투명한 판매 리포트를 통해 모든 과정을 확인할 수 있습니다."
        ]}
        description={[
          "주문부터 배송까지 모든 프로세스 관리",
          "글로벌 물류 및 CS 처리",
          "투명한 수익 정산"
        ]}
        imageSrc="/solution/step04.svg"
        imageAlt="Step 04 illustration"
        layout="right"
      />
    </div>
  )
}

function DefineCraftLaunchSection() {
  const { sectionRef, scrollProgress } = useScrollProgress();

  // Sequential fade-in for each line
  const getLineOpacity = (index: number) => {
    const start = 0.2 + (index * 0.2); // Line 0: 0.2, Line 1: 0.4, Line 2: 0.6
    const end = start + 0.2;
    return Math.max(0, Math.min(1, (scrollProgress - start) / (end - start)));
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full h-[200vh]"
    >
      <div
        className="sticky top-0 w-full h-screen flex items-center justify-center bg-[var(--blingco-black)]"
      >
        <div className="relative w-full flex flex-col justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          {/* DEFINE - 왼쪽 오프셋 */}
          <div 
            className="relative w-full flex justify-center transition-opacity duration-300 ease-out"
            style={{ opacity: getLineOpacity(0) }}
          >
            <div className="relative flex items-center" style={{ marginLeft: `-32%` }}>
              <span className="font-aggravo font-normal text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[31px] text-[#3C3C3C]">&ldquo;</span>
              <h2 className="font-aggravo font-bold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[31px] text-center text-white whitespace-nowrap">
                DEFINE
              </h2>
            </div>
          </div>
          
          {/* CRAFT - 중앙 */}
          <div 
            className="relative w-full flex justify-center transition-opacity duration-300 ease-out"
            style={{ opacity: getLineOpacity(1) }}
          >
            <h2 className="font-aggravo font-bold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[31px] text-center text-white whitespace-nowrap">
              CRAFT
            </h2>              
            <span className="font-aggravo font-normal text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[31px] text-[#3C3C3C]">&rdquo;</span>
          </div>
          
          {/* LAUNCH - 오른쪽 오프셋 */}
          <div 
            className="relative w-full flex justify-center transition-opacity duration-300 ease-out"
            style={{ opacity: getLineOpacity(2) }}
          >
            <div className="relative" style={{ marginRight: `-32%` }}>
              <h2 className="font-aggravo font-bold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[31px] text-center text-[var(--blingco-green)] whitespace-nowrap">
                LAUNCH
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
