import Image from "next/image";
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
        </div>
      </section>

      {/* Define Craft Launch Section */}
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[749px] bg-[#0C0C0C] flex items-center justify-center">
        <div className="relative w-full flex flex-col justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          {/* DEFINE - 왼쪽 오프셋 */}
          <div className="relative w-full flex justify-center">
            <div className="relative" style={{ marginLeft: `-25%` }}>
              <h2 className="font-aggravo font-bold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[31px] text-center text-white whitespace-nowrap">
                DEFINE
              </h2>
            </div>
          </div>
          
          {/* CRAFT - 중앙 */}
          <div className="relative w-full flex justify-center">
            <h2 className="font-aggravo font-bold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[31px] text-center text-white whitespace-nowrap">
              CRAFT
            </h2>
          </div>
          
          {/* LAUNCH - 오른쪽 오프셋 */}
          <div className="relative w-full flex justify-center">
            <div className="relative" style={{ marginRight: `-30%` }}>
              <h2 className="font-aggravo font-bold text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[31px] text-center text-white whitespace-nowrap">
                LAUNCH
              </h2>
            </div>
          </div>
        </div>
      </section>

      <StepSection
        stepNumber="Step 01"
        title={{
          primary: "AI 기반 콘텐츠",
          secondary: "분석을 통한 기획"
        }}
        description={[
          "AI를 통한 콘텐츠 분석",
          "미팅",
          "기획"
        ]}
        imageSrc="/solution/step01.svg"
        imageAlt="Step 01 illustration"
        layout="left"
      />

      <StepSection
        stepNumber="Step 02"
        title={{
          primary: "전문 패션 프로듀싱 팀",
          secondary: "고부가가치 패션굿즈 개발"
        }}
        description={[
          "전문 페션 디자이너",
          "콘텐츠 디자이너",
          "100개 이상의 패션 생산 전문 업체",
          "샘플 생산 확인 컨펌"
        ]}
        imageSrc="/solution/step02.svg"
        imageAlt="Step 02 illustration"
        layout="right"
      />

      <StepSection
        stepNumber="Step 03"
        title={{
          primary: "팬덤에게",
          secondary: "판매"
        }}
        description={[
          "컨펌 샘플을 통한 판매 콘텐츠 제작",
          "선 판매 후 본 제품 생산",
          "판매채널 구축"
        ]}
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
        description={[
          "고부가가치 패션 굿즈의 높은 판매 수익과",
          "크리에이터에게 우선적으로 돌아가는 투명한 정산 구조를 제공합니다."
        ]}
        imageSrc="/solution/step04.svg"
        imageAlt="Step 04 illustration"
        layout="right"
      />
    </div>
  )
}

