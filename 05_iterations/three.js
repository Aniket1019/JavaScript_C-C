const arr = [1, 2, 3, 4, 5, 6]

for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello there"

for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);    
}


//Maps 

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map)

for(const key of map ){
    console.log(key);  //prints the entire map as an array and not seperate individual values 
    
}

for(const [key, value] of map ){
    console.log(key, ':-', value);  //after using this syntax .....deconstruction of the array takes place and and you can now seperately hold two values....the repeated values/ key are ignored
    
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
} 
//even if you write the keys 'game1' & 'game2'


// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);     //this will throw an error an it is not iterable
    
// }