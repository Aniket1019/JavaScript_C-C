// const tinderUser = new Object()        //singleton object
const tinderUser = {} // non singleton oject
//both of them crete  a

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
} // nested objects 


// console.log(regularUser.fullname.userfullname.firstname); //further accessing different nests of objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6:"b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign(obj1, obj2)  // in object Object.assign() - we need to pass a target(obj1) and a source(obj2)
// const obj5 = Object.assign({}, obj1, obj2, obj4)  // here {} is the target and all the otehr objects are the source 
// console.log(obj5); // this means that there is direct modification in the objects as in obj5 = obj1 + obj2 + obj3

const obj3 = {...obj1, ...obj2} // this works same as spread that we used in arrays - industry standard
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
] // an array with multiple objects

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //looks for all the keys in the object tinderuser and returns a output as array 
console.log(Object.values(tinderUser)); //looks for all the values in the object tinderuser and returns the output as array
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]       every key:value is converted in an array and outputed in an array seperated by commas

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // checks if the following property in present in the object or not


// ***********************************************************Object De-Structuring****************************************************


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course ///this is how we destructure the key inside an object as per our requirements

// console.log(courseInstructor);
console.log(instructor);


//api jason structure-  usually the keys and values are both strings (number values can come directly)
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]