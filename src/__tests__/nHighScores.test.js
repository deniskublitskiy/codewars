const { nHighScores } = require('../nHighScores');

describe('N High Scores', () => {
    test('Test case #1', () => {
        const expected = JSON.stringify([["John", 300]]);
        const actual = JSON.stringify(nHighScores([
            ["John", 100],
            ["John", 120],
            ["John", 300]
        ], 2));

        expect(actual).toBe(expected)
    });

    test('Test case #2', () => {
        const expected = JSON.stringify([
            ["Jane", 600],
            ["Parker", 120],
            ["Peter", 100]
        ]);
        const actual = JSON.stringify(nHighScores([
            ["Peter", 100],
            ["Parker", 120],
            ["Mary", 50],
            ["Jane", 600]
        ], 3));

        expect(actual).toBe(expected)
    });

    test('Test case #3', () => {
        const expected = JSON.stringify([
            ["Sauron", 1000],
            ["Frank", 500],
            ["Frodo", 500]
        ]);
        const actual = JSON.stringify(nHighScores([
            ["Sauron", 1000],
            ["Frodo", 500],
            ["Frank", 500],
            ["Bilbo", 100]
        ], 3));

        expect(actual).toBe(expected)
    });

    test('Test case #4', () => {
        const expected = JSON.stringify([]);
        const actual = JSON.stringify(nHighScores([
            ["No", 100],
            ["Results", 250],
            ["From", 600],
            ["Negative", 100],
            ["Numbers", 10]
        ], -1));

        expect(actual).toBe(expected)
    });
});