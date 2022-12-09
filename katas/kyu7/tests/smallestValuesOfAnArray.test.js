const { minValue } = require('../smallestValueOfAnArray');
const { amountOfTests, randomAmount, randomNumbersArray } = require('../../helpers/randomValues');

describe("Test suite for a function which is returning smallest value of an array or its index", () => {
    test("Verify how function works for not properly made inputs", async () => {
        expect(minValue('test', 'test')).toBeFalsy()
        expect(minValue([1, 2, 3], 123)).toBeFalsy()
        expect(minValue([1, 2, 3], null)).toBeFalsy()
        expect(minValue([1, 2, 3], NaN)).toBeFalsy()
        expect(minValue([1, 2, 3], undefined)).toBeFalsy()
        expect(minValue([1, 2, 3], ['test'])).toBeFalsy()
        expect(minValue(123, 'value')).toBeFalsy()
        expect(minValue(null, 'value')).toBeFalsy()
        expect(minValue(undefined, 'value')).toBeFalsy()
        expect(minValue(NaN, 'index')).toBeFalsy()
        expect(minValue({}, 'index')).toBeFalsy()
        expect(minValue([], 'index')).toBeFalsy()
    })

    test("Verify how function works for properly made inputs", async () => {
        expect(minValue([1, 2, 3], 'value')).toStrictEqual(1)
        expect(minValue([1, 2, 3], 'index')).toStrictEqual(0)
        expect(minValue([1, 15, 69, 0], 'value')).toStrictEqual(0)
        expect(minValue([1, 15, 69, 0], 'index')).toStrictEqual(3)
    })

    test("Verify how function works for proper, but random inputs", async () => {
        function indexOrValue() {
            const array = ['index', 'value', 'value', 'index', 'index', 'value'];
            const randomizer = Math.floor(Math.random() * array.length - 1);

            return array[randomizer];
        }

        for(let i = 0; i < amountOfTests; i++) {
            const testArray = randomNumbersArray(randomAmount(5));
            const requestedValue = indexOrValue();

            if(requestedValue === 'value') {
                expect(minValue(testArray, requestedValue)).toStrictEqual(Math.min(...testArray))
            } else {
                expect(minValue(testArray, requestedValue)).toStrictEqual(testArray.indexOf(Math.min(...testArray)))
            }
        }
    })
})