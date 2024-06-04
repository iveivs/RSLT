function Animal(name) {
    this.name = name

    this.getAnimal = function () {
        return this.name
    }
}

const cat = new Animal('kot')
console.log(cat);

class Animals {
    constructor(name) {
        this.name = name
    }
    getName(){
        return this.name
    }
}
const dog = 