// Before prompises, in ES5 javascript was using Q and Bluebird.\

const promiseOne = new Promise(function (resolve, reject) {
  // Do a async task
  // DB Calls, cryptography, network
  setTimeout(function () {
    console.log("Async task in completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
            resolve({username : "Chai", email : "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
        console.log(user);
})