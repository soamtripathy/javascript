const user = {
    username : "soam",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);

        console.log(this);
    }

    //this refer to current context
}

// user.welcomeMessage()

// user.username = "dog"

// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "soam"
//     console.log(this);
// }

// chai()

const chai = () => {
    let username = "soam"
    console.log(this);
}

// chai()
// Explicit return
// const addTwo = (num1 , num2) => {
//     return num1 + num2
// } 
// console.log(addTwo(3, 4));


//implicit return

// const addTwo = (num1 , num2) => num1 + num2

// const addTwo = (num1 , num2) => (num1 + num2)

const addTwo = (num1 , num2) => ({username: "SOAM"})

console.log(addTwo(3, 4));

 