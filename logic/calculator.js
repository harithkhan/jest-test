export const calculator = {
    "add": (a, b) => a + b,
    "subtract": (a, b) => a - b,
    "multiply": (a, b) => a * b,
    "divide": (a, b) => {
        if (a === 0 || b === 0) {
            return "Cannot divide by 0";
        };
        return a / b;
    }
}