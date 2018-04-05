const maxAndMin = (array) => [Math.min(...array), Math.max(...array)];

const maxAndMinDifference = (array1, array2) => {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;

    for (let element1 of array1) {
        for (let element2 of array2) {
            if (Math.abs(element1 - element2) > max) {
                max = Math.abs(element1 - element2);
            }

            if (Math.abs(element1 - element2) < min) {
                min = Math.abs(element1 - element2);
            }
        }
    }

    return [max, min]
};

const bestMaxAndMinDifference = (array1, array2) => [
    Math.max(...array1.map(x => Math.max(...array2.map(y => Math.abs(x - y))))),
    Math.min(...array1.map(x => Math.min(...array2.map(y => Math.abs(x - y)))))
];

module.exports = {
    maxAndMinDifference,
    bestMaxAndMinDifference,
};
