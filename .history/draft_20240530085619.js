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
        let flag = 0
        for(let listOfPeople of potentialMurder[1]){
            // console.log('listOfPeople',listOfPeople);
            for(let deadMan of deadPeople){
                if(deadMan === listOfPeople){
                    // console.log('FIND', listOfPeople);
                    flag ++
                }
            }
        }
        console.log('FLAG',flag);
        if(flag === deadPeople.length){
            console.log("FFINDED MURDER", potentialMurder[0]);
            return `Murder is ${potentialMurder[0]}`
        }
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