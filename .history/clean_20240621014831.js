function funcOne(callback) {
    callback(); // Вызываем функцию callback
    console.log('Hello everyone!');
}

// Объявляем вторую функцию
function funcTwo() {
    console.log('Hello World!');
    console.log('Hello JavaScript!');
}

// funcOne(funcTwo); // Вызываем первую функцию
funcOne(() => {
    console.log('anonimus callback');
    console.log('anonimus callback 2');

    setTimeout(())
})

console.log('Im macro');