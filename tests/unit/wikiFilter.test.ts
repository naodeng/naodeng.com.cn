// Property 8: Wiki 客户端搜索过滤正确性
import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { filterWikiEntries } from '../../src/utils/wikiFilter';

describe('filterWikiEntries', () => {
  it('returns all entries when query is empty', () => {
    fc.assert(
      fc.property(fc.array(fc.string()), (entries) => {
        expect(filterWikiEntries(entries, '')).toEqual(entries);
      }),
      { numRuns: 100 }
    );
  });

  it('returns a subset of the original entries', () => {
    fc.assert(
      fc.property(fc.array(fc.string()), fc.string(), (entries, query) => {
        const result = filterWikiEntries(entries, query);
        result.forEach((entry) => {
          expect(entries).toContain(entry);
        });
      }),
      { numRuns: 100 }
    );
  });

  it('result length is always <= input length', () => {
    fc.assert(
      fc.property(fc.array(fc.string()), fc.string(), (entries, query) => {
        expect(filterWikiEntries(entries, query).length).toBeLessThanOrEqual(entries.length);
      }),
      { numRuns: 100 }
    );
  });

  it('is case-insensitive: filtering by uppercase matches lowercase entries', () => {
    fc.assert(
      fc.property(
        fc.array(fc.stringMatching(/^[a-z]{3,10}$/)),
        fc.stringMatching(/^[a-z]{1,5}$/),
        (entries, query) => {
          const lowerResult = filterWikiEntries(entries, query.toLowerCase());
          const upperResult = filterWikiEntries(entries, query.toUpperCase());
          expect(lowerResult).toEqual(upperResult);
        }
      ),
      { numRuns: 100 }
    );
  });
});
