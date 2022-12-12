const { modifyMultiply } = require('../multiplyWordsInString');
const { randomString, randomAmount, amountOfTests, randomStringOfWords } = require('../../helpers/randomValues');

describe("Test suite for a function which is multiplying the string", () => {
    test("Verify how function works for other input types", async () => {
        expect(modifyMultiply(123, 'test', 'test')).toBeFalsy()
        expect(modifyMultiply('test1', 'test2', 'test3')).toBeFalsy()
        expect(modifyMultiply(NaN, null, undefined)).toBeFalsy()
        expect(modifyMultiply(0, 0, 0)).toBeFalsy()
    })

    test("Verify how function works for proper input types", async () => {
        expect(modifyMultiply('Sample thingy', 1, 10)).toEqual('thingy-thingy-thingy-thingy-thingy-thingy-thingy-thingy-thingy-thingy')
        expect(modifyMultiply('I Like Dom', 1, 0)).toEqual('')
        expect(modifyMultiply('Lol lol lol 3', 3, 3)).toEqual('3-3-3')
    })

    test("Verify how function works for random inputs", async () => {
        for(let i = 0; i < amountOfTests; i++) {
            const testString = randomStringOfWords(randomString());
            const firstParameter = randomAmount(0, testString.length - 1);
            const secondParameter = randomAmount(6);

            const arrayFromString = testString.split(' ');
            console.log(arrayFromString);
            let result = [];


            for(let j = 0; j < secondParameter; j++) {
                result.push(arrayFromString[firstParameter]);
            }
            expect(modifyMultiply(testString, firstParameter, secondParameter)).toEqual(result.join('-'))
        }
    })
})