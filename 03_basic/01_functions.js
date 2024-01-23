function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}
// sayMyName is reference and use curly braces to execute

// sayMyName()

// parameter: which used in writing functions like num1 and num2
// arugument : which used for passing value in funtion like 3, 4
// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

// function addTwoNumbers(num1, num2) {
// let result = num1 + num2
// return result
//   return num1 + num2
// }
// const result = addTwoNumbers(3, 4)

// console.log("Result: ",result);

// function loginUserMessage(username = "soam") {
//   if (username === undefined) {
//     // (!username)
//     console.log("Please enter a username");
//     return;
//   }
//   return `${username} just logged in`;
// }
// // console.log(loginUserMessage("Soam"));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){
  // ... is also called as spread or rest operator as use cases follows
  return num1
}
console.log(calculateCartPrice(200, 300, 400));

const user = {
  username : "soam",
  price : 199
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
  username : "sam", 
  price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}
console.log(returnSecondValue(myNewArray));