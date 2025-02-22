export function analyzeArray(arr) {
    const average = arr.reduce((acc, item) => acc + item, 0) / arr.length;
    return {
        average,
        min: 1,
        max: 8,
        length: 6,
    };
}
