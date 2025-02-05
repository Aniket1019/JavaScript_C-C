// let score = 33  //output: number
//let score = "33"   //output: string
//let score = "33abc"  //even if the string is converted to number the out will be NaN
//let score = null  //output: 0
//let score = "Aneeket"  //output: NaN
//let score = ture  //output: 1  // and false will be 0
let score = undefined  //output: NaN

// console.log(typeof score);

let valueInNumber = Number(score); 
// console.log(typeof valueInNumber); 
// console.log(valueInNumber); 


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); //true

// 1=>true , 0=>false
// ""=>false 
//  "abc"=>true

//similarly for string boolean conversion is turned to true
//and for empty string it is turned to false

// **************************************************Operation**************************************************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2**3) //2^3 //will give exponentiation vale 
// console.log(2/3) //will give the quotient
// console.log(2%3) //will give the remainder

// console.log("1" + 2); //12 
// console.log(1 + "2"); //12 

// let a = ("1" + 2 + 2);
// console.log(a) //122 reason: "1" + 2 is evaluated first to give "12", then "12" is concatenated with 2 (converted to "2"), resulting in the string "122".
// console.log(typeof a) //string
// let b = (1 + 2 + "2");
// console.log(b); //32 reason: 1 + 2 is evaluated first to give 3, then 3 is concatenated with "2" (after being converted to "3"), resulting in the string "32".
// console.log(typeof b); //string



//Example of increment and decrement operator
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

