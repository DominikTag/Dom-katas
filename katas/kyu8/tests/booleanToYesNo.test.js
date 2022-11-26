const { boolToWord } = require('../booleanToYesNo');

describe('Verify if function is assigning proper values depenging on boolean', () => {
    test('Verify for truthy value', async () => {
        expect(boolToWord(true)).toStrictEqual('Yes');
        expect(boolToWord('true')).toStrictEqual('Yes');
        expect(boolToWord(5)).toStrictEqual('Yes');
    })

    test('Verify for falsy value', async () => {
        expect(boolToWord(false)).toStrictEqual('No');
        expect(boolToWord(0)).toStrictEqual('No');
        expect(boolToWord('')).toStrictEqual('No');
        expect(boolToWord(null)).toStrictEqual('No');
        expect(boolToWord(undefined)).toStrictEqual('No');
        expect(boolToWord(NaN)).toStrictEqual('No');
    })
})