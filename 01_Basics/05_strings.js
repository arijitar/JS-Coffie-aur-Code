const name = "Arijit"
const repoCount = 50

// console.log(name + repoCount + " Value");

/* instead of printing like this 
   print using backticks(``) what is the significance
   : ** string inter-polation
        you make placeholders ${Variable}
*/
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Air-fc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('c'))
console.log(gameName.substring(0, 4))

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-7, 6)
console.log(anotherString);

const newStringOne = "    Arijit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Arijit.com/arijit roy"

console.log(url.replace('%20', '-'))
console.log(url.includes('arijit'));

const myName = 'arijit-hc-ry'
console.log(myName.split(`-`));
