const { reversedString } = require("../reversedStrings");
const {  amountOfTests, randomString } = require('../tests/helpers/randomValues');

describe("Test suite for a function which is reversing strings", () => {
    test("Verify how function works for regular strings", async () => {
        expect(reversedString('world')).toEqual('dlrow')
        expect(reversedString('dog')).toEqual('god')
        expect(reversedString('Dominik')).toEqual('kinimoD')
    })

    test("Verify how function works for a non-string inputs", async () => {
        expect(reversedString(true)).toEqual('')
        expect(reversedString(67)).toEqual('')
        expect(reversedString(null)).toEqual('')
        expect(reversedString(NaN)).toEqual('')
        expect(reversedString(undefined)).toEqual('')
    })

    test("Verify how function works with empty string", async () => {
        expect(reversedString('')).toEqual('')
    })

    test("Verify how function works for random string inputs", async () => {
        const testString = randomString();
        const array = testString.split('');
        const revString = array.reverse().join('');
        for(let i = 1; i <= amountOfTests; i++) {
            expect(reversedString(testString)).toEqual(revString)
        }
    })
})