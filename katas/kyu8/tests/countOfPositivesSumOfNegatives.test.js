const { countPositivesSumNegatives } = require('../countOfPositivesSumOfNegatives');

describe("Verify the behaviour of function for counting positive and negative numbers", () => {
    test("Verify it for array with correct values", async () => {
        expect(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10])).toEqual([10, -55])
        expect(countPositivesSumNegatives([99, 15, 66, 88, -1,])).toEqual([4, -1])
    })

    test("Verify if for empty, null and undefined array", async () => {
        expect(countPositivesSumNegatives(null)).toStrictEqual([])
        expect(countPositivesSumNegatives([])).toStrictEqual([])
        expect(countPositivesSumNegatives(undefined)).toStrictEqual([])
    })

    test("Verify it for array of zeros", async () => {
        expect(countPositivesSumNegatives([0, 0, 0, 0, 0, 0, 0])).toStrictEqual([0, 0])
    })
})