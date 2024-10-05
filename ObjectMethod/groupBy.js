/**
 * ***Object.groupBy(object, callback)
 * -> Groups the elements according to a function.
 */
//// custom implementation
//--------------------------
// Object.groupBy = function (object, callback) {
//   return Object.keys(object).reduce((accumulator, key) => {
//     const value = object[key];
//     const groupKey = callback(value, key);

//     if (!accumulator[groupKey]) {
//       accumulator[groupKey] = [];
//     }

//     accumulator[groupKey].push(value);
//     return accumulator;
//   }, {});
// };
//-------------------------------
const items = {
  item1: { type: "fruit", name: "apple" },
  item2: { type: "fruit", name: "banana" },
  item3: { type: "vegetable", name: "carrot" },
  item4: { type: "fruit", name: "orange" },
  item5: { type: "vegetable", name: "spinach" },
};

const grouped = Object.groupBy(items, (value) => value.type);

console.log(grouped);
/* Output:
  {
    fruit: [
      { type: 'fruit', name: 'apple' },
      { type: 'fruit', name: 'banana' },
      { type: 'fruit', name: 'orange' }
    ],
    vegetable: [
      { type: 'vegetable', name: 'carrot' },
      { type: 'vegetable', name: 'spinach' }
    ]
  }
  */
