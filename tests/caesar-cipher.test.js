import { caesarCipher } from "../logic/caesar-cipher";

test("Caesar Cipher: Cipher lowercase strings", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
    expect(caesarCipher("def", 3)).toBe("ghi");
});

test("Caeser Cipher: Cipher uppercase strings", () => {
    expect(caesarCipher("Abc", 3)).toBe("Def");
    expect(caesarCipher("OMG", 4)).toBe("SQK");
    expect(caesarCipher("hIiIi", 2)).toBe("jKkKk");
});
