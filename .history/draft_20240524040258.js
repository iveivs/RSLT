// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// // - - - - - 
function getDivisorsCount(n) {
    let divisors = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        } else if (((!Number.isInteger(n)) ) {
            console.log(`${n} должен быть целым числом и больше нуля!`);
            return Nan;
        }
    }
}
console.log(getDivisorsCount(4));

