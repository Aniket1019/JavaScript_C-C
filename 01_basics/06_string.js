const name = "Aneekt"
const repoCount = 50

// console.log(name + repoCount + " Value"); // not that readable

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // modern and better way to write....and can be used to implement methods and functions

const gameName = new String('hitesh-hc-com')  // another way to create string (- is also a value of string) // helps us in accessing key value pairs and methods of string
// console.log(gameName[0]); denotes the first character of the string using index
// console.log(gameName.__proto__);


// console.log(gameName.length); //method to get the length of the string
// console.log(gameName.toUpperCase()); //methods to convert the string to uppercase //also this method does not change the original string refer 05_stackHeap.js
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) //substring(startIndex, endIndex) //endIndex is not included
console.log(newString);

const anotherString = gameName.slice(-8, 4) //slice(startIndex, endIndex) //endIndex is not included //negative index is also allowed
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //removes the extra spaces from the string

const url = "https://hitesh.com/hitesh%20choudhary" // %20 is the encoded value of space (URL encoding)

console.log(url.replace('%20', '-')) //replaces the %20 with -

console.log(url.includes('sundar')) //checks if the string contains the value (sundar) or not

console.log(gameName.split('-')); // split(separator, limit) //splits the string based on the separator and returns an array // here the separator is -