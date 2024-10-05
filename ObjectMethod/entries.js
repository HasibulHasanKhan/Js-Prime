/**
 * *** Object.entries(object)
 * **  Returns an array of the key/value pairs of an object.
 * [[key, value],[key,value]]
 */
// const person = { name: "Alice", age: 25 };
// const entries = Object.entries(person);

// console.log(entries);
//-------------------------------------------
// const person = {
//   name: "Hasib",
//   age: 30,
//   country: "USA",
// };

// for (const [key, value] of Object.entries(person)) {
//   console.log(`${key}: ${value}`);
// }
/**
 * for (const [key, value] of Object.entries(person)){
 *    console.log(`${key}: ${value}`)
 * }
 */
//----------------------------------------------

const product = {
  id: 102,
  name: "PC",
  price: 1200,
  category: "Electronies",
};

const filtered = Object.entries(product).filter(([key, value]) => {
  return typeof value === "number";
});
console.log(filtered);
const convertedObj = Object.fromEntries(filtered);
console.log(convertedObj);
