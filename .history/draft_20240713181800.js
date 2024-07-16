const date = new Date(); // текущая дата
console.log(date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
}));

const date2 = new Date();
console.log('date2', date2.toLocaleDateString());

const someData = fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())
.then(json => console.log(json));
console.log('CLG',someData);