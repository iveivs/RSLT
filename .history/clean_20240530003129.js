const ordersArr = [4, 2, 1, 3];
const people = [
    { id: 1, name: "Максим" },
    { id: 2, name: "Николай" },
    { id: 3, name: "Ангелина" },
    { id: 4, name: "Виталий" }
];

const giveTalonsInOrder = (patients, orders) => {
    const objectWithIndexes = patients.reduce((acc, curPerson) => {
        console.log('curPerson', curPerson);
        acc[curPerson.id] = curPerson;
        console.log('acc', acc);
        return acc;
    }, {});
    return orders.map((order) => objectWithIndexes[order]);
};

const result = giveTalonsInOrder(people, ordersArr);
console.log("result", result);
/* Возвращает массив
[
    { id: 4, name: 'Виталий' },
    { id: 2, name: 'Николай' },
    { id: 1, name: 'Максим' },
    { id: 3, name: 'Ангелина' }
]
*/

// acc {
//     '1': { id: 1, name: 'Максим' },
//     '2': { id: 2, name: 'Николай' },
//     '3': { id: 3, name: 'Ангелина' },
//     '4': { id: 4, name: 'Виталий' }
//   }
