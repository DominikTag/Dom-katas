const { booleanToString } = require('../booleanToString');

describe('Verify if function is changing boolean to string properly', () => {
    test('Verify the change of true value', async () => {
        expect(booleanToString(true)).toStrictEqual('true');
    })

    test('Verify the change of false value', async () => {
        expect(booleanToString(false)).toStrictEqual('false');
    })
})