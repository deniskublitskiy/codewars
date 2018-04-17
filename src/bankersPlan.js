const bankerPlan = (f0, p, c0, n, i) => {
    let c = c0;
    let sum = f0;

    for (let j = 1; j < n; j++) {
        sum = Math.ceil(sum * (1 + p / 100) - c);
        c = Math.ceil(c * (1 + i / 100))
    }

    return sum >= 0;
};

const bankerPlanBest = async (f0, p, c0, n, i) =>
    f0 < 0 ? false : (n === 1 ? f0 > 0 : await (new Promise(resolve => setImmediate(() => resolve(bankerPlanBest(f0 * (1 + p / 100) - c0, p, c0 * (1 + i / 100), n - 1, i))))));

const bankerPlanBest1 = async (f0, p, c0, n, i) => {
    if (f0 < 0) {
        return false;
    }

    if (n === 1) {
        return f0 >= 0
    }

    return new Promise(resolve => setImmediate(() =>
        resolve(bankerPlanBest(f0 * (1 + p / 100) - c0, p, c0 * (1 + i / 100), n - 1, i))
    ))
};

module.exports = {
    bankerPlan,
    bankerPlanBest,
    bankerPlanBest1,
};