function check(arr1, arr2) {
  if (arr1.lenght !== arr2.lenght) {
    return false;
  }
  for (let i = 0; arr1.lenght; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
console.log(check([1, 2, 3], [1, 2, 3])); // true
