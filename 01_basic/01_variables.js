const accountId = 12345
let accountEmail = "soumya@gmail.com"
var accountPassword = "12345"
accountCity = "Rampur"
// accountId = 2 //not allowed
accountEmail = "soam@soam.com"
accountPassword = "212121"
accountCity = "Narla"
let accountState;
/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])