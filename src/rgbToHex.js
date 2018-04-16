const rgbToHex = (r, g, b) => [r, g, b]
    .map(x => Math.max(Math.min(255, x), 0).toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();

const rgbToHexBest = (r, g, b) => ((1 << 24)
    + (Math.min(r, 255) << 16)
    + (Math.min(g, 255) << 8)
    + Math.min(b, 255))
    .toString(16).slice(1).toUpperCase();


module.exports = {
    rgbToHex,
    rgbToHexBest,
};
