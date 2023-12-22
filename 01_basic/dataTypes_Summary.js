// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is Dynamic Programming Language

// const score = 100
// const scoreValue = 100.3

// const isLoggedIN = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id == anotherId);

const bigNumber = 3493023422322323n

// Reference Type/ Non primitive

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"]

// let myObj = {
//     name : "Soumya",
//     age : "23",
// }

// const myFunction = function(){
//         console.log("hello world!");
// }
// console.log(typeof bigNumber);

// +++++++++++++++++++++++++++++++++++++++++++

// Stack(Primiitive), Heap(Non-Primitive)


let myYoutubeName = "soamtripathy.com"

let anotherName = myYoutubeName

anotherName = "chaiaurcode"

console.log(anotherName);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "example@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)