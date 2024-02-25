//for of 

["", "", ""] // array

[{}, {}, {}] // object

const arr = [1, 2, 3, 4, 5]

//for of
for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States of America")
map.set('FR', "France")
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':- ', value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'COC',
    'game3' : 'BGMI',

}
for (const [key, value] of myObject) {
    console.log(key, ':- ', value);
}
// Object can not be iterable like this