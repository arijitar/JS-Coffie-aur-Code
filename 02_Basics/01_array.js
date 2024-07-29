// arrays

const myArr = [0, 1, 3, 5, 7, 9]

// console.log(myArr[0]);

const myHeros = ["Ironman", "Thor"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))
// myArr.shift()

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

/* Slice, Splice */

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);