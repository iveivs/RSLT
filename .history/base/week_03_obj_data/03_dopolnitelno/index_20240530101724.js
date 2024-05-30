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
        obj.health = obj.health - 10
    }
};

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame(heroPlayer, enemyPlayer) {

    while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
        let resultOfRandom = getRandomNumberInRange(0, 1)
        if (resultOfRandom === 0) {
            heroPlayer.heatEnemy(enemyPlayer)
        } else {
            enemyPlayer.heatHero(heroPlayer)
        }
    }
    let winner = heroPlayer.health ? heroPlayer : enemyPlayer || enemyPlayer.health ? enemyPlayer : heroPlayer

    console.log(`Выиграл ${winner.name}, его health = ${winner.health}`);
    return winner
}

console.log(startGame(hero, enemy));

// Задание #3

function getKiller(suspectInfo, deadPeople) {
    let arrFromObj = Object.entries(suspectInfo)
    for (let potentialMurder of arrFromObj) {
        let flag = 0
        for (let listOfPeople of potentialMurder[1]) {
            for (let deadMan of deadPeople) {
                if (deadMan === listOfPeople) {
                    flag++
                }
            }
        }
        if (flag === deadPeople.length) {
            return `Murder is ${potentialMurder[0]}`
        }
    }
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
// - - - - - - - - - - - - - - - -

// Задание #4

const todaysWinner = {
    prize: '10 000$',
}

const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25,
    },
    '201': {
        name: 'Светлана',
        age: 20,
    },
    '304': {
        name: 'Екатерина',
        age: 35,
    },
}

function getWinner(applicants, winnerObject) {
    const arreyKeysOfApplicants = Object.keys(applicants)
    const numberForWinner = getRandomNumberInRange(1, arreyKeysOfApplicants.length + 1)
    const winnerKey = arreyKeysOfApplicants[numberForWinner - 1]
    const winner = applicants[winnerKey]
    const result = {
        ...winnerObject,
        ...applicants[winnerKey]
    }
    return result
}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log('resultWinner', resultWinner); 
// - - - - - - - - - - - - - - - - -

// Задание #5

function getAdultUsers(data) {
    if (Array.isArray(data)) {
        let resultArr = data.filter(elem => elem.age >= 18)
        return resultArr
    } else {
        let resultObj = {}
        for(let key in data){
            if(data[key].age >= 18) {
                resultObj[key] = data[key]
            }
        }
        return resultObj
    }
}

const usersArray = [
    { id: '34rdca3eeb7f6fgeed471198', name: 'Andrew', age: 25 },
    { id: '76rdca3eeb7f6fgeed471100', name: 'Alexey', age: 15 },
    { id: '12rdca3eeb7f6fgeed4711012', name: 'Egor', age: 13 },
    { id: '32rdca3eeb7f6fgeed471101', name: 'Kate', age: 31 },
    { id: '98rdca3eeb7f6fgeed471102', name: 'Elena', age: 18 }
];

const usersObject = {
    '34rdca3eeb7f6fgeed471198': {
        id: '34rdca3eeb7f6fgeed471198',
        name: 'Andrew',
        age: 25
    },
    '76rdca3eeb7f6fgeed471100': {
        id: '76rdca3eeb7f6fgeed471100',
        name: 'Alexey',
        age: 15
    },
    '12rdca3eeb7f6fgeed4711012': {
        id: '12rdca3eeb7f6fgeed4711012',
        name: 'Egor',
        age: 13
    },
    '32rdca3eeb7f6fgeed471101': {
        id: '32rdca3eeb7f6fgeed471101',
        name: 'Kate',
        age: 31
    },
    '98rdca3eeb7f6fgeed471102': {
        id: '98rdca3eeb7f6fgeed471102',
        name: 'Elena',
        age: 18
    }
};

console.log(getAdultUsers(usersArray));
console.log(getAdultUsers(usersObject));

// Задание 2.1

function allowVisa(o)