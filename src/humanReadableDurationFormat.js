function formatDuration(seconds) {

    if (!seconds) {
        return 'now';
    }

    const counts = [
        365 * 24 * 60 * 60,
        24 * 60 * 60,
        60 * 60,
        60,
        1
    ];
    const units = ['year', 'day', 'hour', 'minute', 'second']
        .reduce((result, unit, i) => {
            const modulo = Math.floor(seconds / counts[i]);
            seconds = seconds % counts[i];

            if (modulo) {
                result.unshift(`${modulo} ${unit}${modulo === 1 ? '' : 's'}`);
            }

            return result
        }, [])
        .reverse();

    return [units.slice(0, -1).join(', '), units.slice(-1)[0]].join(units.length < 2 ? '' : ' and ');
}

module.exports = {
    formatDuration
};
