// Вам необходимо создать функцию getTotalPriceOfShoppingBag(), которая будет принимать в себя 1 параметр
//  shoppingBagArray - массив продуктов в корзине, состоящий из объектов, в каждом из которых хранится ID
//   продукта (productId) и количество продукта в корзине (count).

// Также у интернет-магазина есть глобальный объект, в котором хранится вся нужная информация о каждой единице продукта:

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
    }
    // more items...
};

function getTotalPriceOfShoppingBag(shoppingBagArray) {
    if (shoppingBagArray.length === 0) {
        return 0;
    }

    const totalPrice = shoppingBagArray.reduce((acc, { productId, count }) => {
        if (!groceries[productId]) return acc;
        const { price, discount } = groceries[productId];
        const priceWithDiscount = price - (price / 100) * discount;
        return acc + priceWithDiscount * count;
    }, 0);

    return Number(totalPrice.toFixed(2));
}

const shoppingBag = [
    { productId: "73Wakv", count: 3 },
    { productId: "5L3db9", count: 23 }
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice); // Возвращает 50.05

// = = = = = = = = = = = = = = = = = = = = = = =

const hero = {
    name: "Batman",
    health: 100,
    heatEnemy: (enemy) => (enemy.health -= 10)
};

const enemy = {
    name: "Joker",
    health: 100,
    heatHero: (hero) => (hero.health -= 10)
};

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame(heroPlayer, enemyPlayer) {
    while (heroPlayer.health > 0 || enemyPlayer.health > 0) {
        const randomHeatIndex = getRandomNumberInRange(0, 1);
        if (randomHeatIndex === 0) {
            heroPlayer.heatEnemy(enemyPlayer);
            if (enemyPlayer.health <= 0) {
                break;
            }
        } else {
            enemyPlayer.heatHero(heroPlayer);
            if (heroPlayer.health <= 0) {
                break;
            }
        }
    }

    if (heroPlayer.health <= 0) {
        alert(
            `${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`
        );
    } else {
        alert(
            `${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`
        );
    }
}

startGame(hero, enemy);

// = = = = = = = = = = = = = = = = = = = = = = =
// = = = = = = = = = = = = = = = = = = = = = = =
// = = = = = = = = = = = = = = = = = = = = = = =
// = = = = = = = = = = = = = = = = = = = = = = =