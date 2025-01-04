const person = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    // let x = document.getElementById("demo");
    // x.innerHTML = this.firstName + " " + this.lastName;
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

let display = person.display.bind(person); // `bind` returns a new function with `this` set to `person`.
setTimeout(display, 3000); // Calls the bound function after 3 seconds.
