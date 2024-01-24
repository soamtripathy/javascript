// var c = 300  

//global scope

let a = 300

// when curly braces comes under function or if else statement , it is called as scope.
if (true){
    //block scope
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ", a)
}

// console.log(a);
// console.log(b);
// console.log(c);

//scope is differnt in DOM and node coding environment

// DOM --> Document Object Model --> how to manipulate HTML page


function one(){
    const username = "soam"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}


// one()

if (true) {
    const username = "soam"
    if(username === "soam"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++++ INTERESTRING +++++++++++++++++++++++++
console.log(addOne(5));
function addOne(num){
    return num+1
}


addTwo(5)
// also called as expression
const addTwo = function(num){
    return num + 2
}

// Hoisting --> how function declares and all about function in javascript