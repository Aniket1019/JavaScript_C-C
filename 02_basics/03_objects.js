//singleton 
// Object.create

//onject literals //inteview question define a symbol and then use it as a key in an object
const mySym = Symbol("key12")

const jsUser = {
    name: "aneeket",
    "fullName": "Aneeket Prasad",
    [mySym]: "mykey1", //for using a symbol as a key this is the correct way
    age: 20,
    location : "Pune",
    email: "aneeket@gmail.com",
    isLoggedIn : ["Monday", "Tuesday"]
}

// console.log(jsUser.email);
// console.log(typeof jsUser["email"]);
// console.log(jsUser["fullName"])
// console.log(jsUser[mySym]);
// console.log(jsUser);

jsUser.email = "ybl@gpt.com" //to cahnge the value of any key 

 
// console.log(jsUser);
// Object.freeze(jsUser)
jsUser.email = "ybl@162399.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());