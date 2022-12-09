const { maskify } = require('../creditCardMask');
const { amountOfTests, randomNumbersArray } = require('../../helpers/randomValues');

describe("Test suite for a function which is masking credit card number", () => {
    test("Verify how function is working for a non-string inputs", async () => {
        expect(maskify('testtest')).toBeFalsy()
        expect(maskify(123)).toBeFalsy()
        expect(maskify(false)).toBeFalsy()
        expect(maskify(null)).toBeFalsy()
        expect(maskify(NaN)).toBeFalsy()
    })

    test("Verify how masking credit card number works", async () => {
        expect(maskify('4444444444444444')).toEqual('############4444')
        expect(maskify('444444444433')).toEqual('########4433')
        expect(maskify('4441234')).toEqual('###1234')
        expect(maskify('9809')).toEqual('9809')
        expect(maskify('55')).toEqual('55')
        expect(maskify('1')).toEqual('1')
    })

    test("Verify how masking number works for random inputs", async () => {
        for(let i = 1; i <= amountOfTests; i++) {

            let functionsInput = randomNumbersArray(16).join('');
            let functionsResult = maskify(functionsInput);
            let randomArray = functionsResult.split('');
            for(let j = 0; j < randomArray.length; j++) {
                if(j < 12) {
                    expect(randomArray[j]).toEqual("#")
                } else {
                    expect(randomArray[j]).not.toBe("#")
                }
            }
        }
    })
})