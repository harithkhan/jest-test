export function caesarCipher(string, key) {
    const alphabet = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];
    const stringArray = string.split("");
    const cipheredArray = [];
    for (let i of stringArray) {
        for (let j of alphabet) {
            let currentIndex;
            if (i === j) {
                currentIndex = alphabet.indexOf(j);
                const newIndex = currentIndex + 3;
                cipheredArray.push(alphabet[newIndex]);
            }
        }
    }
    const cipheredString = cipheredArray.join("");
    return cipheredString;
}

caesarCipher("abc", 2);