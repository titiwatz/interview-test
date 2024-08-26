// Write your test here

const { countSmilyFace } = require('./smily');

describe('countSmilyFace', () => {
    test('counts smiley faces correctly', () => {
        const input1 = [":)", ";(", ";}", ":-D"];
        const expected1 = 2;
        expect(countSmilyFace(input1)).toBe(expected1);

        const input2 = [";D", ":-(", ":-)", ";~)"];
        const expected2 = 3;
        expect(countSmilyFace(input2)).toBe(expected2);

        const input3 = [";]", ":[", ";*", ":$", ";-D"];
        const expected3 = 1;
        expect(countSmilyFace(input3)).toBe(expected3);

        const input4 = ["No smileys"];
        const expected4 = 0;
        expect(countSmilyFace(input4)).toBe(expected4);

        const input5 = [":) :) :)"];
        const expected5 = 3;
        expect(countSmilyFace(input5)).toBe(expected5);
    });
});
