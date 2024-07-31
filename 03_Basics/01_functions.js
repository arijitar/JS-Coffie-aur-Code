function sayMyName () {
   console.log("A");
   console.log("R");
   console.log("I");
   console.log("J");
   console.log("I");
   console.log("T");
}
// sayMyName();

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }
// function addTwoNumbers(num1, num2){
//     let result = (num1 + num2);
//     return result
// }
function addTwoNumbers(num1, num2){
    return num1 + num2;  
}

const result = addTwoNumbers(3, 5)
//console.log(`result value is: ${result}`);


function loginUserMessage(userName = "sam"){
   if(!userName){
       console.log("please enter your username");
       return
   }
   return `${userName} just logged in`
}

// console.log(loginUserMessage("Arijit"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2,...num){  /* Rest Operator (...num). Also (...variable) is called spread operator but use case is differnt for both of them */
      return num
}
//console.log(calculateCartPrice(200, 300, 400, 500));

const user = {
   userName: "arijit",
   prices:199
}

function handleObject(anyobject){
   console.log(`Username is ${anyobject.userName} and price is ${anyobject.prices}`);
}

// handleObject(user)
handleObject({
   userName: "sam",
   price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

