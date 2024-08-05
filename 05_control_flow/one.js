// if statement
const isUserLoggedIn = true

// if(isUserLoggedIn){
//     console.log("executed");
    
// }
  
// if( 2 === "2"){
//     console.log("true");
// }

// <,>, <=, >=, ==, ===

const score = 200

// if(score >100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

const balance = 1000

// if(balance > 500) console.log("test");
// console.log("test2");

// if(balance < 500){
//     console.log("less than");   
// }else if (balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard){  // && logical operator
    console.log("allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}