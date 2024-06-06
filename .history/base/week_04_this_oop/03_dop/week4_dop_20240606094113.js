// Задание #1

const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    checkChancesToWin(defenderObject) {
        let chanсes = 0
        if (defenderObject.archer < this.archer) chanсes++
        if (defenderObject.footSoldier < this.footSoldier) chanсes++
        if (defenderObject.cavalry < this.cavalry) chanсes++
        if (defenderObject.artillery < this.artillery) chanсes++
        return [chanсes, Object.keys(defenderObject).length]
    },
    improveArmy() {
        for (let key in attacker) {
            if (!isNaN(attacker[key])) attacker[key] += 5
        }
    },
    attack(defender) {
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

// attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление! 
// attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление! 
// attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!

// Задание #1.2

class Dictionary {
    #name
    #words
    constructor(name, words = {}) {
        this.#name = name
        this.#words = words
    }
    add(word, description) {
        const newWord = { word, description };
        this.#words.hasOwnProperty(`${word}`) ? this.#words = this.#words : this.#words[word] = this._addNewWord(word, newWord)
    }
    remove(keyForRemove) {
        delete this.#words[keyForRemove]
    }
    get mainName() {
        return this.#name
    }
    set mainName(newName) {
        this.#name = newName
    }
    get(key) {
        return this.#words[key]
    }
    get allWords() {
        return this.#words
    }
    showAllWords() {
        for (let key in this.#words) {
            console.log(`${key} - ${this.#words[key].description}`);
        }
    }
    _addNewWord(wordKey, wordObj) {
        return { ['word']: wordKey, ['description']: wordObj.description }
    }
}


class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name)
    }
    _addNewWord(wordKey, wordObj) {
        return { ['word']: wordKey, ['description']: wordObj.description, ['isDifficult']: true }
    }

}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
console.log(dictionary);

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');

hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');

hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();
// console.log(hardWordsDictionary.mainName); // Сложные слова
// hardWordsDictionary.mainName = 'Новый Словарь';
// console.log(hardWordsDictionary.mainName); // Новый Словарь
// console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова дилетант и квант

// Задание #2

class CarService {
    static DefaultWorkingHours = {
        from: '9:00',
        till: '20:00',
    }
    constructor(name, workingHours = {}) {
        this.name = name
        this.workingHours = workingHours || CarService.DefaultWorkingHours
    }
    repairCar(carName){
        if(!carName) console.error('Вам необходимо указать название машины, чтобы ее отремонтировать')
        const curHour = new Date().getHours()
        console.log('curHour', curHour);
        let serviceStartWork = this.workingHours.from.split(':')[0]
        let serviceEndWork = this.workingHours.till.split(':')[0]
        console.log('serviceStartWork', serviceStartWork, 'serviceEndWork', serviceEndWork);
        curHour > 
        
    }
}

const carService = new CarService('RepairCarNow', { from: '8:00', till: '20:00' });
carService.repairCar('BMW');
console.log(carService);