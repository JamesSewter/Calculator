const twoDigitCalculator = require("./twoDigitCalculator");
const multipleNumsCalculator = require("./twoDigitCalculator");
const advancedCalculator = require("./twoDigitCalculator");

//Behaviours
// 1) - Basic twoDigitCalculator
    //Adds 2 nums and returns result
    //Subtracts 2 nums returns result
    //Divides 2 nums returns result
    //Multiplies 2 nums returns result

// 2) - multipleNumsCalculator 
    //Adds/subtracts/divides/multiplies multiple nums
    

// 3) - advancedCalculator
    //Performs trig calcs
    //logs and exponentials
    //Squares

describe("twoDigitCalculator", () => {
    test("Adds 2 nums and returns result", () => {
        //arrange
        const testNum1 = 5
        const testNum2 = 8
        const op = "+"
        //act
        const testResult = twoDigitCalculator(testNum1, op, testNum2)
        //assert
        expect(testResult).toBe(13)
    })
    test("Subtracts 2 nums returns result", () => {
        //arrange
        const testNum1 = 10
        const testNum2 = 4
        const op = "-"
        //act
        const testResult = twoDigitCalculator(testNum1, op, testNum2)
        //assert
        expect(testResult).toBe(6)
    })
    test("Divides 2 nums returns result", () => {
        //arrange
        const testNum1 = 8
        const testNum2 = 2
        const op = "/"
        //act
        const testResult = twoDigitCalculator(testNum1, op, testNum2)
        //assert
        expect(testResult).toBe(4)
    })
    test("Multiplies 2 nums returns result", () => {
        //arrange
        const testNum1 = 5
        const testNum2 = 8
        const op = "*"
        //act
        const testResult = twoDigitCalculator(testNum1, op, testNum2)
        //assert
        expect(testResult).toBe(40)
    })
})



