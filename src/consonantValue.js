const compact = require('lodash/compact');

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const CHAR_VALUES = new Map(ALPHABET.split('').map((x, i) => [x, i + 1]));

const consonantValueLodash = str => Math.max(...compact(str.toLowerCase().split(/[aeiou]/))
    .map(substr =>
        substr.split('')
            .reduce((total, char) => total + CHAR_VALUES.get(char), 0)
    )
);

const consonantValue = str => Math.max(...str.toLowerCase()
    .split(/[aeiou]/)
    .filter(x => x)
    .map(substr =>
        substr.split('')
            .reduce((total, char) => total + CHAR_VALUES.get(char), 0)
    )
);

const consonantValueBest = stt => Math.max(...stt.split(/[aeiou]/).map(x => [...x].reduce((total, char) => total + CHAR_VALUES.get(char), 0)));

module.exports = {
    consonantValue,
    consonantValueLodash,
    consonantValueBest
};
