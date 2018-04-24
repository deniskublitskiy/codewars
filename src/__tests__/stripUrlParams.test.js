const { stripUrlParams } = require('../stripUrlParams')

describe('Strip Url Params', () => {
    test('Test case #1', () => {
        expect(stripUrlParams('www.codewars.com?a=1&b=2&a=2')).toBe('www.codewars.com?a=1&b=2');
    });

    test('Test case #2', () => {
        expect(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b'])).toBe('www.codewars.com?a=1');
    });

    test('Test case #3', () => {
        expect(stripUrlParams('www.codewars.com', ['b'])).toBe('www.codewars.com');
    });
});
