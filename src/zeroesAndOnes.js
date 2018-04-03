const zeroesAndOnes = arr => {
    return [].reduce.call(arr.join('') + 0, (total, current, i, str) => {
        if (current === '0') {
            const tempStr = `${str.substr(0, i)}1${str.substr(i + 1)}`;
            const match = tempStr.match(/(1+)/g);
            const maxSequenceLength = Math.max(...match.map(x => x.length));

            if (maxSequenceLength >= total.length) {
                total.index = i;
                total.length = maxSequenceLength
            }
        }

        return total
    }, {
        index: 0,
        length: 0,
    }).index
};

const bestZeroesAndOnes = arr => {
    const result = arr.reduce((total, number, i) => {
        const { zeroesIndexes } = total;

        if (number === 0) {
            zeroesIndexes.push(i);
        }

        if (zeroesIndexes.length === 3) {
            const length = zeroesIndexes[2] - zeroesIndexes[0];

            if (length >= total.bestLength) {
                total.bestLength = length;
                total.bestIndex = zeroesIndexes[1]
            }
            zeroesIndexes.shift();
        }

        return total;
    }, {
        zeroesIndexes: [-1],
        bestIndex: 0,
        bestLength: 0,
    });

    return arr.length - result.zeroesIndexes[0] >= result.bestLength ? result.zeroesIndexes[1] : result.bestIndex;
};

module.exports = {
    zeroesAndOnes,
    bestZeroesAndOnes,
};
