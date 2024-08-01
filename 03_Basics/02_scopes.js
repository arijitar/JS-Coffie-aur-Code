var c =200   /*And whatever is written outside the block scope is called global scope */
let a = 300

if(true){   /* '{}' the curly braces are called scopes. 
                Everything whatever written in the barces is under the scope.In between the if whatever is in scope of the block is called block scope*/   
  let a = 10
 // console.log("INNER: ",a);
  const b = 30
  //var  c = 20
  c = 20
}         

//console.log(a);
// console.log(b);
// console.log(c);

function one(){
  const username = "arijit"

  function two(){
    const website = "youtube"
    //console.log(username);
  }
  //console.log(website);

  two()
}
//one()

if(true){
  const username = "arijit"
  if(username === "arijit"){
    const website ="youtube"
    //console.log(username + website);
  }
  //console.log(website);
}
//console.log(username);

/*     ****************************Interesting**************************************************** */


console.log(addone(5))

function addone(num){
  return num + 1

}


const addTwo = function(num){
  return num + 2
}

console.log(addTwo(5))