const score = 400
console.log(score);


const balance = new Number(1000) //similar to the new String() method we used in the string.js file
console.log(balance);

console.log(balance.toString().length); //toString() method is used to convert the number to string
console.log(balance.toFixed(2)); //toFixed() method is used to fix the number of decimal places

const otherNumber = 173.67
console.log(otherNumber.toPrecision(4)) //toPrecision() method is used to fix the number of digits....in the numberin this case 4

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN')); //toLocaleString() method is used to convert  

/*
Number.MAX_VALUE (1.7976931348623157e+308) is the largest number, 
Number.MIN_VALUE (5e-324) is the smallest positive number, 
Number.MAX_SAFE_INTEGER (9007199254740991) is the largest safe integer,
Number.MIN_SAFE_INTEGER (-9007199254740991) is the smallest safe integer; exceeding safe limits may cause precision errors. 
*/


//********************************************Maths************************************************************

// Math is a built-in object that has properties and methods for mathematical constants and functions.....is an object in JS and not a function object

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // gives a random number between 0 and 1
console.log((Math.random()*10) + 1); //shifts the random number between 1 and 10
console.log(Math.floor(Math.random()*10) + 1); //in this case math.floor might floor a number like 0.1 to zero so to avoid that we add 1 to the random number .....now our range is between 1 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //in this case we used the math.random but address our range we used the formula (max - min + 1)...... just like above we added 1 here we add 10 so that our range is between 10 and 20 (max - min + 1)) + min)

