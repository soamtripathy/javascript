// singleton

// object literals
// Object.create

const mySum = Symbol("key1")

const jsUser = {
    name : "Soumya",
    age : 18,
    [mySum] : "mykey1", //to store symbol 
    location : "Rampur",
    email : "example@gmail.com",
    isLoggedIn : false,
    lastLoginsDays : ["Monday", "Sunday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser[mySum]);

// jsUser.email = "soam@gmail.com"

// Object.freeze(jsUser)

// jsUser.email = "soam@chatgpt.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Js User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
