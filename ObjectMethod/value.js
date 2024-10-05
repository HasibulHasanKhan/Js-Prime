/**
 * *** Object.values(object)
 * -> Return an array of the property values of an object.
 * ----------------------------------
 * Use Cases:
Data Extraction: When you need to work with just the values of an object, such as when aggregating or transforming data.

Iteration: You can iterate over the values of an object using array methods like forEach, map, etc.

Dynamic Access: It can be useful in scenarios where you want to process or analyze data dynamically without caring about the keys.
 */
// const person = {
//     name: "Alice",
//     age: 25,
//     occupation: "Engineer"
//   };

//   const values = Object.values(person);
//   console.log(values);
//   // Output: [ 'Alice', 25, 'Engineer' ]
/// Iterating Over Values.
//..................................
// const car = {
//   make: "Tesla",
//   model: "Model S",
//   year: 2021,
// };

// Object.values(car).forEach((value) => {
//   console.log(value);
// });
//-----------------------------------------
const scores = {
  math: 85,
  science: 90,
  history: 78,
};

const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
console.log(totalScore);
