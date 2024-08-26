const user = {
   username: "arijit",
   loginCount: 8,
   signedIn: true,

   getUserDetails: function(){
    //  console.log(`Username: ${this.username}`);
    console.log(this);
   }
}


//const date =new Date() // this new keyword is constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this
}

const userOne = new User("arijit", 12, true)
const userTwo = new User("chai aur code", 13, false )
console.log(userOne);
console.log(userTwo);
