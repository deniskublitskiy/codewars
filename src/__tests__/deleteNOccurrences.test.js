const {deleteNOccurrencesBest: deleteNOccurrences } = require('../deleteNOccurrences');

describe('Delete occurrences of an element if it occurs more than n times', () => {
    test('Test case #1', () => {
        const expected = JSON.stringify([20, 37, 21]);
        const actual = JSON.stringify(deleteNOccurrences([20, 37, 20, 21], 1));

        expect(actual).toBe(expected);
    });

    test('Test case #2', () => {
        const expected = JSON.stringify([1, 1, 3, 3, 7, 2, 2, 2]);
        const actual = JSON.stringify(deleteNOccurrences([1,1,3,3,7,2,2,2,2], 3));

        expect(actual).toBe(expected);
    });
});
