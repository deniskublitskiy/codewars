const { consonantValue } = require('../consonantValue');

describe('Consonant value', () => {
    test('Test case #1', () => {
        expect(consonantValue('zodiacs')).toBe(26);
    });

    test('Test case #2', () => {
        expect(consonantValue('chruschtschov')).toBe(80);
    });

    test('Test case #3', () => {
        expect(consonantValue('khrushchev')).toBe(38);
    });

    test('Test case #4', () => {
        expect(consonantValue('strength')).toBe(57);
    });

    test('Test case #5', () => {
        expect(consonantValue('catchphrase')).toBe(73);
    });
});