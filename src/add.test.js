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
	expect(add("1,3,6,5")).toBe(15);
});

test("tests whether a string that divides numbers by \n will return their sum or not", () => {
	expect(add("1\n2,3")).toBe(6);
});

test("tests whether a string that containing negative numbers will cause an exception to be thrown", () => {
    expect(function(){add("2,-4,3,-5");}).toThrow("Negatives not allowed:-4,-5");    
});

//"Negatives not allowed:-4,-5"