// Задание #1

const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin(defenderObject) {
        let chanсes = 0
        for (let key in attacker) {
            if (!isNaN(attacker[key])){
                if (attacker[key] < this.archer) chanсes++
            }
            console.log('chanсes:',chanсes, ', key: ' , key);
        }
        return [chanсes, Object.keys(defenderObject).length]
    },
    improveArmy() {
        for (let key in attacker) {
            if (!isNaN(attacker[key])) attacker[key] += 5
        }
    },
    attack(defender) {
        const ourArmyChances = this.
        const ourArmyChances = this.checkChancesToWin(defender)[0] / (this.checkChancesToWin(defender)[1] / 100)
        if (ourArmyChances < 70) {
            console.log(`Наши шансы равны ${this.checkChancesToWin(defender)[0]} / ${this.checkChancesToWin(defender)[1]}. Необходимо укрепление!`);
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
// attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление! 
// attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!