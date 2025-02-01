const accountId = 2547738
let accountEmial = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"; //not preferd but can exist
let accountState;

// accountId = 2  // not allowed

accountEmial = "hhdd@google.com"
accountPassword = "4737303"
accountCity = "BLR"

console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmial, accountPassword, accountCity, accountState]);
