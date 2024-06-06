// Задание #1

const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin(defenderObject) {
        let chanсes = 0
        for (let key in attacker) {
            if (typeof this[key] !== 'function'){
                if (attacker[key] > defenderObject[key]) chanсes++
            }
        }
        return [chanсes, Object.keys(defenderObject).length]
    },
    improveArmy() {
        for (let key in attacker) {
            if (typeof this[key] !== 'function') attacker[key] += 5
        }
    },
    attack(defender) {
        const ourArmyChances = this.checkChancesToWin(defender)
        const ourArmyChancesInProcent = ourArmyChances[0] / (ourArmyChances[1] / 100)
        if (ourArmyChancesInProcent < 70) {
            console.log(`Наши шансы равны ${ourArmyChances[0]} / ${ourArmyChances[1]}. Необходимо укрепление!`);
            this.improveArmy()
        } else {
            console.log('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
        }
    }
}

const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
}

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление! 
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление! 
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!