// Animation timing constants
export const ANIMATION_TIMINGS = {
  HEADING_FADE_END: 0.3,
  CIRCLES_START: 0.3,
  CIRCLES_END: 0.6,
  CARD_START_BASE: 0.2,
  CARD_INTERVAL: 0.15,
  CARD_FADE_DURATION: 0.2,
  CTA_START: 0.3,
  CTA_END: 0.6,

  // Mobile sequential timings for CoreValues circles
  MOBILE: {
    CIRCLE1_FADE_IN: 0.3,
    CIRCLE1_STAY: 0.4,
    CIRCLE1_FADE_OUT: 0.55,
    CIRCLE1_FADE_OUT_END: 0.65,
    CIRCLE2_FADE_IN: 0.55,
    CIRCLE2_STAY: 0.65,
    CIRCLE2_FADE_OUT: 0.8,
    CIRCLE2_FADE_OUT_END: 0.9,
    CIRCLE3_FADE_IN: 0.8,
    CIRCLE3_STAY: 0.9,
    FADE_DURATION: 0.1
  }
};

export const MOBILE_BREAKPOINT = 768;

// Scroll-based opacity calculation utilities
export const useScrollOpacity = {
  // Simple heading fade-in from 0 to fadeEnd
  heading: (scrollProgress: number, fadeEnd: number = ANIMATION_TIMINGS.HEADING_FADE_END) =>
    Math.max(0, Math.min(1, scrollProgress / fadeEnd)),

  // Sequential fade-in for multiple items
  sequential: (scrollProgress: number, index: number, startBase: number, interval: number, duration: number) => {
    const start = startBase + (index * interval);
    const end = start + duration;
    return Math.max(0, Math.min(1, (scrollProgress - start) / (end - start)));
  },

  // Fade-in within a specific scroll range
  range: (scrollProgress: number, start: number, duration: number) =>
    Math.max(0, Math.min(1, (scrollProgress - start) / duration))
};
