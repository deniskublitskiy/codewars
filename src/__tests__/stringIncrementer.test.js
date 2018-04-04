const { bestStringIncrementer: stringIncrementer } = require('../stringIncrementer');

describe('String incrementer', () => {
    test('Test case #1', () => {
        expect(stringIncrementer('foobar000')).toBe('foobar001');
    });

    test('Empty string', () => {
        expect(stringIncrementer('')).toBe('1');
    });

    test('Only number', () => {
        expect(stringIncrementer('1')).toBe('2');
    });

    test('Without number', () => {
        expect(stringIncrementer('foo')).toBe('foo1');
    });

    test('Without leading zeros', () => {
        expect(stringIncrementer('foobar99')).toBe('foobar100');
    });
});
