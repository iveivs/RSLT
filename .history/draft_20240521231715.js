// function tempFunc() {
//     var a = 10
//     console.log('test');
// }

// if(true) {
//     var b = 5
// }
// console.log(b);
// tempFunc()
// console.log(a);

// let a = 0.2

// console.log(Number.isInteger(a));

function getSumOfNumbers(number, type) {
    let sum = 0
    if (isNaN(number) || arguments.length < 2) {
        return NaN;
    } else {
        for(let i = 0; i <= number; i++){
            switch (type) {
                case 'odd':
                    if (i % 2 !== 0) {
                        sum += i
                        break
                    }
                case 'even':
                    if (i % 2 === 0) {
                        sum += i
                    }
                case '':
                    sum += i
            }
        }
    }
    return sum
}


console.log(getSumOfNumbers(10, 'even'));
console.log(getSumOfNumbers(10, 'odd'));
console.log(getSumOfNumbers(10, ''));
console.log(getSumOfNumbers());