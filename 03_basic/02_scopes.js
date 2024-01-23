// var c = 300  

//global scope

let a = 300

// when curly braces comes under function or if else statement , it is called as scope.
if (true){
    //block scope
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER: ", a)
}

console.log(a);
// console.log(b);
// console.log(c);

//scope is differnt in DOM and node coding environment

// DOM --> Document Object Model --> how to manipulate HTML page
