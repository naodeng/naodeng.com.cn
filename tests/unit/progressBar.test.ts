// Property 2: 进度条宽度计算正确性
import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { progressBarWidth } from '../../src/utils/progressBar';

describe('progressBarWidth', () => {
  it('always returns a value between 0 and 100 inclusive', () => {
    fc.assert(
      fc.property(
        fc.float({ min: 0, max: 1e6, noNaN: true }),
        fc.float({ min: 0, max: 1e6, noNaN: true }),
        (scrollY, totalHeight) => {
          const result = progressBarWidth(scrollY, totalHeight);
          expect(result).toBeGreaterThanOrEqual(0);
          expect(result).toBeLessThanOrEqual(100);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('returns 0 when scrollY is 0', () => {
    fc.assert(
      fc.property(fc.float({ min: 1, max: 1e6, noNaN: true }), (totalHeight) => {
        expect(progressBarWidth(0, totalHeight)).toBe(0);
      }),
      { numRuns: 100 }
    );
  });

  it('returns 0 when totalHeight is 0 or negative', () => {
    fc.assert(
      fc.property(fc.float({ min: 0, max: 1e6, noNaN: true }), (scrollY) => {
        expect(progressBarWidth(scrollY, 0)).toBe(0);
      }),
      { numRuns: 100 }
    );
  });

  it('is monotonically non-decreasing with scrollY for fixed totalHeight', () => {
    fc.assert(
      fc.property(
        fc.float({ min: 0, max: 1e6, noNaN: true }),
        fc.float({ min: 0, max: 1e6, noNaN: true }),
        fc.float({ min: 1, max: 1e6, noNaN: true }),
        (a, b, totalHeight) => {
          const lo = Math.min(a, b);
          const hi = Math.max(a, b);
          expect(progressBarWidth(lo, totalHeight)).toBeLessThanOrEqual(
            progressBarWidth(hi, totalHeight)
          );
        }
      ),
      { numRuns: 100 }
    );
  });
});
