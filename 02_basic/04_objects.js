const tinderUser = new Object()

tinderUser.id = "123abc"

tinderUser.name = "Soam"

tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "example@gmail.com",
    fullName : {
        userFullName :{
            firstName: "Soam",
            lastName : "Tripathy"
        }
    }
}

// console.log(regularUser.fullName.userFullName);

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4: "d"}
const obj3 = {5 : "a", 6: "b"}
// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}

console.log(obj4);

const users = [
    {
        id : 1,
        email: "example@gmail.com"
    }
]
users[0].email
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty("isLoggedIn"));