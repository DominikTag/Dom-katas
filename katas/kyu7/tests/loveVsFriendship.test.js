const { wordsToScore } = require('../loveVsFriendship');
const { alphabet } = require('../../helpers/alphabetObject');
const { randomString, amountOfTests } = require('../../helpers/randomValues');

describe("Test suite for function, which counts the score basing on the letters value in alphabet", () => {
    test("Verify how functions works for non-string inputs", async () => {
        expect(wordsToScore('test123')).toBeFalsy()
        expect(wordsToScore(321)).toBeFalsy()
        expect(wordsToScore(null)).toBeFalsy()
        expect(wordsToScore(undefined)).toBeFalsy()
        expect(wordsToScore(NaN)).toBeFalsy()
        expect(wordsToScore({test: 'test'})).toBeFalsy()
    })

    test("Verify how function works for proper string inputs", async () => {
        expect(wordsToScore('test')).toEqual(64)
        expect(wordsToScore('asd')).toEqual(24)
        expect(wordsToScore('koralekolorukolarowego')).toEqual(276)
    })

    test("Verify how function works for random string inputs", async () => {
        for(let i = 0; i < amountOfTests; i++) {
            const testString = randomString();
            const arrayOfString = testString.split('');

            let stringValue = 0;

            arrayOfString.forEach(letter => {
                for(let property in alphabet) {
                    if(property === letter) {
                        stringValue += alphabet[property];
                    }
                }
            })

            expect(wordsToScore(testString)).toEqual(stringValue)
        }
    })
})