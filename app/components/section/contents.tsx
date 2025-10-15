"use client";

import { useEffect, useRef, useState } from 'react';

export default function Contents() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const parentWidth = containerRef.current.parentElement?.offsetWidth || window.innerWidth;
        const baseWidth = 1280;
        const newScale = Math.min(parentWidth / baseWidth, 1);
        setScale(newScale);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div className="next-section-after-hero bg-[var(--blingco-black)]">
      <section 
        className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[var(--blingco-black)]"
      >
        {/* Scaled container based on Figma design (1280x720) */}
        <div 
          ref={containerRef}
          className="relative"
          style={{
            width: '1280px',
            height: '720px',
            transform: `scale(${scale})`,
            transformOrigin: 'center center',
          }}
        >
          <div 
            className="absolute bg-cover bg-center rounded-[12px]"
            style={{
              width: '89px',
              height: '85px',
              left: '40px',
              top: '-35px',
              backgroundImage: `url(/contents/contents_1.png)`,
            }}
          />
          
          {/* 9b2e5073... - Main large image */}
          <div 
            className="absolute bg-[length:120%] bg-center rounded-[18px]"
            style={{
              width: '164px',
              height: '219px',
              left: '80px',
              top: '80px',
              backgroundImage: `url(/contents/contents_2.png)`,
            }}
          />

          {/* Rectangle 234 position - filled with image */}
          <div 
            className="absolute bg-cover bg-center rounded-[12px]"
            style={{
              width: '136px',
              height: '175px',
              left: '400px',
              top: '-20px',
              backgroundImage: `url(/contents/contents_3.png)`,
            }}
          />

          {/* 677051ea... */}
          <div 
            className="absolute bg-cover bg-center rounded-[18px]"
            style={{
              width: '149px',
              height: '265px',
              left: '813px',
              top: '-60px',
              backgroundImage: `url(/contents/contents_4.png)`,
            }}
          />

          {/* e481eb86... */}
          <div 
            className="absolute bg-cover bg-center rounded-[18px]"
            style={{
              width: '188px',
              height: '276px',
              left: '1100px',
              top: '50px',
              backgroundImage: `url(/contents/contents_5.png)`,
            }}
          />

          {/* e9f33142... */}
          <div 
            className="absolute bg-cover bg-[center_30%] rounded-[18px]"
            style={{
              width: '154px',
              height: '197px',
              left: '-18px',
              top: '465px',
              backgroundImage: `url(/contents/contents_6.png)`,
            }}
          />

          <div 
            className="absolute bg-cover bg-center rounded-[18px]"
            style={{
              width: '182px',
              height: '233px',
              left: '286px',
              top: '500px',
              backgroundImage: `url(/contents/contents_7.png)`,
            }}
          />

          {/* f9f7cf80... */}
          <div 
            className="absolute bg-cover bg-center rounded-[18px]"
            style={{
              width: '139px',
              height: '177px',
              left: '649px',
              top: '490px',
              backgroundImage: `url(/contents/contents_8.png)`,
            }}
          />

          {/* 755185e3... */}
          <div 
            className="absolute bg-cover bg-center rounded-[18px]"
            style={{
              width: '216px',
              height: '324px',
              left: '903px',
              top: '483px',
              backgroundImage: `url(/contents/contents_9.png)`,
            }}
          />

          {/* Central text */}
          <div
            className="absolute flex items-center justify-center text-center z-10 w-[1000px] h-40 font-pretendard font-bold text-[64px] leading-[80px] tracking-[-1.92px] text-white"
            style={{
              left: 'calc(50% - 462px)',
              top: 'calc(50% - 80px)',
            }}
          >
            한계 없는 스타일,<br />
            무한한 패션 굿즈의 세계를 경험하세요.
          </div>
        </div>
      </section>
    </div>
  )
}