class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password}soam`;
  }
  set password(value) {
    this._password = value.toUpperCase();
  }
}

const soam = new User("soam@ai.com", "abc");
console.log(soam.email);
