// Задание #1

// function checkQuestionAnswer(question, correctAnswer) {
//     let answer = prompt(`${question}`).trim().toLowerCase()
//     console.log(answer);
//     answer === correctAnswer.toLowerCase() ? alert('Ответ верный') : alert('Ответ не верный')
// }

// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
// checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
// checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');

// Задание #2

// const showSuccessMessage = (message) => {
//     console.log(message);
// }

// const showErrorMessage = (message) => {
//     console.error(message);
// }

// function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
//     let isFined = false
//     for (let i = 0; i < text.length; i++) {
//         if(text[i] === errorSymbol) {
//             isFined = true
//             errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом "${i}"`)
//         }
//     }
//     !isFined ? successCallback('В данном тексте нет запрещенных символов') : null
// }

// const text = 'Привет! Как дела! Давно мы с тобой не виделись.'; 
// checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);

// Задание #1.1

const goals = [8, 1, 1, 3, 2, -1, 5];

let numberOfMaxGoals = Math.max.apply(null, goals)

let number = goals.indexOf(numberOfMaxGoals) + 1
console.log(`Самый результативный матч был под номером ${number}. В нем было забито ${numberOfMaxGoals} гол(ов).`);
// - - - 

function getMinimalGoals(arr) {
    let positiveMatch = arr.filter((elem) => elem > 0)
    let sameMinimalMatch = positiveMatch.filter( (elem) => elem === Math.min.apply(null, positiveMatch))
    return sameMinimalMatch.join(', ')
}

let numberOfMinGoals = getMinimalGoals(goals)
console.log(numberOfMinGoals);

function getIndexOfMinimalGoals(arr) {
    let positiveMatch = arr.filter((elem) => elem > 0)
    const minGoalNumber = Math.min.apply(null, positiveMatch)
    let indexOfMinGoalsArr = []
    arr.forEach((elem, i) => {
        if(elem === minGoalNumberArr ){
            indexOfMinGoals.push(i)
        }
    })
    return indexOfMinGoals.join(', ')
}

console.log(getIndexOfMinimalGoals(goals));