const trapwater = require('./TrappingWater');

describe("trappedWater between boxes", () => {

     test("It returns the trapped water units given on input of number of boxes", () => {
        expect(trapwater([2,0,2])).toEqual(2)
     })
     test("It returns the trapped water units given on input of number of boxes", () => {
      expect(trapwater([0,0,0])).toEqual(7)
   })
   test("It returns the trapped water units given on input of number of boxes", () => {
      expect(trapwater([1,0,3,2,3])).toEqual(7)
   })
   test("It returns the trapped water units given on input of number of boxes", () => {
      expect(trapwater([1,0])).toEqual(2)
   })
   test("It returns the trapped water units given on input of number of boxes", () => {
      expect(trapwater([1,0,1])).toEqual(1)
   })
    })
