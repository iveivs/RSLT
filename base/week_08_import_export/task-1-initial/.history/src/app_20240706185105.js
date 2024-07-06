const colorArr =  ['green', 'blue', 'white', 'orange', 'red', 'pink', 'grey', 'yellow']
const randomNum = 

function getRandomColor(num, arr) {
    console.log('Num', num);
    return arr[num]
}
console.log(getRandomColor(randomNum, colorArr));

function initApp() {
    console.log('Hello world');
    const myButton = document.createElement('button')
    myButton.className = 'button'
    myButton.textContent = 'Изменить цвет страницы'
    document.body.append(myButton)

    myButton.addEventListener('click', (event) => {

    })
}
export default initApp 