const path = require('path')
console.log(path.dirname(__filename)); // выдаёт директорию в которой находится данный файл
console.log(path.basename(__filename)); // выдаёт имя данного файла
console.log(path.extname(__filename)); // выдаёт разрешение данного файла
console.log(path.extname(__filename).slice(1)); // тоже самое, что и предыдущее только обрезанный вариант(без точки спереди)
console.log(path.extname(__filename));