/*Primitives
 7 Types:
 String
 Number
 boolean
 null
 undefined
 Symbol
 BigInt
*/

/* Reference Type(Non primitive)
Array
Object
Functions
*/
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let UserEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 3435246872982038887n

const heros = ["Ironman","Thor","Loki"]; //Array

const myObj = {
    name:"Arijit",
    age : 22
}

let myFunc = ()=>{
    console.log("Hello World");
    return ("Hi, We are fine!");
}
console.log(typeof bigNumber);

let v = myFunc();
console.log(v);
