// Write your test here

import { countSmilyFace } from './smily';

describe('countSmileyFace', () => {
    test('counts smiley faces correctly', () => {
        const input1 = ['Hello :)', 'How are you? ;D'];
        const expected1 = 2; // :) and ;D
        expect(countSmilyFace(input1)).toBe(expected1);

        const input2 = ['No smiley faces here!'];
        const expected2 = 0;
        expect(countSmilyFace(input2)).toBe(expected2);

        const input3 = ['Multiple smileys :) :) :)'];
        const expected3 = 3; // Three :)
        expect(countSmilyFace(input3)).toBe(expected3);

        const input4 = ['Mixed types :D ;D'];
        const expected4 = 2; // :D and ;D
        expect(countSmilyFace(input4)).toBe(expected4);

        const input5 = ['Different faces ;) :D'];
        const expected5 = 2; // ;) and :D
        expect(countSmilyFace(input5)).toBe(expected5);

        const input6 = ['Edge case with no spaces :) and ;)'];
        const expected6 = 2; // :) and ;)
        expect(countSmilyFace(input6)).toBe(expected6);

        const input7 = ['Complex case :~D ;~)'];
        const expected7 = 2; // :~D and ;~)
        expect(countSmilyFace(input7)).toBe(expected7);
    });
});

