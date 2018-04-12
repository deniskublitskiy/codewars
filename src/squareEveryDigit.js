const squareEveryDigit = x => parseInt(x.toString().split('').map(x => parseInt(x) ** 2).join(''));
const squareEveryDigitBest = x => +(x+'').replace(/./g, x => x * x);

module.exports = {
    squareEveryDigit,
    squareEveryDigitBest,
};