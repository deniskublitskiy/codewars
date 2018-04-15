const { ballUpwards } = require('../ballUpwards');

describe('Ball Upwards', () => {
    test('Test case #1', () => {
        expect(ballUpwards(37)).toBe(10)
    });

    test('Test case #2', () => {
        expect(ballUpwards(45)).toBe(13)
    });

    test('Test case #3', () => {
        expect(ballUpwards(99)).toBe(28)
    });

    test('Test case #4', () => {
        expect(ballUpwards(85)).toBe(24)
    });
});