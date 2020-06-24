const largestsum = require('./largestsum');

describe("Largest sum array", () => {

     test("returns the largest subarray sum given positive integers", () => {
        expect(largestsum([2,1,-1,4])).toEqual(6)
     })
     test("returns the largest subarray sum given positive integers", () => {
      expect(largestsum([2,1,-3,4])).toEqual(4)
   })
   test("returns the largest subarray sum given positive integers", () => {
      expect(largestsum([-2,-11,-13,-2,-14,-9,-5,-15,-3])).toEqual(-2)
   })
   test("returns the largest subarray sum given positive integers", () => {
      expect(largestsum([-2,0,-1])).toEqual(0)
   })
   test("returns the largest subarray sum given positive integers", () => {
      expect(largestsum([1,0,1])).toEqual(1)
   })
    })
    