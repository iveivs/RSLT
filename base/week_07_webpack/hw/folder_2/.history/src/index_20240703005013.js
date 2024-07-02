import "./index.css";
console.log('Hello World!');

import MY_IMAGE from './assets/jspic.png';

// Остальной код
const h1 = document.createElement('h1')
h1.textContent = 'I love JavaScript'
document.body.append(h1)

const img = document.createElement("img");
img.src = MY_IMAGE;
document.body.append(img);

function hello() {
    console.log("Hello world!");
}

hello();

const array = [1, 2, 3].map(n => n + 1);
console.log(array);