const { countByX } = require('../countByX');

describe('Verify how function counts elements', () => {
    test('Verify if the result is an array', async () => {
        expect(typeof countByX(1, 6)).toBe('object')
    })

    test('Verify the error message for non-number parameters', async () => {
        expect(() => countByX('5', '6')).toThrow(Error)
        expect(() => countByX(5, 'test')).toThrow(Error)
        expect(() => countByX(true, false)).toThrow('Function\'s parameters needs to be of type Number!')
        expect(() => countByX(0)).toThrow('Function\'s parameters needs to be of type Number!')
    })

    test('Verify returned value from the function', async () => {
        expect(countByX(1, 10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        expect(countByX(3, 6)).toStrictEqual([3, 6, 9, 12, 15, 18])
        expect(countByX(-2, 5)).toStrictEqual([-2, -4, -6, -8, -10])
        expect(countByX(0, 0)).toStrictEqual([])
    })
})