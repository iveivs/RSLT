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

// ZADANIE 2

// В заданиях ранее вы реализовали логику для двух словарей, и они работают прекрасно. 
// Но тут к вам приходит старший разработчик и говорит, что необходимо добавить сокрытие.

// Вы конечно же соглашаешься со старшим разработчиком. Он посоветовал вам сделать поля name и words приватными.
//  Реализуйте это с помощью знака решетки #.

// Усовершенствуйте свое решение из задания #4.

// Теперь вам необходимо добавить геттеры и сеттер в класс Dictionary, чтобы иметь доступ до приватных переменных.

// Для #name создайте геттер mainName (через ключевое слово get) и сеттер mainName (через ключевое слово set).

// Для #words создайте геттер allWords (через ключевое слово get).

// Также создайте _addNewWord() - обычный метод класса, который будет добавлять новое слово в приватный объект #words (вместо сеттера). 
// Он должен принимать:

// wordKey - слово (в данном случае это будет ключ, по которому добавляем в объект #words), тип данных строка.
// wordObj - объект вида:



// Метод _addNewWord() должен только создавать новое слово в объекте #words без каких-либо проверок.
// Он реализуется без set, так как:

// set не может принимать в себя больше 1-го параметра
// set в данном случае логичнее использовать для установки полностью нового значения, а не дополнения предыдущего
// Метод _addNewWord() будет использоваться в методе add(). Мы их разделили, так как у них разная зона ответственности:

// 1) _addNewWord() - отвечает за просто добавление слова в объект. Он используется только внутри классов в методе add().
// 2) add() - проверяет, есть ли уже данное слово в словаре, и, если слова нет, то вызывает метод _addNewWord(), 
// чтобы добавить новое слово. Метод add() будет использоваться (вызываться) у экземпляра класса для безопасного добавления новых слов (пример ниже).
// Вам необходимо исправить логику для классов Dictionary и HardWordsDictionary

class Dictionary {
    #name;
    #words;

    constructor(name) {
        this.#name = name;
        this.#words = {};
    }

    get mainName() {
        return this.#name;
    }

    set mainName(newName) {
        this.#name = newName;
    }

    get allWords() {
        return this.#words;
    }

    _addNewWord(wordKey, wordObj) {
        this.#words[wordKey] = wordObj;
    }

    add(word, description) {
        if (!this.#words[word]) {
            const newWord = { word, description };
            this._addNewWord(word, newWord);
        }
    }

    remove(word) {
        delete this.#words[word];
    }

    get(word) {
        return this.#words[word];
    }

    showAllWords() {
        Object.values(this.#words).forEach((wordItem) => {
            console.log(`${wordItem.word} - ${wordItem.description}`);
        });
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

const hardWordsDictionary = new HardWordsDictionary("Сложные слова");
hardWordsDictionary.add(
    "дилетант",
    "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);
hardWordsDictionary.add(
    "неологизм",
    "Новое слово или выражение, а также новое значение старого слова."
);
hardWordsDictionary.add(
    "квант",
    "Неделимая часть какой-либо величины в физике."
);

hardWordsDictionary.remove("неологизм");
hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.mainName = "Новый Словарь";
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова дилетант и квант


// ZADANIE 3

// Ваш друг Артем является владельцем автосервиса. Сейчас все заявки на ремонт машин
//  обрабатываются вручную, что, конечно же, не очень удобно. Поэтому Артем попросил вас, 
//  как веб-разработчика, помочь в автоматизации данного процесса.

// Вам необходимо создать класс CarService, в конструктор которого будут переданы 2 параметра:

// name - название автосервиса.
// workingHours - время работы автосервиса. Объект с ключами from и till. from - время начала рабочего дня, 
// till - время окончания рабочего дня. Значения времени записываются в формате “h:mm” (например, 9:00)
// Инициализируйте данные параметры в конструкторе с помощью this. Также параметр workingHours является необязательным.
//  Поэтому задайте значение (тип данных object) по умолчанию. 
//  Данный объект должен называться DefaultWorkingHours и быть статическим (static). 
//  Если параметр workingHours не был передан, то подставьте в this.workingHours значение из DefaultWorkingHours, которое равно: