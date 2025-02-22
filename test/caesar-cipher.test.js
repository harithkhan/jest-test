import { caesarCipher } from "../logic/caesar-cipher";

test("Caesar Cipher: Cipher lowercase strings", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
    expect(caesarCipher("def", 3)).toBe("ghi");
})