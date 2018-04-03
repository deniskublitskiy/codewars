const zeroesAndOnes = (arr) => {
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

module.exports = {
    zeroesAndOnes,
};
