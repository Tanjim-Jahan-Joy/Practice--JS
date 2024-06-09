// Object creating with the help of constructor 

// Object creating with the help of literals 

const color = Symbol("Green")
const userInfo = {
    [color]: "gray",
    //[color]: "Gray",
    name: "Tanjim Jahan",
    email: "tjahanjoy@gmail.com",
    dept: "ECE",
    id: "2010007",
    courses: ["Physics", "Math", "English"]
}

// console.log(userInfo.name)
// console.log(userInfo["name"])
// console.log(userInfo.courses)
// console.log( userInfo.color)
// console.log(typeof userInfo[color])
// console.log(userInfo[color])

// userInfo.email = "2010007@student.ruet.ac.bd"
// Object.freeze(userInfo)
// userInfo.email = "tjahanjoy@gmail.com"
// console.log(userInfo)

userInfo.greeting1 = function(){
    console.log("From Greeting One")
}
userInfo.greeting2 = function(){
    console.log(`User Name is ${this.name}`)
}

console.log(userInfo.greeting1) // Don't execute the function only pass the reference
userInfo.greeting1()
userInfo.greeting2()

