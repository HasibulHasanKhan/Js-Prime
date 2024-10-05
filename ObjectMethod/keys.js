/**
 *  *** Object.key(object)
 *  -> Return an array of the kays of an object.
 * ---------------------------------
 * Use Cases:
Iteration: You can use Object.keys() to loop through the properties of an object, which is helpful for accessing the corresponding values.

Dynamic property access: When you want to work with or manipulate specific properties dynamically based on their names.

Object introspection: To get a list of all the keys in an object for analysis or debugging purposes.
 * 
 */
// const person = {
//   name: "Alice",
//   age: 25,
//   occupation: "Engineer",
// };

// const keys = Object.keys(person);
// console.log(keys);
//----------------------
//Iterating over keys

// const car = {
//   make: "Tesla",
//   model: "Model S",
//   year: 2021,
// };

// Object.keys(car).forEach((key) => {
//   console.log(`${key}: ${car[key]}`);
// });
// conditional processinmg of keys
//.....................................

// const student = {
//   name: "Hasib",
//   age: 21,
//   GPA: 3.3,
//   major: "Computer Science",
// };

// Object.keys(student).forEach((key) => {
//   if (typeof student[key] === "string") {
//     console.log(`${key}: ${student[key]}`);
//   }
// });
//Filtering Keys
//....................
// const data = {
//   name: "Alice",
//   age: 30,
//   city: "New York",
//   country: "USA",
// };

// // Keep only keys that are not numeric
// const filteredData = Object.keys(data)
//   .filter((key) => isNaN(data[key]))
//   .reduce((obj, key) => {
//     obj[key] = data[key];
//     return obj;
//   }, {});

// console.log(filteredData);
// /* Output:
//   {
//     name: 'Alice',
//     city: 'New York',
//     country: 'USA'
//   }
//   */
//reating a New Object from Existing Keys
//.............................
const original = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
};

const newObject = {};
Object.keys(original).forEach((key) => {
  newObject[key] = original[key]; // Convert values to uppercase
});

console.log(newObject);
