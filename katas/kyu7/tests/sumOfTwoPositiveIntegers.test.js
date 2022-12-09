const { sumTwoSmallestNumbers } = require('../sumOfTwoPositiveIntegers');
const { amountOfTests, randomNumbersArray, randomAmount } = require('../../helpers/randomValues');

describe("Test suite for a function, which is returning a sum of smallest integers in an array", () => {
    test("Verify how function works for not proper inputs", async () => {
        expect(sumTwoSmallestNumbers(['test', 'test', 'test', 'test'])).toBeFalsy()
        expect(sumTwoSmallestNumbers(123)).toBeFalsy()
        expect(sumTwoSmallestNumbers('test')).toBeFalsy()
        expect(sumTwoSmallestNumbers(null)).toBeFalsy()
        expect(sumTwoSmallestNumbers(undefined)).toBeFalsy()
        expect(sumTwoSmallestNumbers(NaN)).toBeFalsy()
        expect(sumTwoSmallestNumbers([])).toBeFalsy()
        expect(sumTwoSmallestNumbers({})).toBeFalsy()
        expect(sumTwoSmallestNumbers([1, 2, 3])).toBeFalsy()
    })

    test("Verify how function works for proper inputs", async () => {
        expect(sumTwoSmallestNumbers([4, 3, 2, 1])).toEqual(3)
        expect(sumTwoSmallestNumbers([0, 0, 0, 0])).toEqual(0)
        expect(sumTwoSmallestNumbers([15, 25, 89, -1, -2])).toEqual(-3)
    })

    test("Verify how function works for proper but random inputs", async () => {
        for(let i = 0; i < amountOfTests; i++) {
            const testArray = randomNumbersArray(randomAmount(4, 8));
            const sortedArray = testArray.sort((a, b) => { return a - b });
            const result = sortedArray[0] + sortedArray[1];

            expect(sumTwoSmallestNumbers(sortedArray)).toEqual(result)
        }
    })
})