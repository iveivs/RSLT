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
    heatEnemy(obj) {
        obj.health = obj.health - 10
    }
};
const enemy = {
    name: 'Joker',
    health: 100,
    heatHero(obj) {
        // console.log('heatHero',this);
        obj.health = obj.health - 10
    }
};

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame(heroPlayer, enemyPlayer) {
    
    while(heroPlayer.health > 0 || enemyPlayer.health > 0){
        let resultOfRandom = getRandomNumberInRange(0, 1)
        if(resultOfRandom === 0) {
            heroPlayer.heatEnemy(enemyPlayer)
        } else {
            enemyPlayer.heatHero(heroPlayer)
        }
    }
    console.log('heroPlayer', heroPlayer);
    console.log('enemyPlayer', enemyPlayer);
}

console.log(startGame(hero, enemy));