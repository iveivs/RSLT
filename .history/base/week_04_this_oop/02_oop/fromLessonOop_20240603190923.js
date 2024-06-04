function Animal(name) {
    this.name = name

    this.getAnimal = function() {
        return this.name
    }
}

const cat = new