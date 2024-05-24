// Задание #1

function checkQuestionAnswer(question, correctAnswer) {
    let answer = prompt(`${question}`).trim().toLowerCase()
    console.log(answer);
    answer === correctAnswer.toLowerCase() ? alert('Ответ верный') : alert('Ответ не верный')
}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');

// Задание #2

const showSuccessMessage = (message) => {
    console.log(message);
}

const showErrorMessage = (message) => {
    console.error(message);
}

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
    let isFined = false
    for (let i = 0; i < text.length; i++) {
        if(text[i] === errorSymbol) {
            isFined = true
            errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом "${i}"`)
        }
    }
    !isFined ? successCallback('В данном тексте нет запрещенных символов') : null
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.'; 
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);

// Задание #2.1

const goals = [8, 1, 1, 3, 2, -1, 5];

let numberOfMaxGoals = Math.max.apply(null, goals)

let number = goals.indexOf(numberOfMaxGoals) + 1
console.log(`Самый результативный матч был под номером ${number}. В нем было забито ${numberOfMaxGoals} гол(ов).`);
// - - - 

function getMinimalGoals(arr) {
    let positiveMatch = arr.filter((elem) => elem > 0)
    let minNumber = Math.min.apply(null, positiveMatch)
    let minGoalMatch = positiveMatch.find((elem) => elem === minNumber)
    return minGoalMatch
}

let numberOfMinGoals = getMinimalGoals(goals)

function getIndexOfMinimalGoals(arr, getMinFunc) {
    let indexOfMinGoalsArr = []
    arr.forEach((elem, i) => {
        if(elem === getMinFunc){
            indexOfMinGoalsArr.push(i)
        }
    })
    return indexOfMinGoalsArr.join(', ')
}

let indexOfMinGoals = getIndexOfMinimalGoals(goals, getMinimalGoals(goals) )

console.log(`Самые нерезультативные матчи были под номерами ${indexOfMinGoals}. В каждом из них было забито по ${numberOfMinGoals} мячу(а)`);

// - - - 

let numberOfGoals = goals.filter(elem => elem > 0).reduce((acc, elem) => acc += elem, 0 )
console.log(`Общее количество голов за сезон равно ${numberOfGoals}` );

// - - - 

let wasNegativeMatchs = goals.some(item => item < 0)
console.log(`Были автоматические поражения: ${wasNegativeMatchs ? 'да' : 'нет'}`);

// - - - 

numberOfGoals = (goals.filter(elem => elem > 0).reduce((acc, elem) => acc += elem, 0 ) / goals.filter(elem => elem > 0).length).toFixed(2)

console.log(`Среднее количество голов за матч равно ${numberOfGoals}`);

// - - - 

let sortedGoalsArr = goals.toSorted((a,b) => a - b).join(', ')

console.log(sortedGoalsArr);

// Задание #2.2

function getMathResult(expression) {
    const arrOfOperators = [">", "<", "=", "+", "-", "*", "/"]
    let newExpression
    // проверка на длину
    if (expression.length >= 3) {
        newExpression = expression.filter(item => {
            if (!isNaN(Number(item))) {
                return item
            }
            if (item === arrOfOperators.find(elem => elem === item)) {
                return item
            }
        })
    } else {
        return `Ошибкa`
    }
    // проверка на символ
    if (!arrOfOperators.includes(newExpression[1])) {
        return `Ошибка`
    }

    const firstNum = Number(newExpression[0])
    const secondNum = Number(newExpression[2])
    let result = 0
    switch (newExpression[1]) {
        case '+':
            result = firstNum + secondNum
            break;
        case '-':
            result = firstNum - secondNum
            break;
        case '*':
            result = firstNum * secondNum
            break;
        case '/':
            result = firstNum / secondNum
            break;
        case '>':
            result = firstNum > secondNum
            break;
        case '<':
            result = firstNum < secondNum
            break;
        case '=':
            result = firstNum === secondNum
            break;
    }
    return result
}

getMathResult(['200', '+', 300]); // 500
getMathResult(['20', '-', '5']); // 15
getMathResult([100, '/', 100]); // 1
getMathResult([2, '-', 2]); // 0
getMathResult(['5', '>', '10']); // false
getMathResult(['5', '<', '10']); // true
getMathResult(['1', '=', 1]); // true
getMathResult(['1', '**', 1]); // 'Ошибка'
getMathResult(['+', '100', 10]); // 'Ошибка'
getMathResult(['100', 'hello', 'javascript', 'help200', '+', 4]); // 104
// - - - - - - - - - - - - - -

// Задание #2.3

let outArr = []

for (let i = 0; i < 3; i++) {
    let inArr = []
    for (let j = 1; j < 6; j++) {
        inArr.push(j)
    }
    outArr.push(inArr)
}
// - - - - - - - - - - - - - -

// Задание #2.4

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
// способ который не подходит
let newMatrix = []
for(let i of matrix){
    for(let j of i){
        newMatrix.push(j)
    }
}
console.log(newMatrix);
// - - 

// более короткий вариант
let newMatrix2 = []
for(let i of matrix) {
    newMatrix2.push(...i)
}
console.log(newMatrix2);

// методом тыка
let newMatrix3 = [].concat(...matrix)
console.log(newMatrix3);
