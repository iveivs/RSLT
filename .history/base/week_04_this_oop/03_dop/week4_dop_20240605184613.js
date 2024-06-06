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
    // add(word, description){
    //     this.#words[word] ? this.#words = this.#words : this.#words[word] = { word, description }
    // }
    remove(keyForRemove) {
        delete this.words[keyForRemove]
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
        wordObj = 
        this.#words[wordKey] = { word, description }
    }
}


// class HardWordsDictionary extends Dictionary {
//     constructor(name) {
//         super(name)
//     }
//     add(word, description) {
//         this.words[word] ? this.words = this.words : this.words[word] = { word, description, isDifficult: true }
//     }
// }
// const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
// hardWordsDictionary._addNewWord()

const someWord = new Dictionary('Имя объекта класса', "lorem...")
someWord._addNewWord('Qwerty', 'lorem ipsum')
console.log(someWord.mainName);
console.log(someWord.mainName);


// hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
// console.log(hardWordsDictionary.mainName); // Сложные слова