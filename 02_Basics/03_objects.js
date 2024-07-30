// Singleton Object.create

// Object literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Arijit",
   "fullName": "Arijit Roy",
   [mySym] : "mykey1",
    age : 22,
    location: "Kolkata",
    email: "arijit@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullName"]);
// console.log(JsUser[mySym]);

JsUser.email = "arijit@outlook.com"
//Object.freeze(JsUser) // To lock the Object

JsUser.email = "arijit@micrsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());