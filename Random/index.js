const person = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    // let x = document.getElementById("demo");
    // x.innerHTML = this.firstName + " " + this.lastName;
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

let display = person.display.bind(person);
setTimeout(display, 3000);
// display()
