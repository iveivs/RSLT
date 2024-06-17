const developer = {
    name: 'Max',
    isJSDev: false
}

setTimeout(() => {
    console.log('Test');
}, 2000)

const promise = new Promise((resolve, reject) => {
    if (developer.isJSDev) {
        setTimeout(() => {
            resolve('RESOLVE')
        }, 2000)
    } else {
        reject(`REJECT`)
    }
})

console.log(promise);

promise.then((successMessage) => {
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

const promise2 = new Promise((resolve, reject) => {
    if (car.fuel > 0) {
        resolve("Всё хорошо, можно ехать!");
    }
    else {
        reject("Нужно заправиться");
    }
})

promise2
    .then((result) => {
        console.log(result); // Всё хорошо, можно ехать!
    })
    .catch((error) => {
        console.log(error);  // Нужно заправиться
    });
    Или то же самое, но короче:
    promise
      .then(console.log)   // Всё хорошо, можно ехать!
      .catch(console.log); // Нужно заправиться