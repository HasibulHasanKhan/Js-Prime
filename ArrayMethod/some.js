/**
 * Purpose: Tests whether at least one element in the array passes the test implemented by the provided function. It returns a bolean value.(true/false).
 *
 */

const numbers = [3, 3, 3, 11, 5];

const evenNum = numbers.some((item) => {
  return item % 2 === 0;
});
console.log(evenNum);
