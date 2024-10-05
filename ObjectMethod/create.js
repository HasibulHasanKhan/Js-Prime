/**
 * *** Object.create(object)
 * ** Create an object from an existing object.
 */
const proto = {
  name: "hasib",
  greet() {
    return "Helloo!";
  },
};

const obj = Object.create(proto);
console.log(obj.greet(), obj.name);
