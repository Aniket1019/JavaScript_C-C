//we use this when you are reffering to current context in this case - to acesses the variable in the user block scope {} we use this......current conetxt = current varibles and values inside the scope

const user = {
    username: "Aneeket",
    price: 999,

    welcomeMsg: function (){
        console.log(`${this.username} , welcome to website`);
        console.log(this); //if you uncomment the three lines below you can see how this works
        
        
    }
}

// user.welcomeMsg() //When you use this.username inside a method, you're referring to the property of the object that called the method.
// user.username = "Aryan" //here the current context/value was changed 
// user.welcomeMsg()

//console.log(this); //here the current context of the object is empty  

// function chai(){
//     let username = "Aneeket"  //output - undefined  because this can be used only inside an object not inside funcions
//     console.log(this);
// }

// chai()


// const chai = function () {
//     let username = "Aneeket"  
//         console.log(this);    //output  =  undefind here as well
// }

const chai = () => {
    let username = "Aneeket"  
        console.log(this);
}

// chai()

//() => {} arrow function syntax

const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo(6, 10));


//implicit return method/format 
// const add2 = (num1, num2) => num1 + num2

//const add2 = (num1, num2) => (num1 + num2) //can also be written like this .....when we use curly brackets we have to use return compulsary, return not neeeded with parenthesis

const add2 = (num1, num2) => ({username: "Aniket"}) //when you want to use an object in an arrow function this is what you do

console.log(add2(6, 10));
 