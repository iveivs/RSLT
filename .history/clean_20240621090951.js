function funcOne(callback) {
    callback(); // Вызываем функцию callback
    console.log('Hello everyone!');
}

const simorp = new Promise((resolve) => {
    console.log('resolve', resolve);
})

// Объявляем вторую функцию
function funcTwo() {
    console.log('Hello World!');
    console.log('Hello JavaScript!');
}

// funcOne(funcTwo); // Вызываем первую функцию
funcOne(() => {
    console.log('anonimus callback');
    console.log('anonimus callback 2');

    setTimeout(() => {
        console.log('im setT 1');
    }, 400)

    setTimeout(() => {
        console.log('im setT 2');
    }, 100)
})

console.log('Im macro');

simorp.then((resp) => {
    clg
})