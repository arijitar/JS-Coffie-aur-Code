// Immediately Invoked Function Expressions (IIFE)

/* To avoid polutions from global scope varible declaration we use 
IIFE */

(function chai(){
    // Named IIFE
    console.log(`DB CONNECTED`);
} ) ();

/*
//"chai()" normally function call and "()" immediately invoked call just after declare the function */

( (name) => {
    //UnNamed IIFE
   console.log(`DB CONNECTED TWO ${name}`);
   
}) ('arijit')

/* Applied IIFE on arrow function  also */