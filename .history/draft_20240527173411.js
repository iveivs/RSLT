let str = 'Kasandra'
str = 'Ksndr'
console.log(str);

function setName(  entity, value) {
    if(typeof entity === 'object') {
        entity.name  = value
    } else {
        entity = value
    }
}

const developer = {
    name: "Maxim"
}
let developerName = 'Maxim'

setName(developer, 'Ma')
console.log('')


