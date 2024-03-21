// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword() {
//         return `${this.password}abc`;
//     }
//     changeUserName() {
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const chai = new User("Tea", "chai@gmail.com", "123");
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

// behind the scene

function Username(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

Username.prototype.encryptPassword = function () {
    return `${this.password}abc`;
};

Username.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}`
}

const tea = new Username("Tea", "chai@gmail.com", "123");

console.log(tea.encryptPassword());

console.log(tea.changeUserName());