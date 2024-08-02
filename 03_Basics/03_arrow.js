/*  this keyword is used to access variables present in the current context , and only can be used in object variables  */

const user = {
    username: "arijit",
    price: 999,

    welcomeMessage: function(){
         console.log(`${this.username}, welcome to website`);
         console.log(this);
         
    }
   
    
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "arijit"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "arijit"
//     console.log(this.username);
    
// }

const chai = () => {
    let username = "arijit"
    console.log(this);
    
}
// chai()

/* Arrow function  '() =>{}' */

// const addTwo = (num1, num2) => {
    return num1 + num2
}
/* Implicit in React*/
const addTwo = (num1, num2) => (num1 + num2) 


console.log(addTwo(5+5))
