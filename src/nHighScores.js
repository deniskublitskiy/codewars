const orderBy = require('lodash/orderBy');
const _ = require('lodash');
const sortedUniqBy = require('lodash/sortedUniqBy');
const take = require('lodash/take');

const nHighScoresLodash = (records, nTop) =>
    take(sortedUniqBy(orderBy(records, ['1', '0'], ['desc', 'asc']), ([name]) => name), nTop);

const nHighScoresLodashChain = (records, nTop) =>
    _.chain(records)
        .orderBy(['1', '0'], ['desc', 'asc'])
        .sortedUniqBy(([name]) => name)
        .take(nTop)
        .values();

const nHighScores = (records, nTop) =>
    records.sort(([name1, score1], [name2, score2]) => score1 === score2 ? name1.localeCompare(name2) : (score2 - score1))
        .filter(([name], index, arr) => arr.findIndex((record) => record[0] === name) === index)
        .slice(0, nTop > 0 ? nTop : 0);

module.exports = {
    nHighScores,
    nHighScoresLodash,
    nHighScoresLodashChain,
};
