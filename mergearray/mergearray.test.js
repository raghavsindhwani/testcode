

const merge = require('./MergeSortedArray.js');

describe("mergeArray", () => {

    test("returns the merged sorted array given two sorted arrays", () => {
        expect(merge([3, 5, 6, 10, 11, 20],[1, 2, 7, 8, 15, 19])).toEqual([1, 2, 3, 5, 6, 7, 8, 10, 11, 15, 19, 20])
    })

    test("returns the merged sorted array given two sorted arrays", () => {
        expect(mergeArray([1, 3, 4, 5],[2, 4, 6, 8])).toEqual([1, 2, 3, 4, 4, 5, 6, 8])
    })

    test("returns the merged sorted array given two sorted arrays", () => {
        expect(mergeArray([1, 3, 5, 7],[2, 4, 6, 8])).toEqual([4, 5, 7, 8, 8, 9])
    })

})