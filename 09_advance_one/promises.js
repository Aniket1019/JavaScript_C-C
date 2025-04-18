const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Brute", email: "Kint@example.com"})  //data recieved with api will be iin the form of an object
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username:"aneeket", password:"1234"})
        } else {
            reject('ERROR: Something went wrong!')
        }
       
    }, 1000);
})


promiseFour.then((user) => {
    console.log(user);
    return user.username //even if you store this promise inside a variable it still wont return anything unless we chain it with another then
}).then((username) => {
    console.log(username); 
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("the promise is either resolved or rejected ")) //will take the data using .then() and catch the error value using .catch()

const promiseFive =new Promise(function(resolve, reject){
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({username:"aneeket", password:"1234"})
        } else {
            reject('ERROR: Something went wrong!')
        }

    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//         try {
//             const response = await fetch('https://jsonplaceholder.typicode.com/users')
//             const data = await response.json()  //the conversion of response from string to json takes time hence if used without await it will not show any output......as this process of conversion takes time
//             console.log(data);
//         } catch (error) {
//             console.log("E: ", error);
//         }
//     }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))


