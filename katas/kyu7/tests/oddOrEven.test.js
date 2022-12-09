const { oddOrEven } = require('../oddOrEven');
const { amountOfTests, randomAmount, randomNumbersArray } = require('../../helpers/randomValues');

describe("Test suite for function which is checking if sum of the integers is even or odd", () => {
    test("Verify how the function works for other input types", async () => {
        expect(oddOrEven(['test', 'test', 'test'])).toBeFalsy()
        expect(oddOrEven('give me some money')).toBeFalsy()
        expect(oddOrEven(5263)).toBeFalsy()
        expect(oddOrEven(null)).toBeFalsy()
        expect(oddOrEven(undefined)).toBeFalsy()
        expect(oddOrEven(NaN)).toBeFalsy()
    })

    test("Verify how function works for proper input types", async () => {
        expect(oddOrEven([1, 1, 1])).toEqual('odd')
        expect(oddOrEven([2, 2, 2])).toEqual('even')
        expect(oddOrEven([0, 0, 0])).toEqual('even')
        expect(oddOrEven([-5, -6, -11])).toEqual('even')
        expect(oddOrEven([])).toEqual('even')
    })

    test("Verify how function works for random but proper inputs", async () => {
        for(let i = 0; i < amountOfTests; i++) {
            const testArray = randomNumbersArray(randomAmount(5));
            let result;

            testArray.forEach(element => {
                result += element;
            })

            if(result % 2 === 0) {
                expect(oddOrEven(testArray)).toEqual('even')
            } else {
                expect(oddOrEven(testArray)).toEqual('odd')
            }
        }
    })
})