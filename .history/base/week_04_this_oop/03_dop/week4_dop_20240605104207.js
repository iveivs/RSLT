// Задание #1

const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin(defenderObject) {
        let chanсes = 0
        if(defenderObject.archer < this.archer) chanсes++
        if(defenderObject.footSoldier < this.footSoldier) chanсes++
        if(defenderObject.cavalry < this.cavalry) chanсes++
        if(defenderObject.artillery < this.artillery) chanсes++
        return [chanсes, Object.keys(defenderObject).length]
    },
    improveArmy(){
        for(let key in attacker){
            if(!isNaN(attacker[key])) attacker[key] += 5
        }
    },
    attack(defender){
        const ourArmyChances =  this.checkChancesToWin(defender)[0] / (this.checkChancesToWin(defender)[1] / 100 )
        if(chanse < 70) {
            console.log(`Наши шансы равны ${this.checkChancesToWin(defender)[0]} / ${this.checkChancesToWin(defender)[1]}. Необходимо укрепление!`);
        } else{
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

console.log(attacker.checkChancesToWin(defender));
// attacker.improveArmy()
// console.log();
attacker.attack(defender)