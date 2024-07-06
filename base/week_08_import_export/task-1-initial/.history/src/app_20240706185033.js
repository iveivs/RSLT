const colorArr =  ['green', 'blue', 'white', 'orange', 'red', 'pink', 'grey', 'yellow']
const randomNum = Math.random(colorArr.length - 1)

function getRandomColor(num, arr) {
    console.log('object');
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