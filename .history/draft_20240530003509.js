// function getKiller(suspectInfo, deadPeople) {
//     for(let criminal in suspectInfo) 
//         // console.log(suspectInfo[criminal]);
//         for(let deadMan of deadPeople) {
//             if(suspectInfo[criminal].includes(deadMan)){
//                 console.log('TEST', );
//             }
//         }
// }

// console.log(
//     getKiller(
//         {
//             James: ["Jacob", "Bill", "Lucas"],
//             Johnny: ["David", "Kyle", "Lucas"],
//             Peter: ["Lucy", "Kyle"]
//         },
//         ["Lucas", "Bill"]
//     )
// ); // Убийца James

// console.log(
//     getKiller(
//         {
//             Brad: [],
//             Megan: ["Ben", "Kevin"],
//             Finn: []
//         },
//         ["Ben"]
//     )
// ); // Убийца Megan

// = = = = = = = = =

function getKiller(suspectInfo, deadPeople) {
    let arrFromObj = Object.entries(suspectInfo)
    for(let potentialMurder of arrFromObj){
        for(let listOf)
    }
}

console.log(
    getKiller(
        {
            James: ["Jacob", "Bill", "Lucas"],
            Johnny: ["David", "Kyle", "Lucas"],
            Peter: ["Lucy", "Kyle"]
        },
        ["Lucas", "Bill"]
    )
); // Убийца James

console.log(
    getKiller(
        {
            Brad: [],
            Megan: ["Ben", "Kevin"],
            Finn: []
        },
        ["Ben"]
    )
); // Убийца Megan