// Property 1: 阅读时间计算正确性
import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { readingTime } from '../../src/utils/readingTime';

describe('readingTime', () => {
  it('returns at least 1 minute for any non-negative word count', () => {
    fc.assert(
      fc.property(fc.nat(), (wordCount) => {
        expect(readingTime(wordCount)).toBeGreaterThanOrEqual(1);
      }),
      { numRuns: 100 }
    );
  });

  it('is monotonically non-decreasing: more words => same or more minutes', () => {
    fc.assert(
      fc.property(fc.nat(), fc.nat(), (a, b) => {
        const lo = Math.min(a, b);
        const hi = Math.max(a, b);
        expect(readingTime(lo)).toBeLessThanOrEqual(readingTime(hi));
      }),
      { numRuns: 100 }
    );
  });

  it('result is always a positive integer', () => {
    fc.assert(
      fc.property(fc.nat(), (wordCount) => {
        const result = readingTime(wordCount);
        expect(Number.isInteger(result)).toBe(true);
        expect(result).toBeGreaterThan(0);
      }),
      { numRuns: 100 }
    );
  });
});
