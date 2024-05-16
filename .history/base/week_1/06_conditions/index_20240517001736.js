// const existingUserLogin = 'the_best_user'
// const  existingUserPassword = '12345678'

// const userLogin = prompt('Введите ваш логин').trim()

// const userPassword = prompt('Введите ваш пароль').trim()

// userLogin === existingUserLogin && userPassword === existingUserPassword ? alert(`Добро пожаловать, ${userLogin}!`) : alert('Пароль введены неверно!')

// Задание #2

// const questionsAndAnswers = [
//     {question: 'Сколько будет 2 + 2?', answer: 4},
//     {question: 'Сколько будет 2 * 2?', answer: 4},
//     {question: 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?', answer: 1},
//     {question: 'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?', answer: 12},
//     {question: 'Сколько будет 2 + 2 * 2?', answer: 8},
// ]

// let correctAnswers = 0
// let incorrectAnswers = 0
// questionsAndAnswers.forEach(elem => {
//     let currentAnswer = Number(prompt(elem.question))
//     currentAnswer === elem.answer ? (alert('Ответ Верный'), correctAnswers++) : (alert('Ответ Неверный'), incorrectAnswers++)
// })

// alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}`)
// correctAnswers = 0
// incorrectAnswers = 0

// Задание #4

// let i = 0
// while (i < 3) {
//     let newStudent = prompt('Введите имя нового студента!');
//     if (newStudent) {
//         newStudent = newStudent.trim();
//         alert(`Добро пожаловать, ${newStudent}!`)
//     }
//     i++
// }

// let j = 0
// do {
//     let newStudent = prompt('Введите имя нового студента!');
//     if (newStudent) {
//         newStudent = newStudent.trim();
//         alert(`Добро пожаловать, ${newStudent}!`)
//     }
//     j++
// } while(j < 3)

// Задание #5

let sum = 0
for(let i = 1; i <= 100; i++) {
    sum += i
}
console.log(sum);

const getSum = (start, end) => {
    for(let i = start; i < end)
}



