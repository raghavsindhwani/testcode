
const Leader = require('./leader');

describe("findLeaders", () => {

    test("returns the leaders given an array", () => {
        expect(Leader([13, 5, 4, 32, 5, 1])).toEqual([1, 5, 32])
    })

    test("returns the leaders given an array", () => {
        expect(Leader([1, 2, 3])).toEqual([1, 2, 3])
    })
    test("returns the leaders given an array", () => {
        expect(Leader([1,2,3])).toEqual([3, 2, 1])
    })

    test("returns the leaders given an array", () => {
        expect(Leader([16, 17, 4, 3, 2])).toEqual([2,3,4,17])
    })


})