const coding = ["js", "python", "ruby", "java", "cpp"];

// coding.forEach(function (item) {
//   console.log(item);
// });


// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "java",
        languageFileName : "java"
    }
    
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})