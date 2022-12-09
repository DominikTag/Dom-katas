const { DNAStrand } = require('../ComplementartyDNA');

describe("Test suite for a function, which is changing the DNA codes", () => {
    test("Verify how function works for non-string inputs", async () => {
        expect(DNAStrand('test')).toBeFalsy()
        expect(DNAStrand(123)).toBeFalsy()
        expect(DNAStrand(false)).toBeFalsy()
        expect(DNAStrand(null)).toBeFalsy()
        expect(DNAStrand(NaN)).toBeFalsy()
    })

    test("Verify how function works for a proper string inputs", async () => {
        expect(DNAStrand('TAGC')).toStrictEqual('ATCG')
        expect(DNAStrand('TTTT')).toStrictEqual('AAAA')
        expect(DNAStrand('GTAT')).toStrictEqual('CATA')
    })
})