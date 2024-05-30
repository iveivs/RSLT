// Задание #1
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
};

function getTotalPriceOfShoppingBag(shoppingBagArray) {
    let sum = 0
    for (let item in groceries) {
        for (let elem of shoppingBag) {
            if (item === elem.productId) {
                let finalPrice
                if (groceries[item].discount > 0) {
                    finalPrice = groceries[item].price * ((100 - groceries[item].discount) / 100)
                } else {
                    finalPrice = groceries[item].price
                }
                finalPrice = finalPrice * elem.count
                sum += finalPrice
            }
        }
    }
    return sum.toFixed(2)
}

const shoppingBag = [
    { productId: "73Wakv", count: 3 },
    { productId: "5L3db9", count: 20 }
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice);

// Задание #2

const hero = {
    name: 'Batman',
    health: 100,
    heatEnemy() = {}
};
const enemy = {
    name: 'Joker',
    health: 100,
};

function startGame(heroPlayer, enemyPlayer) {

}