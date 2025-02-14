// array

//Shallow Copy - A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.
//Deep Copy - A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.

const myArr = [0, 1, 2, 3, 4, 5] // [0, 1, 2, 3, 4, 5, True , "aneeket"] this is also fine but not a general practice
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)  // here is 
// console.log(myArr[1]);

// Array methods

// myArr.push(6) // push method 
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9)); //checks if the array has 9 in it and returns a boolean value
// console.log(myArr.indexOf(3)); // checks the value at index 3 and displays it

// const newArr = myArr.join() // adds all the elements of an array into a string

// console.log(myArr); //displays the output with commas seperated 
// console.log(typeof newArr); //but is a string


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //starts with the 1st index but excludes the third index

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //the said range of index values has been removed and the original array is modified 
console.log("C ", myArr); //C  [ 0, 4, 5 ]
console.log(myn2); //[ 1, 2, 3 ]