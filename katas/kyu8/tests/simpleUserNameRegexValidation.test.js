const { validateUsr } = require('../simpleUserNameRegexValidation');

describe("Test suite for simple user name validation", () => {
    test("Verify against proper user names", async () => {
        expect(validateUsr('tester')).toBe(true)
        expect(validateUsr('alex')).toBe(true)
        expect(validateUsr('myhome__')).toBe(true)
    })

    test("Verify against too short and too long names", async () => {
        expect(validateUsr('Dom')).not.toBe(true)
        expect(validateUsr('12345678910111213141516')).not.toBe(true)
        expect(validateUsr('')).not.toBe(true)
    })

    test("Verify against not allowed characters", async () => {
        expect(validateUsr('Dom!@#$%^&*()')).not.toBe(true)
        expect(validateUsr('<>,.?/:;{}[]')).not.toBe(true)
    })

})