// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();
// Due to global scope pollution, remove that pollution like function, varibake, etc. we use iife
// first parenthesis () is where we write function
// and second parenthesis () for execution

( (name) => {
    console.log(`DB CONNECTED ${name}`);
}) ("Soam");