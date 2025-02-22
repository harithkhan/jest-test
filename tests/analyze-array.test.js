import { analyzeArray } from "../logic/analyze-array";

test("Analyze array average", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
});

test("Analyze array min", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
});

test("Analyze array max", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
});

test("Analyze array length", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test("Returned object from analyzeArray", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
