/**
 * array.reduce(callback(accumulator,currentValue, CurrenTIndex, array), initalValue)
 */
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 10);
console.log(sum);
