const { greet } = require("../returningStrings");
const {  amountOfTests, randomString } = require('../tests/helpers/randomValues');

describe("Test suite for greeting function", () => {
    test("Verify function for real names", async () => {
        const names = ["Dominik", "Martyna", "test1234"];

        names.forEach(name => {
            expect(greet(name)).toEqual(`Hello ${name}, how are you doing today?`)
        })
    })

    test("Verify function for inputs of different type than string", async () => {
        const errorMsg = "Input must be of type string!";
        const badInputs = [true, false, null, undefined, NaN];

        badInputs.forEach(input => {
            expect(() => greet(input)).toThrowError(errorMsg)
        })

    })

    test("Verify function for randomly generated string inputs", async () => {
        const testString = randomString();
        for(let i = 1; i <= amountOfTests; i++) {
            expect(greet(testString)).toEqual(`Hello ${testString}, how are you doing today?`)
        }
    })
})