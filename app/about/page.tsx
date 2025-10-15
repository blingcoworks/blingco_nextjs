"use client";

import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import MarqueeText from '../components/MarqueeText';

export default function AboutPage() {
  return (
    <div className="bg-[#0c0c0c]">
      <AboutFirst />
      <MarqueeText />
      <AboutSecond />
    </div>
  );
}

function AboutFirst() {
  const { sectionRef, scrollProgress } = useScrollProgress();

  // Calculate fade-in opacities within Phase 1 (scrollProgress 0 to 0.5)
  // Heading fades in from 0 to 0.5 (slower fade)
  const opacity = Math.max(0, Math.min(1, scrollProgress / 0.5));
  // Image fades in from 0.3 to 0.8 (slower fade, staggered effect)
  // const imageOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.3) / 0.5)); // slower than heading


  return (
    <section ref={sectionRef} id="about" className="relative w-full" style={{ backgroundColor: 'var(--blingco-bg-dark)' }}>
      <div className="flex flex-col gap-[165px] items-center pt-[127px] pb-[165px] px-0 w-full">
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
            opacity: opacity
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
            opacity: opacity
          }}
        />
      </div>
    </section>
  );
}

function AboutSecond() {
  return (
    <div>
      <section 
        className="relative w-full flex flex-col items-center gap-[100px] pt-[100px] pb-0 px-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url(/about2_bg.png)',
          backgroundColor: 'var(--blingco-bg-dark)'
        }}
      >
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
              border: '1px solid var(--blingco-green)'
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
              border: '1px solid var(--blingco-green)'
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
              border: '1px solid var(--blingco-green)'
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