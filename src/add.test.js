const add = require('./add');

test("tests whether an empty string will return 0 or not", () => {
	expect(add("")).toBe(0);
});

test("tests whether a string containing one number will return that number or not", () => {
	expect(add("9")).toBe(9);
});

test("tests whether a string containing two numbers will return their sum or not", () => {
	expect(add("1,3")).toBe(4);
});

test("tests whether a string containing multiple numbers will return their sum or not", () => {
	expect(add("1,3,6")).toBe(10);
});