const { rgbToHex } = require('../rgbToHex');

describe('RGB To Hex Conversion', () => {
    test('Test case #1', () => {
        expect(rgbToHex(255, 255, 255)).toBe('FFFFFF')
    });

    test('Test case #2', () => {
        expect(rgbToHex(255, 255, 300)).toBe('FFFFFF')
    });

    test('Test case #3', () => {
        expect(rgbToHex(0, 0, 0)).toBe('000000')
    });

    test('Test case #4', () => {
        expect(rgbToHex(148, 0, 211)).toBe('9400D3')
    });
});