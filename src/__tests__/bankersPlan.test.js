const { bankerPlan } = require('../bankersPlan');

describe('Banker\'s Plan', () => {
    test('Test case #1', () => {
        expect(bankerPlan(100000, 1, 2000, 15, 1)).toBe(true);
    });

    test('Test case #2', () => {
        expect(bankerPlan(100000, 1, 9185, 12, 1)).toBe(false);
    });

    test('Test case #3', () => {
        expect(bankerPlan(100000000, 1, 100000, 50, 1)).toBe(true);
    });

    test('Test case #4', () => {
        expect(bankerPlan(100000000, 1.5, 10000000, 50, 1)).toBe(false);
    });

    test('Test case #5', () => {
        expect(bankerPlan(100000000, 5, 1000000, 50, 1)).toBe(true);
    });

    test('Test case #6', () => {
        expect(bankerPlan(934286, 10, 63562, 22, 7)).toBe(true);
    });

    test('No "Maximum call stack size exceeded" error', () => {
        expect(() => bankerPlan(100000, 1, 0, 15000, 0)).not.toThrow(RangeError);
    });
});
