let str = 'Kasandra'
str = 'Ksndr'
console.log(str);

function setName(entity, value) {
    if(typeof entity === 'object') {
        entity.name  = value
    } else {
        console.log('TEST');
        entity = value
    }
}

const developer = {
    name: "Maxim"
}
let developerName = 'Maxim'

setName(developer, 'Max')

setName(developerName, 'Max')
console.log('developer', developer)
console.log('developerName', developerName)

developerName = 'Max'
console.log('developerName 2',developerName)



