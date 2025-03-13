const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}



//for in loop in objects
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}


//for in loop in arrays uses indexs as keys ...it was one of the reason of the creation of object because....as an array is invoked as an object then its keys will be its indices  
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); //for only printing the keys
    // console.log(programming[key]); //for only printing the values
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map){
//     console.log(key);  // you will not get any output as map is not iteratable 
    
// }
