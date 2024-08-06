// for of loops are array specific loops

const arr = [1, 3, 5, 7, 9]

for (const num of arr) {
    //console.log(num);
    
}
const greetings = "Hello World"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United Staes Of America")
map.set('Fr', "France")
//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObj = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }

