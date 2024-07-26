const accountId = 1420012;
let accountEmail = "arijit@gmail.com";
var accountPassword = "145232";;
accountCity = "Berhampore"
let accountState;

// accountId = 2 // Not allowed

accountEmail = "hp@gmail.com";
accountPassword = "213423";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var because of issues 
in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])