const { evenOrOdd } = require('../evenOrOdd');

describe("Verify work of function which checks if the number is even or odd", () => {
    test("Test for even numbers", async () => {
        expect(evenOrOdd(2)).toBe("Even")
        expect(evenOrOdd(12256)).toBe("Even")
        expect(evenOrOdd(-78)).toBe("Even")
    })

    test("Test for odd numbers", async () => {
        expect(evenOrOdd(1)).toBe("Odd")
        expect(evenOrOdd(1213)).toBe("Odd")
        expect(evenOrOdd(-5)).toBe("Odd")
    })

    test("Test for zero", async () => {
        expect(evenOrOdd(0)).toBe("Even")
    })
})