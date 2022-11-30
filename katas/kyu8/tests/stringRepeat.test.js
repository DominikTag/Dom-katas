const { repeatStr } = require("../stringRepeat");
const {  amountOfTests, randomString, randomAmount } = require('../../helpers/randomValues');

describe("Test suite for a function, which repeat string n times", () => {
    test("Verify how function works for regular strings", async () => {
        expect(repeatStr(2, "hello")).toEqual("hellohello")
        expect(repeatStr(1, "2")).toEqual("2")
        expect(repeatStr(5, "a")).toEqual("aaaaa")
    })

    test("Verify how function works for switched places parameters", async () => {
        expect(repeatStr("hello", 2)).toEqual("")
    })

    test("Verify how function works for two strings parameters", async () => {
        expect(repeatStr("hello", "2")).toEqual("")
    })

    test("Verify how function works for empty parameters", async () => {
        expect(repeatStr()).toEqual("")
    })

    test("Verify how function works for random string", async () => {

        for(let i = 1; i < amountOfTests; i++) {
            const testString = randomString();
            let result = '';
            let amountOfRepeats = randomAmount(6);

            for(let j = 1; j <= amountOfRepeats; j++) {
                result += testString;
            }
            expect(repeatStr(amountOfRepeats, testString)).toEqual(result);
            result = '';
        }
    })
})