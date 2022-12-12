const { inAscOrder } = require('../areTheNumbersInOrder');
const { randomNumbersArray, amountOfTests } = require('../../helpers/randomValues');

describe("Test suite for a function, which is checking whether array is sorted or not", () => {
    test("Verify how function works for non-array inputs", async () => {
        expect(inAscOrder('test')).toBeFalsy()
        expect(inAscOrder(5)).toBeFalsy()
        expect(inAscOrder(true)).toBeFalsy()
        expect(inAscOrder(null)).toBeFalsy()
        expect(inAscOrder(undefined)).toBeFalsy()
        expect(inAscOrder(NaN)).toBeFalsy()
    })

    test("Verify how function works for properly ordered array inputs", async () => {
        expect(inAscOrder([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBeTruthy()
        expect(inAscOrder([2, 4, 152])).toBeTruthy()
        expect(inAscOrder([1])).toBeTruthy()
        expect(inAscOrder([0, 0, 0, 0])).toBeTruthy()
        expect(inAscOrder([-5, -4, -3, -2, -1, 0])).toBeTruthy()
    })

    test("Verify how function works for not-properly sorted array inputs", async () => {
        expect(inAscOrder([10, 2, 3, 4, 5, 6, 7, 8, 9, 1])).toBeFalsy()
        expect(inAscOrder([1, 2, 10, 9])).toBeFalsy()
        expect(inAscOrder([-1, -2, -3, -4, -5])).toBeFalsy()
    })

    test("Verify how function works for random array inputs", async () => {
        for(let i = 1; i <= amountOfTests; i++) {
            const testArray = randomNumbersArray(5);

            let sorted = true;
            for(let j = 0; j < testArray.length; j++) {
                if(testArray[j] > testArray[j + 1]) {
                    sorted = false;
                    break;
                }
            }
            if (sorted === true) {
                expect(inAscOrder(testArray)).toBeTruthy()
            } else {
                expect(inAscOrder(testArray)).toBeFalsy()
            }
        }
    })
})