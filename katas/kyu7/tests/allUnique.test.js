const { hasUniqueChars } = require('../allUnique');
const {  amountOfTests, randomString } = require('../../helpers/randomValues');

describe("Test suite for a function which verifies if characters in a string are all unique", () => {
    test("Verify how function works for regular strings without repeated characters", async () => {
        expect(hasUniqueChars('abcdefghijklmnoprstuqwxyz')).toBe(true)
        expect(hasUniqueChars('Dom')).toBe(true)
        expect(hasUniqueChars('Castle12345')).toBe(true)
        expect(hasUniqueChars('Ala')).toBe(true)
    })

    test("Verify how function works for regular strings with repeated characters", async () => {
        expect(hasUniqueChars('Dominik')).toBe(false)
        expect(hasUniqueChars('11113333')).toBe(false)
        expect(hasUniqueChars('ala')).toBe(false)
        expect(hasUniqueChars('  ')).toBe(false)
    })

    test("Verify how it works for random strings", async () => {
        for(let i = 1; i <= amountOfTests; i++) {
            let testString = randomString();
            let arrayFromString = testString.split('');
            let countTheSameCharacters = 0;

            for(let j = 0; j < arrayFromString.length; j++) {
                let character = arrayFromString[j];
                if(arrayFromString.includes(character, j + 1)) {
                    countTheSameCharacters += 1;
                }
            }

            if(countTheSameCharacters === 0) {
                expect(hasUniqueChars(testString)).toBe(true)
            } else {
                expect(hasUniqueChars(testString)).toBe(false)
            }
        }
    })
})