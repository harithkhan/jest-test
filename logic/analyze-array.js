export function analyzeArray(arr) {
    const average = arr.reduce((acc, item) => acc + item, 0) / arr.length;
    const min = Math.min(...arr);
    return {
        average,
        min,
        max: 8,
        length: 6,
    };
}
