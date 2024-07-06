const colorArr =  ['green', 'blue', 'white', 'orange', 'red', 'pink', 'grey', 'yellow']
const randomNum = Math.floor(Math.random() * colorArr.length)

function getRandomColor(num, arr) {
    return arr[num]
}


function initApp() {
    console.log('Hello world');
    const myButton = document.createElement('button')
    myButton.className = 'button'
    myButton.textContent = 'Изменить цвет страницы'
    document.body.append(myButton)

    myButton.addEventListener('click', (event) => {
        document.body.style.backgroundColor = getRandomColor()
    })
}
export default initApp 