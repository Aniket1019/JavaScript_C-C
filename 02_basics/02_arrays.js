const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); //the dc_heros array will become the 4th elemet of array marvel_heros array as output
// console.log(marvel_heros[3][1]); //wierd way to acceses element - flash

// const allHeros = marvel_heros.concat(dc_heros) //combines two or more array and returns a new value to be stored in an new variable and outputs a new array
// console.log(allHeros); //will combine both the arrays

const all_new_heros = [...marvel_heros, ...dc_heros]  

// console.log(all_new_heros); // will work same as .concat but this is more tangible and modifyiable ...in concat you can perform the operation for two elements only 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // returns a new array with all sub array elements concatenated into it recursively up to a specified depth
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //performs a boolean check .....in this case flase not an array
console.log(Array.from("Hitesh")) //coverts a string into an array - [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting ...since it is an object with a key value pair it give an empty array ......instead we need to specify that you want an array of key or values etc

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


//look more into array.isArray, array.from and array.of examples