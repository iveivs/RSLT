// Задание #1.1

const goals = [8, 1, 1, 3, 2, -1, 5];

let numberOfMaxGoals = Math.max.apply(null, goals)

let number = goals.indexOf(numberOfMaxGoals) + 1
console.log(`Самый результативный матч был под номером ${number}. В нем было забито ${numberOfMaxGoals} гол(ов).`);
// - - - 

function getMinimalGoals(arr) {
    let positiveMatch = arr.filter((elem) => elem > 0)
    // let sameMinimalMatch = positiveMatch.filter( (elem) => elem === Math.min.apply(null, positiveMatch))
    // return sameMinimalMatch.join(', ')
    let minNumber = Math.min.apply(null, positiveMatch)
    let minGoalMatch = positiveMatch.find((elem) => elem === minNumber)
    return minGoalMatch
}

let numberOfMinGoals = getMinimalGoals(goals)
console.log(numberOfMinGoals);

function getIndexOfMinimalGoals(arr, callback) {
    // let positiveMatch = arr.filter((elem) => elem > 0)
    // const minGoalNumber = Math.min.apply(null, positiveMatch)
    let indexOfMinGoalsArr = []
    arr.forEach((elem, i) => {
        // if(elem === minGoalNumber ){
        if(elem === callback ){
            indexOfMinGoalsArr.push(i)
        }
    })
    return indexOfMinGoalsArr.join(', ')
}

let indexOfMinGoals = getIndexOfMinimalGoals(goals, getMinimalGoals(goals) )
console.log(`Самые нерезультативные матчи были под номерами ${indexOfMinGoals}. В каждом из них было забито по ${numberOfMinGoals} мячу(а)`);

// - - - 