// for loops

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
    if(element == 5){
        // console.log("5 is best number");
    }
    // console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    // console.log(`Table of value: ${i}`);
     
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = '+ i*j);
        
    }
    
}
let myArr = ["flash", "Superman", "Batman"]
// console.log(myArr.length);

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);
    
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        // break;
        continue
    }
   console.log(`value of i is ${index}`);
}