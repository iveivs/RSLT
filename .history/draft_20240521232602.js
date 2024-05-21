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
                    console.log('test1');
                    if (i % 2 !== 0) {
                        sum += i
                    }
                    break
                case 'even':
                    console.log('test2');
                    if (i % 2 === 0) {
                        sum += i
                    }
                    break
                case '':
                    console.log('test3');
                    sum += i
                    break
            }
        }
    }
    return sum
}


console.log(getSumOfNumbers(10, 'even'));
// console.log(getSumOfNumbers(10, 'odd'));
// console.log(getSumOfNumbers(10, ''));
// console.log(getSumOfNumbers());