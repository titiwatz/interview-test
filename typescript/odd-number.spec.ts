import { findOddNumber } from './odd-number';

// Write your test here
describe('findOddNumber', () => {
    test('finds the number that appears an odd number of times', () => {
        const input1 = [7];
        const expected1 = 7;
        expect(findOddNumber(input1)).toBe(expected1);

        const input2 = [0];
        const expected2 = 0;
        expect(findOddNumber(input2)).toBe(expected2);

        const input3 = [1, 1, 2];
        const expected3 = 2;
        expect(findOddNumber(input3)).toBe(expected3);

        const input4 = [0, 1, 0, 1, 0];
        const expected4 = 0;
        expect(findOddNumber(input4)).toBe(expected4);

        const input5 = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
        const expected5 = 4;
        expect(findOddNumber(input5)).toBe(expected5);
    });
});