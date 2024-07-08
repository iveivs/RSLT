const someDate = Date.now()
console.log(someDate);

const somedate = new Date();
let localDate = somedate.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
})
console.log(localDate);