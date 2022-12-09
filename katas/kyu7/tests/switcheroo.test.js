const { switcheroo } = require('../switcheroo');
const { amountOfTests, randomAmount } = require('../../helpers/randomValues');

describe("Test suite for a function which is reversing the order of a and b letters in a string", () => {
    test("Verify if function works properly for wrong inputs", async () => {
        expect(switcheroo('123')).toBeFalsy()
        expect(switcheroo(123)).toBeFalsy()
        expect(switcheroo(true)).toBeFalsy()
        expect(switcheroo(NaN)).toBeFalsy()
        expect(switcheroo(null)).toBeFalsy()
        expect(switcheroo(undefined)).toBeFalsy()
        expect(switcheroo('abv')).toBeFalsy()
        expect(switcheroo('xyz')).toBeFalsy()
    })

    test("Verify how function works for proper inputs", async () => {
        expect(switcheroo('abc')).toEqual('bac')
        expect(switcheroo('cba')).toEqual('cab')
        expect(switcheroo('bbb')).toEqual('aaa')
        expect(switcheroo('ccc')).toEqual('ccc')
        expect(switcheroo('aabbccaabbaa')).toEqual('bbaaccbbaabb')
    })

    test("Verify how function works for proper, but random inputs", async () => {
        const letters = ['a', 'b', 'c', 'b', 'c', 'a'];
        for(let i = 0; i < amountOfTests; i++) {
            const testString = letters.map(letter => {
                return letters[randomAmount(0, letters.length - 1)];
            })

            const result = [];

            const arrayFromString = testString.split('');
            arrayFromString.forEach(letter => {
                if(letter === 'a') {
                    result.push('b');
                } else if(letter === 'b') {
                    result.push('a');
                } else {
                    result.push(letter);
                }
            })

            const changedString = result.join('');

            expect(switcheroo(testString.join(''))).toEqual(changedString)
        }
    })
})