// class PasswordManager {
//   #password;

//   constructor(password) {
//     this.#password = this.#hashPassword(password);
//   }

//   #hashPassword(password) {
//     return password.split("").reverse().join("");
//   }
//   setPassword(newPassword) {
//     this.#password = this.#hashPassword(newPassword);
//     console.log("Passwork has been set");
//   }
//   validationPassword(password) {
//     const hashPassword = this.#hashPassword(password);
//     return this.#password === hashPassword;
//   }

//   updatePassword(currentPassword, newPassword) {
//     if (this.validationPassword(currentPassword)) {
//       this.setPassword(newPassword);
//       console.log("Password has been updated");
//     } else {
//       console.log("Current password is incorrect");
//     }
//   }
// }

// const PasswordManagers = new PasswordManager("hasibs");
// console.log(PasswordManagers.validationPassword("hasib"));
// class MathUtils {
//   static add(a, b) {
//     return a + b;
//   }
//   static subtract(a, b) {
//     return a - b;
//   }
//   static multiply(a, b) {
//     return a * b;
//   }
//   static divide(a, b) {
//     if (b === 0) {
//       throw new Error("Division by zero is not allowed");
//     }
//     return a / b;
//   }
// }
// console.log(MathUtils.add(10, 5)); // Output: 15
// console.log(MathUtils.subtract(10, 5)); // Output: 5
// console.log(MathUtils.multiply(10, 5)); // Output: 50
// console.log(MathUtils.divide(10, 5));
class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;

    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

// Example usage:
const range = new Range(1, 5);

for (const num of range) {
  console.log(num); // Output: 1, 2, 3, 4, 5
}
