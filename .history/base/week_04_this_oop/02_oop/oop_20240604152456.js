// Задание #1
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    technologies = [];
    status = 'Junior';

    setTechnologies(technologies) {
            this.technologies = [
            ...this.technologies, // Вопрос, зачем эта строчка ? Ведь у нас и так пустой массив
            ...technologies,
        ];
    }
    setNewStatus(newStatus) {
    this.status = newStatus;
}
}

const student = new Student('Maxim', 20);
student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
student.setNewStatus('Middle');
console.log(student);


// Вот такое вот автоисправление мне предложил vscode:

// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.technologies = [];
//         this.status = 'Junior';

//         this.setTechnologies = function (technologies) {
//             this.technologies = [
//                 ...this.technologies,
//                 ...technologies,
//             ];
//         };
//         this.setNewStatus = function (newStatus) {
//             this.status = newStatus;
//         };
//     }
// }

// const student = new Student ('Maxim', 20);
// student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
// student.setNewStatus('Middle');
// console.log(student);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Задание #2
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(obj) {
        return obj.age < this.age ? `${this.name} старше, чем ${obj.name}`: `${this.name} младше, чем ${obj.name}`
    }
}

const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);

console.log(person1);
console.log(person1.compareAge(person2)); // Максим младше, чем Светлана 
console.log(person2.compareAge(person3)); // Светлана старше, чем Ирина 
console.log(person3.compareAge(person1)); // Ирина младше, чем Максим

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Задание #3

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

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Задание #5

class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName
        this.age = age
        this.position = position
        technologies = []
    }
    code()
}