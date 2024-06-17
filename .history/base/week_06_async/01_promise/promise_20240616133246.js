const developer = {
    name: 'Max',
    isJSDev: false
}

setTimeout(() => {
    console.log('Test');
}, 2000)

const promise2 = new Promise((resolve, reject) => {
    if (developer.isJSDev) {
        setTimeout(() => {
            resolve('RESOLVE')
        }, 2000)
    } else {
        reject(`REJECT`)
    }
})

console.log(promise2);

promise2.then((successMessage) => {
    console.log('successMessage', successMessage);
})
    .catch((errorMessage) => {
        console.log('errorMessage', errorMessage);
    })
    .finally(() => {
        console.log('finally');
    })

// - - - - - - -
const car = {
    name: "BWM X5",
    fuel: 10
};

const promise = new Promise((resolve, reject) => {
    if (car.fuel > 0) {
        resolve("Всё хорошо, можно ехать!");
    }
    else {
        reject("Нужно заправиться");
    }
});