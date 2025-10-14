/**
 * 3단계 페이드 전환의 opacity 값을 계산합니다.
 *
 * 스크롤 진행률에 따라 두 요소 간의 부드러운 전환을 위한 opacity를 계산합니다.
 * 두 요소가 겹치지 않도록 순차적으로 페이드됩니다.
 *
 * - Phase 1 (0-0.5): 첫 번째 요소 페이드 인 (0 → 1)
 * - Phase 2 (0.5-0.75): 첫 번째 요소 페이드 아웃 (1 → 0), 두 번째 요소는 0 유지
 * - Phase 3 (0.75-1.0): 두 번째 요소 페이드 인 (0 → 1), 첫 번째 요소는 0 유지
 *
 * @param progress - 스크롤 진행률 (0~1 범위)
 * @returns 첫 번째와 두 번째 요소의 opacity 값 및 phase 임계값
 *
 * @example
 * ```typescript
 * const { firstOpacity, secondOpacity, firstThreshold, secondThreshold } = calculateThreePhaseOpacity(0.3);
 * // Phase 1: firstOpacity = 0.6, secondOpacity = 0, firstThreshold = 0.5, secondThreshold = 0.75
 * ```
 */

const FIRST_THRESHOLD = 0.5;
const SECOND_THRESHOLD = 0.75;

export function calculateThreePhaseOpacity(progress: number): {
  firstOpacity: number;
  secondOpacity: number;
  firstThreshold: number;
  secondThreshold: number;
} {
  if (progress < FIRST_THRESHOLD) {
    // Phase 1: 첫 번째 요소 페이드 인
    return {
      firstOpacity: progress / FIRST_THRESHOLD,
      secondOpacity: 0,
      firstThreshold: FIRST_THRESHOLD,
      secondThreshold: SECOND_THRESHOLD,
    };
  } else if (progress < SECOND_THRESHOLD) {
    // Phase 2: 첫 번째 요소 페이드 아웃
    return {
      firstOpacity: 1 - (progress - FIRST_THRESHOLD) / (SECOND_THRESHOLD - FIRST_THRESHOLD),
      secondOpacity: 0,
      firstThreshold: FIRST_THRESHOLD,
      secondThreshold: SECOND_THRESHOLD,
    };
  } else {
    // Phase 3: 두 번째 요소 페이드 인
    return {
      firstOpacity: 0,
      secondOpacity: (progress - SECOND_THRESHOLD) / (1 - SECOND_THRESHOLD),
      firstThreshold: FIRST_THRESHOLD,
      secondThreshold: SECOND_THRESHOLD,
    };
  }
}
