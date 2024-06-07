// К вам пришел один владелец небольшого стартапа. Он предлагает сделать игру, которая поразит игровую индустрию.
//  Вы, конечно же, соглашаешься, так как предложение звучит заманчиво.

// Суть игры состоит в том, что есть 2 замка (атакующий и защищающийся), которые враждуют между собой. 
// Пользователь играет за атакующий замок. Царю атакующего замка необходимо каждый
//  раз просчитывать возможности захвата враждующего замка. Когда возможность будет достаточно большой, 
//  то необходимо, не задумываясь, атаковать.

// В коде у вас изначально есть 2 объекта attacker и defender, которые являются аналогиями замков, 
// и у которых есть свойства, отвечающие за количество боевых единиц каждого типа. Например, archer - это лучники, footSoldiers - пехотинцы, и т.д.:


// В объекте attacker тебе необходимо создать 3 функции:

// checkChancesToWin() - проверяет шансы атакующего замка захватить защищающийся замок. 
// Данная функция принимает в себя 1 параметр defenderObject, который является объектом защищающегося замка - defender. 
// Она должна сверять количество всех боевых единиц у обоих замков. Например, если у атакующего замка значение свойства archer больше, 
// чем у защищающегося, то к шансам захвата необходимо прибавить 1 (изначально значение шансов должно быть равно нулю). 
// Функция должна возвращать массив, в котором 1-й элемент - это шансы атакующего замка на захват, а 2-й - это значение максимального
//  шанса на захват (количество ключей в объекте defenderObject). То есть, если у атакующего замка значения свойств archer и cavalry больше, 
//  чем у защищающегося, а другие значения свойств - меньше, то шансы на захват должны быть [2, 4] (образно шансы равны 2 из 4 либо 50%).
// improveArmy() - прибавляет к каждому числовому значению объекта attacker по 5 единиц (обновляет свойства archer, footSoldier, cavalry, 
//     artillery). Данная функция не принимает никаких параметров.
// attack() - принимает в себя 1 параметр - это объект защищающегося замка defender. Сначала эта функция проверяет, если 
// шансы на захват (вызываем функцию checkChancesToWin()) меньше, чем 70% от максимальных шансов,
//  то необходимо усилиться (вызвать функцию improveArmy()) и вывести сообщение через alert() “Наши шансы равны ourArmyChances/maximumChances}.
//   Необходимо укрепление!” (ourArmyChances - шансы атакующего замка на захват, maximumChances - максимальный шанс на захват). 
//   Иначе же требуется вывести сообщение в модальном окне “Мы усилились! Мы несомненно победим! Наши шансы высоки!”.
// Пример результата работы функции attack():


const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin(defenderObject) {
        const attackerValues = Object.values(this);
        const defenderValues = Object.values(defenderObject);
        let chancesCounter = 0;
        attackerValues.forEach((value, index) => {
            if (value > defenderValues[index] && typeof value === "number") {
                chancesCounter += 1;
            }
        });

        return [chancesCounter, defenderValues.length];
    },
    improveArmy() {
        Object.entries(this).forEach((item) => {
            const key = item[0];
            const value = item[1];
            if (typeof value === "number") {
                this[key] = value + 5;
            }
        });
    },
    attack(defender) {
        const chancesValues = this.checkChancesToWin(defender);
        console.log("chancesValues", chancesValues);
        const ourArmyChances = chancesValues[0];
        const seventyPercentChances = Math.round((chancesValues[1] * 70) / 100);
        console.log("ourArmyChances", ourArmyChances);
        console.log("seventyPercentChances", seventyPercentChances);
        if (ourArmyChances < seventyPercentChances) {
            alert(
                `Наши шансы равны ${ourArmyChances}/${chancesValues[1]}. Необходимо укрепление!`
            );
            this.improveArmy();
        } else {
            alert("Мы усилились! Мы несомненно победим! Наши шансы высоки!");
        }

        console.log(this);
    }
};

const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10
};

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!

// 