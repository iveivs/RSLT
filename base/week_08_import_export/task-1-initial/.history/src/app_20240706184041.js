function initApp() {
    console.log('Hello world');
    const myButton = document.createElement('button')
    myButton.className = 'button'
    myButton.textContent = 'Изменить цвет страницы'
    document.body.append(myButton)

    myButton.addEventListener('click')
}
export default initApp 