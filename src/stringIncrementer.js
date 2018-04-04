const stringIncrementer = string => {
    const match = string.match(/^([a-zA-Z]+)?(\d+)?$/);

    const numberString = match[2] || '0';
    const number = parseInt(numberString) + 1;
    // const number = +numberString + 1;

    return `${match[1] || ''}${number.toString().padStart(numberString.length, '0')}`;
};

const bestStringIncrementer = string => string.replace(/(\d+)?$/, e => (e ? +e + 1 : 1).toString().padStart(e.length, '0'));

module.exports = {
    stringIncrementer,
    bestStringIncrementer,
};
