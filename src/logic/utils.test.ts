import { assert, describe, expect, it } from 'vitest'
import { formatDate, roundTo } from './utils';

describe('utils', () => {
    it('roundTo 1.234 -> 1',    () => { expect(roundTo(1.234, 0)).toBe(1); });
    it('roundTo 1.543 -> 2',    () => { expect(roundTo(1.543, 0)).toBe(2); });
    it('roundTo 1.234 -> 1.2',  () => { expect(roundTo(1.234, 1)).toBe(1.2); });
    it('roundTo 1.234 -> 1.23', () => { expect(roundTo(1.234, 2)).toBe(1.23); });
    it('roundTo 12 -> 10',      () => { expect(roundTo(12,   -1)).toBe(10); });

    it('formatDate', () => {
        const date = new Date(2023, 7, 17);
        expect(formatDate(date)).toBe("Thu, 17 Aug");
    })
})