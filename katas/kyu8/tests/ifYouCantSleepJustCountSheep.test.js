const { countSheep } = require("../ifYouCantSleepJustCountSheep");

describe("Test suite for countSheep function", () => {
    test("Test function for positive number of sheeps", async () => {
        expect(countSheep(2)).toEqual("1 sheep...2 sheep...")
        expect(countSheep(124)).toMatch(/100 sheep/)
    })

    test("Test function for negative number of sheeps", async () => {
        expect(countSheep(-1)).toEqual('')
    })

    test("Test function for zero number of sheeps", async () => {
        expect(countSheep(0)).toEqual('')
    })
})