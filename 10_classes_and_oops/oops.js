// const user = {
//   username: "Soam",
//   logInCount: 8,
//   signedIn: true,

//   getUserDetails: function () {
//     console.log("Got user details from database");
//     console.log(`Username : ${this.username}`);
//     console.log(this);
//   },
// };

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log();

function user(username, loginCount, isLoggedIn) {
  this.username = username;
  this.logInCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greetings = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
}
// When you user a new keyword, first it will create an empty object called instance.
const userOne = new user("Soam", 12, true);
const userTwo = new user("Soumya", 24, false);
console.log(userOne.constructor);
// console.log(userTwo);
