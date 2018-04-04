const stringIncrementer = string => {
    const match = string.match(/^([a-zA-Z]+)?(\d+)?$/);

    const numberString = match[2] || '0';
    const number = parseInt(numberString) + 1;
    // const number = +numberString + 1;

    return `${match[1] || ''}${number.toString().padStart(numberString.length, '0')}`;
};

const bestStringIncrementer1 = string =>
    string.replace(/(\d+)?$/, e => (e ? +e + 1 : 1).toString().padStart(e.length, '0'));

const bestStringIncrementer2 = string => string.replace(/([0-8]|\d?9+)?$/, e => (e ? +e + 1 : 1));

module.exports = {
    stringIncrementer,
    bestStringIncrementer1,
    bestStringIncrementer2,
};
