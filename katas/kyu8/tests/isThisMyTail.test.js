const { correctTail } = require("../isThisMyTail");

describe("Test suite for function verifying animals tails", () => {
    test("Verify for proper tails", async () => {
        expect(correctTail("lion", "n")).toBe(true)
        expect(correctTail("dog", "g")).toBe(true)
        expect(correctTail("cat", "t")).toBe(true)
    })

    test("Verify for falsy tails", async () => {
        expect(correctTail("bird", "f")).toBe(false)
        expect(correctTail("fish", "q")).toBe(false)
        expect(correctTail("asparagus", "w")).toBe(false)
    })

    test("Verify cases with different input types", async () => {
        let errorMsg = "Input must be of type string!"
        expect(() => correctTail(1, 2)).toThrowError(errorMsg)
        expect(() => correctTail(true, false)).toThrowError(errorMsg)
        expect(() => correctTail(null, undefined)).toThrowError(errorMsg)
    })

})