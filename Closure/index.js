/**
 * Lexical Scope :
 *
 */

function outerFunction() {
  let outerVariable = "I am from outer scope";

  function innerFunction() {
    console.log(outerVariable); // Accessing outerVariable from the outer scope
  }

  innerFunction(); // Output: I am from outer scope
}

outerFunction();
