const { stringEvaluationBetter: stringEvaluation } = require("../stringEvaluation");

describe('String Evaluation', () => {
    test('Test case #1', () => {

        const actual = JSON.stringify(stringEvaluation('aab#HcCcc##l#', ['a<b','#==4','c>=C','H!=a']));
        const expected = JSON.stringify([false, true, true, true]);

        expect(actual).toEqual(expected);
    });

    test('Test case #2', () => {
        const actual = JSON.stringify(stringEvaluation('abc#$%KDAyyaa@@@', ['#>@','A==2','a>A','$!=2']));
        const expected = JSON.stringify([false,false,true,true]);

        expect(actual).toEqual(expected);
    });

    test('Test case #3', () => {
        const actual = JSON.stringify(stringEvaluation('abb', ['a>b','b==a','b<=a','b>a','b!=b','a==1','b==1']));
        const expected = JSON.stringify([false,false,false,true,false,true,false]);

        expect(actual).toEqual(expected)
    });

    test('Test case #4', () => {

        const actual = JSON.stringify(stringEvaluation('wNQljrbsdgx#s*mJG{FbQhJv$uDnEXLLlOjI$Zju', [
            's!={',
            'n>=X',
            '0<l',
            'j!=L',
            'l>Z',
            '$!=u',
            'w<j',
            '{<L',
            'x<=L',
            'x==m'
        ]));

        const expected = JSON.stringify([true, true, true, true, true, false, true, true, true, true]);

        expect(actual).toEqual(expected)
    });
});
