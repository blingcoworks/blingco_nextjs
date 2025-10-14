"use client";

import { useScrollProgress } from '@/app/hooks/useScrollProgress';

export default function About() {
  return (
    <div className="next-section-after-hero" style={{ backgroundColor: 'var(--blingco-bg-dark)' }}>
      <AboutFirst />
      <AboutSecond />
      <AboutThird />
    </div>
  )
}

export function AboutFirst() {
  const { sectionRef, scrollProgress } = useScrollProgress();

  // Calculate fade-in opacities within Phase 1 (scrollProgress 0 to 0.5)
  // Heading fades in from 0 to 0.5 (slower fade)
  const headingOpacity = Math.max(0, Math.min(1, scrollProgress / 0.5));
  // Image fades in from 0.3 to 0.8 (slower fade, staggered effect)
  const imageOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.3) / 0.5));

  return (
    <section ref={sectionRef} id="about" className="relative w-full" style={{ backgroundColor: 'var(--blingco-bg-dark)' }}>
      <div className="flex flex-col gap-[98px] items-center pt-[127px] pb-0 px-0 w-full">
        {/* Heading */}
        <div
          className="flex items-center text-center text-white max-w-[562px] w-full"
          style={{
            height: '125px',
            fontFamily: 'Pretendard',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '64px',
            lineHeight: '80px',
            letterSpacing: '-0.03em',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            opacity: headingOpacity
          }}
        >
          <div className="flex flex-col w-full">
            <p className="mb-0 whitespace-nowrap">당신만의 이야기로 만든</p>
            <p className="whitespace-nowrap">하나뿐인 패션 브랜드</p>
          </div>
        </div>

        {/* Product Grid Image */}
        <div
          className="relative w-full max-w-[1280px]"
          style={{
            height: '801px',
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 73.32%, rgba(0, 0, 0, 0.5) 107.23%), linear-gradient(270deg, rgba(0, 0, 0, 0) 73.71%, rgba(0, 0, 0, 0.5) 108.05%), url(/about_first.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: imageOpacity
          }}
        />

        {/* Marquee Text */}
        <div className="w-full h-[60px] overflow-hidden relative opacity-60">
          <div className="absolute w-[3840px] h-[60px] blingco-marquee">
            {/* First section */}
            <div className="absolute w-[1920px] h-[60px] left-0">
              {[
                { text: "JEWELRY", left: 20, weight: "medium" },
                { text: "APPAREL", left: 137, weight: "semibold" },
                { text: "BAG", left: 251, weight: "semibold" },
                { text: "SHOES", left: 330, weight: "semibold" },
                { text: "JEWELRY", left: 429, weight: "semibold" },
                { text: "APPAREL", left: 546, weight: "medium" },
                { text: "BAG", left: 660, weight: "medium" },
                { text: "SHOES", left: 739, weight: "medium" },
                { text: "JEWELRY", left: 838, weight: "medium" },
                { text: "APPAREL", left: 955, weight: "medium" },
                { text: "BAG", left: 1069, weight: "medium" },
                { text: "SHOES", left: 1148, weight: "medium" },
                { text: "JEWELRY", left: 1247, weight: "medium" },
                { text: "APPAREL", left: 1364, weight: "medium" },
                { text: "BAG", left: 1478, weight: "medium" },
                { text: "SHOES", left: 1557, weight: "medium" },
                { text: "JEWELRY", left: 1656, weight: "medium" },
                { text: "BAG", left: 1773, weight: "medium" },
                { text: "SHOES", left: 1852, weight: "medium" },
              ].map((item, index) => (
                <p
                  key={`first-${index}`}
                  className={`absolute text-white text-[20px] leading-[110%] tracking-[-0.4px] whitespace-nowrap ${
                    item.weight === 'semibold' ? 'font-semibold' : 'font-medium'
                  }`}
                  style={{
                    left: `${item.left}px`,
                    top: 'calc(50% - 11px)',
                    fontFamily: item.weight === 'semibold' ? 'Inter, sans-serif' : 'Pretendard, sans-serif'
                  }}
                >
                  {item.text}
                </p>
              ))}
            </div>
            
            {/* Second section - duplicate for seamless loop */}
            <div className="absolute w-[1920px] h-[60px] left-[1920px]">
              {[
                { text: "JEWELRY", left: 20, weight: "semibold" },
                { text: "APPAREL", left: 137, weight: "semibold" },
                { text: "BAG", left: 251, weight: "semibold" },
                { text: "SHOES", left: 330, weight: "semibold" },
                { text: "JEWELRY", left: 429, weight: "semibold" },
                { text: "APPAREL", left: 546, weight: "semibold" },
                { text: "BAG", left: 660, weight: "semibold" },
                { text: "SHOES", left: 739, weight: "semibold" },
                { text: "JEWELRY", left: 838, weight: "semibold" },
                { text: "APPAREL", left: 955, weight: "semibold" },
                { text: "BAG", left: 1069, weight: "semibold" },
                { text: "SHOES", left: 1148, weight: "semibold" },
                { text: "JEWELRY", left: 1247, weight: "semibold" },
                { text: "APPAREL", left: 1364, weight: "semibold" },
                { text: "BAG", left: 1478, weight: "semibold" },
                { text: "SHOES", left: 1557, weight: "semibold" },
                { text: "JEWELRY", left: 1656, weight: "semibold" },
                { text: "BAG", left: 1773, weight: "semibold" },
                { text: "SHOES", left: 1852, weight: "semibold" },
              ].map((item, index) => (
                <p
                  key={`second-${index}`}
                  className="absolute text-white font-semibold text-[20px] leading-[110%] tracking-[-0.4px] whitespace-nowrap"
                  style={{
                    left: `${item.left}px`,
                    top: 'calc(50% - 11px)',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {item.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSecond() {
  return (
    <div>
      <section className="relative w-full flex flex-col items-center gap-[100px] pt-[100px] pb-0 px-0" style={{ backgroundColor: 'var(--blingco-bg-dark)' }}>
        {/* Heading */}
        <div className="flex flex-col justify-center text-center text-white w-[615px]" style={{
          fontFamily: 'Pretendard',
          fontWeight: 700,
          fontSize: '64px',
          lineHeight: '80px',
          letterSpacing: '-1.92px'
        }}>
          <p className="mb-0 whitespace-nowrap">블링코만의 다양한 혜택을</p>
          <p className="whitespace-nowrap">확인해보세요.</p>
        </div>

        {/* Benefits circles */}
        <div className="relative w-full flex justify-center items-center">
          {/* Circle 1 - 제품 대여 */}
          <div className="relative flex items-center justify-center" style={{
            width: '438px',
            height: '452px',
            marginRight: '-15px',
            zIndex: 1
          }}>
            <div className="absolute inset-0 rounded-full" style={{
              border: '1px solid var(--blingco-green)',
              background: 'var(--blingco-bg-dark)'
            }} />
            <div className="relative text-center z-10">
              <h3 className="text-white text-[32px] font-semibold mb-[15px]" style={{
                fontFamily: 'Pretendard',
                lineHeight: '30px',
                letterSpacing: '-0.96px'
              }}>
                제품 대여
              </h3>
              <p className="text-[#B2B2B2] text-[20px] font-medium" style={{
                fontFamily: 'Pretendard',
                lineHeight: '30px',
                letterSpacing: '-0.6px'
              }}>
                500개 이상의 브랜드에서 제품을 대여하고<br />
                무한한 스타일링을 시작해보세요.
              </p>
            </div>
          </div>

          {/* Circle 2 - 제품 협찬 */}
          <div className="relative flex items-center justify-center" style={{
            width: '438px',
            height: '452px',
            marginLeft: '-15px',
            marginRight: '-15px',
            zIndex: 10
          }}>
            <div className="absolute inset-0 rounded-full" style={{
              border: '1px solid var(--blingco-green)',
              background: 'var(--blingco-bg-dark)'
            }} />
            <div className="relative text-center z-10">
              <h3 className="text-white text-[32px] font-semibold mb-[15px]" style={{
                fontFamily: 'Pretendard',
                lineHeight: '30px',
                letterSpacing: '-0.96px'
              }}>
                제품 협찬
              </h3>
              <p className="text-[#B2B2B2] text-[20px] font-medium" style={{
                fontFamily: 'Pretendard',
                lineHeight: '30px',
                letterSpacing: '-0.6px'
              }}>
                500개 이상의 브랜드에서 제품을 대여하고<br />
                무한한 스타일링을 시작해보세요.
              </p>
            </div>
          </div>

          {/* Circle 3 - 행사 초대 */}
          <div className="relative flex items-center justify-center" style={{
            width: '438px',
            height: '452px',
            marginLeft: '-15px',
            zIndex: 1
          }}>
            <div className="absolute inset-0 rounded-full" style={{
              border: '1px solid var(--blingco-green)',
              background: 'var(--blingco-bg-dark)'
            }} />
            <div className="relative text-center z-10">
              <h3 className="text-white text-[32px] font-semibold mb-[15px]" style={{
                fontFamily: 'Pretendard',
                lineHeight: '30px',
                letterSpacing: '-0.96px'
              }}>
                행사 초대
              </h3>
              <p className="text-[#B2B2B2] text-[20px] font-medium" style={{
                fontFamily: 'Pretendard',
                lineHeight: '30px',
                letterSpacing: '-0.6px'
              }}>
                500개 이상의 브랜드에서 제품을 대여하고<br />
                무한한 스타일링을 시작해보세요.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export function AboutThird() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center" style={{
      background: 'url(/about3_bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="absolute flex items-center text-center" style={{
        width: '924px',
        height: '160px',
        left: 'calc(50% - 924px/2)',
        top: 'calc(50% - 160px/2)',
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '64px',
        lineHeight: '80px',
        letterSpacing: '-0.03em',
        color: '#FFFFFF'
      }}>
        한계 없는 스타일, 무한한 패션 굿즈의 세계를 경험하세요.
      </div>
    </section>
  )
}