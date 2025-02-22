import { calculator } from "../logic/calculator"

test("Calculator: add 2 numbers", () => {
    expect(calculator.add(1, 1)).toBe(2);
    expect(calculator.add(2, 10)).toBe(12);
    expect(calculator.add(-3, 10)).toBe(7);
})

test("Calculator: subtract 2 numbers", () => {
    expect(calculator.subtract(2, 1)).toBe(1);
    expect(calculator.subtract(10, 6)).toBe(4);
    expect(calculator.subtract(100, 99)).toBe(1);
})

test("Calculator: multiply 2 numbers", () => {
    expect(calculator.multiply(2, 10)).toBe(20);
    expect(calculator.multiply(1, 0)).toBe(0);
    expect(calculator.multiply(1, 30)).toBe(30);
})

test("Calculator: divide", () => {
    expect(calculator.divide(1, 1)).toBe(1);
    expect(calculator.divide(50, 2)).toBe(25);
    expect(calculator.divide(10, 0)).toBe("Cannot divide by 0");
})