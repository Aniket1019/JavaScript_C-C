//const coding = ["js", "rb", "py", "java", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values);  //for each does return any value (not via console.log or return)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 5 )  //the same operation happens in for each but it dosent return back values .....but filter does
// console.log(newNums);

//In filter we get a callback function in which every value (num) will be accessed using for each and after that a condition is given .....if satisfied or true the value will be returned

// const newNums = myNums.filter( (num) => {
//     return num > 5                         //if you dont type return here the output will be empty....reason - since we have used a curly bracket (block scope)it is mandatory to use return
// } ) 
// console.log(newNums);


//same example using forEach

// const newNums = [] 

// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })                        
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')
  userBooks= books.filter( (bk) => bk.publish >= 2002 ) 
  userBooks= books.filter( (bk) => {
    return bk.publish >= 1990 && bk.genre === "History"
} ) 
  console.log(userBooks);
  