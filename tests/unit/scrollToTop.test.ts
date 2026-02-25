// Property 3: 回到顶部按钮可见性
import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { shouldShowScrollToTop } from '../../src/utils/scrollToTop';

describe('shouldShowScrollToTop', () => {
  it('returns false when scrollY is 0', () => {
    expect(shouldShowScrollToTop(0)).toBe(false);
  });

  it('returns false when scrollY <= threshold', () => {
    fc.assert(
      fc.property(
        fc.float({ min: 0, max: 400, noNaN: true }),
        (scrollY) => {
          expect(shouldShowScrollToTop(scrollY, 400)).toBe(false);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('returns true when scrollY > threshold', () => {
    fc.assert(
      fc.property(
        fc.float({ min: 401, max: 1e6, noNaN: true }),
        (scrollY) => {
          expect(shouldShowScrollToTop(scrollY, 400)).toBe(true);
        }
      ),
      { numRuns: 100 }
    );
  });

  it('result is always boolean', () => {
    fc.assert(
      fc.property(fc.float({ min: 0, max: 1e6, noNaN: true }), (scrollY) => {
        expect(typeof shouldShowScrollToTop(scrollY)).toBe('boolean');
      }),
      { numRuns: 100 }
    );
  });
});
