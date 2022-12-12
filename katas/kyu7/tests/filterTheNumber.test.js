const { filterString } = require('../filterTheNumber');
const { randomStringWithDigits, amountOfTests, randomString } = require('../../helpers/randomValues');

describe("Test suite for a function which is returning numbers from random strings", () => {
    test("Verify how function works for non-string inputs", async () => {
        expect(filterString(5263)).toBeFalsy()
        expect(filterString(null)).toBeFalsy()
        expect(filterString(undefined)).toBeFalsy()
        expect(filterString(NaN)).toBeFalsy()
        expect(filterString({test: 'value'})).toBeFalsy()
    })

    test("Verify how function works for proper string inputs", async () => {
        expect(filterString('test123')).toEqual(123)
        expect(filterString('321')).toEqual(321)
        expect(filterString('ajk22kjahkjas44sada11')).toEqual(224411)
        expect(filterString('0')).toEqual(0)
    })

    test("Verify how function works for proper random string inputs", async () => {

        for(let i = 0; i < amountOfTests; i++) {
            const testString = randomStringWithDigits(randomString());
            expect(typeof filterString(testString)).toBe("number")
        }
    })
})