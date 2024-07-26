/*let score = true
let score = undefined
let score = "Arijit"
let score = "34acv"*/
let score = "34"
//console.log(typeof score);
console.log(typeof (score));

score = Number.parseInt(score);
console.log(typeof (score));
console.log(score);
let valueInNumber = Number(score)
 console.log(typeof valueInNumber)
 console.log(valueInNumber);
 
//let isLoggedIn = 1
let isLoggedIn = "1"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
/*
  "33" => 33
  "34acv" => NaN
  true => 1, false =>0
  "" => false
  1 => true
  "1" => true
*/

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);