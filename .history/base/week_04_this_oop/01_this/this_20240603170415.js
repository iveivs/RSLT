// Задание #1
const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
        this.level++
        if (this.level === 2) this.stack.push('CSS')
        if (this.level === 3) this.stack.push('JavaScript')
        if (this.level === 4) this.stack.push('React ')
        if (this.level === 5) this.stack.push('NodeJS')
        if (this.level > 5) console.log("Студент выучил все технологии!");
        return student
    }
}
student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()

// - - - - - - - - - - - - -

// Задание #2

const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
        return 'Гав-Гав';
    }
}

const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
        return 'Чик-чирик';
    }
}

function makeDomestic(isDomestic) {
    console.log(`${this.type}, по имени ${this.name}, говорит ${this.makeSound()} `);

    return {
        type: this.type,
        name: this.name,
        isDomestic: isDomestic,
        makeSound: this.makeSound
    }
}

// console.log(makeDomestic.call(bird, false));
// console.log(makeDomestic.bind(dog, true)());
// console.log(makeDomestic.apply(bird, [false]));
// - - - - - - - - - - - - -

// Задание #3

const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack: function(){
        console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} забил гол! Вот это да!`);
        this.celebrate(sound);
    },
    celebrate(sound) {
        console.log(sound);
    },
    goToSubstitution: function (newPlayer) {
        console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
    }
};

const attack = footballer.attack.bind(footballer);
footballer.scoreGoal.call(footballer, 'Сиииии')
footballer.goToSubstitution.apply()
attack();
// substitute('Paulo Dibala');