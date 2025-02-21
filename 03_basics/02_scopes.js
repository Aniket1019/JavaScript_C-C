//global scope value is available for you inside a block scope.....but block scope value should not go out or simply not be assessible in global scope


//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

//the global scope in node is different and the global scope in browser is different



//here the child function can access the values in parent function .....this is somewhat known as closure
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

one()



if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  ///this will not get printed because the value it is accessing in inside/limited to the child if scope 
}

// console.log(username);  /// simillarly scenario as above since it is outside the parent if scope


// ******************************************intresting********************************************************


console.log(addone(5)) //here the output is printed as per function code and it throws mo error 

function addone(num){
    return num + 1
}



addTwo(5) //here it throws a error because of the way we declared the declare the function ......this will be understandable once we have an idea about hosting
const addTwo = function(num){
    return num + 2
}
