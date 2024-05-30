// Вам необходимо создать функцию getTotalPriceOfShoppingBag(), которая будет принимать в себя 1 параметр
//  shoppingBagArray - массив продуктов в корзине, состоящий из объектов, в каждом из которых хранится ID
//   продукта (productId) и количество продукта в корзине (count).

// Функция getTotalPriceOfShoppingBag() должна возвращать общую стоимость всех товаров в корзине 
// с учетом скидок (discount, указаны в процентах) и с учетом указанных клиентом количеством продуктов. 
// Итоговое значение должно быть округлено до сотых. Это можно сделать с помощью метода toFixed().

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

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// К вам пришёл заказчик, который является владельцем одной из игровых веб-платформ. Он хочет, чтобы вы 
// разработали для его сайта новую игру, которая покорит сердца многих пользователей. В игре есть 2 игрока:
//  герой и враг. Они будут драться друг с другом. У каждого игрока есть шкала здоровья, которая изначально равна 100.
//   При каждом ударе у противоположного игрока отнимается по 10 единиц здоровья. Побеждает тот, у кого здоровья осталось больше 0.

// Сейчас вам необходимо создать функцию startGame(), которая будет принимать в себя 2 параметра:

// heroPlayer - объект игрока, который содержит свойства name - имя героя; health - шкала здоровья, 
// которая изначально равна 100; heatEnemy() - функция, которая принимает в себя объект enemy и отнимает
//  у объекта enemy 10 единиц здоровья (ключ health).
// enemyPlayer - объект врага, который содержит свойства name - имя героя; health - шкала здоровья, которая 
// изначально равна 100; heatHero() - функция, которая принимает в себя объект hero и отнимает у объекта hero 10 единиц здоровья (ключ health).
// Внутри функции startGame() вам необходимо случайным образом генерировать число от 0 до 1.

// Если выпадает 0, то нужно вызвать метод heatEnemy() у объекта heroPlayer, если 1 - то heatHero() у enemyPlayer.

// Для того, чтобы функция генерировала несколько раз случайные значения, и игроки дрались, пока у кого-то не 
// закончатся жизни, рекомендуется использовать цикл while, который будет выполнятся, пока у любого игрока свойство 
// health не станет меньше либо равно нулю.

// После выполнения цикла необходимо определить, какой игрок выиграл, и вывести сообщение через, где name и health
//  - значения свойств победившего игрока:

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

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Представьте, что в полицейском участке проводится расследование. Было совершено несколько преступлений. 
// У полицейских есть другие более приоритетные задания, поэтому они попросили вас написать программу, которая
//  будет вычислять преступника по уже известным данным.

// Ваша задача состоит в том, чтобы создать функцию getKiller(). Она принимает в себя 2 параметра:

// suspectInfo - объект, в котором ключи - это подозреваемые в преступлении люди, а значения - массивы людей, 
// которых видели подозреваемые в день убийства.
// deadPeople - массив с именами людей, которых убил преступник.
// Преступником является тот, кто видел всех убитых людей в день убийства. Функция getKiller() должна возвращать имя преступника.

function getKiller(suspectInfo, deadPeople) {
    let killerName = "";
    Object.entries(suspectInfo).forEach(([suspectPerson, peopleWereSeen]) => {
        const isKiller = deadPeople.every((deadName) =>
            peopleWereSeen.includes(deadName)
        );
        if (isKiller) {
            killerName = suspectPerson;
        }
    });

    return killerName;
}

console.log(
    getKiller(
        {
            James: ["Jacob", "Bill", "Lucas"],
            Johnny: ["David", "Kyle", "Lucas"],
            Peter: ["Lucy", "Kyle"]
        },
        ["Lucas", "Bill"]
    )
); // Убийца James

console.log(
    getKiller(
        {
            Brad: [],
            Megan: ["Ben", "Kevin"],
            Finn: []
        },
        ["Ben"]
    )
); // Убийца Megan

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

Вы когда-нибудь играли в лотерею? Лотерея - это игра, в которой случайным образом определяют победителя 
и дают ему выигрыш. Сейчас ваша задача будет разработать логику для такой игры.

Вам необходимо создать функцию getWinner(), которая принимает в себя 2 параметра:

applicants - объект, в котором ключи - это номерки людей, по которым будет производится случайный отбор, 
а значения - это объекты кандидатов на выигрыш в лотерее.
winnerObject - объект, в котором хранится всего 1 ключ prize, хранящий значения размера выигрыша в лотерее.
Вам необходимо случайным образом выбрать победный номерок (случайный ключ в объекте applicants) и вернуть из функции getWinner() объект, в котором будут хранится свойства из winnerObject и объект победителя.

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =