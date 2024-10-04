/**
 * Purpose: creates a new array by applying a function to each element of the original array.
 * use-case: When we want to transform the elements of an array into a new array.
 */
const numbers = [3, 5, 4, 5, 3, 22, 55, 22];
const doubled = numbers.map((item) => {
  return item * 2;
});
console.log(doubled);
