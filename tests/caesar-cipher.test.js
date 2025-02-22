import { caesarCipher } from "../logic/caesar-cipher";

test("Caesar Cipher: Cipher lowercase strings", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
    expect(caesarCipher("def", 3)).toBe("ghi");
});

test("Caesar Cipher: Cipher uppercase strings", () => {
    expect(caesarCipher("Abc", 3)).toBe("Def");
    expect(caesarCipher("OMG", 4)).toBe("SQK");
    expect(caesarCipher("hIiIi", 2)).toBe("jKkKk");
});

test("Caesar Cipher: Keep punctuations in cipher", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
    expect(caesarCipher("What? Why?", 1)).toBe("Xibu? Xiz?");
    expect(caesarCipher("not Again Man!", 2)).toBe("pqv Cickp Ocp!");
});
