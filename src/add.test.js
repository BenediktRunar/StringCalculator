const add = require('./add');

test("tests whether an empty string will return 0 or not", () => {
	expect(add("")).toBe(0);
});

test("tests whether a string containing one number will return that number or not", () => {
	expect(add("9")).toBe(9);
});