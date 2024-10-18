class PasswordManager {
  #password;

  constructor(password) {
    this.#password = this.#hashPassword(password);
  }

  #hashPassword(password) {
    return password.split("").reverse().join("");
  }
  setPassword(newPassword) {
    this.#password = this.#hashPassword(newPassword);
    console.log("Passwork has been set");
  }
  validationPassword(password) {
    const hashPassword = this.#hashPassword(password);
    return this.#password === hashPassword;
  }

  updatePassword(currentPassword, newPassword) {
    if (this.validationPassword(currentPassword)) {
      this.setPassword(newPassword);
      console.log("Password has been updated");
    } else {
      console.log("Current password is incorrect");
    }
  }
}

const PasswordManagers = new PasswordManager("hasibs");
console.log(PasswordManagers.validationPassword("hasib"));
