const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})


//Chaining
const newNums = myNumbers
                .map((num) => num * 10 )
                .map( (num) => num + 1)  //here the value of num will not be the origial array but instead the value passed by previoius method used on it .....so in this case 10
                .filter( (num) => num >= 40)

console.log(newNums);