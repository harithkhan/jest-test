function isUpperCase(letter) {
    return letter === letter.toUpperCase();
};

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
            if (i === j || i.toLowerCase() === j) {
                currentIndex = alphabet.indexOf(j);
                const newIndex = currentIndex + key;
                const alphabetToPush = isUpperCase(i) ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
                cipheredArray.push(alphabetToPush);
            }
        }
    }
    const cipheredString = cipheredArray.join("");
    return cipheredString;
}
