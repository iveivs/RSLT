// Задание #1

const attacker = {
    archer: 30.4,
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

    }
}

const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
}
console.log(attacker.checkChancesToWin(defender));
console.log(is);