const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval;
// }, 0)

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "Pthon",
        price: 1999
    },
    {
        itemName: "App Dev",
        price: 999
    },
    {
        itemName: "Data science",
        price: 22999
    }
]

const priceToPay = shoppingCart.reduce ( (acc, item) => acc + item.price, 0)

console.log(priceToPay);
