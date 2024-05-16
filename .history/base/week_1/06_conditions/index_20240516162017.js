const existingUserLogin = 'the_best_user'
const  existingUserPassword = '12345678'

const userLogin = prompt('Введите ваш логин').trim()

const userPassword = prompt('Введите ваш пароль').trim()

userLogin === existingUserLogin && userPassword === existingUserPassword ? alert(`Добро пожаловать, ${userLogin}!`) : alert('Пароль введены неверно!')

// Задание #2

const questionsAndAnswers = [
    {question: 'Сколько будет 2 + 2?', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
    {question: '', answer: ''},
]

Сколько будет 2 * 2?
У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?
У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?
Сколько будет 2 + 2 * 2?
