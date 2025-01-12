/**
 * Lexical Scope :
 *
 */

// function outerFunction() {
//   let outerVariable = "I am from outer scope";

//   function innerFunction() {
//     console.log(outerVariable); // Accessing outerVariable from the outer scope
//   }

//   innerFunction(); // Output: I am from outer scope
// }

// outerFunction();
// =============================================================
/**
 *Closure :
 A closure is a function that 'remember' the variables from its lexical scope even when the function is executed outside that scope.
 */
// function outer() {
//   let count = 0;

//   return function inner() {
//     count++;
//     console.log(`Count is: ${count}`);
//   };
// }

// const counter = outer(); // outer() returns inner(), and counter references that function
// counter(); // Output: Count is: 1
// counter(); // Output: Count is: 2
//---------------------------------------
/**
 * When and why it is used
 */
// Data privacy / Encapsulation :

function createAccount() {
  let balance = 20;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited : $${amount}`);
    },
    getBalance() {
      return balance;
    },
  };
}
const myAccount = createAccount();
myAccount.deposit(100);
console.log(myAccount.getBalance());
console.log(myAccount.balance);
// ------------------------
