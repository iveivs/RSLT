function funcOne(callback) {
    callback(); // Вызываем функцию
    console.log('Hello everyone!');
}

// Объявляем вторую функцию
function funcTwo() {
    console.log('Hello World!');
    console.log('Hello JavaScript!');
}

funcOne(); // Вызываем первую функцию