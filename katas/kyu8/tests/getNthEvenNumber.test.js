const { nthEven } = require("../getNthEvenNumber");

describe("Verify the work of function which returning nth Even number", () => {
    test("Verify multiple positive scenarios", async () => {
        expect(nthEven(2)).toStrictEqual(2)
        expect(nthEven(1)).toStrictEqual(0)
        expect(nthEven(10)).toStrictEqual(18)
        expect(nthEven(256)).toStrictEqual(510)
    })

    test("Verify for zero input", async () => {
        expect(nthEven(0)).toStrictEqual(0)
    })
})