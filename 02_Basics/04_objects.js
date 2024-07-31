// Singleton object define


//const tinderUser = {}

const tinderUser = new Object()

tinderUser.id = "123abcd2"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Arijit",
            lastname: "roy"
        }
    }
}
//console.log(regularUser.fullname?.userfullname.firstname);

const target = {a: 1, b: 3};
const source = { d: 4, c: 5};

//const returnedTarget = Object.assign(target, source)

//console.log(target);
/*Expected output : Object {a: 1, b:4, c: 5}*/

//console.log(returnedTarget === target);
/*Expected output: true*/

const returnedTarget = {...target, ...source}
// console.log(returnedTarget);

const users = [
    {
        id:1,
        email: "harshita@gmail.com"
    },
    {
        id: 2,
        email: "Yash@yahoo.com"
    },
    {
        id: 3,
        email: "vaishakhi@google.com"
    }
]

console.log(users[0].email)

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



