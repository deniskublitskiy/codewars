const deleteNOccurrences = (arr, n) => {
    const repeatMap = {};
    return arr.filter(x => {
        if (repeatMap[x]) {
            repeatMap[x]++;
            return repeatMap[x] <= n
        }
        repeatMap[x] = 1;
        return true
    });
};

const deleteNOccurrencesBest = (arr, n) => {
    const repeatMap = {};
    return arr.filter(x => repeatMap[x] ? (repeatMap[x]++ && repeatMap[x] <= n) : (repeatMap[x] = 1));
};

module.exports = {
    deleteNOccurrences,
    deleteNOccurrencesBest,
};
