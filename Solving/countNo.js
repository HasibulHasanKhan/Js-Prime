/**
 * Math.abs() method returns the absolute value of a number.
 * let a = Math.abs(-6.5) // 6.25
 */
function countDigit(num) {
  const strNum = Math.abs(num).toString();
  return strNum.length;
}

const value = countDigit(-345515);
console.log(value);
