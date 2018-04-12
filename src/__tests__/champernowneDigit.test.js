const { champernowneDigit } = require('../champernowneDigit');

describe('Champernowne\'s Championship', () => {
    test('Test case #1', () => {
        expect(champernowneDigit(1)).toBe(0)
    });

    test('Test case #2', () => {
        expect(champernowneDigit(20)).toBe(4)
    });

    test('Test case #3', () => {
        expect(champernowneDigit(2)).toBe(1)
    });

    test('Test case #4', () => {
        expect(champernowneDigit(3898869)).toBe(2)
    });

    test('Test case #5', () => {
        expect(champernowneDigit(999999999)).toBe(6)
    });

    test('Not positive position', () => {
        expect(champernowneDigit(-1)).toBe(NaN)
    });

    test('Zero position', () => {
        expect(champernowneDigit(0)).toBe(NaN)
    });


});
