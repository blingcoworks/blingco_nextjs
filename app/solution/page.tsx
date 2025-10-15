import Image from "next/image";
import Subtitle from "../components/common/Subtitle";
import StepSection from "../components/common/StepSection";

export default function SolutionPage() {
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
            className="relative"
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

          {/* Subtitle */}
          <Subtitle size="small">
            솔루션 과정 단계 소개 페이지 예시 문장입니다.
          </Subtitle>
        </div>
      </section>

      <StepSection
        stepNumber="Step 01"
        title={{
          primary: "Custom",
          secondary: "development"
        }}
        subtitle="전문 디자이너 맞춤 개발"
        description={{
          primary: "전문 콘텐츠, 패션 디자이너가 크리에이터님의 콘텐츠를",
          secondary: "분석하여 고품질의 패션 굿즈를 개발합니다."
        }}
        imageSrc="/solution/step01.svg"
        imageAlt="Step 01 illustration"
        layout="left"
      />

      <StepSection
        stepNumber="Step 02"
        title={{
          primary: "Manufacturing",
          secondary: "network"
        }}
        subtitle="패션 제조 네트워크"
        description={{
          primary: "국내 제휴된 의류,주얼리 생산 공장을 통한 생산으로",
          secondary: "제작 퀄리티와 속도를 모두 책임집니다."
        }}
        imageSrc="/solution/step02.svg"
        imageAlt="Step 02 illustration"
        layout="right"
      />

      <StepSection
        stepNumber="Step 03"
        title={{
          primary: "Free sample",
          secondary: "production"
        }}
        subtitle="0원 시작, 재고 제로"
        description={{
          primary: "무료 패션 굿즈 샘플 제작, 선주문 크라우드 방식으로",
          secondary: "부담없이 판매하여 재고,물류,CS 까지 전담 운영합니다."
        }}
        imageSrc="/solution/step03.svg"
        imageAlt="Step 03 illustration"
        layout="left"
      />

      <StepSection
        stepNumber="Step 04"
        title={{
          primary: "Premium",
          secondary: "revenue model"
        }}
        subtitle="프리미엄 수익 모델"
        description={{
          primary: "고부가가치 패션 굿즈의 높은 판매 수익과",
          secondary: "크리에이터에게 우선적으로 돌아가는 투명한 정산 구조를 제공합니다."
        }}
        imageSrc="/solution/step04.svg"
        imageAlt="Step 04 illustration"
        layout="right"
      />
    </div>
  )
}

