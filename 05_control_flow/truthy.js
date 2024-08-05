 const userEmail = "cse@2002.ai"

if (userEmail) {
    console.log("got user email");
}else {
    console.log("Dont have user email");
    
}

// false values

/*false, 0, -0, BigInt ,0n, "", null, undefined, NaN*/

// truthy values

/* "0", 'false', " ",[] , {} , function(){} */

// if(userEmail.length === 0){
//     console.log("Array is empty"); 
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing operator (??): null undefined
 /* Reason of using this operator is sometimes we need to call from database or we use firebase or appwrite , we do not get response directly
 we get two values, and there migth have chances to get null response or doesnot get any responses the the whole code structure occures problem.
 specially for these cases */
let val1;
//val1 = 5 ?? 10
// val1 =null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("motre than 80")

