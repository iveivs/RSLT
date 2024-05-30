const groceries = {
    "73Wakv": {
        name: "Orange Juice",
        price: 100,
        discount: 10
    },
    "5L3db9": {
        name: "Chocolate",
        price: 50,
        discount: 0
    },
    "6L3aa9": {
        name: "Milk",
        price: 60,
        discount: 0
    }
    // more items...
};

function getTotalPriceOfShoppingBag(shoppingBagArray) {    
    for(let item in groceries){
        for(let elem of shoppingBag){
            if(item === elem.productId){
                // currentPurchases.push(groceries[item])
                let price
                if(groceries[item].discount > 0) {
                    finalPrice = groceries[item].price * ((100 - groceries[item].discount) /100)
                } else {
                    finalPrice = groceries[item].price
                }
            }
        }
    }
}

const shoppingBag = [
    { productId: "73Wakv", count: 3 },
    { productId: "5L3db9", count: 23 }
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice); 