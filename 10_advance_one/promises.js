const promiseOne = new Promise((resolve, reject) =>{
    // Do async task like DB call, cryptography, network
    setTimeout(()=>{
        console.log('Async task is complete');
        resolve()
    },1000)
})
// Consuming Promise
promiseOne.then(()=>{
    console.log("Promise consumed");
})

new Promise((resolve, reject) => {
    setTimeout(()=>{
       console.log("Async task two");
       resolve()
    },1000)
}).then(()=>{
    console.log("Async two resolved");
    
})
// resolve is directly connected inside 'then()'.
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(()=>{
       resolve({ username: "chai", email: "chai@example.com"})
    },1000)
})

promiseThree.then((user)=>{
   console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(()=>{
      let error = false
      if(!error){
        resolve({username:"Arijit", password: "1234"})
      }else{
        reject('ERROR: Something went wrong')
      }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
   console.log(username);
})
.catch((error)=>{
  console.log(error);
})
.finally(()=>{
    console.log('The Promise is either resolved or rejected');
})


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true
        if(!error){
          resolve({username:"Javascript", password: "1234"})
        }else{
          reject('ERROR: Js went wrong')
        }
      },1000)
})

async function consumePromiseFive(){
 try{
    const response =  await promiseFive
    console.log(response);
 }
 catch(error){
    console.log(error);
 }
}
consumePromiseFive()

// async function getAllUsers(){
//   try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   }catch(error){
//      console.log("E: ",error);
     
//   }
// }

// getAllUsers()

fetch(' https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error)
})
