//imagine functions as - whatever code you have written that you have closed in a package ....and further we can use this use copies of this package whereever you need 

// function sayMyName(){
//     console.log("A");
//     console.log("N");
//     console.log("E");
//     console.log("E");
//     console.log("K");
//     console.log("E");
//     console.log("T");
// }

// sayMyName()


//when you create the defination of a function it is known as a parameter
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers(3, "4")
//when you call the function and pass some values it is known as an arguement

/*
String + anything: Converts the other operand to a string and performs concatenation.
Number + anything (except NaN/undefined): Performs numeric addition, with type coercion where necessary.
Boolean + anything: Converts boolean values to 1 (for true) or 0 (for false), then applies the corresponding operation.
Object + anything: Objects are typically converted to strings via toString(), often resulting in [object Object]. 
*/


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2 //saved some space by writing like this
}

const result = addTwoNumbers(3, 5)

// console.log("Results :", result)


 //Also here the boolean condition check -  username === undefined can be written as !username
 //To avoid the above mentioned scenario when you dont pass any arguement the value printed is undefined to avoid that we have passed "sam" in as a value for the parameter so that even if we dont enter any value in the arguement  
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh")) //also say you have a value passed in the parameter in our case "sam" after passing another value in the arguemnts in our case "hitesh" the value gets updated when printed


//EX - how to pass multiple values in a function  

function calculateCartPrice(...num1){                  //  ...num1 is known as a rest operator - The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
    return num1;
}

console.log(calculateCartPrice(200, 300, 400));



////********************** Interviiew question **************************


function calculateCartPrice(val1 ,val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200, 300, 400, 2000));
//so here val1 =  200, val2 = 300, and ...num1 = 400,2000

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`); //prices and price is different therefore please check for type safety
}

// handleObject(user)  

//we can directly pass the object as well
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));