//Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

//let myCreateDate = new Date(2024, 7 ,29)
// let myCreateDate = new Date(2024, 7 ,29, 16, 58)
// let myCreateDate = new Date("2024-07-29")
let myCreateDate = new Date("07-29-2024")
// console.log(myCreateDate.toLocaleString());

let myTimeStams = Date.now()

// console.log(myTimeStams);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long" 
})