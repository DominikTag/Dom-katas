const { addLineNumbers } = require('../testing1-2-3');
const { amountOfTests, randomAmount, arrayOfRandomStrings } = require('../../helpers/randomValues');

describe("Test suite for a function which is adding numbering to the strings in an array", () => {
    test("Check how function works for not proper inputs", async () => {
        expect(addLineNumbers('test')).toBeFalsy()
        expect(addLineNumbers([1, 2, 3, 4, 5, 6])).toBeFalsy()
        expect(addLineNumbers(true)).toBeFalsy()
        expect(addLineNumbers(null)).toBeFalsy()
        expect(addLineNumbers(NaN)).toBeFalsy()
        expect(addLineNumbers(undefined)).toBeFalsy()
    })

    test("Check how function works for proper inputs", async () => {
        expect(addLineNumbers(['a', 'b', 'c'])).toEqual(['1: a', '2: b', '3: c'])
        expect(addLineNumbers(['test', 'test21'])).toEqual(['1: test', '2: test21'])
        expect(addLineNumbers(['', '', '', ''])).toEqual(['1: ', '2: ', '3: ', '4: '])
        expect(addLineNumbers(['15', '21', '33', '55'])).toEqual(['1: 15', '2: 21', '3: 33', '4: 55'])
    })

    test("Check how function works for proper, but random inputs", async () => {
        for(let i = 0; i < amountOfTests; i++) {
            const testArray = arrayOfRandomStrings();
            const result = [];

            testArray.forEach((word, index) => {
                result.push(`${index + 1} ${word}`)
            })

            expect(addLineNumbers(testArray)).toEqual(result)
        }
    })
})