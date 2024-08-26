import { manipulate } from './manipulate';

// Write your test here
describe('manipulate', () => {
    test('generates permutations for a simple string', () => {
        const input = 'abc';
        const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
        const result = manipulate(input);
        expect(result).toEqual(expected);
    });

    test('generates permutations with duplicate characters', () => {
        const input = 'aab';
        const expected = ['aab', 'aba', 'baa'];
        const result = manipulate(input);
        expect(result).toEqual(expected);
    });

    test('handles single character string', () => {
        const input = 'a';
        const expected = ['a'];
        const result = manipulate(input);
        expect(result).toEqual(expected);
    });

    test('handles empty string', () => {
        const input = '';
        const expected = [''];
        const result = manipulate(input);
        expect(result).toEqual(expected);
    });

    test('handles string with repeated characters', () => {
        const input = 'aabb';
        const expected = [
            'aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'
        ];
        const result = manipulate(input);
        expect(result).toEqual(expected);
    });
});
