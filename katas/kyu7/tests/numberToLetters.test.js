const { switcher } = require('../NumberToLetters');
const { amountOfTests, arrayOfRandomStringNumbers, randomNumbersArray, randomAmount } = require('../../helpers/randomValues');
const { alphabet, reversedAlphabetWithOtherChars, reversedAlphabet } = require('../../helpers/alphabetObject');
describe("Test suite for a function, which is making a letter from a number in reversed order", () => {
    test("Verify how function works for other input types", async () => {
        expect(switcher('test')).toBeFalsy()
        expect(switcher(null)).toBeFalsy()
        expect(switcher(123)).toBeFalsy()
        expect(switcher(NaN)).toBeFalsy()
        expect(switcher(undefined)).toBeFalsy()
        expect(switcher({})).toBeFalsy()
        expect(switcher([1, 2, 3, 4, 5, 6])).toBeFalsy()
    })

    test("Verify how function works for proper input types", async () => {
        expect(switcher(['1', '2', '3', '4'])).toEqual('zyxw')
        expect(switcher(['0', '0', '0', '0'])).toEqual('')
        expect(switcher(['7'])).toEqual('t')
    })

    test("Verify how function works for proper random inputs", async () => {
        for(let i = 0; i < amountOfTests; i++) {
            const testArray = arrayOfRandomStringNumbers(randomNumbersArray(randomAmount(6)));
            const revAlphWithAdditionalChars = reversedAlphabetWithOtherChars(reversedAlphabet);

            const result = testArray.map(str => {
                return revAlphWithAdditionalChars[Number(str - 1)];
            })

            expect(switcher(testArray)).toEqual(result.join(''))
        }
    })
})