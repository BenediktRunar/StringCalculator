const add = require('./add');

test("tests whether an empty string will return 0 or not", () => {
	expect(add("")).toBe(0);
});