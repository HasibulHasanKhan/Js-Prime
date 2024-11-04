/***
 * The test() method tests for a match in a string.
 * RegExpObject.test(string)
 * test(func, input, expected)
 */

// function check(str) {
//   const regex = /^[A-Za-z\s]+$/;
//   return regex.test(str);
// }

// console.log(check("Hello World")); // true
// console.log(check("123")); // false
// console.log(check("Hello_World")); // false
function isAlphabeticWithSpaces(str) {
  // Regular expression to match only alphabetic characters and spaces
  const regex = /^[A-Za-z\s]+$/;
  return regex.test(str);
}

// A custom test function
function test(func, input, expected) {
  const result = func(input);
  const passed = result === expected;
  console.log(
    `Input: "${input}" | Expected: ${expected} | Result: ${result} | ${
      passed ? "Test Passed" : "Test Failed"
    }`
  );
}

// Running tests
test(isAlphabeticWithSpaces, "Hello World", true);
test(isAlphabeticWithSpaces, "Hello123", false);
test(isAlphabeticWithSpaces, "Hello_World", false);
test(isAlphabeticWithSpaces, "Test String", true);
test(isAlphabeticWithSpaces, "OnlyAlphabet", true);
test(isAlphabeticWithSpaces, "", false); // Edge case: empty string
test(isAlphabeticWithSpaces, "   ", true); // Only spaces
