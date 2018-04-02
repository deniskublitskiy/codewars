const stringEvaluation = (string, condition) => {
    const countMap = [].reduce.call(string, (total, character) =>
        (total[character] ? total[character]++ : total[character] = 1) && total, {});

    const regexp = /^([\w@#$%^&*(){}[\]])(>=|<=|==|<|>|!=)([\w@#$%^&*(){}[\]])$/;

    return condition.map(condition => condition.match(regexp).slice(1))
        .map(([left, equalitySign, right]) => {
            const getValue = x => Number.isInteger(parseInt(x)) ? parseInt(x) : countMap[x];

            const leftExpression = getValue(left);
            const rightExpression = getValue(right);

            switch(equalitySign) {
                case '>=':
                    return leftExpression >= rightExpression;
                case '<=':
                    return leftExpression <= rightExpression;
                case '==':
                    return leftExpression === rightExpression;
                case '>':
                    return leftExpression > rightExpression;
                case '<':
                    return leftExpression < rightExpression;
                case '!=':
                    return leftExpression !== rightExpression;
                default:
                    return false
            }
        })
};

module.exports = {
    stringEvaluation,
};
