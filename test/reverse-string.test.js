import { reverseString } from "../logic/reverse-string";

test("String Reverse", () => {
    expect(reverseString("apple")).toBe("elppa");
    expect(reverseString("taylor")).toBe("rolyat");
});
