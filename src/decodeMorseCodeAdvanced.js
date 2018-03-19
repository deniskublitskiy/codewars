const morse = {
    A: '.-',
    B: '-...',
    C: '-.-.',
    D: '-..',
    E: '.',
    F: '..-.',
    G: '--.',
    H: '....',
    I: '..',
    J: '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R: '.-.',
    S: '...',
    T: '-',
    U: '..-',
    V: '...-',
    W: '.--',
    X: '-..-',
    Y: '-.--',
    Z: '--..',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
    0: '-----',
    ' ': '   ',
};

const MORSE_CODE = {
    ...Object.keys(morse).reduce((total, symbol) => {
        total[symbol] = morse[symbol];
        total[morse[symbol]] = symbol;

        return total;
    }, {}),
    '.-.-.-': '.',
};

const encodeMorse = text =>
    [].reduce.call(text, (total, symbol) => `${total}${symbol === ' ' ? ' ' : MORSE_CODE[symbol.toUpperCase()]} `, '').trim();

const decodeBits = bits => {
    bits = bits.substring(bits.indexOf('1'), bits.lastIndexOf('1') + 1);

    const { currentShortestSequenceLength: shortestSequenceLength } = [].reduce.call(bits, (total, symbol, i, text) => {
        if (i === 0 || symbol === text[i - 1]) {
            total.currentSequenceLength++;
            if (i !== text.length - 1)
                return total
        }

        total.currentShortestSequenceLength = Math.min(total.currentShortestSequenceLength, total.currentSequenceLength);
        total.currentSequenceLength = 1;

        return total;
    }, { currentSequenceLength: 0, currentShortestSequenceLength: Number.MAX_SAFE_INTEGER });

    return bits.replace(new RegExp('000000'.repeat(shortestSequenceLength), 'g'), '   ')
        .replace(new RegExp('111'.repeat(shortestSequenceLength), 'g'), '-')
        .replace(new RegExp('000'.repeat(shortestSequenceLength), 'g'), ' ')
        .replace(new RegExp('1'.repeat(shortestSequenceLength), 'g'), '.')
        .replace(new RegExp('0'.repeat(shortestSequenceLength), 'g'), '');
};

const decodeBitsBest = bits => {
    bits = bits.replace(/(^0+|0+$)/g, '');
    const shortestSequenceLength = Math.min.apply(null, bits.match(/0+|1+/g)
        .map(item => item.length));

    return bits.replace(new RegExp('000000'.repeat(shortestSequenceLength), 'g'), '   ')
        .replace(new RegExp('111'.repeat(shortestSequenceLength), 'g'), '-')
        .replace(new RegExp('000'.repeat(shortestSequenceLength), 'g'), ' ')
        .replace(new RegExp('1'.repeat(shortestSequenceLength), 'g'), '.')
        .replace(new RegExp('0'.repeat(shortestSequenceLength), 'g'), '');
};

const decodeMorse = morseCode => {
    return morseCode.split('   ')
        .map(word => word.split(' ')
            .reduce((total, morseSymbol) => `${total}${MORSE_CODE[morseSymbol] || MORSE_CODE['.']}`, '')
        )
        .join(' ')
        .toUpperCase()
};

module.exports = {
    decodeBits: decodeBitsBest,
    decodeMorse,
    encodeMorse,
    MORSE_CODE,
};
