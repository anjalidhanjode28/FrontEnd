const sum = require('./sum_arguments');

describe("testing the sum function", () => {

    test("add two possitive numbers", () => {
        expect(sum(1,3)).toBe(4);
    })

    test("add two negative numbers", () => {
        expect(sum(-6,-3)).toBe(-9);
    })

    test("add two floting numbers", () => {
        expect(sum(1.5,2.5)).toBe(4);
    })

    test("add one negative one possitive number", () => {
        expect(sum(-1,3)).toBe(2);
    })

    test("add 2 numbers as strings, and the output to be an integer", () => {
        expect(sum('5.5','4.5')).toBe(10);
    })

    test("invoke sum function with no arguments", () => {
        expect(sum()).toBe("Sum function should be invoked with atleast 2 arguments");
    })

    test("invoke sum function with one arguments", () => {
        expect(sum(3)).toBe("Sum function needs one more argument");
    })

    test("add three number", () => {
        expect(sum(1,2,3)).toBe(6);
    })
})