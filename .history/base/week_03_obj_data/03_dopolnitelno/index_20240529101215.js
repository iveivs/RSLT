const groceries = {
    "73Wakv": {
        name: "Orange Juice",
        price: 1.5,
        discount: 10
    },
    "5L3db9": {
        name: "Chocolate",
        price: 2,
        discount: 0
    },
    "6L3aa9": {
        name: "Milk",
        price: 3,
        discount: 0
    }
    // more items...
};

function getTotalPriceOfShoppingBag(shoppingBagArray) {
    // let currentPurchases = []
    let finalPrice = 0
    for(let item in groceries){
        for(let elem of shoppingBag){
            if(item === elem.productId){
                // currentPurchases.push(groceries[item])
                if(groceries[item].discount > 0) {
                    finalPrice
                }
            }
        }
    }
    // console.log(currentPurchases);
}

const shoppingBag = [
    { productId: "73Wakv", count: 3 },
    { productId: "5L3db9", count: 23 }
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice); 