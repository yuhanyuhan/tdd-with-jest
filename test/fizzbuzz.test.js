const fizzbuzz = require("../src/fizzbuzz");

test("divisable by 3", () => {
  expect(fizzbuzz(3)).toBe('fizz')
});

test("divisable by 5", () => {
  expect(fizzbuzz(5)).toBe('buzz')
});

test("divisable by 15", () => {
  expect(fizzbuzz(15)).toBe('fizzbuzz')
});

// test.skip("3 should return fizz", function() {
//   expect(fizzbuzz(3)).toEqual("fizz");
// });
