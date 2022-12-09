const { getCount } = require('../vowelCount');
const { amountOfTests, randomString } = require('../../helpers/randomValues');

describe("Test suite for a function which is counting vowels in a string", () => {
    test("Verify how function works for a non-string input types", async () => {
        expect(getCount('123')).toBeFalsy()
        expect(getCount(321)).toBeFalsy()
        expect(getCount(true)).toBeFalsy()
        expect(getCount(undefined)).toBeFalsy()
        expect(getCount(null)).toBeFalsy()
        expect(getCount(NaN)).toBeFalsy()
        expect(getCount({})).toBeFalsy()
    })

    test("Verify how function works for proper inputs", async () => {
        expect(getCount('twrxdf')).toEqual(0)
        expect(getCount('test')).toEqual(1)
        expect(getCount('aaaa')).toEqual(4)
        expect(getCount('')).toEqual(0)
        expect(getCount('__>?a_oe')).toEqual(3)
    })

    test("Verify how function works for proper, but random inputs", async () => {
        const regex = /[a|e|i|o|u]/;
        for(let i = 0; i < amountOfTests; i++) {
            const testString = randomString();
            let counter = 0;

            for(let letter of testString) {
                if(regex.test(letter)) {
                    counter++;
                }
            }

            expect(getCount(testString)).toEqual(counter)
        }
    })
})