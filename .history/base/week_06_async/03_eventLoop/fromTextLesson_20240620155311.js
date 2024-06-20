Вообще сам по себе Stack (стек) — это структура данных, элементы в которой действуют 
по принципу “последним пришел - первым ушел” (LIFO: last in, first out).

Стек можно сравнить с коробкой, в которую мы кладем вещи одну на другую. Чтобы достать самую нижнюю вещь, которую мы положили первой, нам необходимо вытащить то, что находится над ней.
// Объявляем первую функцию
function funcOne() {
    funcTwo(); // Вызываем вторую функцию
    console.log('Hello everyone!');
}

// Объявляем вторую функцию
function funcTwo() {
    console.log('Hello World!');
    console.log('Hello JavaScript!');
}

funcOne(); // Вызываем первую функцию