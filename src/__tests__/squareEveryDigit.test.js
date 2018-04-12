const { squareEveryDigitBest: squareEveryDigit } = require('../squareEveryDigit');

describe('One line task: Square Every Digit', () => {
    test('Test case #1', () => {
        expect(squareEveryDigit(0)).toBe(0);
    });

    test('Test case #2', () => {
        expect(squareEveryDigit(1111)).toBe(1111);
    });

    test('Test case #3', () => {
        expect(squareEveryDigit(3212)).toBe(9414);
    });

    test('Test case #4', () => {
        expect(squareEveryDigit(2112)).toBe(4114);
    });

    test('Test case #5', () => {
        expect(squareEveryDigit(159)).toBe(12581);
    });

    test('Test case #6', () => {
        expect(squareEveryDigit(77455754)).toBe(4949162525492516);
    });

    test('Test case #7', () => {
        expect(squareEveryDigit(99999999)).toBe(8181818181818181);
    });
});