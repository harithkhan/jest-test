export function analyzeArray(arr) {
    const average = arr.reduce((acc, item) => acc + item, 0) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const { length } = arr;
    return {
        average,
        min,
        max,
        length,
    };
}
