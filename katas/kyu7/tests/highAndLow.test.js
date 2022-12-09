const { highAndLow } = require('../highAndLow');
const { randomNumbersArray, amountOfTests, randomAmount } = require('../../helpers/randomValues');

describe("Test suite for a function which is returning the smallest and the biggest number from a string", () => {
    test("Verify how function behaves for not correct inputs", async () => {
        expect(highAndLow('testtest')).toBeFalsy()
        expect(highAndLow('test1')).toBeFalsy()
        expect(highAndLow(true)).toBeFalsy()
        expect(highAndLow(1234)).toBeFalsy()
        expect(highAndLow(NaN)).toBeFalsy()
        expect(highAndLow(null)).toBeFalsy()
        expect(highAndLow(undefined)).toBeFalsy()
    })

    test("Verify how function behaves for correct inputs", async () => {
        expect(highAndLow('1 2 3 4 5 6')).toEqual('6 1')
        expect(highAndLow('123456')).toEqual('6 1')
        expect(highAndLow('1 2 3 -5 5 19')).toEqual('19 -5')
        expect(highAndLow('000')).toEqual('0 0')
        expect(highAndLow('1 1 1 2 2 2')).toEqual('2 1')
    })

    test("Verify how function behaves for random correct inputs", async () => {
        const regexForTest = /^[0-9]{1}[\s]{1}[0-9]{1}$/;

        for(let i = 0; i < amountOfTests; i++) {
            const testString = randomNumbersArray(randomAmount(5)).join('');
            expect(highAndLow(testString)).toMatch(regexForTest)
        }
    })
})