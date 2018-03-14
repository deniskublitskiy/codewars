const { formatDuration } = require('../humanReadableDurationFormat');

describe('Format duration', () => {
    test('1 second', () => {
        expect(formatDuration(1)).toBe('1 second');
    });

    test('1 minute and 2 seconds', () => {
        expect(formatDuration(62)).toBe('1 minute and 2 seconds');
    });

    test('2 minutes', () => {
        expect(formatDuration(120)).toBe('2 minutes');
    });

    test('1 hour', () => {
        expect(formatDuration(3600)).toBe('1 hour');
    });

    test('1 hour, 1 minute and 2 seconds', () => {
        expect(formatDuration(3662)).toBe('1 hour, 1 minute and 2 seconds');
    });

    test('182 days, 1 hour, 44 minutes and 40 seconds', () => {
        expect(formatDuration(15731080)).toBe('182 days, 1 hour, 44 minutes and 40 seconds');
    });

    test('4 years, 68 days, 3 hours and 4 minutes', () => {
        expect(formatDuration(132030240)).toBe('4 years, 68 days, 3 hours and 4 minutes');
    });

    test('6 years, 192 days, 13 hours, 3 minutes and 54 seconds', () => {
        expect(formatDuration(205851834)).toBe('6 years, 192 days, 13 hours, 3 minutes and 54 seconds');
    });

    test('8 years, 12 days, 13 hours, 41 minutes and 1 second', () => {
        expect(formatDuration(253374061)).toBe('8 years, 12 days, 13 hours, 41 minutes and 1 second');
    });

    test('7 years, 246 days, 15 hours, 32 minutes and 54 seconds', () => {
        expect(formatDuration(242062374)).toBe('7 years, 246 days, 15 hours, 32 minutes and 54 seconds');
    });

    test('3 years, 85 days, 1 hour, 9 minutes and 26 seconds', () => {
        expect(formatDuration(101956166)).toBe('3 years, 85 days, 1 hour, 9 minutes and 26 seconds');
    });

    test('1 year, 19 days, 18 hours, 19 minutes and 46 seconds', () => {
        expect(formatDuration(33243586)).toBe('1 year, 19 days, 18 hours, 19 minutes and 46 seconds');
    });
})