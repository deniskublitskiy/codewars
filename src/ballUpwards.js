/**
 * y = ax^2 + bx + c
 * Extrema x = -b / 2a, y = c - b^2 / 4a
 *
 * a = -0.5g
 * b = v
 * t = -b / 2a = -v / -g = v / g
 * 1 km/h = 1000/3500 h/s = 5/18 m/s
 *
 * @param v0
 * @returns {number}
 */
const ballUpwards = v0 => Math.round(5 * 10 * v0 / 18 / 9.81);

module.exports = {
    ballUpwards
};
