"use client";

import { useEffect, useRef, useState } from 'react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';

// Image configuration with order system
interface ImageConfig {
  id: number;
  width: number;
  height: number;
  left: number;
  top: number;
  imagePath: string;
  order: number; // Display order in animation sequence (0-8)
}

// Order presets - easily change display sequence
const ORDER_PRESETS = {
  default: [0, 1, 2, 3, 4, 5, 6, 7, 8], // Sequential 1-9
  centerOut: [2, 3, 6, 1, 7, 4, 8, 0, 5], // Center images first, then expand
  leftToRight: [5, 0, 1, 6, 2, 7, 3, 8, 4], // Geographic left to right
  topToBottom: [0, 1, 2, 3, 4, 5, 6, 7, 8], // Top row to bottom row
};

// Select active order preset
const ACTIVE_ORDER = ORDER_PRESETS.centerOut;

export default function Contents() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { sectionRef, scrollProgress } = useScrollProgress();
  const [scale, setScale] = useState(1);

  // Responsive scale calculation
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

  // Animation phase boundaries
  const TEXT_FADE_END = 0.5; // Text completes fade at 20% scroll
  const IMAGE_START = 0.5; // Images start appearing at 25% scroll
  const IMAGE_END = 1.0;

  // Text opacity calculation
  const textOpacity = Math.min(scrollProgress / TEXT_FADE_END, 1);

  // Image opacity calculation function
  const getImageOpacity = (orderIndex: number): number => {
    if (scrollProgress < IMAGE_START) return 0;

    const imageScrollRange = IMAGE_END - IMAGE_START; // 0.75
    const imageProgress = (scrollProgress - IMAGE_START) / imageScrollRange;

    const imagesCount = 9;
    const fadeInDuration = 0.08; // Each image fades in over 8% of scroll
    const fadeInGap = imageScrollRange / imagesCount; // ~0.083 spacing between starts

    const imageStartPoint = orderIndex * fadeInGap;
    const imageEndPoint = imageStartPoint + fadeInDuration;

    if (imageProgress < imageStartPoint) return 0;
    if (imageProgress > imageEndPoint) return 1;

    // Smooth fade-in curve
    return (imageProgress - imageStartPoint) / fadeInDuration;
  };

  // Image configurations with original positions
  const imageConfigs: ImageConfig[] = [
    { id: 1, width: 89, height: 85, left: 40, top: 20, imagePath: '/contents/1.png', order: ACTIVE_ORDER[0] },
    { id: 2, width: 164, height: 219, left: 200, top: 80, imagePath: '/contents/2.png', order: ACTIVE_ORDER[1] },
    { id: 3, width: 136, height: 175, left: 470, top: 0, imagePath: '/contents/3.png', order: ACTIVE_ORDER[2] },
    { id: 4, width: 149, height: 265, left: 800, top: -20, imagePath: '/contents/4.png', order: ACTIVE_ORDER[3] },
    { id: 5, width: 188, height: 276, left: 1100, top: 50, imagePath: '/contents/5.png', order: ACTIVE_ORDER[4] },
    { id: 6, width: 154, height: 197, left: -18, top: 405, imagePath: '/contents/6.png', order: ACTIVE_ORDER[5] },
    { id: 7, width: 182, height: 233, left: 286, top: 500, imagePath: '/contents/7.png', order: ACTIVE_ORDER[6] },
    { id: 8, width: 139, height: 177, left: 649, top: 490, imagePath: '/contents/8.png', order: ACTIVE_ORDER[7] },
    { id: 9, width: 216, height: 324, left: 960, top: 483, imagePath: '/contents/9.png', order: ACTIVE_ORDER[8] },
  ];

  return (
    <div className="next-section-after-hero bg-[var(--blingco-black)]">
      <section
        ref={sectionRef}
        className="relative w-full h-[400vh]"
      >
        {/* Sticky container - becomes sticky after text fade completes */}
        <div
          className={`${
            scrollProgress >= TEXT_FADE_END ? 'sticky top-0' : 'relative'
          } w-full h-screen flex items-center justify-center overflow-hidden bg-[var(--blingco-black)]`}
        >
          {/* Scaled container based on Figma design (1280x720) */}
          <div
            ref={containerRef}
            className="absolute"
            style={{
              width: '1280px',
              height: '720px',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) scale(${scale})`,
              transformOrigin: 'center center',
            }}
          >
            {/* Images with sequential fade-in */}
            {imageConfigs.map((img) => (
              <div
                key={img.id}
                className="absolute bg-cover bg-center rounded-[12px]"
                style={{
                  width: `${img.width}px`,
                  height: `${img.height}px`,
                  left: `${img.left}px`,
                  top: `${img.top}px`,
                  backgroundImage: `url(${img.imagePath})`,
                  opacity: getImageOpacity(img.order),
                  willChange: 'opacity',
                }}
              />
            ))}

            {/* Text with fade-in */}
            <div
              className="absolute flex items-center justify-center text-center z-10 w-[1000px] h-40 font-pretendard font-bold text-[64px] leading-[80px] tracking-[-1.92px] text-white"
              style={{
                left: 'calc(50% - 462px)',
                top: 'calc(50% - 80px)',
                opacity: textOpacity,
                willChange: 'opacity',
              }}
            >
              한계 없는 스타일,<br />
              무한한 패션 굿즈의 세계를 경험하세요.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
