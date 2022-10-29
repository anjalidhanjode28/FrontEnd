const timeConversion = require('./index');


describe("testing the timeconversion function", () => {

    test("when time is 5200 miliseconds", () => {
        expect(timeConversion(5200)).toBe(5);
    })

    test("when time is 60000 miliseconds", () => {
        expect(timeConversion(60000)).toBe(1);
    })

    test("when time is 180000 miliseconds", () => {
        expect(timeConversion(180000)).toBe(3);
    })

    test("when time is 200000 miliseconds", () => {
        expect(timeConversion(200000)).toBe(3+":"+20);
    })

    // test("add 2 numbers as strings, and the output to be an integer", () => {
    //     expect(sum('5.5','4.5')).toBe(10);
    // })

    // test("invoke sum function with no arguments", () => {
    //     expect(sum()).toBe("Sum function should be invoked with atleast 2 arguments");
    // })

    // test("invoke sum function with one arguments", () => {
    //     expect(sum(3)).toBe("Sum function needs one more argument");
    // })

    // test("add three number", () => {
    //     expect(sum(1,2,3)).toBe(6);
    // })
})