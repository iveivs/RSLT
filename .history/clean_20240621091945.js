function funcOne(callback) {
    callback(); // Вызываем функцию callback
    console.log('Hello everyone!');
}

const simorp = new Promise((resolve, reject) => {
    console.log('resolve', resolve);
    if(1 < 0){
        resolve('Something')
    }
    if(1 > 1){
        reject('This is error')
    }
    reject('This is error')
})

// Объявляем вторую функцию
function funcTwo() {
    console.log('Hello World!');
    console.log('Hello JavaScript!');
}

setTimeout(() => {
    console.log('SetT mAcro');
}, 0)

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
    console.log('THEN', resp);
})
.catch()