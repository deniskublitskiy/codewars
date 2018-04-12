const champernowneDigit = (n) => {

    if (n < 1) {
        return NaN;
    }

    let str = '0';
    let number = 1;

    while (str.length < n) {
        str += number;
        number++;
    }

    return parseInt(str[n - 1]);
};

module.exports = {
    champernowneDigit,
};
