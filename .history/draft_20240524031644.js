const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let newMatrix = []
for(let i of matrix){
    for(let j of i){
        newMatrix.push(j)
    }
}
console.log(newMatrix);
// - - - - - 

const newMatrix2 = matrix.map