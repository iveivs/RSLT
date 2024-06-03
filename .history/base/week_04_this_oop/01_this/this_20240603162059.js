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
    console.log(`${this.}`);
}
