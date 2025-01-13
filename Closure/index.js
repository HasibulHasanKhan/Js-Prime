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

// function createAccount() {
//   let balance = 20;

//   return {
//     deposit(amount) {
//       balance += amount;
//       console.log(`Deposited : $${amount}`);
//     },
//     getBalance() {
//       return balance;
//     },
//   };
// }
// const myAccount = createAccount();
// myAccount.deposit(100);
// console.log(myAccount.getBalance());
// console.log(myAccount.balance);
// -----------------------------------------------------
/* 
 Function Factories :
 Use closure to create specialized versions of functions.
 Closure :
hence the double and triple save the return function after multiflier called . Then user can call this return function by giving desire value of it like double and triple .

*/
// function multiplier(factor) {
//   return function (num) {
//     return num * factor;
//   };
// }
// const double = multiplier(2);
// console.log(double(10));

// const triple = multiplier(3);
// console.log(triple(20));
//=============================================
/*
Event Handlers and Callbacks :
Closure are frequently used with event listeners or asynchronous operations ot "remember" variable.

*/

// function setupButtonClickHandler(buttonId, message) {
//   const button = document.getElementById(buttonId);
//   button.addEventListener("click", function () {
//     alert(message);
//   });
// }

// // Initialize the button handler when the page loads
// window.onload = function () {
//   setupButtonClickHandler("myButton", "Button clicked");
// };
//-------------------------------------------------------------
// Call Stack
function first() {
  console.log("First function");
  second();
}

function second() {
  console.log("Second function");
  third();
}

function third() {
  console.log("Third function");
}

first();
