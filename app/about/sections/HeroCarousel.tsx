"use client";

import { useState, useEffect, useRef, startTransition, useCallback, useMemo } from 'react';
import Image from 'next/image';

// Image paths
const IMAGES = [
  "/about/image_1.png",
  "/about/image_2.png",
  "/about/image_3.png",
  "/about/image_4.png",
  "/about/image_5.png",
  "/about/image_6.png"
] as const;

// Carousel configuration constants
const CAROUSEL_CONFIG = {
  ANIMATION_DURATION: 800,    // milliseconds
  MOUSE_THRESHOLD: 0.3,       // 30% of container width
  CONTAINER: {
    WIDTH: 800,
    HEIGHT: 650,
    PERSPECTIVE: 2000
  },
  CARD: {
    WIDTH: 500,
    HEIGHT: 600,
    TRANSLATE_Z: 450,
  }
} as const;

// Derived values
const ROTATION_ANGLE = 360 / IMAGES.length; // degrees per card

// Style class constants
const HEADING_WRAPPER_CLASSES =
  "flex flex-col gap-[20px] sm:gap-[30px] md:gap-[38px] lg:gap-[46px] items-center text-center text-white w-full max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:w-[800px] transition-opacity duration-1000 ease-out";

const SUBTITLE_CLASSES =
  "flex flex-col justify-center w-full opacity-[0.43] font-pretendard font-semibold text-[18px] sm:text-[22px] md:text-[28px] lg:text-[32.564px] leading-[1.25] lg:leading-[40.705px] tracking-[-0.03em] lg:tracking-[-0.9769px]";

const TITLE_CLASSES =
  "flex flex-col justify-center w-full font-pretendard font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] leading-[1.25] lg:leading-[80px] tracking-[-0.03em] lg:tracking-[-1.92px]";

// Type definitions
type Direction = 'left' | 'right';

const isMouseInThreshold = (
  mouseX: number,
  centerX: number,
  containerWidth: number,
  threshold: number
): Direction | null => {
  const relativeX = mouseX - centerX;
  const thresholdWidth = containerWidth * threshold;

  if (relativeX > thresholdWidth) return 'right';
  if (relativeX < -thresholdWidth) return 'left';
  return null;
};

export default function HeroCarousel() {
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoize images array
  const images = useMemo(() => IMAGES, []);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Memoized rotation handler
  const rotateImages = useCallback((direction: Direction) => {
    if (isAnimating) return;

    setIsAnimating(true);

    // Use React's startTransition for smooth rotation
    startTransition(() => {
      if (direction === 'right') {
        setRotation(prev => prev + ROTATION_ANGLE);
      } else {
        setRotation(prev => prev - ROTATION_ANGLE);
      }
    });

    // Reset animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, CAROUSEL_CONFIG.ANIMATION_DURATION);
  }, [isAnimating]);

  // Memoized mouse move handler
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current || isAnimating) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const mouseX = e.clientX;

    const direction = isMouseInThreshold(
      mouseX,
      centerX,
      rect.width,
      CAROUSEL_CONFIG.MOUSE_THRESHOLD
    );

    if (direction) {
      rotateImages(direction);
    }
  }, [isAnimating, rotateImages]);

  return (
    <section id="about" className="relative w-full bg-[var(--blingco-black)]">
      <div className="flex flex-col gap-[220px] items-center pt-[120px] pt-30 pb-37 px-0 w-full">
        {/* Heading */}
        <div className={`${HEADING_WRAPPER_CLASSES} ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Subtitle */}
          <div className={SUBTITLE_CLASSES}>
            <p>크리에이터를 위한 패션 프로덕션 허브</p>
          </div>

          {/* Main Title */}
          <div className={TITLE_CLASSES}>
            <p className="mb-0">당신만의 이야기로 만든</p>
            <p>하나뿐인 패션이 되는 곳.</p>
          </div>
        </div>

        {/* Cylindrical Card Rotation */}
        <div
          ref={containerRef}
          className={`relative transition-opacity duration-[1200ms] ease-out delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            width: `${CAROUSEL_CONFIG.CONTAINER.WIDTH}px`,
            height: `${CAROUSEL_CONFIG.CONTAINER.HEIGHT}px`,
            perspective: `${CAROUSEL_CONFIG.CONTAINER.PERSPECTIVE}px`
          }}
          onMouseMove={handleMouseMove}
        >
          {/* Cylindrical container */}
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateY(${rotation}deg)`,
              transition: `transform ${CAROUSEL_CONFIG.ANIMATION_DURATION / 1000}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`
            }}
          >
            {Array.from({ length: IMAGES.length }, (_, cardIndex) => {
              return (
                <div
                  key={cardIndex}
                  className="absolute rounded-[12px] overflow-hidden shadow-2xl"
                  style={{
                    width: `${CAROUSEL_CONFIG.CARD.WIDTH}px`,
                    height: `${CAROUSEL_CONFIG.CARD.HEIGHT}px`,
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotateY(${cardIndex * ROTATION_ANGLE}deg) translateZ(${CAROUSEL_CONFIG.CARD.TRANSLATE_Z}px)`,
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <Image
                    src={images[cardIndex]}
                    alt={`Card ${cardIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>

          {/* 좌측 그라디언트 오버레이 - 화면 전체 너비 */}
          <div
            className="absolute top-0 pointer-events-none z-10"
            style={{
              left: '-50vw',
              top: '-20vh',
              width: '50vw',
              height: 'calc(100% + 40vh)',
              background: 'linear-gradient(90deg, var(--blingco-black) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 100%)'
            }}
          />

          {/* 우측 그라디언트 오버레이 - 화면 전체 너비 */}
          <div
            className="absolute top-0 pointer-events-none z-10"
            style={{
              right: '-50vw',
              top: '-20vh',
              width: '50vw',
              height: 'calc(100% + 40vh)',
              background: 'linear-gradient(270deg, var(--blingco-black) 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 100%)'
            }}
          />          

          {/* Instructions */}
          <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 text-white/60 text-sm text-center">
            <p>마우스를 좌우로 움직여 이미지를 회전시켜보세요</p>
          </div>
        </div>
      </div>
    </section>
  );
}
