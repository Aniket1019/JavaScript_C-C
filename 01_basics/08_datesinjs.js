//Date is an inbuilt object in javascript that is used to work with dates and times

let mydate = new Date();
console.log(mydate); //2025-02-02T13:30:17.503Z  //this has zero readability

// console.log(mydate.toString()); //Sun Feb 02 2025 19:00:17 GMT+0530 (India Standard Time)  //better readability than the above
// console.log(mydate.toISOString()); //2025-02-02T13:30:17.503Z
// console.log(mydate.toJSON()); //2025-02-02T13:30:17.503Z 
// console.log(mydate.toLocaleDateString()); // 2/2/2025
// console.log(mydate.toLocaleString()); // 2/2/2025, 7:02:04 pm
// console.log(mydate.toLocaleTimeString()); //7:02:04 pm
// console.log(mydate.toTimeString()); //19:02:04 GMT+0530 (India Standard Time)
// console.log(mydate.toUTCString()); //Sun, 02 Feb 2025 13:32:04 GMT


// let myCreatedDate = new Date(2025, 0, 23)
// console.log(myCreatedDate.toDateString());  // Thu Jan 23 2025

// let myCreatedDate2 = new Date(2025, 0, 23, 5, 3)
// console.log(myCreatedDate2.toLocaleString()); // 23/1/2025, 12:00:00 am

// let myCreatedDate3 = new Date("2023-01-14")
// console.log(myCreatedDate3.toLocaleString()); // 14/1/2023, 5:30:00 am

let myCreatedDate4 = new Date("01-14-2023")
console.log(myCreatedDate4.toLocaleString()); // 14/1/2023, 12:00:00 am

let myTimestamp = Date.now()
console.log(myTimestamp); //1738509963828 this is the number of milliseconds that have passed since 1st January 1970
console.log(myCreatedDate4.getTime()); //1673634600000 this is the number of milliseconds that have passed since 1st January of date 01-14-2023


//Common interview question to convert the Date.now() to seconds is as follows
    console.log(Math.floor(Date.now()/1000)); //here Date.now() gives the number of milliseconds that have passed since 1st January 1970 and we divide it by 1000 to convert it to seconds and then we use the math.floor to round it off to the nearest integer    

    let newDate = new Date()
    console.log(newDate);
    console.log(newDate.getMonth());
    console.log(newDate.getDay());
    
    // `${newDate.getDay()} and the time `
    
    newDate.toLocaleString('default', {
        weekday: "long",
    })
// this helps in getting the day of the week in the long format as in custom format








