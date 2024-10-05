/**
 * *** Object.fromEntries(arary);
 * -> Object.fromEntries() is the inverse of Object.entries().
 *  If takes an array of key-value pairs and converts it back to an object.
 * ** Essentially, it transforms a structure like [['key1', 'value1'], ['key2', 'value2']] into an object like { key1: 'value1', key2: 'value2' }.
 * -------------------------------
 * Use Cases:
Reversing Object.entries(): After transforming an object into an array for processing, you can convert it back to an object using Object.fromEntries().

Converting Maps to Objects: When you have a Map (a key-value store similar to an object but iterable), you can convert it into a plain object.

Building objects from key-value arrays: When your data is in the form of arrays or other iterable structures, and you need to convert it into a regular JavaScript object.
 */
///Basic usage
//...................
// const entries = [
//   ["name", "hasib"],
//   ["age", 20],
//   ["occupation", "Engineer"],
// ];

// const obj = Object.fromEntries(entries);
// console.log(obj);
//------------------------------------------
/// using with Object.entries()

// const product = {
//   id: 101,
//   name: "Laptop",
//   price: 1500,
//   category: "Electronics",
// };

// const modifiedEntries = Object.entries(product).map(([key, value]) => {
//   if (key === "price") {
//     return [key, value * 1.2];
//   }
//   return [key, value];
// });

// const modifiedProduct = Object.fromEntries(modifiedEntries);
// console.log(modifiedProduct);
//------------------------------------------------
//Filteringt object properties

// const user = {
//   id: 1,
//   name: "John",
//   password: "secret",
//   email: "john@example.com",
// };

// const filteredEntries = Object.entries(user).filter(
//   ([key]) => key !== "password"
// );
// const safeUser = Object.fromEntries(filteredEntries);

// console.log(safeUser);
// Object.entries(user).filter([key] => key !== "password")
//----------------------------------------
/// Array to object
//...................
const keyvalue = [
  ["brand", "nike"],
  ["color", "red"],
];
const shoe = Object.fromEntries(keyvalue);
console.log(shoe);
