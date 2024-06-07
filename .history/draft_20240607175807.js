class Dictionary {
    #name
    #words
    constructor(name, words = {}) {
        this.#name = name
        this.#words = words
    }
    add(word, description) {
        const newWord = { word, description };
        if (!this.#words.hasOwnProperty(word)) this._addNewWord(word, newWord)
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
        this.#words[wordKey] = wordObj
    }
}


class HardWordsDictionary extends Dictionary {
    add(word, description) {
        if (!this.allWords[word]) {
            this._addNewWord(word, {
                word,
                description,
                isDifficult: true
            });
        }
    }

}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');

hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('неологизм', 'авыожвыоаыжвалыовж');

hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();
console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.mainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log('all words', hardWordsDictionary.allWords); // выводит объект в котором есть слова дилетант и квант