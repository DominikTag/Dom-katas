const { adjacentElementsProduct } = require('../maximumProduct');

describe("Test suite for a function which is calculating maximum product's value by multiplying adjacent array items", () => {
    test("Verify how function works for non-array inputs", async () => {
        expect(adjacentElementsProduct('test')).toBeFalsy()
        expect(adjacentElementsProduct(321)).toBeFalsy()
        expect(adjacentElementsProduct(null)).toBeFalsy()
        expect(adjacentElementsProduct(undefined)).toBeFalsy()
        expect(adjacentElementsProduct({test: 'test'})).toBeFalsy()
        expect(adjacentElementsProduct(NaN)).toBeFalsy()
    })

    test("Verify how function works for non-integer arrays", async () => {
        expect(adjacentElementsProduct(['test', 1, 2, 4])).toBeFalsy()
        expect(adjacentElementsProduct(['test', 'test1', 'test2'])).toBeFalsy()
        expect(adjacentElementsProduct([{a: 3, b: 4}])).toBeFalsy()
        expect(adjacentElementsProduct([{a: 3, b: 4}, {test: 'test'}])).toBeFalsy()
        expect(adjacentElementsProduct([null, undefined, NaN])).toBeFalsy()
    })

    test("Verify how function works for proper integer arrays", async () => {
        expect(adjacentElementsProduct([1, 2, 3, 5])).toStrictEqual(15)
        expect(adjacentElementsProduct([2, 6])).toStrictEqual(12)
        expect(adjacentElementsProduct([0, 0, 0, 0, 0])).toStrictEqual(0)
        expect(adjacentElementsProduct([-5, 8, -9])).toStrictEqual(-40)
    })
})