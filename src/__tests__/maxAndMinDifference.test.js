const { bestMaxAndMinDifference: maxAndMinDifference } = require('../maxAndMinDifference');

describe('The maximum and minimum difference -- Simple version', () => {
    test('Test case #1', () => {
        const actual = maxAndMinDifference([3, 10, 5], [20, 7, 15, 8]);
        const expected = [17, 2];

        expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });

    test('Test case #2', () => {
        const actual = maxAndMinDifference([3],[20]);
        const expected = [17, 17];

        expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });

    test('Test case #3', () => {
        const actual = maxAndMinDifference([3, 10, 5], [3, 10, 5]);
        const expected = [7, 0];

        expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });

    test('Test case #4', () => {
        const actual = maxAndMinDifference([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
        const expected = [9, 1];

        expect(JSON.stringify(actual)).toBe(JSON.stringify(expected));
    });
});
