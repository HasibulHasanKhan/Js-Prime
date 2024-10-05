/**
 * Object.assing(target, ...source);
 *
 */
/// Basic example////
///...................
///Shallow Copy: values copy source to target.
/// same property value override the targeted value.
// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 5 };
// const result = Object.assign(target, source);
// console.log(source);
// console.log(result);

///shallow copy or clone//
//..............................
// const obj = { a: 2, b: { c: 5 } };
// const clone = Object.assign({}, obj);

// console.log(clone);

// let res = (clone.b.c = 7);
// console.log(obj);

/// marging multiple object//
//..............................
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const obj3 = { c: 2.1 };

// const merged = Object.assign({}, obj1, obj2, obj3);

// console.log(merged);

///Deep Copying Object////
//...........................
// const obj = { a: 1, b: { c: 2 } };

// const deepClone = JSON.parse(JSON.stringify(obj));
// deepClone.b.c = 5;

// console.log(obj.b.c);
