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
    const currentPurchases = Object.entries(groceries)
    const newCurrentPurchases = currentPurchases.filter(item => item[0] === )
    console.log(currentPurchases[0]);
}

const shoppingBag = [
    { productId: "73Wakv", count: 3 },
    { productId: "5L3db9", count: 23 }
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice); 