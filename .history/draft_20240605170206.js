class Dictionary {
    constructor(name, words = {}){
        this.name = name
        this.words = words
    }
    add(word, description){
        this.words[word] ? this.words = this.words : this.words[word] = { word, description }
    }
    remove(keyForRemove) {
        delete this.words[keyForRemove] 
    }
    get(key){
        return this.words[key]
    }
    showAllWords(){
        for(let key in this.words){
            console.log(`${key} - ${this.words[key].description}`);
        }
    }
}

const dictionary = new Dictionary('Толковый словарь');
dictionary.add('JavaScript', 'популярный язык программирования');
dictionary.add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие');
// dictionary.remove('JavaScript');
// console.log(dictionary);
// dictionary.showAllWords()

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Задание #4

class HardWordsDictionary extends Dictionary {
    constructor(name){
        super(name)
    }
    add(word, description){
        this.words[word] ? this.words = this.words : this.words[word] = { word, description, isDifficult: true }
    }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.')
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
    
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.'); 
    
hardWordsDictionary.remove('неологизм');
    
hardWordsDictionary.showAllWords();