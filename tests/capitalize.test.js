import { capitalize } from "../logic/capitalize.js";

test("Capitalize strings", () => {
    expect(capitalize("capital")).toBe("Capital");
    expect(capitalize("hungary")).toBe("Hungary");
});
